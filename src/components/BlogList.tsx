"use client";
import React, { useState } from "react";
import Link from "next/link";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import BackgroundFX from "@/components/BackgroundFX";
import SiteFooter from "@/components/SiteFooter";
import Typewriter from "@/components/Typewriter";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  repo: string;
  content: string;
};

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const [order, setOrder] = useState<'newest' | 'oldest'>('newest');
  const sortedPosts = [...posts].sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    if (order === 'newest') {
      return b.date.localeCompare(a.date);
    } else {
      return a.date.localeCompare(b.date);
    }
  });
  return (
    <div className="mx-auto max-w-3xl px-4">
      <div className="mt-12 mb-10">
        <Typewriter
          text="This blog is my learning journal. I share coding projects, security experiments, and career reflections — not as an expert, but as someone still learning and improving every day. My hope is that by documenting the process, others can learn alongside me and avoid the mistakes I’ve made."
          className="text-zinc-300 text-base md:text-lg font-mono"
        />
      </div>
      <h1 className="text-2xl font-bold mb-12 font-['JetBrains_Mono',monospace]">Blog</h1>
      <div className="mb-6 flex gap-2 items-center">
        <span className="text-zinc-400 font-mono">Filter by:</span>
        <button
          className={`px-3 py-1 rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-100 font-mono transition focus:outline-none ${order === 'newest' ? 'border-indigo-500 text-indigo-400 ring-2 ring-indigo-500' : ''}`}
          onClick={() => setOrder('newest')}
        >
          Newest
        </button>
        <button
          className={`px-3 py-1 rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-100 font-mono transition focus:outline-none ${order === 'oldest' ? 'border-indigo-500 text-indigo-400 ring-2 ring-indigo-500' : ''}`}
          onClick={() => setOrder('oldest')}
        >
          Oldest
        </button>
      </div>
      <div className="space-y-8">
        {sortedPosts.map(post => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border border-neutral-800 bg-zinc-900 rounded-2xl p-6 shadow-lg hover:border-indigo-500 transition font-['JetBrains_Mono',monospace]"
          >
            <h2 className="text-xl font-semibold text-indigo-400 mb-2 font-['JetBrains_Mono',monospace]">{post.title}</h2>
            <div className="text-zinc-400 text-sm mb-2 font-['JetBrains_Mono',monospace]">{post.date}</div>
            <div className="text-zinc-200 text-base line-clamp-3 font-['JetBrains_Mono',monospace]">{post.content.slice(0, 180)}...</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
