"use server";
import matter from "gray-matter";
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

  const firstImageMatch = content.match(/\!\[.*?\]\((.*?)\)/);
  const ogImage = firstImageMatch ? firstImageMatch[1] : "/og.png";

  return (
    <>
      <head>
        <title>{data.title}</title>
        <meta name="description" content={data.description || "Blog post by Giuseppe Giona."} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description || "Blog post by Giuseppe Giona."} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://giuseppegiona.com/blog/${params.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description || "Blog post by Giuseppe Giona."} />
        <meta name="twitter:image" content={ogImage} />
      </head>
      <div
        className="min-h-screen text-zinc-100 relative font-['JetBrains_Mono',monospace] cursor-pointer"
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
                    p: (props) => (
                      <p className="mb-5">
                        {props.children}
                      </p>
                    ),
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
                    /**
                     * Enterprise-grade security: Only allow whitelisted languages for Prism highlighting.
                     * Uses strict allowedLangs as const, type guards, and a utility function for validation.
                     * ESLint: security/detect-object-injection
                     * See: https://owasp.org/www-community/vulnerabilities/Object_injection
                     */
                    // Fix: Type signature for ReactMarkdown code renderer must have optional children for compatibility
                    code({ className, children, ...props }: { className?: string; children?: React.ReactNode }) {
                      const match = /language-(\w+)/.exec(className || "");
                      // Enterprise-grade security: strict whitelist and type guard for Prism languages
                      // See: https://owasp.org/www-community/vulnerabilities/Object_injection
                      // Fix: Use Array<string> for allowedPrismLanguages, not const assertion
                      const allowedPrismLanguages: string[] = Object.keys(Prism.languages);
                      function isAllowedLang(lang: string): boolean {
                        return allowedPrismLanguages.includes(lang);
                      }
                      let html = "";
                      if (match) {
                        const lang = match[1];
                        try {
                          // Fix: Validate 'lang' against Prism.languages whitelist before dynamic access
                          // Resolves ESLint: security/detect-object-injection
                          if (isAllowedLang(lang)) {
                            html = Prism.highlight(
                              String(children),
                              Prism.languages[lang as keyof typeof Prism.languages], // Safe: lang is guaranteed to be a valid key
                              lang
                            );
                          } else {
                            html = Prism.highlight(
                              String(children),
                              Prism.languages.javascript,
                              "javascript"
                            );
                          }
                        } catch {
                          html = String(children);
                        }
                        return (
                          <pre className={`prism-one-dark language-${lang}`}>
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
        <SiteFooter />
      </div>
    </>
  );
}