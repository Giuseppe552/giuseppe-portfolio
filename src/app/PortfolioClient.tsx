"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import BackgroundFX from "@/components/BackgroundFX";
import { Mail, TerminalSquare, Shield, Bolt, Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import ResponsiveHeader from "@/components/ResponsiveHeader";

interface BlogPost {
  title: string;
  date: string;
  content: string;
  slug: string;
}

export default function PortfolioClient({ blogPost }: { blogPost: BlogPost | null }) {
  const [progress, setProgress] = useState(0);
  const [lang] = useState<"EN" | "ITA">("EN");

  useEffect(() => {
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
    <div className="min-h-screen text-zinc-100 relative font-['JetBrains_Mono',monospace] cursor-pointer">
      <ResponsiveHeader />
      <BackgroundFX />
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-800 z-50">
        <motion.div
          className="h-full bg-indigo-500 progress-bar"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "tween", duration: 0.08 }}
          aria-hidden
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mt-2">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Giuseppe</h1>
              <span className="text-lg font-mono text-indigo-400">&quot;joo-zep-peh&quot;</span>
              <button
                aria-label="Play pronunciation"
                className="bg-slate-900 text-indigo-400 rounded-full p-2 hover:bg-indigo-500 hover:text-white transition"
                onClick={() => {
                  const audio = new Audio('/giuseppe-pronunciation.m4a');
                  audio.play();
                }}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M3 8v4h4l5 5V3L7 8H3z"/></svg>
              </button>
            </div>
            <Typewriter
              text={
                lang === "EN"
                   ? "Mathematics graduate who likes building clean systems. Security-curious, automation-heavy, and obsessed with removing friction. I share what I learn and ship small projects often."
                  : "Laureato in matematica: mi piace costruire sistemi puliti. Curioso di sicurezza, automazione ovunque e ossessionato dall'eliminare attriti. Condivido quello che imparo e pubblico progetti spesso."
              }
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://calendly.com/contact-giuseppe00/call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-white font-medium shadow hover:bg-slate-700 transition hover:animate-pulse"
              >
                Book a Call
                <svg width="18" height="18" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M7 5l5 5-5 5" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a
                href="mailto:contact.giuseppe00@gmail.com?subject=Project%20enquiry%20from%20giuseppegiona.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-white font-medium shadow hover:bg-slate-700 transition hover:animate-pulse"
              >
                Email Me
                <svg width="18" height="18" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M7 5l5 5-5 5" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700 bg-transparent text-zinc-100 hover:bg-slate-900 transition hover:animate-pulse"
              >
                See Projects
                <svg width="18" height="18" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M7 5l5 5-5 5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-16 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <div className="p-6 bg-zinc-800 rounded-2xl shadow-md">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-500 rounded-full">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Security First</h3>
                    <p className="text-zinc-400 text-sm mt-1">I prioritize security in all my projects, ensuring your data is safe.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-zinc-800 rounded-2xl shadow-md">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-500 rounded-full">
                    <Bolt className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Performance Obsessed</h3>
                    <p className="text-zinc-400 text-sm mt-1">I optimize for speed and efficiency, delivering top-notch performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-6 bg-zinc-800 rounded-2xl shadow-md">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-500 rounded-full">
                    <Globe2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Global Perspective</h3>
                    <p className="text-zinc-400 text-sm mt-1">With experience in diverse environments, I bring a global perspective to problem-solving.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-zinc-800 rounded-2xl shadow-md">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-500 rounded-full">
                    <TerminalSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Code Quality</h3>
                    <p className="text-zinc-400 text-sm mt-1">I adhere to the highest standards of code quality, ensuring maintainability and scalability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle kicker="My Work" title="Projects & Case Studies" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Project 1: Ghost Protocol */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg group">
              <Link href="https://github.com/Giuseppe552/ghost-protocol" className="flex flex-col h-full" target="_blank">
                {/* Image removed as requested */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">Ghost Protocol</h3>
                  <p className="text-zinc-400 text-sm mt-1">Hardened Tor + Firefox launcher with leak checks and a sidecar dashboard to verify network posture.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-md border border-zinc-700 text-zinc-300">Python</span>
                    <span className="text-xs px-2 py-1 rounded-md border border-zinc-700 text-zinc-300">Firefox</span>
                    <span className="text-xs px-2 py-1 rounded-md border border-zinc-700 text-zinc-300">Tor</span>
                    <span className="text-xs px-2 py-1 rounded-md border border-zinc-700 text-zinc-300">Ops</span>
                  </div>
                </div>
              </Link>
            </div>
            {/* Project 2: JobMate AI */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg group">
              <Link href="https://github.com/Giuseppe552/jobmate-ai" className="flex flex-col h-full" target="_blank">
                {/* Image removed as requested */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">JobMate AI</h3>
                  <p className="text-zinc-400 text-sm mt-1">CV ↔ job description matcher with semantic scoring and a modern web UI.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-md border border-zinc-700 text-zinc-300">Python</span>
                    <span className="text-xs px-2 py-1 rounded-md border border-zinc-700 text-zinc-300">Flask</span>
                    <span className="text-xs px-2 py-1 rounded-md border border-zinc-700 text-zinc-300">React</span>
                    <span className="text-xs px-2 py-1 rounded-md border border-zinc-700 text-zinc-300">NLP</span>
                  </div>
                </div>
              </Link>
            </div>
            {/* Project 3: Secure Messaging CLI */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg group">
              <Link href="https://github.com/Giuseppe552/secure-messaging-cli" className="flex flex-col h-full" target="_blank">
                {/* Image removed as requested */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">Secure Messaging CLI</h3>
                  <p className="text-zinc-400 text-sm mt-1">End-to-end encrypted messaging CLI in Python. Simple, secure, and privacy-focused.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-md border border-zinc-700 text-zinc-300">Python</span>
                    <span className="text-xs px-2 py-1 rounded-md border border-zinc-700 text-zinc-300">Encryption</span>
                    <span className="text-xs px-2 py-1 rounded-md border border-zinc-700 text-zinc-300">CLI</span>
                  </div>
                </div>
              </Link>
            </div>
            {/* Project 4: Zenith EV Trend Analyzer */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg group">
              <Link href="https://github.com/Giuseppe552/zenith-ev-trend-analyzer" className="flex flex-col h-full" target="_blank">
                {/* Image removed as requested */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">Zenith EV Trend Analyzer</h3>
                  <p className="text-zinc-400 text-sm mt-1">Automating UK EV fleet data to reveal electrification trends and leasing risks.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded-md border border-zinc-700 text-zinc-300">Python</span>
                    <span className="text-xs px-2 py-1 rounded-md border border-zinc-700 text-zinc-300">Data</span>
                    <span className="text-xs px-2 py-1 rounded-md border border-zinc-700 text-zinc-300">EV</span>
                    <span className="text-xs px-2 py-1 rounded-md border border-zinc-700 text-zinc-300">Automation</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest from my blog */}
      {blogPost && (
        <section id="latest-blog" className="border-t border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <SectionTitle kicker="Latest from my blog" title={blogPost.title} />
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg mt-4">
              <div className="text-zinc-400 text-sm mb-2 font-mono">{blogPost.date}</div>
              <div className="text-zinc-200 text-base font-mono mb-4">{blogPost.content.slice(0, Math.floor(blogPost.content.length / 7))}...</div>
              <Link href={`/blog/${blogPost.slug}`} className="inline-block px-4 py-2 rounded-xl bg-indigo-500 text-white font-mono hover:bg-indigo-600 transition">Keep reading →</Link>
            </div>
            <div className="mt-8 text-right">
              <Link href="/blog" className="text-indigo-400 hover:underline font-mono">See all posts →</Link>
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="py-16 bg-slate-900">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle kicker="Get in Touch" title="Contact Me" />
          <div className="mt-8">
            <p className="text-zinc-400 mb-4">I&apos;m always open to discussing new projects or opportunities. Feel free to reach out!</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contact.giuseppe00@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 text-white font-medium shadow hover:bg-indigo-600 transition"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href="https://calendly.com/contact-giuseppe00/call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-white font-medium shadow hover:bg-slate-700 transition"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M3 8v4h4l5 5V3L7 8H3z"/></svg>
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    {/* Removed duplicate and unclosed section tag */}

      <footer className="border-t border-zinc-800 py-10 bg-zinc-900">
        <div className="mx-auto max-w-6xl px-4 text-xs text-purple-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Giuseppe Giona</span>
                  <span className="font-mono">v1.2 &bull; built with React</span>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-indigo-400">{kicker}</p>
      <h2 className="text-2xl md:text-3xl font-semibold mt-2">{title}</h2>
    </div>
  );
}

function Typewriter({ text }: { text: string }) {
  const [shown, setShown] = React.useState(0);
  React.useEffect(() => {
    setShown(0);
    let i = 0;
    const step = () => {
      i = Math.min(text.length, i + 2);
      setShown(i);
      if (i < text.length) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [text]);
  return (
    <p className="text-zinc-300 mt-4 max-w-2xl font-light">
      {text.slice(0, shown)}
      <span className="inline-block w-2 h-5 align-[-2px] bg-indigo-400 animate-pulse ml-1" />
    </p>
  );
}
