/* eslint-disable security/detect-non-literal-fs-filename */
// rationale: paths are built from sanitized slugs and containment-checked against BLOG_DIR
import fs from "fs";
import path from "path";

// Infer current blog directory from existing code. If a variable like `blogDir`
// exists, keep its value; otherwise default to `public/blog`.
const ROOT = process.cwd();
const BLOG_DIR_CANDIDATES = [
  path.join(ROOT, "public", "blog"),
  path.join(ROOT, "src", "content", "blog"),
  path.join(ROOT, "blog"),
  path.join(ROOT, "src", "app", "blog")
];
const BLOG_DIR = BLOG_DIR_CANDIDATES.find(p => fs.existsSync(p)) ?? BLOG_DIR_CANDIDATES[0];

export function listBlogSlugs(): string[] {
  return fs.readdirSync(BLOG_DIR)
    .filter(n => /^[a-z0-9-_]+\.mdx?$/i.test(n))
    .map(n => n.replace(/\.mdx?$/i, ""));
}

export function readBlogFile(slug: string): string {
  const safe = slug.toLowerCase().replace(/[^a-z0-9-_]/g, "");
  const file = path.join(BLOG_DIR, `${safe}.md`);
  const resolved = path.resolve(file);
  if (!resolved.startsWith(path.resolve(BLOG_DIR))) throw new Error("Invalid slug");
  return fs.readFileSync(resolved, "utf8");
}