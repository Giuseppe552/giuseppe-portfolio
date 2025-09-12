import { notFound } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GHRepo, getPortfolioRepos } from "@/lib/github";

export const metadata = {
  title: "Project Details – Giuseppe Giona",
};

async function fetchReadme(repo: string): Promise<string | null> {
  const url = `https://raw.githubusercontent.com/Giuseppe552/${repo}/main/README.md`;
  try {
    const res = await fetch(url, { next: { revalidate: 21600 } });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

export default async function ProjectDetailPage(props: { params: Promise<{ repo: string }> }) {
  const params = await props.params;
  const repos: GHRepo[] = await getPortfolioRepos();
  const repo = repos.find(r => r.name === params.repo);
  if (!repo) return notFound();
  let readme = await fetchReadme(repo.name);
  if (!readme) return notFound();
  // Rewrite relative image srcs to absolute raw GitHub URLs
  const rawBase = `https://raw.githubusercontent.com/Giuseppe552/${repo.name}/main/`;
  readme = readme.replace(/<img\s+([^>]*src=["'])(?!https?:\/\/|data:)([^"'>]+)(["'][^>]*)>/gi, (match, p1, src, p3) => {
    return `<img ${p1}${rawBase}${src}${p3}>`;
  });

  // Summarize README: remove emojis, extract first paragraph, language, and effect
  function summarizeReadme(md: string, repoData: GHRepo): { summary: string, languages: string[], effect: string, image?: string } {
    // Remove emojis
    md = md.replace(/:[^:]+:/g, "");
    md = md.replace(/\p{Emoji}/gu, "");
    // Get first non-empty paragraph
    const summaryMatch = md.match(/(?:^|\n)([^#\n][^\n]+)/);
    const summary = summaryMatch ? summaryMatch[1].trim() : "No summary available.";
    // Guess languages from code blocks and repo.language
    const langSet = new Set<string>();
    if (repoData?.language) langSet.add(repoData.language);
    md.replace(/```(\w+)/g, (_, l) => { langSet.add(l); return ""; });
    // Try to extract effect/impact from README (look for 'effect', 'impact', 'result', 'outcome')
    const effectMatch = md.match(/(?:effect|impact|result|outcome)[^\n]*[:\-]?\s*([^\n]+)/i);
    const effect = effectMatch ? effectMatch[1].trim() : "";
    // Find first image (markdown or HTML)
    let image;
    const mdImgMatch = md.match(/!\[[^\]]*\]\(([^)]+)\)/);
    if (mdImgMatch) image = mdImgMatch[1];
    else {
      const htmlImgMatch = md.match(/<img[^>]*src=["']([^"'>]+)["'][^>]*>/i);
      if (htmlImgMatch) image = htmlImgMatch[1];
    }
    // If image is relative, convert to raw GitHub URL
    if (image && !/^https?:\/\//.test(image)) {
      image = `https://raw.githubusercontent.com/Giuseppe552/${repoData.name}/main/${image.replace(/^\/?/,"")}`;
    }
    return { summary, languages: Array.from(langSet), effect, image };
  }
  const { summary, languages, effect, image } = summarizeReadme(readme, repo);
  return (
    <main className="min-h-screen bg-black text-zinc-100 py-16">
      <div className="mx-auto max-w-3xl px-4">
        <Link href="/projects" className="text-indigo-400 underline mb-6 inline-block">← Back to projects</Link>
        <h1 className="text-2xl font-bold mb-4">{repo.name}</h1>
        <div className="border border-neutral-800 bg-zinc-900 rounded-2xl p-6 mb-24 shadow-lg">
          {image && (
            <Image 
              src={image} 
              alt="Project demo" 
              width={800} 
              height={400} 
              className="rounded-xl border border-neutral-700 mx-auto my-6 max-w-full shadow" 
              style={{ background: '#18181b' }} 
            />
          )}
          <div className="mb-4 text-lg text-zinc-200">{summary}</div>
          <div className="flex flex-wrap gap-2 mb-4">
            {languages.map(lang => (
              <span key={lang} className="text-xs bg-zinc-800 text-indigo-400 px-2 py-1 rounded font-mono">{lang}</span>
            ))}
          </div>
          {effect && (
            <div className="text-sm text-zinc-400"><span className="font-semibold text-indigo-400">Effect:</span> {effect}</div>
          )}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 border-t border-zinc-800 py-4 px-4 text-center z-50">
        <a href="mailto:contact.giuseppe00@gmail.com?subject=Project%20enquiry%20from%20giuseppegiona.com" className="inline-block bg-indigo-500 text-black font-semibold px-6 py-2 rounded-xl shadow hover:bg-indigo-400 transition">Like this quality? Get a quote →</a>
      </div>
    </main>
  );
}
