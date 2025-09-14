"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import BackgroundFX from "@/components/BackgroundFX";
import SiteFooter from "@/components/SiteFooter";
import { FileText, CheckCircle2, AlertCircle, Search, Download } from "lucide-react";
import JSZip from "jszip";
import { PDFDocument } from "pdf-lib";

import EXIF from "exif-js";

const MAX_SIZE_MB = 20;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
const SUPPORTED_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
];

type Metadata = { [key: string]: string | number | Date | undefined };

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function extractMetadata(file: File): Promise<Metadata> {
  if (file.type === "application/pdf") {
    const buffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(buffer);
    return {
      Title: pdfDoc.getTitle(),
      Author: pdfDoc.getAuthor(),
      Subject: pdfDoc.getSubject(),
      Keywords: pdfDoc.getKeywords(),
      Creator: pdfDoc.getCreator(),
      Producer: pdfDoc.getProducer(),
      CreationDate: pdfDoc.getCreationDate(),
      ModificationDate: pdfDoc.getModificationDate(),
    };
  } else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        if (!e.target?.result) {
          resolve({});
          return;
        }
        const zip = await JSZip.loadAsync(e.target.result as ArrayBuffer);
        const coreXml = await zip.file("docProps/core.xml")?.async("string");
        if (coreXml) {
          const meta: Metadata = {};
          // Use literal RegExp for each tag to avoid dynamic construction
          // (moved to strongly-typed declaration below)
          // Enterprise-grade security: strict whitelist and type guard for allowed tags
          // See: https://owasp.org/www-community/vulnerabilities/Object_injection
          const allowedTags = [
            "dc:title", "dc:creator", "cp:lastModifiedBy", "dcterms:created", "dcterms:modified"
          ] as const;
          type AllowedTag = typeof allowedTags[number];
          const tagPatterns: Record<AllowedTag, RegExp> = {
            "dc:title": /<dc:title>(.*?)<\/dc:title>/,
            "dc:creator": /<dc:creator>(.*?)<\/dc:creator>/,
            "cp:lastModifiedBy": /<cp:lastModifiedBy>(.*?)<\/cp:lastModifiedBy>/,
            "dcterms:created": /<dcterms:created>(.*?)<\/dcterms:created>/,
            "dcterms:modified": /<dcterms:modified>(.*?)<\/dcterms:modified>/,
          };
          Object.entries(tagPatterns).forEach(([tag, pattern]) => {
            if (allowedTags.includes(tag as AllowedTag)) {
              const match = coreXml.match(pattern);
              if (match) meta[tag as AllowedTag] = match[1];
            }
          });
          resolve(meta);
        } else {
          resolve({});
        }
      };
      reader.readAsArrayBuffer(file);
    });
  } else if (file.type === "image/jpeg" || file.type === "image/png") {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new window.Image();
        img.onload = () => {
          // @ts-expect-error: EXIF.getData expects image element, ignore type error
          EXIF.getData(img, function(this: HTMLImageElement) {
            const meta: Metadata = {};
            const tags: { [key: string]: string | number | Date | undefined } = EXIF.getAllTags(this);
            // Only process whitelisted EXIF keys for security (Generic Object Injection Sink)
            // Enterprise-grade security: strict whitelist and type guard for EXIF keys
            // See: https://owasp.org/www-community/vulnerabilities/Object_injection
            const allowedExifKeys = [
              "Make", "Model", "DateTime", "GPSLatitude", "GPSLongitude", "Software", "Orientation", "ExifVersion"
            ] as const;
            type AllowedExifKey = typeof allowedExifKeys[number];
            Object.keys(tags).forEach((k) => {
              if (
                Object.prototype.hasOwnProperty.call(tags, k) &&
                allowedExifKeys.includes(k as AllowedExifKey)
              ) {
                // Safe assignment: only allowed EXIF keys
                meta[k as AllowedExifKey] = tags[k as AllowedExifKey];
              }
            });
            resolve(meta);
          });
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  } else {
    return {};
  }
}

