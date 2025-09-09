import { getPortfolioRepos, coverFor, GHRepo, repoTitle } from "@/lib/github";
import React from "react";
import ProjectsGridWrapper from "@/components/ProjectsGridWrapper";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import BackgroundFX from "@/components/BackgroundFX";
import ProjectsScrollBar from "@/components/ProjectsScrollBar";

export const metadata = {
  title: "Projects – Giuseppe Giona",
};

const GITHUB_USER = 'Giuseppe552';

export default async function ProjectsPage() {
  let repos: GHRepo[] = [];
  try {
    repos = await getPortfolioRepos();
  } catch {}
  const cards = await Promise.all(
    repos.map(async (repo) => {
      const img = await coverFor(repo);
      let summary = '';
      let demoImg = '';
      try {
        const res = await fetch(`https://raw.githubusercontent.com/Giuseppe552/${repo.name}/main/README.md`);
        if (res.ok) {
          const readme = await res.text();
          // Simple summary: first 2 non-empty lines, stripped of markdown and emojis
          summary = readme
            .replace(/[#*_`>\-]/g, '') // remove markdown
            .replace(/:[^\s]+:/g, '') // remove emoji shortcodes
            .replace(/[\u{1F600}-\u{1F6FF}]/gu, '') // remove unicode emojis
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .slice(0, 2)
            .join(' ');
          // Extract first image URL (screenshot/demo/gif)
          const imgMatch = readme.match(/<img[^>]+src=["']([^"'>]+)["'][^>]*>/i);
          if (imgMatch && imgMatch[1]) {
            demoImg = imgMatch[1].startsWith('http') ? imgMatch[1] : `https://raw.githubusercontent.com/Giuseppe552/${repo.name}/main/${imgMatch[1]}`;
          }
        }
      } catch {}
      return {
        name: repoTitle(repo.name),
        description: repo.description,
        stargazers_count: repo.stargazers_count,
        language: repo.language,
        homepage: repo.homepage,
        html_url: repo.html_url,
        img,
        summary,
        demoImg,
      };
    })
  );


  return (
    <div className="min-h-screen text-zinc-100 relative" style={{fontFamily:'JetBrains Mono, monospace'}}>
  <BackgroundFX scanlinePosition="none" />
      {/* Grid overlay to match homepage */}
      <div className="pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)] opacity-25">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-emerald-400" />
        </svg>
      </div>
  <ResponsiveHeader />
      <main className="py-16">
        {/* Top progress bar */}
        <ProjectsScrollBar />
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Projects</h1>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <p className="text-lg text-zinc-300">Here are my recent projects showcased below.</p>
          </div>
          {cards.length === 0 ? (
            <div className="text-center py-24 text-zinc-400">
              <p>No featured projects found. If you see this, GitHub API may be rate-limited or repos arent tagged <span className="font-mono text-emerald-400">portfolio</span>.</p>
            </div>
          ) : (
            <ProjectsGridWrapper cards={cards} />
          )}
        </div>
        {/* Contact section below projects grid - match homepage footer style */}
        <section id="contact" className="border-t border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="font-mono text-indigo-400 text-lg mb-2">Get in touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Let's Build</h3>
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
                For collaborations or ideas—send context and your ideal outcome. I reply when there's a clear problem and tight scope.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="mailto:contact.giuseppe00@gmail.com?subject=Hello" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 text-white font-medium shadow hover:bg-indigo-400 transition">Email me</a>
                <a href="/projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-900 transition">See Projects</a>
              </div>
            </div>
          </div>
        </section>
      </main>
  {/* Removed SiteFooter to avoid duplicate contact section */}
  <ProjectsScrollBar />
    </div>
  );
}
