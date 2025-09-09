import { notFound } from "next/navigation";
import React from "react";
import { GHRepo, getPortfolioRepos } from "@/lib/github";
import ReactMarkdown from "react-markdown";

export const metadata = {
  title: "Project Details – Giuseppe Giona",
};

async function fetchReadme(repo: string): Promise<string | null> {
  const url = `https://raw.githubusercontent.com/Giuseppe552/${repo}/main/README.md`;
  try {
    // @ts-ignore: next property is supported in Next.js 14+ for ISR
    const res = await fetch(url, { next: { revalidate: 21600 } } as any);
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

export default async function ProjectDetailPage({ params }: { params: { repo: string } }) {
  const repos: GHRepo[] = await getPortfolioRepos();
  const repo = repos.find(r => r.name === params.repo);
  if (!repo) return notFound();
  const readme = await fetchReadme(repo.name);
  if (!readme) return notFound();

  return (
    <main className="min-h-screen bg-black text-zinc-100 py-16">
      <div className="mx-auto max-w-3xl px-4">
        <a href="/projects" className="text-emerald-400 underline mb-6 inline-block">← Back to projects</a>
        <h1 className="text-2xl font-bold mb-4">{repo.name}</h1>
        <div className="prose prose-invert max-w-none mb-24">
          <ReactMarkdown>{readme}</ReactMarkdown>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 border-t border-zinc-800 py-4 px-4 text-center z-50">
        <a href="mailto:contact.giuseppe00@gmail.com?subject=Project%20enquiry%20from%20giuseppegiona.com" className="inline-block bg-emerald-500 text-black font-semibold px-6 py-2 rounded-xl shadow hover:bg-emerald-400 transition">Like this quality? Get a quote →</a>
      </div>
    </main>
  );
}
