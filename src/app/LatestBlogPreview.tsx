export const dynamic = "force-static";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

export default function LatestBlogPreview() {
  const BLOG_DIR = path.join(process.cwd(), "src", "app", "blog");
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".md"));
  if (!files.length) return null;
  // Sort by date in frontmatter
  const posts = files.map(f => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf8");
    const { data, content } = matter(raw);
    let dateStr = "";
    if (typeof data.date === "object" && data.date instanceof Date) {
      dateStr = data.date.toISOString().slice(0, 10);
    } else if (typeof data.date === "string") {
      const d = new Date(data.date);
      dateStr = isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
    }
    return {
      slug: f.replace(/\.md$/, ""),
      title: data.title || f,
      date: dateStr,
      tags: data.tags || [],
      repo: data.repo || "",
      content,
    };
  });
  posts.sort((a, b) => b.date.localeCompare(a.date));
  const post = posts[0];
  const previewLength = Math.ceil(post.content.length / 3);
  const preview = post.content.slice(0, previewLength);
  return (
    <section id="latest-blog" className="border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle kicker="Latest from my blog" title={post.title} />
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg">
          <div className="text-zinc-400 text-sm mb-2 font-mono">{post.date}</div>
          <div className="text-zinc-200 text-base font-mono mb-4">{preview}...</div>
          <Link href={`/blog/${post.slug}`} className="inline-block px-4 py-2 rounded-xl bg-indigo-500 text-white font-mono hover:bg-indigo-600 transition">Keep reading →</Link>
        </div>
        <div className="mt-8 text-right">
          <Link href="/blog" className="text-indigo-400 hover:underline font-mono">See all posts →</Link>
        </div>
      </div>
    </section>
  );
}
