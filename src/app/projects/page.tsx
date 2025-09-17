"use client";
import React, { useState } from "react";
import { metadata } from "./metadata";
import Layout from "../../components/Layout";
import Link from "next/link";

const filters = ["All", "AI", "Security", "Automation", "Data", "Web"];
const sortOptions = ["Newest", "Most Impactful", "Most Complex"];

const projects: Array<{
  title: string;
  slug: string;
  tagline: string;
  metric?: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  image: string;
  links: { demo?: string; github?: string; caseStudy?: string };
  primaryCategory: "AI" | "Security" | "Data" | "Automation" | "Web";
  tags: string[];
}> = [
  {
    title: "JobMate AI",
    slug: "jobmate-ai",
    tagline: "CV ↔ job description matching with semantic similarity scores to surface best-fit candidates fast.",
    metric: "+18% shortlist precision",
    problem: "Strong candidates are missed by ATS due to keyword mismatch and noisy formatting.",
    solution: "Python + spaCy + TF-IDF/cosine similarity with a clean upload UI; optional Streamlit frontend.",
    impact: "Faster screening for recruiters and immediate fit feedback for job seekers.",
    tech: ["Python","spaCy","scikit-learn","Flask/Streamlit","PDF parsing"],
    image: "/jobmate-ai.png",
    links: { demo: "#", github: "https://github.com/Giuseppe552/jobmateAI", caseStudy: "#" },
    primaryCategory: "AI",
    tags: ["AI","Hiring","Automation","NLP"]
  },
  {
    title: "Email Compliance Checker",
    slug: "email-compliance-checker",
    tagline: "Scans CSV email exports for risky terms/recipients and summarizes issues for compliance teams.",
    metric: "−60% manual review time",
    problem: "Manual review of large email datasets is slow and error-prone for legal/compliance.",
    solution: "Python + Pandas ruleset scanning, severity scoring, and KPI summary table.",
    impact: "Quicker, more consistent compliance checks with clear audit output.",
    tech: ["Python","Pandas","CSV","Streamlit"],
    image: "/email-compliance-checker.png",
    links: { demo: "#", github: "https://github.com/Giuseppe552/email-compliance-checker", caseStudy: "#" },
    primaryCategory: "Security",
    tags: ["Security","Compliance","Data","Automation"]
  },
  {
    title: "Ghost Protocol",
    slug: "ghost-protocol",
    tagline: "Hardened Tor+Firefox launcher with sidecar dashboard to verify network privacy posture.",
    metric: "Leak checks: DNS/WebRTC/HTTPS-only",
    problem: "Users think they’re private but silently leak via DNS/WebRTC/mixed content.",
    solution: "Scripted browser profile, leak tests, and a simple dashboard to validate configuration.",
    impact: "Teaches true anonymity hygiene; safer browsing defaults.",
    tech: ["Python","Linux","Firefox","Tor","WebRTC"],
    image: "/ghost-protocol.png",
    links: { demo: "#", github: "https://github.com/Giuseppe552/ghost-protocol", caseStudy: "#" },
    primaryCategory: "Security",
    tags: ["Security","Privacy","Web"]
  },
  {
    title: "Zenith EV Trend Analyzer",
    slug: "zenith-ev-trend-analyzer",
    tagline: "Analyzes UK gov EV fleet data to reveal adoption trends and residual value risk.",
    metric: "Interactive trend/portfolio views",
    problem: "Finance teams lack a clear view of EV adoption and its impact on residual values.",
    solution: "Python + Pandas + Matplotlib charts with scenario analysis and portfolio simulation.",
    impact: "Better risk insight and planning for EV-focused portfolios.",
    tech: ["Python","Pandas","Matplotlib","CSV"],
    image: "/zenith-ev-trend-analyzer.png",
    links: { demo: "#", github: "https://github.com/Giuseppe552/zenith-ev-trend-analyzer", caseStudy: "#" },
    primaryCategory: "Data",
    tags: ["Data","Analytics","Automation"]
  },
  {
    title: "Invoice Reconciliation Tool",
    slug: "invoice-reconciliation-tool",
    tagline: "Compares vendor invoices against accounting exports to find mismatches and missing records.",
    metric: "Discrepancy report export",
    problem: "Finance teams burn hours reconciling CSVs and still miss edge-case mismatches.",
    solution: "Pandas-based join checks, tolerance rules, and one-click discrepancy report.",
    impact: "Faster closes, fewer errors, and clearer escalations.",
    tech: ["Python","Pandas","CSV","Streamlit"],
    image: "/invoice-reconciliation.png",
    links: { demo: "#", github: "https://github.com/Giuseppe552/invoice-reconciliation-tool", caseStudy: "#" },
    primaryCategory: "Data",
    tags: ["Data","Finance","Automation"]
  },
  {
    title: "ATS Helper",
    slug: "ats-helper",
    tagline: "Analyzes and scores CVs against job descriptions with keyword coverage and relevance.",
    metric: "Instant ATS-readiness score",
    problem: "Candidates don’t know if their CV will pass ATS filters for specific roles.",
    solution: "spaCy/NLP keyword extraction + scoring + simple report view.",
    impact: "Clear feedback loop so candidates can tailor before applying.",
    tech: ["Python","spaCy","NLP","PDF/DOCX"],
    image: "/ats-helper.png",
    links: { demo: "#", github: "https://github.com/Giuseppe552/ats-helper", caseStudy: "#" },
    primaryCategory: "AI",
    tags: ["AI","Hiring","NLP"]
  },
  {
    title: "Network Scanner",
    slug: "network-scanner",
    tagline: "Fast, multi-threaded scanner for ports/services with banner grabbing and results export.",
    metric: "Parallel scanning",
    problem: "Manual recon is slow; students need a safe way to learn scanning basics.",
    solution: "Python sockets + threading + banner grabbing + CSV export.",
    impact: "Quick service inventory and a learning tool for recon workflows.",
    tech: ["Python","Sockets","Threading","CSV"],
    image: "/network-scanner.png",
    links: { demo: "#", github: "https://github.com/Giuseppe552/network-scanner", caseStudy: "#" },
    primaryCategory: "Security",
    tags: ["Security","Networking","CLI"]
  },
  {
    title: "Retail BI Simulator",
    slug: "retail-bi-simulator",
    tagline: "Cleans retail transaction data, forecasts revenue, flags anomalies, and exports BI-ready tables.",
    metric: "BI-ready exports",
    problem: "Retail data is messy; analysts need reliable, repeatable pipelines to feed dashboards.",
    solution: "Python ETL with anomaly detection and forecasting (statsmodels/Prophet or similar).",
    impact: "Faster analytics and higher-quality dashboards in Power BI/Tableau.",
    tech: ["Python","Pandas","NumPy","Statsmodels/Plotly","SQLite/CSV"],
    image: "/retail-bi-simulator.png",
    links: { demo: "#", github: "https://github.com/Giuseppe552/retail-bi-simulator", caseStudy: "#" },
    primaryCategory: "Data",
    tags: ["Data","Analytics","Automation"]
  },
  {
    title: "Metadata Cleaner",
    slug: "metadata-cleaner",
    tagline: "Removes hidden metadata from images, PDFs, and DOCX to protect privacy—works locally.",
    metric: "Multi-format support",
    problem: "Users unknowingly leak EXIF/author/history metadata when sharing files.",
    solution: "Local Python utility to strip EXIF/PDF/DOCX metadata safely with batch mode.",
    impact: "Reduces accidental data leakage; privacy by default.",
    tech: ["Python","EXIF","PDF","DOCX"],
    image: "/metadata-cleaner.png",
    links: { demo: "#", github: "https://github.com/Giuseppe552/metadata-cleaner", caseStudy: "#" },
    primaryCategory: "Security",
    tags: ["Security","Privacy","Automation"]
  },
  {
    title: "Secure Messaging CLI",
    slug: "secure-messaging-cli",
    tagline: "End-to-end encrypted messaging and file transfer (RSA/AES) for learning secure comms.",
    metric: "Ephemeral/expiry support",
    problem: "People need a simple, local tool to learn E2E patterns without heavy setup.",
    solution: "CLI app that handles RSA/AES, key mgmt, optional message expiry.",
    impact: "Educational tool to understand practical cryptographic workflows.",
    tech: ["Python","RSA","AES","CLI","Cryptography"],
    image: "/secure-messaging-cli.png",
    links: { demo: "#", github: "https://github.com/Giuseppe552/secure-messaging-cli", caseStudy: "#" },
    primaryCategory: "Security",
    tags: ["Security","Encryption","CLI"]
  },
  {
    title: "Personal Linux Security Toolkit",
    slug: "personal-linux-security-toolkit",
    tagline: "Automates rootkit scans, network monitoring, and change tracking—readable security reports.",
    metric: "One-command health check",
    problem: "Non-experts struggle to assess Linux security posture quickly.",
    solution: "Wrapper around tools like rkhunter/clamAV/netstat to produce concise reports.",
    impact: "Accessible security hygiene for everyday Linux users.",
    tech: ["Python","rkhunter","clamAV","netstat","lsof"],
    image: "/linux-security-toolkit.png",
    links: { demo: "#", github: "https://github.com/Giuseppe552/personal-linux-security-toolkit", caseStudy: "#" },
    primaryCategory: "Security",
    tags: ["Security","Linux","Automation"]
  }
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sort, setSort] = useState(sortOptions[0]);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  // Sorting is placeholder; you can implement real logic later
  const sorted = filtered;

  return (
    <Layout
      title="Projects & Case Studies"
      description="Practical tools built to remove friction, improve decisions, and automate work."
    >
      <main className="min-h-screen bg-grid px-4 md:px-8 xl:px-16 py-12">
        <header className="max-w-6xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 font-sans tracking-tight">
            Projects & Case Studies
          </h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Practical tools built to remove friction, improve decisions, and automate repetitive work. Each card shows the problem, solution, and impact.
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {filters.map((f) => (
                <button
                  key={f}
                  className={[
                    "px-4 py-1.5 rounded-full font-medium text-sm transition border",
                    activeFilter === f
                      ? "bg-teal-600 text-white border-teal-500 shadow"
                      : "bg-[#1B263B] text-gray-300 border-gray-700 hover:bg-[#22304a]"
                  ].join(" ")}
                  onClick={() => setActiveFilter(f)}
                  aria-pressed={activeFilter === f}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-end">
              <label htmlFor="sort" className="text-gray-400 text-sm font-medium">
                Sort by:
              </label>
              <select
                id="sort"
                className="bg-[#1B263B] border border-gray-700 rounded-lg px-3 py-1.5 text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                {sortOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </header>
        <section
          className="max-w-6xl mx-auto grid gap-6 md:gap-8 xl:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          aria-label="Project grid"
        >
          {sorted.map((proj, index) => (
            <article
              key={index}
              tabIndex={0}
              className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1.5 focus:ring-4 focus:ring-teal-400/40 overflow-hidden outline-none flex flex-col h-full"
              aria-label={`Project: ${proj.title}`}
            >
              {/* Image + Badge */}
              <div className="relative h-40 md:h-44 xl:h-48 overflow-hidden">
                <img
                  src={proj.image}
                  alt={`${proj.title} cover`}
                  className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                  {proj.tags[0]}
                </span>
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col p-6 gap-3">
                <h2 className="text-xl font-bold text-white font-sans mb-1">
                  {proj.title}
                </h2>
                <p className="text-teal-300 text-base font-medium mb-1">
                  {proj.tagline}
                </p>
                <div className="flex gap-2 text-xs text-green-400 font-semibold mb-1">
                  <span>{proj.metric}</span>
                </div>
                <div className="text-gray-300 text-sm mb-1">
                  <strong className="text-teal-400">Problem:</strong> {proj.problem}
                </div>
                <div className="text-gray-300 text-sm mb-1">
                  <strong className="text-teal-400">Solution:</strong> {proj.solution}
                </div>
                <div className="text-gray-300 text-sm mb-2">
                  <strong className="text-teal-400">Impact:</strong> {proj.impact}
                </div>
                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#22304a] text-gray-200 rounded-full text-xs font-semibold border border-gray-700 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={proj.links.demo}
                    className="text-sm px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-500 focus:ring-2 focus:ring-teal-400 focus:outline-none transition"
                    aria-label="View Demo"
                  >
                    Demo
                  </a>
                  <a
                    href={proj.links.github}
                    className="text-sm px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-teal-400 focus:outline-none transition"
                    aria-label="View on GitHub"
                  >
                    GitHub
                  </a>
                  <a
                    href={proj.links.caseStudy}
                    className="text-sm px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                    aria-label="Read case study"
                  >
                    Case Study
                  </a>
                </div>
                {/* Footer tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-[#0D1B2A] text-teal-400 rounded-full text-xs font-semibold border border-teal-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
        {/* Contact section */}
        <section id="contact" className="border-t border-zinc-800 mt-16">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="font-mono text-indigo-400 text-lg mb-2">Get in touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Build</h3>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-800 p-6 mb-6">
              <div className="flex items-center gap-3 text-zinc-300">
                <span className="font-mono text-indigo-400">contact.giuseppe00@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 mt-3 text-zinc-300">
                <span className="text-indigo-400">Based in the UK • Working globally</span>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-800 p-6">
              <p className="text-zinc-300 mb-4">
                Got an idea or want to collaborate? Just send a quick message with what you&apos;re thinking—I&apos;m always happy to chat and help out. Let&apos;s make something cool together!
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="mailto:contact.giuseppe00@gmail.com?subject=Hello" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 text-white font-medium shadow hover:bg-indigo-400 transition">Email me</a>
                <Link href="/projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-900 transition">See Projects</Link>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="border-t border-zinc-800 py-10">
          <div className="mx-auto max-w-6xl px-4 text-xs text-purple-400 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Giuseppe Giona</span>
            <span className="font-mono">v1.2 &bull; built with React</span>
          </div>
        </footer>
      </main>
    </Layout>
  );
}
