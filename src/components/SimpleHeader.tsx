"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function SimpleHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-black/40 border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-mono text-indigo-400 text-lg">giuseppegiona.com</Link>
        <button
          className="flex flex-col gap-1 w-8 h-8 items-center justify-center group"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-7 h-0.5 bg-indigo-400 rounded transition-all group-hover:bg-white" />
          <span className="block w-7 h-0.5 bg-indigo-400 rounded transition-all group-hover:bg-white" />
          <span className="block w-7 h-0.5 bg-indigo-400 rounded transition-all group-hover:bg-white" />
        </button>
      </div>
      {open && (
        <nav className="absolute right-4 top-16 bg-slate-900 border border-slate-800 rounded-xl shadow-lg p-4 flex flex-col gap-4 font-mono text-lg">
          <Link href="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link href="/projects" className="hover:text-indigo-400 transition">Projects</Link>
          <Link href="/about" className="hover:text-indigo-400 transition">About</Link>
        </nav>
      )}
    </header>
  );
}