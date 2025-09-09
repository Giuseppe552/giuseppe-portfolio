import { getPortfolioRepos, coverFor, GHRepo } from "@/lib/github";
import React from "react";
import ProjectsGridWrapper from "@/components/ProjectsGridWrapper";
import ProjectsScrollBar from "@/components/ProjectsScrollBar";

export const metadata = {
  title: "Projects – Giuseppe Giona",
};

export default async function ProjectsPage() {
  let repos: GHRepo[] = [];
  try {
    repos = await getPortfolioRepos();
  } catch {}
  const cards = await Promise.all(
    repos.map(async (repo) => {
      const img = await coverFor(repo);
      return {
        name: repo.name,
        description: repo.description,
        stargazers_count: repo.stargazers_count,
        language: repo.language,
        homepage: repo.homepage,
        html_url: repo.html_url,
        img,
      };
    })
  );


  return (
    <main className="min-h-screen bg-black text-zinc-100 py-16">
  {/* Top green progress bar */}
  <ProjectsScrollBar />
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Projects</h1>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <p className="text-lg text-zinc-300">Here are my recent projects showcased below.</p>
          <a
            href="https://calendly.com/contact-giuseppe00/call"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 text-black font-semibold px-6 py-2 rounded-xl shadow hover:bg-emerald-400 transition"
          >
            Book a Call
          </a>
        </div>
        {cards.length === 0 ? (
          <div className="text-center py-24 text-zinc-400">
            <p>No featured projects found. If you see this, GitHub API may be rate-limited or repos aren’t tagged <span className="font-mono text-emerald-400">portfolio</span>.</p>
          </div>
        ) : (
          <ProjectsGridWrapper cards={cards} />
        )}
      </div>
    </main>
  );
}
