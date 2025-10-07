"use client";

/* Client island powering filters/search/sort for projects */

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type Project = {
  title: string;
  slug: string;
  tagline: string;
  metric?: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  image: string;
  links: { demo?: string; github?: string; caseStudy?: string };
  primaryCategory: "AI" | "Security" | "Automation" | "Data" | "Web";
  tags: string[];
  year?: number;
};

const CATEGORIES = ["All", "AI", "Security", "Automation", "Data", "Web"] as const;
const SORTS = ["Newest", "Alphabetical", "Most Tags"] as const;

function classNames(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}
function uniqueTags(data: Project[]) {
  return Array.from(new Set(data.flatMap((p) => p.tags))).sort();
}
function bySort(sort: (typeof SORTS)[number]) {
  switch (sort) {
    case "Newest":
      return (a: Project, b: Project) => (b.year ?? 0) - (a.year ?? 0);
    case "Alphabetical":
      return (a: Project, b: Project) => a.title.localeCompare(b.title);
    case "Most Tags":
      return (a: Project, b: Project) => (b.tags?.length ?? 0) - (a.tags?.length ?? 0);
  }
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-sm">
      <Link href={`/projects/${p.slug}`} className="block">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-cover transition will-change-transform group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className="absolute left-3 top-3 rounded-md border border-white/40 bg-black/40 px-2 py-1 text-[11px] font-medium text-white backdrop-blur">
            {p.primaryCategory}
          </span>
        </div>
        <div className="p-5">
          <h3 className="text-base font-medium text-slate-900">{p.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>

          <dl className="mt-3 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">
              <dt className="text-[11px] uppercase tracking-wide text-slate-500">Metric</dt>
              <dd className="text-xs font-medium text-slate-900">{p.metric ?? "—"}</dd>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">
              <dt className="text-[11px] uppercase tracking-wide text-slate-500">Year</dt>
              <dd className="text-xs font-medium text-slate-900">{p.year ?? "—"}</dd>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">
              <dt className="text-[11px] uppercase tracking-wide text-slate-500">Stack</dt>
              <dd className="line-clamp-1 text-xs font-medium text-slate-900">
                {p.tech.slice(0, 2).join(" • ")}
              </dd>
            </div>
          </dl>

          {p.tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-4 flex flex-wrap gap-2">
            {p.links.demo ? (
              <a
                href={p.links.demo}
                className="inline-flex items-center rounded-md bg-black px-3 py-2 text-xs font-medium text-white hover:opacity-90"
              >
                Demo
              </a>
            ) : null}
            {p.links.github ? (
              <a
                href={p.links.github}
                className="inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-900 hover:bg-slate-50"
              >
                GitHub ↗
              </a>
            ) : null}
            <Link
              href={`/projects/${p.slug}`}
              className="inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-900 hover:bg-slate-50"
            >
              Case study →
            </Link>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function ProjectsClient({ initial }: { initial: Project[] }) {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Newest");
  const [tag, setTag] = useState<string>("All");

  const tags = useMemo(() => ["All", ...uniqueTags(initial)], [initial]);

  const filtered = useMemo(
    () =>
      initial
        .filter((p) => (category === "All" ? true : p.primaryCategory === category))
        .filter((p) => (tag === "All" ? true : p.tags.includes(tag)))
        .filter((p) => {
          if (!q.trim()) return true;
          const needle = q.toLowerCase();
          return (
            p.title.toLowerCase().includes(needle) ||
            p.tagline.toLowerCase().includes(needle) ||
            p.tags.join(" ").toLowerCase().includes(needle) ||
            p.tech.join(" ").toLowerCase().includes(needle)
          );
        })
        .sort(bySort(sort)),
    [initial, category, tag, q, sort]
  );

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {/* Sticky sidebar */}
      <aside className="lg:col-span-3">
        <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-4">
          <label htmlFor="search" className="text-xs font-medium text-slate-700">
            Search
          </label>
          <input
            id="search"
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filter projects…"
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900/10"
          />

          <div className="mt-5">
            <p className="text-xs font-medium text-slate-700">Category</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={classNames(
                    "rounded-full border px-3 py-1.5 text-xs",
                    category === c
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                  )}
                  aria-pressed={category === c}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xs font-medium text-slate-700">Tag</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setTag(t)}
                  className={classNames(
                    "truncate rounded-full border px-3 py-1.5 text-xs",
                    tag === t
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                  )}
                  title={t}
                  aria-pressed={tag === t}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="sort" className="text-xs font-medium text-slate-700">
              Sort
            </label>
            <select
              id="sort"
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-900/10"
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof SORTS[number])}
            >
              {SORTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
            <p>
              Showing <span className="font-medium text-slate-900">{filtered.length}</span> of{" "}
              {initial.length}.
            </p>
          </div>
        </div>
      </aside>

      {/* Grid */}
      <section className="lg:col-span-9">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-600">
            No results. Try a different filter or search term.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        )}

        {/* Compare strip */}
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[720px] border-separate border-spacing-0 rounded-2xl border border-slate-200">
            <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="p-3">Project</th>
                <th className="p-3">Category</th>
                <th className="p-3">Metric</th>
                <th className="p-3">Stack</th>
                <th className="p-3">Links</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filtered.map((p, i) => (
                <tr key={`row_${p.slug}`} className={i % 2 ? "bg-white" : "bg-white"}>
                  <td className="border-t border-slate-200 p-3 font-medium text-slate-900">
                    <Link href={`/projects/${p.slug}`} className="underline-offset-4 hover:underline">
                      {p.title}
                    </Link>
                  </td>
                  <td className="border-t border-slate-200 p-3 text-slate-700">{p.primaryCategory}</td>
                  <td className="border-t border-slate-200 p-3 text-slate-700">{p.metric ?? "—"}</td>
                  <td className="border-t border-slate-200 p-3 text-slate-700">
                    {p.tech.slice(0, 4).join(", ")}
                  </td>
                  <td className="border-t border-slate-200 p-3">
                    <div className="flex flex-wrap gap-2">
                      {p.links.github ? (
                        <a
                          href={p.links.github}
                          className="rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-900 hover:bg-slate-50"
                        >
                          GitHub ↗
                        </a>
                      ) : null}
                      <Link
                        href={`/projects/${p.slug}`}
                        className="rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-900 hover:bg-slate-50"
                      >
                        Case study →
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
