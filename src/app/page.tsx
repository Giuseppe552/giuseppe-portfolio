"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import BackgroundFX from "@/components/BackgroundFX";
import { Mail, ArrowRight, TerminalSquare, Shield, Bolt, Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import ResponsiveHeader from "@/components/ResponsiveHeader";

/** ──────────────────────────────────────────────────────────────────────────
 *  Page
 *  Clean build: EN/ITA toggle, typewriter hero, pixel+grid+glow background.
 *  No YouTube section, no avatar. Primary CTA = email, secondary = GitHub.
 *  ────────────────────────────────────────────────────────────────────────── */

export default function Portfolio() {
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
                href="https://calendly.com/giuseppegiona/30min"
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
      <section id="about" className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-6">
          <ValueCard
            Icon={TerminalSquare}
            title={lang === "EN" ? "Software Engineering" : "Ingegneria del Software"}
            desc={
              lang === "EN"
                ? "Full-stack systems, automation, and privacy tooling with measurable outcomes."
                : "Sistemi full-stack, automazione e strumenti per la privacy con risultati misurabili."
            }
          />
          <ValueCard
            Icon={Shield}
            title={lang === "EN" ? "Security Mindset" : "Mentalità di Sicurezza"}
            desc={
              lang === "EN"
                ? "Threat modeling, data minimization, and sane defaults. Build it right, then harden it."
                : "Threat modeling, minimizzazione dei dati e default sensati. Costruire bene, poi indurire."
            }
          />
          <ValueCard
            Icon={Bolt}
            title={lang === "EN" ? "Business Leverage" : "Leva di Business"}
            desc={
              lang === "EN"
                ? "Remove inefficiency, speed up loops, and systemize delivery to compound results."
                : "Rimuovere inefficienze, accelerare i cicli e sistematizzare la consegna per risultati composti."
            }
          />
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker={lang === "EN" ? "Selected Work" : "Selezione"}
            title={lang === "EN" ? "Things I've Shipped" : "Cose che ho pubblicato"}
          />
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Ghost Protocol"
              desc={
                lang === "EN"
                  ? "Hardened Tor + Firefox launcher with leak checks and a sidecar dashboard to verify network posture."
                  : "Launcher Tor + Firefox rinforzato con verifiche di leak e dashboard per controllare la postura di rete."
              }
              tags={["Python", "Firefox", "Tor", "Ops"]}
              href="https://github.com/Giuseppe552/ghost-protocol"
            />
            <ProjectCard
              title="JobMate AI"
              desc={
                lang === "EN"
                  ? "CV ↔ job description matcher with semantic scoring and a modern web UI."
                  : "Matcher CV ↔ job description con scoring semantico e interfaccia web moderna."
              }
              tags={["Python", "Flask", "React", "NLP"]}
              href="https://github.com/Giuseppe552/jobmate-ai"
            />
            <ProjectCard
              title="Secure Messaging CLI"
              desc={
                lang === "EN"
                  ? "End-to-end encrypted messaging CLI in Python. Simple, secure, and privacy-focused."
                  : "CLI di messaggistica cifrata end-to-end in Python. Semplice, sicuro, privacy al centro."
              }
              tags={["Python", "Encryption", "CLI"]}
              href="https://github.com/Giuseppe552/secure-messaging-cli"
            />
            <ProjectCard
              title="Zenith EV Trend Analyzer"
              desc={
                lang === "EN"
                  ? "Automating UK EV fleet data to reveal electrification trends and leasing risks."
                  : "Automazione dati flotte EV UK per trend e rischi di leasing."
              }
              tags={["Python", "Data", "EV", "Automation"]}
              href="https://github.com/Giuseppe552/zenith-ev-trend-analyzer"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle kicker={lang === "EN" ? "Get in touch" : "Contatti"} title={lang === "EN" ? "Let's Build" : "Costruiamo"} />
          <div className="mt-6 grid md:grid-cols-[1fr,1fr] gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-800 p-6">
              <div className="flex items-center gap-3 text-zinc-300">
                <Mail size={18} className="text-indigo-400" />
                <a href="mailto:contact.giuseppe00@gmail.com" className="hover:underline">
                  contact.giuseppe00@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 mt-3 text-zinc-300">
                <Globe2 size={18} className="text-indigo-400" />
                <span>{lang === "EN" ? "Based in the UK • Working globally" : "Basato nel Regno Unito • Lavoro a livello globale"}</span>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-800 p-6">
              <p className="text-zinc-300">
                {lang === "EN"
                  ? "For collaborations or ideas—send context and your ideal outcome. I reply when there's a clear problem and tight scope."
                  : "Per collaborazioni o idee—mandami contesto e l'obiettivo. Rispondo quando il problema è chiaro e lo scope è stretto."}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <PrimaryCTA href="mailto:contact.giuseppe00@gmail.com?subject=Hello" label={lang === "EN" ? "Email me" : "Scrivimi"} />
                <GhostCTA href="https://github.com/Giuseppe552" label={lang === "EN" ? "See GitHub projects" : "Vedi progetti su GitHub"} />
              <GhostCTA href="/projects" label={lang === "EN" ? "See Projects" : "Vedi progetti"} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-10">
        <div className="mx-auto max-w-6xl px-4 text-xs text-zinc-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Giuseppe Giona</span>
          <span className="font-mono">v1.2 • built with React</span>
        </div>
      </footer>
    </div>
  );
}

/* ───────────────────────── Helpers ───────────────────────── */

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

function PrimaryCTA({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-white font-medium shadow hover:bg-slate-700 transition">
      {label} <ArrowRight size={16} />
    </a>
  );
}

function GhostCTA({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700 bg-transparent text-zinc-100 hover:bg-slate-900 transition">
      {label}
    </a>
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

function ValueCard({ Icon, title, desc }: { Icon: React.ComponentType<{size?: number; className?: string}> ; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.35)] hover:shadow-[0_30px_90px_-28px_rgba(79,70,229,0.18)] hover:border-indigo-500/40 transition-shadow">
      <div className="flex items-center gap-3">
        <Icon className="text-indigo-400" size={20} />
        <h3 className="font-medium text-zinc-100">{title}</h3>
      </div>
      <p className="text-zinc-300 mt-2 text-sm">{desc}</p>
    </div>
  );
}

function ProjectCard({ title, desc, tags, href }: { title: string; desc: string; tags: string[]; href: string }) {
  return (
    <a
  href={href}
  target="_blank"
  rel="noreferrer"
  className="group rounded-2xl border border-zinc-800 bg-zinc-800 p-6 block
             hover:border-indigo-500/50
             shadow-[0_24px_80px_-28px_rgba(0,0,0,0.38)]
             hover:shadow-[0_36px_120px_-30px_rgba(79,70,229,0.22)]
             transition-shadow"
>

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-zinc-100">{title}</h3>
        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 text-indigo-400 transition" />
      </div>
      <p className="text-zinc-300 mt-2 text-sm">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-md border border-zinc-700 text-zinc-300">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}



