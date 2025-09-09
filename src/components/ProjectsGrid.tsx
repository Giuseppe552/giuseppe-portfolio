"use client";
import React from "react";

export type ProjectCardData = {
  name: string;
  description: string;
  stargazers_count: number;
  language?: string;
  homepage?: string;
  html_url: string;
  img: string;
};

export default function ProjectsGrid({ cards }: { cards: ProjectCardData[] }) {
  const { motion } = require("framer-motion");
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {cards.map((repo, i) => (
        <motion.div
          key={repo.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="border border-neutral-800 bg-zinc-950 rounded-2xl p-6 flex flex-col shadow-md hover:border-emerald-500 transition-colors cursor-pointer group"
          onClick={() => window.location.href = `/projects/${repo.name}`}
          tabIndex={0}
          role="button"
          onKeyPress={e => { if (e.key === 'Enter') window.location.href = `/projects/${repo.name}`; }}
        >
          <h2 className="text-xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors">
            {repo.name}
          </h2>
          <p className="text-sm text-zinc-400 line-clamp-2 mb-3">{repo.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {repo.language && (
              <span className="text-xs bg-zinc-800 text-emerald-400 px-2 py-1 rounded font-mono">{repo.language}</span>
            )}
            {repo.topics && repo.topics.map((tag: string) => (
              <span key={tag} className="text-xs bg-zinc-900 text-zinc-300 px-2 py-1 rounded font-mono">{tag}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
