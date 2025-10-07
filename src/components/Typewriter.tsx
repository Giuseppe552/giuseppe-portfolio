"use client";

import React from "react";

/**
 * Typewriter
 * - Supports a single string or an array of strings (cycles through them).
 * - Smart timing with punctuation pauses (.,!?;:).
 * - Optional looping with configurable delete speed and pauses.
 * - Respects prefers-reduced-motion (renders instantly, no cursor blink).
 * - Accessible: announces updates politely for screen readers.
 */

type Props = {
  /** A single string or a list to cycle through */
  text: string | string[];
  /** "default" | "fast" | "slow" | "instant" */
  variant?: "default" | "fast" | "slow" | "instant";
  /** Base ms per character (overrides variant if provided) */
  speedMs?: number;
  /** Extra delay after punctuation (ms) */
  punctuationPauseMs?: number;
  /** Initial delay before starting (ms) */
  startDelayMs?: number;
  /** Pause between phrases when looping (ms) */
  pauseBetweenMs?: number;
  /** Enable backspacing between items (when text is array) */
  loop?: boolean;
  /** Backspace speed (ms per char) */
  deleteSpeedMs?: number;
  /** Show a blinking cursor at the end */
  cursor?: boolean;
  /** Cursor character */
  cursorChar?: string;
  /** Optional className for the wrapper */
  className?: string;
  /** Called when a single-string animation completes (or after one full cycle if array & !loop) */
  onComplete?: () => void;
};

export default function Typewriter({
  text,
  variant = "default",
  speedMs,
  punctuationPauseMs = 180,
  startDelayMs = 0,
  pauseBetweenMs = 900,
  loop = false,
  deleteSpeedMs = 30,
  cursor = true,
  cursorChar = "▍",
  className = "",
  onComplete,
}: Props) {
  const phrases = React.useMemo<string[]>(
    () => (Array.isArray(text) ? text.filter(Boolean) : [text]),
    [text]
  );

  // Reduced motion: render instantly
  const prefersReducedMotion = usePrefersReducedMotion();

  const [display, setDisplay] = React.useState("");
  const [phraseIdx, setPhraseIdx] = React.useState(0);
  const [mode, setMode] = React.useState<"idle" | "typing" | "pausing" | "deleting" | "done">(
    "idle"
  );
  const charIdxRef = React.useRef(0);
  const timeoutRef = React.useRef<number | null>(null);

  // Resolve base typing speed from variant unless speedMs provided
  const baseSpeed = React.useMemo(() => {
    if (typeof speedMs === "number") return speedMs;
    switch (variant) {
      case "fast":
        return 28;
      case "slow":
        return 70;
      case "instant":
        return 0;
      default:
        return 42;
    }
  }, [variant, speedMs]);

  // Kick off animation
  React.useEffect(() => {
    clearTimer(timeoutRef);
    setDisplay("");
    setPhraseIdx(0);
    charIdxRef.current = 0;

    if (prefersReducedMotion || baseSpeed === 0) {
      // Instant render
      if (phrases.length === 1) {
        setDisplay(phrases[0] ?? "");
        setMode("done");
        onComplete?.();
      } else {
        setDisplay(phrases[0] ?? "");
        setMode(loop ? "pausing" : phrases.length > 1 ? "done" : "done");
      }
      return;
    }

    setMode("idle");

    timeoutRef.current = window.setTimeout(() => {
      setMode("typing");
    }, Math.max(0, startDelayMs));

    return () => clearTimer(timeoutRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrases.join("␞"), loop, prefersReducedMotion, baseSpeed, startDelayMs]);

  // Core state machine
  React.useEffect(() => {
    if (mode === "done" || prefersReducedMotion) return;
    clearTimer(timeoutRef);

    const current = phrases[phraseIdx] ?? "";
    const i = charIdxRef.current;

    if (mode === "typing") {
      if (i < current.length) {
        setDisplay((prev) => prev + current.charAt(i));
        charIdxRef.current = i + 1;

        const ch = current.charAt(i);
        const pause =
          /[.,!?;:]/.test(ch) && i > 0 ? punctuationPauseMs : 0;
        const delay = baseSpeed + pause;

        timeoutRef.current = window.setTimeout(() => {
          setMode("typing");
        }, delay);
      } else {
        // Finished typing current phrase
        if (phrases.length === 1) {
          setMode("done");
          onComplete?.();
        } else if (loop) {
          setMode("pausing");
          timeoutRef.current = window.setTimeout(() => {
            setMode("deleting");
          }, pauseBetweenMs);
        } else {
          // Not looping; if more phrases, stop after the first full render
          setMode("done");
          onComplete?.();
        }
      }
    } else if (mode === "deleting") {
      if (i > 0) {
        setDisplay((prev) => prev.slice(0, -1));
        charIdxRef.current = i - 1;
        timeoutRef.current = window.setTimeout(() => {
          setMode("deleting");
        }, deleteSpeedMs);
      } else {
        // Move to next phrase
        setPhraseIdx((idx) => (idx + 1) % phrases.length);
        setMode("typing");
      }
    }
    // pausing is handled in the typing branch via timeout
  }, [
    mode,
    phrases,
    phraseIdx,
    baseSpeed,
    deleteSpeedMs,
    pauseBetweenMs,
    punctuationPauseMs,
    prefersReducedMotion,
    onComplete,
  ]);

  // Cleanup on unmount
  React.useEffect(() => () => clearTimer(timeoutRef), []);

  return (
    <span
      className={`${className} whitespace-pre-wrap`}
      aria-live="polite"
      aria-atomic="true"
    >
      {display}
      {cursor && (
        <span
          aria-hidden="true"
          className={`inline-block select-none align-baseline ${
            prefersReducedMotion ? "" : "tw-cursor"
          }`}
        >
          {cursorChar}
        </span>
      )}
      {/* cursor styles */}
      <style jsx>{`
        @keyframes tw-blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
        .tw-cursor {
          animation: tw-blink 1s step-end infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .tw-cursor {
            animation: none;
          }
        }
      `}</style>
    </span>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 * Hook: prefers-reduced-motion
 * ────────────────────────────────────────────────────────────────────────── */
function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

function clearTimer(ref: React.MutableRefObject<number | null>) {
  if (ref.current) {
    window.clearTimeout(ref.current);
    ref.current = null;
  }
}
