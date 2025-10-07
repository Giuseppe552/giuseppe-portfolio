// src/components/LatestBlogPreview.tsx
export const dynamic = "force-static";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import React from "react";

/**
 * LatestBlogPreview
 * - Reads Markdown posts from /src/app/blog
 * - Shows: 1 large feature + 2 compact cards
 * - Uses cover image from frontmatter `cover`, with local fallbacks
 * - Cleans content to a readable excerpt
 */

type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  cover: string;
  excerpt: string;
};

const BLOG_DIR = path.join(process.cwd(), "src", "app", "blog");
const FALLBACKS = [
  "/BlogPostImage1.png",
  "/BlogPostImage2.png",
  "/BlogPostImage3.png",
  "/BlogPostImage4.png",
  "/BlogPostImage5.png",
  "/BlogPostImage6.png",
  "/BlogPostImage7.png",
];

function safeISO(input: unknown): string {
  if (typeof input === "string") {
    const d = new Date(input);
    return isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
  }
  if (input instanceof Date) return input.toISOString().slice(0, 10);
  return "";
}

function toExcerpt(md: string, words = 40): string {
  // strip code fences/inline code/images/links/basic markdown
  const text = md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[[^\]]*\]\([^)]+\)/g, (_, s) => s ?? " ")
    .replace(/[*_>#-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const parts = text.split(" ");
  return parts.slice(0, words).join(" ") + (parts.length > words ? "…" : "");
}

function loadPosts(limit = 3): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((f, idx) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf8");
    const { data, content } = matter(raw);

    const slug = f.replace(/\.md$/, "");
    const title = typeof data.title === "string" && data.title.length ? data.title : slug;
    const date = safeISO(data.date);
    const tags = Array.isArray(data.tags) ? data.tags.filter(Boolean) : [];
    const cover =
      typeof data.cover === "string" && data.cover.length ? data.cover : FALLBACKS[idx % FALLBACKS.length];
    const excerpt = toExcerpt(content || "");

    return { slug, title, date, tags, cover, excerpt };
  });

  posts.sort((a, b) => b.date.localeCompare(a.date));
  return posts.slice(0, Math.max(1, Math.min(limit, 6)));
}

export default function LatestBlogPreview() {
  const posts = loadPosts(3);
  if (posts.length === 0) return null;

  const [feature, ...rest] = posts;

  return (
    <section aria-labelledby="latest-blog-heading" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between">
          <h2 id="latest-blog-heading" className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Latest from the blog
          </h2>
          <Link href="/blog" className="text-sm font-medium text-slate-700 underline-offset-4 hover:underline">
            View all
          </Link>
        </div>

        {/* Grid: 1 big + 2 small */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Feature */}
          <Link
            href={`/blog/${feature.slug}`}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-sm lg:col-span-2"
          >
            <div className="relative aspect-[16/9] w-full bg-slate-100">
              <Image
                src={feature.cover}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition group-hover:scale-[1.02]"
                priority
              />
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-xs uppercase tracking-wide text-slate-500">{feature.date || "—"}</p>
              <h3 className="mt-1 text-lg font-medium text-slate-900 sm:text-xl">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{feature.excerpt}</p>
              {feature.tags.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {feature.tags.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
              <span className="mt-4 inline-block text-sm text-slate-700 underline-offset-4 group-hover:underline">
                Keep reading →
              </span>
            </div>
          </Link>

          {/* Side cards */}
          <div className="grid grid-cols-1 gap-6">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-sm"
              >
                <div className="relative aspect-[16/9] w-full bg-slate-100">
                  <Image
                    src={p.cover}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-wide text-slate-500">{p.date || "—"}</p>
                  <h3 className="mt-1 line-clamp-2 text-base font-medium text-slate-900">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-600">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
