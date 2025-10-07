// src/app/blog/page.tsx - Premium Hacker Aesthetic Blog Index
// Two-column editorial layout with glass sidebar

import Image from "next/image";
import Link from "next/link";
import { getAllBlogPosts, getAllTags, getTagCounts, type BlogPostConfig } from "@/lib/blogConfig";

/* ──────────────────────────────────────────────────────────────────────────
 * Types
 * ────────────────────────────────────────────────────────────────────────── */

type BlogPost = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  cover?: string;
  excerpt: string;
  readTime?: string;
};

type SidebarData = {
  popularTags: string[];
  years: string[];
  postCount: number;
};

type SearchParams = {
  q?: string;
  tag?: string;
  year?: string;
  page?: string;
};

/* ──────────────────────────────────────────────────────────────────────────
 * Constants
 * ────────────────────────────────────────────────────────────────────────── */

const FALLBACKS = [
  "/BlogPostImage1.png",
  "/BlogPostImage2.png",
  "/BlogPostImage3.png",
  "/BlogPostImage4.png",
  "/BlogPostImage5.png",
  "/BlogPostImage6.png",
  "/BlogPostImage7.png",
];

const PAGE_SIZE = 12;

/* ──────────────────────────────────────────────────────────────────────────
 * Utilities
 * ────────────────────────────────────────────────────────────────────────── */

function safeISO(v: unknown): string {
  if (typeof v === "string") {
    const d = new Date(v);
    return isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
  }
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return "";
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "Unknown";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getAllPosts(): BlogPost[] {
  const configPosts = getAllBlogPosts();
  
  // All posts are now page.tsx components, so we use config data directly
  const posts = configPosts.map((configPost, i) => {
    return {
      slug: configPost.slug,
      title: configPost.title,
      date: configPost.date,
      tags: configPost.tags,
      cover: configPost.cover || FALLBACKS[i % FALLBACKS.length],
      excerpt: configPost.excerpt,
      readTime: configPost.readTime || "5 min",
    };
  });

  posts.sort((a, b) => b.date.localeCompare(a.date));
  return posts;
}

function buildSidebar(posts: BlogPost[]): SidebarData {
  const tagCounts = new Map<string, number>();
  const years = new Set<string>();

  posts.forEach((p) => {
    const yr = (p.date || "Unknown").slice(0, 4);
    if (yr !== "Unkn") years.add(yr);
    p.tags.forEach((t) => tagCounts.set(t, (tagCounts.get(t) || 0) + 1));
  });

  const popularTags = Array.from(tagCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .map(([t]) => t);

  const yearsSorted = Array.from(years).sort((a, b) => b.localeCompare(a));

  return { 
    popularTags, 
    years: yearsSorted, 
    postCount: posts.length 
  };
}

function filterPosts(posts: BlogPost[], params: SearchParams): BlogPost[] {
  let filtered = [...posts];

  if (params.q) {
    const query = params.q.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query))
    );
  }

  if (params.tag) {
    filtered = filtered.filter((p) => p.tags.includes(params.tag!));
  }

  if (params.year) {
    filtered = filtered.filter((p) => p.date.startsWith(params.year!));
  }

  return filtered;
}

function paginate<T>(items: T[], page: number, perPage: number) {
  const total = items.length;
  const pages = Math.max(1, Math.ceil(total / perPage));
  const p = Math.min(Math.max(1, page), pages);
  const start = (p - 1) * perPage;
  const end = start + perPage;
  return {
    page: p,
    pages,
    total,
    slice: items.slice(start, end),
  };
}

/* ──────────────────────────────────────────────────────────────────────────
 * Components
 * ────────────────────────────────────────────────────────────────────────── */

