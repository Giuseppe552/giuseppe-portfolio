"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-mono text-indigo-400">giuseppegiona.com</a>
        <nav className="hidden md:flex gap-6 text-sm items-center">
          <Link href="/projects" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-2">
            Projects
            <span className="inline-block">
              <ArrowRight size={18} color="white" />
            </span>
          </Link>
          <a href="#contact" className="text-zinc-300 hover:text-white transition-colors">Contact</a>
          <a
            href="https://calendly.com/giuseppegiona/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-500 text-black font-medium shadow hover:bg-slate-400 transition"
          >
            Book a Call
            <ArrowRight size={18} color="black" />
          </a>
          <a
            href="mailto:contact.giuseppe00@gmail.com?subject=Project%20enquiry%20from%20giuseppegiona.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-500 text-black font-medium shadow hover:bg-slate-400 transition"
          >
            Email Me
            <ArrowRight size={18} color="black" />
          </a>
             <a href="/about" className="hover:text-indigo-400 transition">About</a>
        </nav>
      </div>
    </header>
  );
}