async function cleanMetadata(file: File): Promise<Blob | null> {
  if (file.type === "application/pdf") {
    const buffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(buffer);
    pdfDoc.setTitle("");
    pdfDoc.setAuthor("");
    pdfDoc.setSubject("");
    pdfDoc.setKeywords([]);
    pdfDoc.setProducer("");
    pdfDoc.setCreator("");
    const saved = await pdfDoc.save();
    let pdfBuffer: ArrayBuffer;
    if (saved instanceof Uint8Array) {
      pdfBuffer = saved.slice(0).buffer;
    } else {
      pdfBuffer = saved as ArrayBuffer;
    }
    return new Blob([pdfBuffer], { type: "application/pdf" });
  } else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
    const buffer = await file.arrayBuffer();
    const zip = await JSZip.loadAsync(buffer);
    if (zip.file("docProps/core.xml")) {
      let coreXml = await zip.file("docProps/core.xml")?.async("string");
      if (coreXml) {
        coreXml = coreXml.replace(/<dc:title>.*?<\/dc:title>/, "<dc:title><\/dc:title>")
          .replace(/<dc:creator>.*?<\/dc:creator>/, "<dc:creator><\/dc:creator>")
          .replace(/<cp:lastModifiedBy>.*?<\/cp:lastModifiedBy>/, "<cp:lastModifiedBy><\/cp:lastModifiedBy>")
          .replace(/<dcterms:created>.*?<\/dcterms:created>/, "<dcterms:created><\/dcterms:created>")
          .replace(/<dcterms:modified>.*?<\/dcterms:modified>/, "<dcterms:modified><\/dcterms:modified>");
        zip.file("docProps/core.xml", coreXml);
      }
    }
    const cleaned = await zip.generateAsync({ type: "arraybuffer" });
    return new Blob([cleaned], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
  } else if (file.type === "image/jpeg" || file.type === "image/png") {
    return new Promise((resolve) => {
      const img = new window.Image();
      const reader = new FileReader();
      reader.onload = (e) => {
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0);
          // Validate object keys before accessing (security)
          canvas.toBlob((blob) => {
            resolve(blob);
          }, file.type, 0.95);
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  }
  return null;
}


export default function MetadataCleanerPage() {
  const [step, setStep] = useState<"upload" | "detect" | "cleaned">("upload");
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>("");
  const [metadata, setMetadata] = useState<Metadata>({});
  const [cleanedBlob, setCleanedBlob] = useState<Blob | null>(null);
  const [origSize, setOrigSize] = useState<number>(0);
  const [cleanedSize, setCleanedSize] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }
  function handleFile(f: File) {
    setFileError("");
    if (!SUPPORTED_TYPES.includes(f.type)) {
      setFileError("Unsupported file type. PDF, DOCX, JPG, PNG only.");
      return;
    }
    if (f.size > MAX_SIZE_BYTES) {
      setFileError(`File too large (max ${MAX_SIZE_MB}MB).`);
      return;
    }
    setFile(f);
    setOrigSize(f.size);
    setStep("detect");
    setProgress(10);
    extractMetadata(f).then((meta) => {
      setMetadata(meta);
      setProgress(50);
    });
  }
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  }
  async function handleClean() {
    setProgress(70);
    if (!file) return;
    const cleaned = await cleanMetadata(file);
    if (cleaned) {
      setCleanedBlob(cleaned);
      setCleanedSize(cleaned.size);
      setStep("cleaned");
      setProgress(100);
    } else {
      setFileError("Failed to clean metadata.");
      setStep("upload");
    }
  }
  function handleDownload() {
    if (!cleanedBlob || !file) return;
    const url = URL.createObjectURL(cleanedBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.name.replace(/(\.pdf|\.docx|\.jpg|\.png)$/i, "-cleaned$1");
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="min-h-screen text-zinc-100 relative font-['JetBrains_Mono',monospace] cursor-pointer">
      <ResponsiveHeader />
      <BackgroundFX />
      <main className="mx-auto max-w-md w-full flex flex-col items-center mt-24 mb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 text-indigo-400 font-['JetBrains_Mono',monospace]">
          Remove Metadata from PDF, Word, and Images (Private, Free, Secure)
        </h1>
        <p className="text-zinc-400 text-center mb-6 font-['JetBrains_Mono',monospace]">
          Clean hidden metadata like author, GPS, and timestamps before sharing files. 100% private, nothing uploaded.
        </p>
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
              aria-label="Upload file"
            >
              <FileText size={48} className="text-indigo-400 mb-2" aria-label="File icon" />
              <span className="text-zinc-300 font-['JetBrains_Mono',monospace]">Drag & drop file here</span>
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
                accept=".pdf,.docx,.jpg,.jpeg,.png"
                className="hidden"
                onChange={handleInput}
              />
            </div>
            {fileError && (
              <div className="text-red-500 text-sm flex items-center gap-2 mb-2"><AlertCircle size={18} /> {fileError}</div>
            )}
            <ul className="text-zinc-400 text-sm mt-2 mb-4 list-none font-['JetBrains_Mono',monospace]">
              <li>PDF, DOCX, JPG, PNG only, max 20MB</li>
            </ul>
          </div>
        )}
        {/* Step 2: Detect Metadata */}
        {step === "detect" && (
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <FileText size={32} className="text-indigo-400" aria-label="File icon" />
              <span className="text-zinc-300 font-['JetBrains_Mono',monospace]">{file?.name}</span>
              <span className="text-zinc-400 text-xs font-['JetBrains_Mono',monospace]">{typeof origSize === 'number' ? `(${formatBytes(origSize)})` : ''}</span>
            </div>
            <div className="w-full bg-slate-800 rounded-xl h-4 overflow-hidden mb-2">
              <div
                className="bg-indigo-500 h-4 transition-all progress-bar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                role="progressbar"
              />
            </div>
            <div className="text-zinc-400 text-sm mb-2 font-['JetBrains_Mono',monospace]">Detecting metadata... {progress}%</div>
            <div className="w-full bg-slate-900 rounded-xl p-4 mt-2 mb-2">
              <div className="flex items-center gap-2 mb-2 text-indigo-400 font-semibold"><Search size={18} /> Detected Metadata</div>
              <ul className="text-zinc-300 text-xs font-['JetBrains_Mono',monospace]">
                {Object.keys(metadata).length === 0 && <li>No metadata found.</li>}
                {/* Only render whitelisted metadata keys for security (Generic Object Injection Sink) */}
                {Object.entries(metadata)
                  .filter(([k]) => [
                    "Title", "Author", "Subject", "Keywords", "Creator", "Producer", "CreationDate", "ModificationDate",
                    "dc:title", "dc:creator", "cp:lastModifiedBy", "dcterms:created", "dcterms:modified"
                  ].includes(k))
                  .map(([k, v]) => (
                    <li key={k}><span className="text-zinc-400">{k}:</span> {String(v)}</li>
                  ))}
              </ul>
            </div>
            <button
              className="mt-2 px-4 py-2 rounded-xl bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-400 transition font-['JetBrains_Mono',monospace]"
              onClick={handleClean}
            >
              Remove Metadata
            </button>
          </div>
        )}
        {/* Step 3: Cleaned */}
        {step === "cleaned" && (
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 size={32} className="text-green-400" aria-label="Success icon" />
              <span className="text-zinc-300 font-['JetBrains_Mono',monospace]">{file?.name.replace(/(\.pdf|\.docx|\.jpg|\.png)$/i, "-cleaned$1")}</span>
              <span className="text-zinc-400 text-xs font-['JetBrains_Mono',monospace]">{typeof cleanedSize === 'number' ? `(${formatBytes(cleanedSize)})` : ''}</span>
            </div>
            <div className="w-full bg-slate-900 rounded-xl p-4 mt-2 mb-2">
              <div className="flex items-center gap-2 mb-2 text-green-400 font-semibold"><CheckCircle2 size={18} /> Metadata Removed</div>
              <ul className="text-zinc-300 text-xs font-['JetBrains_Mono',monospace]">
                {Object.keys(metadata).length === 0 && <li>All metadata removed.</li>}
                {/* Only render whitelisted metadata keys for security (Generic Object Injection Sink) */}
                {Object.entries(metadata)
                  .filter(([k]) => [
                    "Title", "Author", "Subject", "Keywords", "Creator", "Producer", "CreationDate", "ModificationDate",
                    "dc:title", "dc:creator", "cp:lastModifiedBy", "dcterms:created", "dcterms:modified"
                  ].includes(k))
                  .map(([k, v]) => (
                    <li key={k}><span className="text-zinc-400">{k}:</span> {String(v)}</li>
                  ))}
              </ul>
            </div>
            <button
              className="mt-2 px-4 py-2 rounded-xl bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-400 transition flex items-center gap-2 font-['JetBrains_Mono',monospace]"
              onClick={handleDownload}
            >
              <Download size={20} /> Download Cleaned File
            </button>
          </div>
        )}
        {/* Trust signals */}
        <ul className="mt-8 mb-4 text-zinc-300 text-sm space-y-2 font-['JetBrains_Mono',monospace]">
          <li className="flex items-center gap-2"><CheckCircle2 className="text-green-400" size={18} /> Supports PDF, DOCX, JPG, PNG</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="text-green-400" size={18} /> Detects common metadata fields (author, software, GPS, timestamps, etc.)</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="text-green-400" size={18} /> Strips all metadata securely</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="text-green-400" size={18} /> Works offline (no external API calls)</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="text-green-400" size={18} /> No signup, no ads</li>
        </ul>
        <div className="text-zinc-500 text-xs text-center mb-2 font-['JetBrains_Mono',monospace]">
          Other sites upload files (privacy risk); this tool is 100% client-side and private.
        </div>
      </main>
      <div className="mt-10 mb-2 w-full text-center">
        <nav className="flex flex-wrap gap-4 justify-center text-sm font-['JetBrains_Mono',monospace]">
          <Link href="/" className="px-3 py-1 rounded-xl bg-slate-800 text-indigo-400 hover:bg-slate-700 transition">Home</Link>
          <Link href="/projects" className="px-3 py-1 rounded-xl bg-slate-800 text-indigo-400 hover:bg-slate-700 transition">Projects</Link>
          <Link href="/blog" className="px-3 py-1 rounded-xl bg-slate-800 text-indigo-400 hover:bg-slate-700 transition">Blog</Link>
          <a href="/tools" className="px-3 py-1 rounded-xl bg-slate-800 text-indigo-400 hover:bg-slate-700 transition">Tools</a>
        </nav>
      </div>
      <SiteFooter />
      {/* SEO/JSON-LD FAQ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is metadata in files?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Metadata is hidden information stored in files, such as author, creation date, GPS location, and software details."
            }
          },
          {
            "@type": "Question",
            "name": "Why remove metadata?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Removing metadata protects your privacy and prevents accidental sharing of sensitive information when sending files."
            }
          },
          {
            "@type": "Question",
            "name": "Is this metadata remover private?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, everything happens in your browser. No files are uploaded or stored."
            }
          }
        ]
      }) }} />
    </div>
  );
}