function BlogHeader({ params, postCount }: { params: SearchParams; postCount: number }) {
  const getTitle = () => {
    if (params.q) return `Search results for "${params.q}"`;
    if (params.tag) return `Posts tagged "${params.tag}"`;
    if (params.year) return `Posts from ${params.year}`;
    return "Latest Insights";
  };

  const getSubtitle = () => {
    if (params.q || params.tag || params.year) {
      return `${postCount} post${postCount !== 1 ? 's' : ''} found`;
    }
    return "Thoughts on development, security, and building great software.";
  };

  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        {params.q || params.tag || params.year ? (
          getTitle()
        ) : (
          <>
            Latest <span className="accent-text">Insights</span>
          </>
        )}
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        {getSubtitle()}
      </p>
      
      {(params.q || params.tag || params.year) && (
        <div className="mt-6">
          <Link 
            href="/blog" 
            className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
          >
            ← Back to all posts
          </Link>
        </div>
      )}
    </div>
  );
}

function SearchBox({ currentQuery }: { currentQuery?: string }) {
  return (
    <div className="glass rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8" strokeWidth="2"/>
          <path d="m21 21-4.35-4.35" strokeWidth="2"/>
        </svg>
        Search
      </h3>
      <form action="/blog" method="get" className="space-y-4">
        <input
          type="text"
          name="q"
          defaultValue={currentQuery}
          placeholder="Search posts..."
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
        />
        <button
          type="submit"
          className="w-full btn-accent text-center"
        >
          Search
        </button>
      </form>
    </div>
  );
}

