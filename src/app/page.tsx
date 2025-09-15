import PortfolioClient from "@/app/PortfolioClient";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

/** ──────────────────────────────────────────────────────────────────────────
 *  Page
 *  Clean build: EN/ITA toggle, typewriter hero, pixel+grid+glow background.
 *  No YouTube section, no avatar. Primary CTA = email, secondary = GitHub.
 *  ────────────────────────────────────────────────────────────────────────── */

export default function Portfolio() {
  // Server-side logic to get latest blog post
  const BLOG_DIR = path.join(process.cwd(), "src", "app", "blog");
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".md"));
  let blogPost = null;
  if (files.length) {
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
    blogPost = post;
  }
  return <PortfolioClient blogPost={blogPost} />;
}



