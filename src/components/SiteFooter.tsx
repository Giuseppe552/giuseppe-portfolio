"use client";
import React from "react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="mx-auto max-w-6xl px-4 text-xs text-zinc-500 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Giuseppe Giona</span>
        <span className="font-mono">v1.2 • built with React</span>
      </div>
    </footer>
  );
}
