"use client";
import React, { useRef, useEffect } from "react";

export default function BackgroundFX({ scanlinePosition = '20px' }: { scanlinePosition?: string } = {}) {
  const backRef = useRef<HTMLCanvasElement | null>(null);
  const frontRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Soft animated grid effect with glowing lines
    function animatedGrid(canvas: HTMLCanvasElement) {
      const ctx = canvas.getContext("2d")!;
      let raf = 0;
      const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
      function resize() {
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
      }
      resize();
      window.addEventListener("resize", resize);
      const gridSize = 48;
      let t = 0;
      function tick() {
        t += 0.012;
        // Gradient background
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "#18181b");
        gradient.addColorStop(1, "#23272e");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Animated grid lines
        ctx.save();
        ctx.globalAlpha = 0.22;
        ctx.shadowColor = "#4f46e5";
        ctx.shadowBlur = 8;
        ctx.strokeStyle = "#4f46e5";
        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          // Animate grid lines with a subtle wave
          const wave = Math.sin(t + y * 0.04) * 6;
          ctx.moveTo(0 + wave, y);
          ctx.lineTo(canvas.width + wave, y);
          ctx.stroke();
        }
        ctx.restore();
        raf = requestAnimationFrame(tick);
      }
      tick();
      return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
    }
    const cleanups: Array<() => void> = [];
    if (backRef.current) cleanups.push(animatedGrid(backRef.current));
    return () => cleanups.forEach(fn => fn());
  }, []);

  return (
    <React.Fragment>
      {/* Hero spotlight */}
      <div
        className="pointer-events-none fixed inset-0 -z-30 bg-gradient-to-br from-blue-600/10 to-transparent"
      />
      {/* Back (matrix rain) layer */}
  <canvas ref={backRef} className="fixed inset-0 w-full h-full z-[-50] opacity-[0.7]" />
      {/* Front (sharp) pixel layer - currently unused, but kept for future effects */}
      <canvas ref={frontRef} className="fixed inset-0 -z-28 opacity-[0.22]" />
      {/* Grid overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)] opacity-25">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-indigo-400" />
        </svg>
      </div>
  {/* Scanline - move lower so it's not inside a project box */}
  {scanlinePosition !== 'none' ? (
  <div className="pointer-events-none fixed left-0 right-0 h-[3px] opacity-5 bg-gradient-to-b from-transparent to-black scanline" data-bottom={scanlinePosition} />
  ) : null}
    </React.Fragment>
  );
}
