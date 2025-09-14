"use server";
import matter from "gray-matter";
// ...existing code...
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import BackgroundFX from "@/components/BackgroundFX";
import SiteFooter from "@/components/SiteFooter";
import { readBlogFile, listBlogSlugs } from "@/lib/safeFs";

// --- ADD THESE IMPORTS for syntax highlighting ---
import React from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markdown";
import "@/../public/prism-one-dark.css";
// ------------------------------------------------

export async function generateStaticParams() {
  return listBlogSlugs().map(slug => ({ slug }));
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const raw = readBlogFile(params.slug);
  const { data, content } = matter(raw);
  return (
    <div
      className="min-h-screen text-zinc-100 relative font-['JetBrains_Mono',monospace] cursor-pointer"
      style={{ cursor: 'url(/cursor.svg), pointer' }}
    >
      <ResponsiveHeader />
      <BackgroundFX />
      <main className="relative py-16">
        <div className="mx-auto max-w-3xl px-4">
          <Link href="/blog" className="text-indigo-400 underline mb-6 inline-block font-['JetBrains_Mono',monospace]">← Back to blog</Link>
          <h1 className="text-2xl font-bold mb-4 font-['JetBrains_Mono',monospace]">{data.title}</h1>
          <div className="border border-neutral-800 bg-zinc-900 rounded-2xl p-6 mb-24 shadow-lg font-['JetBrains_Mono',monospace]">
            <div className="mb-4 text-lg text-zinc-200 font-['JetBrains_Mono',monospace]">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: (props) => (
                    <h2
                      className="text-xl font-bold underline mb-6 mt-10 text-indigo-300 font-['JetBrains_Mono',monospace]"
                      {...props}
                    />
                  ),
                  hr: () => (
                    <div className="my-8" />
                  ),
                  ul: (props) => (
                    <ul className="list-disc pl-6 mb-6 font-['JetBrains_Mono',monospace]" {...props} />
                  ),
                  ol: (props) => (
                    <ol className="list-decimal pl-6 mb-6 font-['JetBrains_Mono',monospace]" {...props} />
                  ),
                  li: (props) => (
                    <li className="mb-2 font-['JetBrains_Mono',monospace]" {...props} />
                  ),
                  a: (props) => (
                    <a
                      {...props}
                      className={
                        (props.href === "https://github.com/Giuseppe552/ats-helper"
                          ? "inline-block mt-6 px-6 py-2 rounded-xl bg-indigo-500 text-black font-semibold shadow hover:bg-indigo-400 transition text-base text-center"
                          : "text-indigo-400 underline hover:text-indigo-300 transition") + " font-['JetBrains_Mono',monospace]"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {props.children}
                    </a>
                  ),
                  // --- NEW: Syntax-highlighted code blocks ---
                  code({ node, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    if (match) {
                      const lang = match[1];
                      let html = "";
                      try {
                        html = Prism.highlight(String(children), Prism.languages[lang] || Prism.languages.javascript, lang);
                      } catch {
                        html = String(children);
                      }
                      return (
                        <pre className={`prism-one-dark language-${lang}`}
                        >
                          <code
                            className={`language-${lang}`}
                            dangerouslySetInnerHTML={{ __html: html }}
                          />
                        </pre>
                      );
                    }
                    return (
                      <code
                        className={className + " bg-[#222] px-2 py-1 rounded font-['JetBrains_Mono',monospace]"}
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  },
                  // -----------------------------------------
                }}
                
              >{content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </main>
      {/* Contact section - matches homepage/projects */}
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
      <SiteFooter />
    </div>
  );
}