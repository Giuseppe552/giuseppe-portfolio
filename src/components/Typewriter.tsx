"use client";
import React, { useEffect, useState } from "react";

export default function Typewriter({ text, variant = "default", className = "" }: { text: string, variant?: "default" | "fast" | "slow", className?: string }) {
  const [displayed, setDisplayed] = useState("");
  
  // Whitelist object keys instead of indexing with arbitrary input
  let speed = 50; // default
  if (variant === "fast") speed = 30;
  else if (variant === "slow") speed = 80;
  
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(prev => prev + text.charAt(i));
      }
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span className={className}>{displayed}</span>;
}
