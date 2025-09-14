import React from "react";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import BackgroundFX from "@/components/BackgroundFX";
import SiteFooter from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";

export default function ToolsPage() {
  return (
    <div className="min-h-screen text-zinc-100 relative font-['JetBrains_Mono',monospace] cursor-pointer">
      <ResponsiveHeader />
      <BackgroundFX />
      <main className="mx-auto max-w-2xl px-4 py-24 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-400 font-['JetBrains_Mono',monospace]">
          Free Tools for Job Seekers & Professionals
        </h1>
        <p className="text-zinc-400 text-center mb-10 font-['JetBrains_Mono',monospace]">
          Explore my collection of privacy-first, client-side tools designed to help you with job applications, document management, and more. No signups, no ads, 100% free and secure.
        </p>
        <div className="w-full flex flex-col gap-6">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-indigo-400 mb-2 font-['JetBrains_Mono',monospace]">PDF Compressor</h2>
              <p className="text-zinc-300 mb-2 font-['JetBrains_Mono',monospace]">
                Instantly compress your PDF files to under 1MB — perfect for resumes, CVs, and email attachments. 100% private, fast, and free. No uploads, all processing in your browser.
              </p>
              <p className="text-zinc-400 text-xs mb-2 font-['JetBrains_Mono',monospace]">
                SEO keywords: compress PDF under 1MB, resume PDF compressor, shrink PDF online free, reduce CV file size.
              </p>
            </div>
            <a
              href="/tools/pdf-compressor"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-400 transition font-['JetBrains_Mono',monospace]"
              aria-label="Go to PDF Compressor"
            >
              Try PDF Compressor <ArrowRight size={20} />
            </a>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-indigo-400 mb-2 font-['JetBrains_Mono',monospace]">Metadata Cleaner</h2>
              <p className="text-zinc-300 mb-2 font-['JetBrains_Mono',monospace]">
                Remove hidden metadata from PDF, DOCX, JPG, PNG files. 100% private, fast, and free. No uploads, all processing in your browser.
              </p>
              <p className="text-zinc-400 text-xs mb-2 font-['JetBrains_Mono',monospace]">
                SEO keywords: remove PDF metadata, clean DOCX metadata, strip EXIF from JPG, privacy tool online.
              </p>
            </div>
            <a
              href="/tools/metadata-cleaner"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-400 transition font-['JetBrains_Mono',monospace]"
              aria-label="Go to Metadata Cleaner"
            >
              Try Metadata Cleaner <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
