"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Github, Linkedin, Youtube, Mail, ArrowRight, TerminalSquare, Shield, Bolt, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [progress, setProgress] = useState(0);
  const [lang, setLang] = useState<"EN" | "ITA">("EN");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(isFinite(scrolled) ? scrolled : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = useMemo(
    () => [
      { id: "about", label: lang === "EN" ? "About" : "Chi Sono" },
      { id: "work", label: lang === "EN" ? "Work" : "Progetti" },
      { id: "content", label: lang === "EN" ? "Content" : "Contenuti" },
      { id: "contact", label: lang === "EN" ? "Contact" : "Contatti" },
    ],
    [lang]
  );

  return (
    <div className="min-h-screen text-zinc-100 bg-black relative">
      <BackgroundFX />

      <div className="fixed top-0 left-0 right-0 h-[3px] bg-zinc-900/80 z-50">
        <motion.div
          className="h-full bg-emerald-400"
          style={{ width: `${progress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "tween", duration: 0.08 }}
          aria-hidden
        />
      </div>

      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-mono text-emerald-400">giuseppe.dev</a>
          <nav className="hidden md:flex gap-6 text-sm">
            {nav.map(item => (
              <a key={item.id} href={`#${item.id}`} className="text-zinc-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <IconLink href="https://github.com/Giuseppe552" label="GitHub" Icon={Github} />
            <IconLink href="https://www.linkedin.com/" label="LinkedIn" Icon={Linkedin} />
            <IconLink href="https://www.youtube.com/@GiuseppeAI" label="YouTube" Icon={Youtube} />
            <button
              onClick={() => setLang(lang === "EN" ? "ITA" : "EN")}
              className="px-2 py-1 text-xs border border-zinc-700 rounded-md hover:bg-zinc-900 transition"
            >
              {lang}
            </button>
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-24 grid md:grid-cols-[auto,1fr] gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="relative w-36 h-36 rounded-full ring-2 ring-emerald-400/60 shadow-lg overflow-hidden">
              <img
                src="https://avatars.githubusercontent.com/u/000000?v=4"
                alt="Giuseppe profile"
                className="w-full h-full object-cover"
              />
              <span className="absolute inset-0 bg-emerald-400/10 mix-blend-overlay" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            <p className="font-mono text-emerald-400">
              {lang === "EN" ? "Builder • Systems • Security" : "Costruttore • Sistemi • Sicurezza"}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-2">
              Giuseppe Giona
            </h1>
            <p className="text-zinc-300 mt-4 max-w-2xl">
              {lang === "EN"
                ? "I design and ship resilient systems that make businesses faster, safer, and more profitable. Founder of Alveriano. Mathematics background. I think in code, numbers, and incentives."
                : "Progetto e realizzo sistemi resilienti che rendono le aziende più veloci, sicure e redditizie. Fondatore di Alveriano. Background in matematica. Penso in codice, numeri e incentivi."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryCTA href="#contact" label={lang === "EN" ? "Work with me" : "Lavora con me"} />
              <GhostCTA href="#work" label={lang === "EN" ? "See projects" : "Vedi progetti"} />
            </div>
          </motion.div>
        </div>
      </section>
      {/* ...rest of the site unchanged, but duplicate text strings should follow lang switch pattern... */}
    </div>
  );
}

// (The rest of IconLink, PrimaryCTA, GhostCTA, SectionTitle, ValueCard, ProjectCard, BackgroundFX stay the same)

