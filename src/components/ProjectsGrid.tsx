"use client";
import React from "react";
import { motion } from "framer-motion";
import { GHRepo, repoTitle } from "@/lib/github";

export type ProjectCardData = {
  name: string;
  description: string;
  stargazers_count: number;
  language?: string;
  homepage?: string;
  html_url: string;
  img: string;
  summary?: string;
  demoImg?: string;
};

export default function ProjectsGrid({ cards }: { cards: ProjectCardData[] }) {
  // ...existing code...
  // Sort: projects with images first, then without
  // Patch Ghost Protocol, JobmateAI, and Network Scanner demoImg
  const patchedCards = cards.map(card => {
    if (repoTitle(card.name) === "Ghost Protocol") {
      return { ...card, demoImg: "https://github.com/Giuseppe552/ghost-protocol/blob/main/docs/demo/demo.gif?raw=true" };
    }
    if (repoTitle(card.name) === "JobmateAI" || repoTitle(card.name) === "Jobmate Ai") {
      return { ...card, demoImg: "https://github.com/Giuseppe552/jobmateAI/blob/main/screenshot.png?raw=true" };
    }
    if (repoTitle(card.name) === "Network Scanner") {
      return { ...card, demoImg: "https://github.com/Giuseppe552/network-scanner/blob/main/replit-demo.png?raw=true" };
    }
    return card;
  });
  const sortedCards = [...patchedCards].sort((a, b) => {
    if (a.demoImg && !b.demoImg) return -1;
    if (!a.demoImg && b.demoImg) return 1;
    return 0;
  });
  return (
    <div className="grid grid-cols-1 gap-6">
      {sortedCards.map((repo, i) => (
        <motion.div
          key={repo.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 block hover:border-indigo-500/50 shadow-[0_24px_80px_-28px_rgba(0,0,0,0.38)] hover:shadow-[0_36px_120px_-30px_rgba(79,70,229,0.22)] transition-shadow"
        >
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold text-zinc-100 mb-2">{repoTitle(repo.name)}</h3>
            {repo.demoImg && (
              <img
                src={repo.demoImg}
                alt={repoTitle(repo.name) + ' demo'}
                className={
                  `w-full object-contain rounded-xl mb-4 outline outline-2 outline-indigo-500 outline-offset-0 ` +
                  (repoTitle(repo.name) === "Retail Bi Simulator"
                    ? "max-h-72 "
                    : repoTitle(repo.name) === "Ats Helper"
                    ? "max-h-40 "
                    : "max-h-64 ")
                }
              />
            )}
            {(() => {
              switch (repoTitle(repo.name)) {
                case "Metadata Cleaner":
                  return <p className="text-zinc-400 text-base mt-1">Removes hidden metadata from images, PDFs, and DOCX files to protect privacy. Works locally, supports multiple formats, and helps prevent accidental data leaks.</p>;
                case "Secure Messaging Cli":
                  return <p className="text-zinc-400 text-base mt-1">A command-line tool for end-to-end encrypted messaging and file transfer using RSA and AES. Includes expiring messages and is designed for learning secure communication, not production use.</p>;
                case "Ghost Protocol":
                  return <p className="text-zinc-400 text-base mt-1">Launches a hardened Tor+Firefox browser and a sidecar dashboard to verify network privacy. Checks for leaks (DNS, WebRTC, HTTPS-only) and teaches how to maintain true anonymity online.</p>;
                case "Zenith Ev Trend Analyzer":
                  return <p className="text-zinc-400 text-base mt-1">Automates analysis of UK government EV fleet data to reveal electrification trends. Simulates residual value risk for leasing portfolios, helping finance teams understand EV adoption and risk.</p>;
                case "Personal Linux Security Toolkit":
                  return <p className="text-zinc-400 text-base mt-1">Automates rootkit scans, network monitoring, and system change tracking for Linux. Generates easy-to-read security reports, making system security accessible for non-experts.</p>;
                case "Email Compliance Checker":
                  return <p className="text-zinc-400 text-base mt-1">Analyzes CSV exports of emails for compliance risks like sensitive terms and external recipients. Flags issues, summarizes KPIs, and provides a clear table of risky messages for legal and compliance teams.</p>;
                case "Invoice Reconciliation Tool":
                  return <p className="text-zinc-400 text-base mt-1">Compares vendor invoices with accounting exports to automatically flag mismatches and missing records. Generates a downloadable discrepancy report, streamlining data checks for finance teams.</p>;
                case "Ats Helper":
                  return <p className="text-zinc-400 text-base mt-1">Analyzes and scores CVs against job descriptions to show keyword matches, missing terms, and relevance. Helps recruiters and jobseekers quickly assess ATS compatibility using local, fast NLP.</p>;
                case "Network Scanner":
                  return <p className="text-zinc-400 text-base mt-1">A fast, multi-threaded Python tool for scanning ports and detecting services on a target network. Performs banner grabbing, saves results, and is ideal for learning network reconnaissance.</p>;
                case "Retail Bi Simulator":
                  return <p className="text-zinc-400 text-base mt-1">Cleans and aggregates retail transaction data, forecasts revenue, and flags anomalies. Exports BI-ready tables and dashboards for Power BI/Tableau, simulating a real analyst workflow.</p>;
                case "JobmateAI":
                case "Jobmate Ai":
                  return <p className="text-zinc-400 text-base mt-1">Uses AI to match CVs to job descriptions, providing a semantic similarity score and feedback. Built with Python, Flask, and React, it helps job seekers optimize their applications.</p>;
                default:
                  return null;
              }
            })()}
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {(() => {
              switch (repoTitle(repo.name)) {
                case "Metadata Cleaner":
                  return <>{["Python", "EXIF", "PDF", "DOCX", "JPG", "PNG", "Privacy"].map(b => <span key={b} className="text-xs bg-zinc-800 text-indigo-400 px-2 py-1 rounded font-mono">{b}</span>)}</>;
                case "Secure Messaging Cli":
                  return <>{["Python", "RSA", "AES", "JSON", "CLI", "Cryptography"].map(b => <span key={b} className="text-xs bg-zinc-800 text-indigo-400 px-2 py-1 rounded font-mono">{b}</span>)}</>;
                case "Ghost Protocol":
                  return <>{["Python", "Firefox", "Tor", "Linux", "Tkinter", "DNS", "WebRTC", "HTTPS"].map(b => <span key={b} className="text-xs bg-zinc-800 text-indigo-400 px-2 py-1 rounded font-mono">{b}</span>)}</>;
                case "Zenith Ev Trend Analyzer":
                  return <>{["Python", "Pandas", "Matplotlib", "CSV", "Automation"].map(b => <span key={b} className="text-xs bg-zinc-800 text-indigo-400 px-2 py-1 rounded font-mono">{b}</span>)}</>;
                case "Personal Linux Security Toolkit":
                  return <>{["Python", "rkhunter", "chkrootkit", "ClamAV", "netstat", "lsof"].map(b => <span key={b} className="text-xs bg-zinc-800 text-indigo-400 px-2 py-1 rounded font-mono">{b}</span>)}</>;
                case "Email Compliance Checker":
                  return <>{["Python", "Streamlit", "Pandas", "CSV", "Compliance"].map(b => <span key={b} className="text-xs bg-zinc-800 text-indigo-400 px-2 py-1 rounded font-mono">{b}</span>)}</>;
                case "Invoice Reconciliation Tool":
                  return <>{["Python", "Streamlit", "Pandas", "CSV"].map(b => <span key={b} className="text-xs bg-zinc-800 text-indigo-400 px-2 py-1 rounded font-mono">{b}</span>)}</>;
                case "Ats Helper":
                  return <>{["Python", "spaCy", "NLP", "PDF", "DOCX", "TXT"].map(b => <span key={b} className="text-xs bg-zinc-800 text-indigo-400 px-2 py-1 rounded font-mono">{b}</span>)}</>;
                case "Network Scanner":
                  return <>{["Python", "Sockets", "Threading", "Banner Grabbing", "Nmap"].map(b => <span key={b} className="text-xs bg-zinc-800 text-indigo-400 px-2 py-1 rounded font-mono">{b}</span>)}</>;
                case "Retail Bi Simulator":
                  return <>{["Python", "Pandas", "Statsmodels", "NumPy", "Plotly", "Streamlit", "Power BI", "Tableau", "SQLite", "CSV"].map(b => <span key={b} className="text-xs bg-zinc-800 text-indigo-400 px-2 py-1 rounded font-mono">{b}</span>)}</>;
                case "JobmateAI":
                case "Jobmate Ai":
                  return <>{["Python", "Flask", "React", "Vite", "JavaScript", "Hugging Face", "pdfplumber", "pdfminer.six"].map(b => <span key={b} className="text-xs bg-zinc-800 text-indigo-400 px-2 py-1 rounded font-mono">{b}</span>)}</>;
                default:
                  return repo.language ? <span className="text-xs bg-zinc-800 text-indigo-400 px-2 py-1 rounded font-mono">{repo.language}</span> : null;
              }
            })()}
          </div>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 rounded-xl bg-slate-800 text-indigo-400 font-medium shadow hover:bg-slate-700 hover:text-white transition"
          >
            View on GitHub
          </a>
        </motion.div>
      ))}
    </div>
  );
}
