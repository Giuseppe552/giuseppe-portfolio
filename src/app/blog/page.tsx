import matter from "gray-matter";
import React from "react";
import Link from "next/link";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import BackgroundFX from "@/components/BackgroundFX";
import SiteFooter from "@/components/SiteFooter";
import { readBlogFile, listBlogSlugs } from "@/lib/safeFs";

export const metadata = {
  title: "Blog – Giuseppe Giona",
};

function getBlogPosts() {
  const slugs = listBlogSlugs();
  return slugs.map(slug => {
    const raw = readBlogFile(slug);
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      date:
        typeof data.date === "object" && data.date instanceof Date
          ? data.date.toISOString().slice(0, 10)
          : String(data.date || ""),
      tags: data.tags || [],
      repo: data.repo || "",
      content,
    };
  });
}

export default function BlogPage() {
  const posts = getBlogPosts();
  return (
    <div
      className="min-h-screen text-zinc-100 relative"
      style={{ fontFamily: 'JetBrains Mono, monospace', cursor: 'url(/cursor.svg), pointer' }}
    >
      <ResponsiveHeader />
      <BackgroundFX />
      <main className="relative py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-2xl font-bold mb-8" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Blog</h1>
          <div className="space-y-8">
            {posts.map(post => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block border border-neutral-800 bg-zinc-900 rounded-2xl p-6 shadow-lg hover:border-indigo-500 transition"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <h2 className="text-xl font-semibold text-indigo-400 mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{post.title}</h2>
                <div className="text-zinc-400 text-sm mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{post.date}</div>
                <div className="text-zinc-200 text-base line-clamp-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{post.content.slice(0, 180)}...</div>
              </a>
            ))}
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
