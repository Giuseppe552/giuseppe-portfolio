"use client";
import React from "react";

export default function ProjectsScrollBar() {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Number.isFinite(scrolled) ? scrolled : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-zinc-900/80 z-50">
      <div
        className="h-full bg-indigo-500 transition-[width] duration-75 progress-bar-width"
        style={{ width: `${progress}%` }}
        aria-hidden
      />
    </div>
  );
}
