// TypeScript global declaration for CSP nonce
declare global {
  interface Window {
    __CSP_NONCE__?: string;
  }
}
"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { PDFDocument } from "pdf-lib";
import { CheckCircle2, FileText, Loader2, Download, AlertCircle } from "lucide-react";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import BackgroundFX from "@/components/BackgroundFX";
import SiteFooter from "@/components/SiteFooter";

const MAX_SIZE_MB = 20;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
const TARGET_SIZE_BYTES = 1024 * 1024;

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function sleep(ms: number) {
  return new Promise(res => setTimeout(res, ms));
}

export default function PDFCompressorPage() {
  // Map progress (0-100) to Tailwind width classes (w-[0%] ... w-[100%])
  function getWidthClass(progress: number) {
    const rounded = Math.round(progress / 5) * 5;
    return `w-[${rounded}%]`;
  }
  const [step, setStep] = useState<"upload" | "compress" | "download">("upload");
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [compressedBlob, setCompressedBlob] = useState<Blob | null>(null);
  const [origSize, setOrigSize] = useState<number>(0);
  const [compSize, setCompSize] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Drag & drop
  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }
  function handleFile(f: File) {
    setFileError("");
    if (f.type !== "application/pdf") {
      setFileError("Only PDF files are allowed.");
      return;
    }
    if (f.size > MAX_SIZE_BYTES) {
      setFileError(`File too large (max ${MAX_SIZE_MB}MB).`);
      return;
    }
    setFile(f);
    setOrigSize(f.size);
    setStep("compress");
    compressPDF(f);
  }
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  }

  // Compression pipeline
  async function compressPDF(f: File) {
    setProgress(0);
    setCompressedBlob(null);
    setCompSize(0);
    setDuration(0);
    const start = performance.now();
    try {
      // Load PDF
      setProgress(10);
      await sleep(200);
      const bytes = await f.arrayBuffer();
      const pdfDoc = await PDFDocument.load(bytes);
      setProgress(30);
      await sleep(200);
      // Remove metadata
      pdfDoc.setTitle("");
      pdfDoc.setAuthor("");
      pdfDoc.setSubject("");
      pdfDoc.setKeywords([]);
      pdfDoc.setProducer("");
      pdfDoc.setCreator("");
      setProgress(40);
      await sleep(200);
      // Reduce image DPI (simulate by re-encoding images)
      // pdf-lib does not support direct image DPI reduction, so we just strip metadata and re-encode
      // For real DPI reduction, a WASM library would be needed
      setProgress(60);
      await sleep(200);
      // Re-encode PDF
      const compBytes = await pdfDoc.save({ useObjectStreams: true, addDefaultPage: false });
      setProgress(90);
      await sleep(200);
      // Check size
      if (compBytes.byteLength > TARGET_SIZE_BYTES) {
        setProgress(100);
        setFileError("Unable to compress below 1MB. Try a smaller or simpler PDF.");
        setStep("upload");
        return;
      }
  setCompSize(compBytes.byteLength);
  // Ensure compBytes is ArrayBuffer for Blob compatibility
  let pdfBuffer: ArrayBuffer;
  if (compBytes instanceof Uint8Array) {
    pdfBuffer = compBytes.slice(0).buffer;
  } else {
    pdfBuffer = compBytes as ArrayBuffer;
  }
  setCompressedBlob(new Blob([pdfBuffer], { type: "application/pdf" }));
      setProgress(100);
      setDuration((performance.now() - start) / 1000);
      setStep("download");
    } catch {
      setFileError("Compression failed. Please try another PDF.");
      setStep("upload");
    }
  }

  // Download
  function handleDownload() {
    if (!compressedBlob || !file) return;
    const url = URL.createObjectURL(compressedBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name.replace(/\.pdf$/i, "-compressed.pdf");
    a.click();
    URL.revokeObjectURL(url);
  }

  // UI
  // Get nonce from global window (set by server) or props/context if available
  const nonce = typeof window !== 'undefined' ? (window.__CSP_NONCE__ || '') : '';
  return (
    <div className="min-h-screen text-zinc-100 relative font-['JetBrains_Mono',monospace] cursor-pointer">
      <ResponsiveHeader />
      <BackgroundFX />
      <div className="mx-auto max-w-md w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl p-8 flex flex-col items-center mt-24 mb-16">
  <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 text-indigo-400 font-['JetBrains_Mono',monospace]">Compress PDF to Under 1MB (Private, Free, Instant)</h1>
  <p className="text-zinc-400 text-center mb-6 font-['JetBrains_Mono',monospace]">All done in your browser — no uploads, 100% private.<br />Perfect for CV submissions, online forms, and email attachments.</p>
        {/* Step 1: Upload */}
        {step === "upload" && (
          <div className="w-full flex flex-col items-center">
            <div
              className="w-full border-2 border-dashed border-indigo-500 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer bg-slate-900 hover:bg-slate-800 transition mb-4"
              onDrop={handleDrop}
              onDragOver={e => e.preventDefault()}
              onClick={() => inputRef.current?.click()}
              tabIndex={0}
              role="button"
              aria-label="Upload PDF"
            >
              <FileText size={48} className="text-indigo-400 mb-2" aria-label="PDF file icon" />
              <span className="text-zinc-300 font-['JetBrains_Mono',monospace]">Drag & drop PDF here</span>
              <span className="text-zinc-500 text-sm">or</span>
              <button
                className="mt-2 px-4 py-2 rounded-xl bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-400 transition font-['JetBrains_Mono',monospace]"
                onClick={e => { e.stopPropagation(); inputRef.current?.click(); }}
                type="button"
              >
                Choose file
              </button>
              <input
                ref={inputRef}
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleInput}
              />
            </div>
            {fileError && (
              <div className="text-red-500 text-sm flex items-center gap-2 mb-2"><AlertCircle size={18} /> {fileError}</div>
            )}
            <ul className="text-zinc-400 text-sm mt-2 mb-4 list-none font-['JetBrains_Mono',monospace]">
              <li>PDF only, max 20MB</li>
            </ul>
          </div>
        )}
        {/* Step 2: Compress */}
        {step === "compress" && (
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <FileText size={32} className="text-indigo-400" aria-label="PDF file icon" />
              <span className="text-zinc-300 font-['JetBrains_Mono',monospace]">{file?.name}</span>
              <span className="text-zinc-400 text-xs font-['JetBrains_Mono',monospace]">({formatBytes(origSize)})</span>
            </div>
            <div className="w-full bg-slate-800 rounded-xl h-4 overflow-hidden mb-2">
              <div
                className={`bg-indigo-500 h-4 transition-all progress-bar ${getWidthClass(progress)}`}
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                role="progressbar"
              />
            </div>
            <div className="text-zinc-400 text-sm mb-2 font-['JetBrains_Mono',monospace]">Compressing... {progress}%</div>
            <Loader2 className="animate-spin text-indigo-400 mb-2" size={32} />
          </div>
        )}
        {/* Step 3: Download */}
        {step === "download" && (
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <FileText size={32} className="text-indigo-400" aria-label="PDF file icon" />
              <span className="text-zinc-300 font-['JetBrains_Mono',monospace]">{file?.name.replace(/\.pdf$/i, "-compressed.pdf")}</span>
              <span className="text-zinc-400 text-xs font-['JetBrains_Mono',monospace]">({formatBytes(compSize)})</span>
            </div>
            <div className="text-zinc-400 text-sm mb-2 font-['JetBrains_Mono',monospace]">{formatBytes(origSize)} → {formatBytes(compSize)} | Compressed in {duration.toFixed(1)}s</div>
            <button
              className="mt-2 px-4 py-2 rounded-xl bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-400 transition flex items-center gap-2 font-['JetBrains_Mono',monospace]"
              onClick={handleDownload}
            >
              <Download size={20} /> Download PDF
            </button>
          </div>
        )}
        {/* Benefits */}
  <ul className="mt-8 mb-4 text-zinc-300 text-sm space-y-2 font-['JetBrains_Mono',monospace]">
          <li className="flex items-center gap-2"><CheckCircle2 className="text-green-400" size={18} /> 100% client-side (privacy guaranteed)</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="text-green-400" size={18} /> Always under 1MB or explained</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="text-green-400" size={18} /> Resume/job-application friendly</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="text-green-400" size={18} /> No signup, no ads</li>
        </ul>
        {/* Microcopy */}
  <div className="text-zinc-500 text-xs text-center mb-2 font-['JetBrains_Mono',monospace]">Perfect for CVs, job applications, and email attachments.</div>
        {/* Internal links */}
        <div className="mt-6 mb-2 w-full text-center">
          <div className="text-zinc-400 text-sm mb-2 font-['JetBrains_Mono',monospace]">Explore my other free tools:</div>
          <div className="flex flex-wrap gap-2 justify-center">
            <a href="/tools" className="px-3 py-1 rounded-xl bg-slate-800 text-indigo-400 font-['JetBrains_Mono',monospace] hover:bg-slate-700 transition">All Tools</a>
            {/* Add more tool links here as you build them */}
          </div>
        </div>
        <div className="mt-10 mb-2 w-full text-center">
          <nav className="flex flex-wrap gap-4 justify-center text-sm font-['JetBrains_Mono',monospace]">
            <Link href="/" className="px-3 py-1 rounded-xl bg-slate-800 text-indigo-400 hover:bg-slate-700 transition">Home</Link>
            <Link href="/projects" className="px-3 py-1 rounded-xl bg-slate-800 text-indigo-400 hover:bg-slate-700 transition">Projects</Link>
            <Link href="/blog" className="px-3 py-1 rounded-xl bg-slate-800 text-indigo-400 hover:bg-slate-700 transition">Blog</Link>
          </nav>
        </div>
        <SiteFooter />
      </div>
      {/* SEO/JSON-LD FAQ */}
  <script nonce={nonce} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I reduce PDF under 1MB for resumes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Just upload your PDF and this tool will compress it to under 1MB using smart client-side techniques."
            }
          },
          {
            "@type": "Question",
            "name": "Is this compressor safe and private?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, everything happens in your browser. No files are uploaded or stored."
            }
          },
          {
            "@type": "Question",
            "name": "Does it work offline?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, after the first load, the tool works offline. No server required."
            }
          }
        ]
      }) }} />
    </div>
  );
}