function TagCloud({ tags, activeTag }: { tags: string[]; activeTag?: string }) {
  if (!tags.length) return null;

  return (
    <div className="glass rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" strokeWidth="2"/>
          <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2"/>
        </svg>
        Popular Tags
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const isActive = tag === activeTag;
          return (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className={`filter-chip ${isActive ? 'active' : ''}`}
            >
              {tag}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function YearArchive({ years, activeYear }: { years: string[]; activeYear?: string }) {
  if (!years.length) return null;

  return (
    <div className="glass rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
          <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
          <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
          <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
        </svg>
        Archive
      </h3>
      <div className="space-y-2">
        {years.map((year) => {
          const isActive = year === activeYear;
          return (
            <Link
              key={year}
              href={`/blog?year=${encodeURIComponent(year)}`}
              className={`
                block px-3 py-2 rounded-lg text-sm transition-colors
                ${isActive 
                  ? 'bg-cyan-400/20 text-cyan-400' 
                  : 'text-gray-300 hover:bg-white/5 hover:text-cyan-400'
                }
              `}
            >
              {year}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="glass gradient-border rounded-2xl overflow-hidden hover:transform hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30">
          <div className="md:flex">
            <div className="md:w-1/2 relative">
              <Image
                src={post.cover || FALLBACKS[0]}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 text-black text-sm font-bold rounded-full shadow-lg">
                  ⭐ FEATURED
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="md:w-1/2 p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-400 text-sm font-mono">{formatDate(post.date)}</span>
                <span className="text-emerald-400 text-sm font-semibold">{post.readTime}</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors leading-tight">
                {post.title}
              </h2>
              
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-3 py-2 bg-white/5 hover:bg-cyan-400/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20 transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-cyan-400 font-bold text-lg group-hover:text-emerald-400 transition-colors">
                  Read Full Article →
                </span>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 flex items-center justify-center group-hover:from-cyan-400/40 group-hover:to-emerald-400/40 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-cyan-400">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="glass rounded-2xl overflow-hidden h-full hover:transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 border border-white/10 hover:border-cyan-400/30">
        <div className="relative">
          <Image
            src={post.cover || FALLBACKS[0]}
            alt={post.title}
            width={400}
            height={240}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-emerald-400 text-black text-xs font-semibold rounded-full">
              NEW
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
            <span className="font-mono">{formatDate(post.date)}</span>
            <span>•</span>
            <span className="text-emerald-400">{post.readTime}</span>
          </div>
          
          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-tight">
            {post.title}
          </h3>
          
          <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="px-2 py-1 bg-white/5 hover:bg-cyan-400/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20 transition-colors">
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-cyan-400 font-semibold text-sm group-hover:text-emerald-400 transition-colors">
              Read Article →
            </span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 flex items-center justify-center group-hover:from-cyan-400/40 group-hover:to-emerald-400/40 transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-cyan-400">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

function Pagination({ 
  currentPage, 
  totalPages, 
  baseUrl 
}: { 
  currentPage: number; 
  totalPages: number; 
  baseUrl: string;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pages.filter(p => 
    p === 1 || 
    p === totalPages || 
    Math.abs(p - currentPage) <= 2
  );

  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      {currentPage > 1 && (
        <Link
          href={`${baseUrl}${currentPage > 2 ? `&page=${currentPage - 1}` : ''}`}
          className="btn-ghost px-4 py-2"
        >
          ← Previous
        </Link>
      )}
      
      <div className="flex gap-1">
        {visiblePages.map((page, i) => {
          const isGap = i > 0 && visiblePages[i - 1] !== page - 1;
          return (
            <div key={page}>
              {isGap && <span className="px-2 text-gray-500">…</span>}
              <Link
                href={page === 1 ? baseUrl : `${baseUrl}&page=${page}`}
                className={`
                  px-4 py-2 rounded-lg text-sm transition-colors
                  ${page === currentPage
                    ? 'bg-cyan-400 text-black font-medium'
                    : 'text-gray-300 hover:bg-white/10'
                  }
                `}
              >
                {page}
              </Link>
            </div>
          );
        })}
      </div>
      
      {currentPage < totalPages && (
        <Link
          href={`${baseUrl}&page=${currentPage + 1}`}
          className="btn-ghost px-4 py-2"
        >
          Next →
        </Link>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 * Main Page
 * ────────────────────────────────────────────────────────────────────────── */

interface PageProps {
  searchParams: Promise<SearchParams>;
}

export default async function BlogIndex({ searchParams }: PageProps) {
  const params = await searchParams;
  const allPosts = getAllPosts();
  const sidebar = buildSidebar(allPosts);
  const filteredPosts = filterPosts(allPosts, params);
  
  const currentPage = parseInt(params.page || "1", 10);
  const { slice: posts, pages: totalPages } = paginate(filteredPosts, currentPage, PAGE_SIZE);
  
  const [featuredPost, ...regularPosts] = posts;
  
  // Build base URL for pagination
  const baseUrl = `/blog?${new URLSearchParams(
    Object.entries(params).filter(([key, value]) => key !== 'page' && value)
  ).toString()}`;

  return (
    <div className="py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <BlogHeader params={params} postCount={filteredPosts.length} />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Main Content - Wider */}
          <div className="lg:col-span-4">
            {featuredPost && currentPage === 1 && !params.q && !params.tag && !params.year && (
              <div className="mb-12">
                <BlogCard post={featuredPost} featured />
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {(featuredPost && currentPage === 1 && !params.q && !params.tag && !params.year 
                ? regularPosts 
                : posts
              ).map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            
            {posts.length === 0 && (
              <div className="text-center py-12">
                <div className="glass rounded-2xl p-12">
                  <svg 
                    width="64" 
                    height="64" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    className="mx-auto mb-4 text-gray-500"
                  >
                    <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                    <path d="m21 21-4.35-4.35" strokeWidth="2"/>
                  </svg>
                  <h3 className="text-xl font-semibold text-white mb-2">No posts found</h3>
                  <p className="text-gray-400 mb-6">
                    Try adjusting your search or browse all posts.
                  </p>
                  <Link href="/blog" className="btn-accent">
                    View All Posts
                  </Link>
                </div>
              </div>
            )}
            
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              baseUrl={baseUrl}
            />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SearchBox currentQuery={params.q} />
            <TagCloud tags={sidebar.popularTags} activeTag={params.tag} />
            <YearArchive years={sidebar.years} activeYear={params.year} />
            
            {/* Subscribe Box */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get notified when I publish new articles about development, security, and tech.
              </p>
              <Link 
                href="mailto:contact.giuseppe00@gmail.com?subject=Blog Updates"
                className="btn-accent w-full text-center"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}