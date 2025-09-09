"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Github, Linkedin, Mail, ArrowRight, TerminalSquare, Shield, Bolt, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

/** ──────────────────────────────────────────────────────────────────────────
 *  Page
 *  Clean build: EN/ITA toggle, typewriter hero, pixel+grid+glow background.
 *  No YouTube section, no avatar. Primary CTA = email, secondary = GitHub.
 *  ────────────────────────────────────────────────────────────────────────── */

export default function Portfolio() {
  const [progress, setProgress] = useState(0);
  const [lang, setLang] = useState<"EN" | "ITA">("EN");

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

  const nav = useMemo(
    () => [
      { id: "about", label: lang === "EN" ? "About" : "Chi Sono" },
      { id: "work", label: lang === "EN" ? "Work" : "Progetti" },
      { id: "projects", label: lang === "EN" ? "Projects" : "Progetti" },
      { id: "contact", label: lang === "EN" ? "Contact" : "Contatti" },
    ],
    [lang]
  );

  return (
    <div className="min-h-screen text-zinc-100 bg-black relative">
      <BackgroundFX />


      {/* Top progress bar */}
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

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-mono text-emerald-400">giuseppegiona.com</a>
          <nav className="hidden md:flex gap-6 text-sm">
            {nav.map((item) => (
              item.id === "projects" ? (
                <a key={item.id} href="/projects" className="text-zinc-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ) : (
                <a key={item.id} href={`#${item.id}`} className="text-zinc-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              )
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <IconLink href="https://github.com/Giuseppe552" label="GitHub" Icon={Github} />
            <IconLink href="https://www.linkedin.com/" label="LinkedIn" Icon={Linkedin} />
            <button
              onClick={() => setLang(lang === "EN" ? "ITA" : "EN")}
              className="px-2 py-1 text-xs border border-zinc-700 rounded-md hover:bg-zinc-900 transition"
              aria-label="Toggle language"
            >
              {lang}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-24 grid md:grid-cols-1 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
            <p className="font-mono text-emerald-400">
              {lang === "EN" ? "Builder • Systems • Security" : "Costruttore • Sistemi • Sicurezza"}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-2">Giuseppe</h1>
            <Typewriter
              text={
                lang === "EN"
                  ? "Mathematics graduate who likes building clean systems. Security-curious, automation-heavy, and obsessed with removing friction. I share what I learn and ship small projects often."
                  : "Laureato in matematica: mi piace costruire sistemi puliti. Curioso di sicurezza, automazione ovunque e ossessionato dall'eliminare attriti. Condivido quello che imparo e pubblico progetti spesso."
              }
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryCTA
                href="mailto:contact.giuseppe00@gmail.com"
                label={lang === "EN" ? "Email me" : "Scrivimi"}
              />
              <a
                href="https://calendly.com/contact-giuseppe00/call"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 text-black font-semibold px-6 py-2 rounded-xl shadow hover:bg-emerald-400 transition"
              >
                Book a Call
              </a>
              <GhostCTA
                href="/projects"
                label={lang === "EN" ? "See Projects" : "Vedi progetti"}
              />
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
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <div className="flex items-center gap-3 text-zinc-300">
                <Mail size={18} className="text-emerald-400" />
                <a href="mailto:contact.giuseppe00@gmail.com" className="hover:underline">
                  contact.giuseppe00@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 mt-3 text-zinc-300">
                <Globe2 size={18} className="text-emerald-400" />
                <span>{lang === "EN" ? "Based in the UK • Working globally" : "Basato nel Regno Unito • Lavoro a livello globale"}</span>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
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
      <span className="inline-block w-2 h-5 align-[-2px] bg-emerald-400 animate-pulse ml-1" />
    </p>
  );
}

function IconLink({ href, label, Icon }: { href: string; label: string; Icon: any }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition"
      target="_blank"
      rel="noreferrer"
    >
      <Icon size={18} />
    </a>
  );
}

function PrimaryCTA({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-black font-medium shadow hover:bg-emerald-400 transition">
      {label} <ArrowRight size={16} />
    </a>
  );
}

function GhostCTA({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-900 transition">
      {label}
    </a>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-emerald-400">{kicker}</p>
      <h2 className="text-2xl md:text-3xl font-semibold mt-2">{title}</h2>
    </div>
  );
}

function ValueCard({ Icon, title, desc }: { Icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6
                shadow-[0_20px_60px_-24px_rgba(0,0,0,0.35)]
                hover:shadow-[0_30px_90px_-28px_rgba(16,185,129,0.18)]
                hover:border-emerald-500/40 transition-shadow">
      <div className="flex items-center gap-3">
        <Icon className="text-emerald-400" size={20} />
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
  className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 block
             hover:border-emerald-500/50
             shadow-[0_24px_80px_-28px_rgba(0,0,0,0.38)]
             hover:shadow-[0_36px_120px_-30px_rgba(16,185,129,0.22)]
             transition-shadow"
>

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-zinc-100">{title}</h3>
        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 text-emerald-400 transition" />
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

function BackgroundFX() {
  const backRef = useRef<HTMLCanvasElement | null>(null);
  const frontRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    function makeLayer(canvas: HTMLCanvasElement, cfg: {
      COUNT: number; speed: number; size: [number, number]; opacity: number; blur?: number;
    }) {
      const ctx = canvas.getContext("2d")!;
      let raf = 0;
      const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
      function resize() {
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        (ctx as any).resetTransform?.();
        ctx.scale(dpr, dpr);
      }
      resize();
      window.addEventListener("resize", resize);

      type P = { x: number; y: number; vx: number; vy: number; life: number; max: number };
      const parts: P[] = Array.from({ length: cfg.COUNT }, () => spawn());
      function spawn(): P {
        return {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * cfg.speed,
          vy: (Math.random() - 0.5) * cfg.speed,
          life: 0,
          max: 240 + Math.random() * 600,
        };
      }
      function tick() {
        ctx.fillStyle = "rgba(0,0,0,0.25)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        if (cfg.blur) (ctx as any).filter = `blur(${cfg.blur}px)`;
        ctx.globalAlpha = cfg.opacity;
        ctx.fillStyle = "rgb(16,185,129)";
        for (let i = 0; i < parts.length; i++) {
          const p = parts[i];
          p.x += p.vx; p.y += p.vy; p.life++;
          if (p.x < 0 || p.x > window.innerWidth || p.y < 0 || p.y > window.innerHeight || p.life > p.max) {
            parts[i] = spawn();
            continue;
          }
          const base = cfg.size[0], range = cfg.size[1] - cfg.size[0];
          const s = base + ((p.life % 6) / 6) * range;
          ctx.fillRect(p.x, p.y, s, s);
        }
        (ctx as any).filter = "none";
        ctx.globalAlpha = 1;
        raf = requestAnimationFrame(tick);
      }
      tick();
      return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
    }

    const cleanups: Array<() => void> = [];
    if (backRef.current) cleanups.push(makeLayer(backRef.current, { COUNT: 140, speed: 0.12, size: [2,6],  opacity: 0.10, blur: 6 }));
    if (frontRef.current) cleanups.push(makeLayer(frontRef.current, { COUNT: 240, speed: 0.28, size: [1,4],  opacity: 0.22 }));
    return () => cleanups.forEach(fn => fn());
  }, []);

  return (
    <>
      {/* Hero spotlight */}
      <div
        className="pointer-events-none fixed inset-0 -z-30"
        style={{ background: "radial-gradient(950px 520px at 20% 26%, rgba(16,185,129,0.14), transparent 62%)" }}
      />

      {/* Back (blurred) pixel layer */}
      <canvas ref={backRef} className="fixed inset-0 -z-29 opacity-[0.25]" />

      {/* Front (sharp) pixel layer */}
      <canvas ref={frontRef} className="fixed inset-0 -z-28 opacity-[0.22]" />

      {/* Grid overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)] opacity-25">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-emerald-400" />
        </svg>
      </div>

      {/* Scanline */}
      <div className="pointer-events-none fixed inset-0 -z-40 opacity-[0.05]"
           style={{ backgroundImage: "linear-gradient(transparent 50%, #000 50%)", backgroundSize: "100% 3px" }} />
    </>
  );
}


