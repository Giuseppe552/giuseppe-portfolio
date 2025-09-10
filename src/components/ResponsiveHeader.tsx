"use client";
import React, { useState } from "react";

export default function ResponsiveHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-black/40 border-b border-slate-800 w-full">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="font-mono text-indigo-400 text-lg">Home</a>
        <button
          className="flex flex-col gap-1 w-8 h-8 items-center justify-center group md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-7 h-0.5 bg-indigo-400 rounded transition-all group-hover:bg-white" />
          <span className="block w-7 h-0.5 bg-indigo-400 rounded transition-all group-hover:bg-white" />
          <span className="block w-7 h-0.5 bg-indigo-400 rounded transition-all group-hover:bg-white" />
        </button>
        <nav className="hidden md:flex gap-6 text-sm items-center font-mono">
          <a href="/projects" className="hover:text-indigo-400 transition">Projects</a>
          <a href="/blog" className="hover:text-indigo-400 transition">Blog</a>
        </nav>
      </div>
      {open && (
        <nav className="absolute right-4 top-16 bg-slate-900 border border-slate-800 rounded-xl shadow-lg p-4 flex flex-col gap-4 font-mono text-lg md:hidden">
          <a href="/" className="hover:text-indigo-400 transition">Home</a>
          <a href="/projects" className="hover:text-indigo-400 transition">Projects</a>
          <a href="/blog" className="hover:text-indigo-400 transition">Blog</a>
        </nav>
      )}
    </header>
  );
}