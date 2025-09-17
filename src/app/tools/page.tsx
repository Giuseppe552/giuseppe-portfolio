import React from "react";
import BackgroundFX from "@/components/BackgroundFX";
import SiteFooter from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";
import Layout from "../../components/Layout";
import Link from "next/link";

export default function ToolsPage() {
  return (
    <Layout
      title="Free Tools for Professionals"
      description="Explore privacy-first tools designed to help you with job applications and more."
    >
      <div className="min-h-screen text-zinc-100 relative font-['JetBrains_Mono',monospace] cursor-pointer">
        <BackgroundFX />
        <main className="mx-auto max-w-2xl px-4 py-24 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-400 font-['JetBrains_Mono',monospace]">
            Free Tools for Job Seekers & Professionals
          </h1>
          <p className="text-zinc-400 text-center mb-10 font-['JetBrains_Mono',monospace]">
            Explore my collection of privacy-first, client-side tools designed to
            help you with job applications, document management, and more. No
            signups, no ads, 100% free and secure.
          </p>
          <div className="w-full flex flex-col gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg flex flex-col md:flex-row items-center justify-between">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-indigo-400 mb-2 font-['JetBrains_Mono',monospace]">
                  PDF Compressor
                </h2>
                <p className="text-zinc-300 mb-2 font-['JetBrains_Mono',monospace]">
                  Instantly compress your PDF files to under 1MB — perfect for
                  resumes, CVs, and email attachments. 100% private, fast, and
                  free. No uploads, all processing in your browser.
                </p>
                <p className="text-zinc-400 text-xs mb-2 font-['JetBrains_Mono',monospace]">
                  SEO keywords: compress PDF under 1MB, resume PDF compressor,
                  shrink PDF online free, reduce CV file size.
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
                <h2 className="text-xl font-semibold text-indigo-400 mb-2 font-['JetBrains_Mono',monospace]">
                  Metadata Cleaner
                </h2>
                <p className="text-zinc-300 mb-2 font-['JetBrains_Mono',monospace]">
                  Remove hidden metadata from PDF, DOCX, JPG, PNG files. 100%
                  private, fast, and free. No uploads, all processing in your
                  browser.
                </p>
                <p className="text-zinc-400 text-xs mb-2 font-['JetBrains_Mono',monospace]">
                  SEO keywords: remove PDF metadata, clean DOCX metadata, strip
                  EXIF from JPG, privacy tool online.
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
        <section id="contact" className="border-t border-zinc-800 mt-16">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="font-mono text-indigo-400 text-lg mb-2">
              Get in touch
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Build
            </h3>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-800 p-6 mb-6">
              <div className="flex items-center gap-3 text-zinc-300">
                <span className="font-mono text-indigo-400">
                  contact.giuseppe00@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 mt-3 text-zinc-300">
                <span className="text-indigo-400">
                  Based in the UK • Working globally
                </span>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-800 p-6">
              <p className="text-zinc-300 mb-4">
                Got an idea or want to collaborate? Just send a quick message
                with what you&apos;re thinking—I&apos;m always happy to chat and
                help out. Let&apos;s make something cool together!
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="mailto:contact.giuseppe00@gmail.com?subject=Hello"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 text-white font-medium shadow hover:bg-indigo-400 transition"
                >
                  Email me
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-900 transition"
                >
                  See Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    </Layout>
  );
}
