// src/app/page.tsx - Premium Hacker Aesthetic Homepage
// Unified Hero, Marquee, Case Studies Rail, Blog Preview

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PronunciationButton from "../components/PronunciationButton";
import UnifiedHero from "../components/MobileHero";
import StickyMobileCTA from "../components/StickyMobileCTA";
import { getAllBlogPosts } from "@/lib/blogConfig";

/* ──────────────────────────────────────────────────────────────────────────
 * Constants  
 * ────────────────────────────────────────────────────────────────────────── */

/* ──────────────────────────────────────────────────────────────────────────
 * Types
 * ────────────────────────────────────────────────────────────────────────── */

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  tags?: string[];
  cover?: string;
  excerpt?: string;
};

type Project = {
  title: string;
  href: string;
  img: string;
  meta: string;
  summary: string;
  tags?: string[];
  category?: string;
};

/* ──────────────────────────────────────────────────────────────────────────
 * Constants
 * ────────────────────────────────────────────────────────────────────────── */

const DEFAULT_COVERS = [
  "/BlogPostImage1.png",
  "/BlogPostImage2.png", 
  "/BlogPostImage3.png",
  "/BlogPostImage4.png",
  "/BlogPostImage5.png",
  "/BlogPostImage6.png",
  "/BlogPostImage7.png",
];

const FEATURED_PROJECTS: Project[] = [
  {
    title: "Invoice Reconciliation Tool",
    href: "/projects/invoice-reconciliation", 
    img: "/invoice-reconciliation.png",
    meta: "Data Tools",
    summary: "Explainable diffs between invoices and payouts with workflow automation.",
    tags: ["Python", "Streamlit", "Pandas"],
    category: "Data",
  },
  {
    title: "ATS Resume Scorer",
    href: "/projects/ats-helper",
    img: "/ats-helper.png", 
    meta: "CLI Tool",
    summary: "Deterministic scoring against job specs with actionable insights.",
    tags: ["Node", "CLI", "Parsing"],
    category: "Automation",
  },
  {
    title: "Secure Messaging CLI",
    href: "/projects/secure-messaging-cli",
    img: "/secure-messaging-cli.png",
    meta: "Security",
    summary: "End-to-end encryption with sane defaults and crypto hygiene.",
    tags: ["Security", "CLI", "Crypto"],
    category: "Security", 
  },
];

const TECH_STACK = [
  "Next.js", "TypeScript", "Node.js", "Python", "React", "Tailwind", 
  "PostgreSQL", "Docker", "CI/CD", "Security", "Automation", "Data Tools", 
  "CLI", "Linux", "DevOps", "Testing"
];

/* ──────────────────────────────────────────────────────────────────────────
 * Utilities
 * ────────────────────────────────────────────────────────────────────────── */

function safeDateISO(input: unknown): string {
  if (typeof input === "string") {
    const d = new Date(input);
    return isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
  }
  if (input instanceof Date) return input.toISOString().slice(0, 10);
  return "";
}

function loadBlogPosts(limit = 3): BlogPost[] {
  const configPosts = getAllBlogPosts();
  
  // All posts are now page.tsx components, so we use config data directly
  const posts = configPosts.map((configPost, i) => {
    return {
      slug: configPost.slug,
      title: configPost.title,
      date: configPost.date,
      tags: configPost.tags,
      cover: configPost.cover || DEFAULT_COVERS[i % DEFAULT_COVERS.length],
      excerpt: configPost.excerpt,
    };
  });

  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

/* ──────────────────────────────────────────────────────────────────────────
 * Components
 * ────────────────────────────────────────────────────────────────────────── */

function SplitHero() {
  return (
    <section className="relative py-20 sm:py-32 hidden md:block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
              <span className="status-led"></span>
              <span className="text-gray-300">Available for projects</span>
            </div>

            <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              I design & build{" "}
              <span className="accent-text">clean</span>, production-ready software.
            </h1>

            <p className="mt-6 text-xl text-gray-400 leading-relaxed">
              Performance, security, and maintainability — with the docs and 
              handover you actually need. I ship small projects frequently and 
              write about what works.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/projects" className="btn-accent">
                <span>View Projects</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="m9 18 6-6-6-6" strokeWidth="2"/>
                </svg>
              </Link>
              <Link href="mailto:contact.giuseppe00@gmail.com" className="btn-ghost">
                <span>Let&apos;s talk</span>
              </Link>
            </div>

            {/* Value bullets with LEDs */}
            <div className="mt-12 space-y-4">
              {[
                "Security-first development mindset",
                "Clean, maintainable codebases", 
                "Comprehensive documentation"
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-80"></div>
                  <span className="text-gray-300 text-sm">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Showcase Panel */}
          <div className="relative">
            <ShowcasePanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowcasePanel() {
  const [currentProject, setCurrentProject] = useState(0);
  
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % FEATURED_PROJECTS.length);
  };
  
  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + FEATURED_PROJECTS.length) % FEATURED_PROJECTS.length);
  };
  
  const project = FEATURED_PROJECTS[currentProject];

  return (
    <div className="glass gradient-border tilt p-8 rounded-3xl">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Featured Work</h3>
          <div className="flex items-center gap-2">
            <button 
              onClick={prevProject}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              aria-label="Previous project"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                <path d="m15 18-6-6 6-6" strokeWidth="2"/>
              </svg>
            </button>
            <div className="flex gap-1">
              {FEATURED_PROJECTS.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentProject(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentProject ? 'bg-cyan-400' : 'bg-white/20'
                  }`}
                  aria-label={`View project ${i + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextProject}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
              aria-label="Next project"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                <path d="m9 18 6-6-6-6" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={project.img}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-48 object-cover project-image"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute top-4 left-4">
            <span className="px-2 py-1 bg-black/60 backdrop-blur text-cyan-400 text-xs rounded-full">
              {project.meta}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-white font-semibold text-lg mb-2">{project.title}</h4>
            <p className="text-gray-300 text-sm">{project.summary}</p>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {project.tags?.slice(0, 3).map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white/10 text-gray-300 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <Link 
              href={project.href}
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
            >
              View details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRibbon() {
  const duplicatedStack = [...TECH_STACK, ...TECH_STACK];
  
  return (
    <section className="py-6 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee">
          {duplicatedStack.map((tech, i) => (
            <div key={i} className="flex-shrink-0 mx-8">
              <span className="text-gray-400 font-mono text-lg whitespace-nowrap">
                {tech}
              </span>
            </div>
          ))}
        </div>
        {/* Fade masks */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}

function CaseStudiesRail() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="accent-text">Case Studies</span> & Featured Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real projects solving real problems, with the technical depth and business context you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects" className="btn-ghost">
            View All Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m9 18 6-6-6-6" strokeWidth="2"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.href} className="group block">
      <article className="project-card glass gradient-border rounded-2xl overflow-hidden h-full">
        <div className="relative">
          <Image
            src={project.img}
            alt={project.title}
            width={400}
            height={240}
            className="w-full h-48 object-cover project-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4">
            <span className="px-2 py-1 bg-black/60 backdrop-blur text-cyan-400 text-xs rounded-full">
              {project.meta}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.summary}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags?.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="callout-bar glass absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20">
            <span className="text-cyan-400 text-sm font-medium">View case study →</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function BlogPreview() {
  const posts = loadBlogPosts(3);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Latest <span className="accent-text">Insights</span>
          </h2>
          <p className="text-gray-400">Thoughts on development, security, and building great software.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post: BlogPost) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Centered All Posts button for all devices */}
        <div className="flex justify-center mt-8">
          <Link href="/blog" className="btn-ghost">
            All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="glass rounded-2xl overflow-hidden h-full hover:transform hover:scale-[1.02] transition-all">
        <Image
          src={post.cover || DEFAULT_COVERS[0]}
          alt={post.title}
          width={400}
          height={200}
          className="w-full h-40 object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="p-6">
          <div className="text-xs text-gray-500 mb-2">{post.date}</div>
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}

function CTABanner() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass gradient-border rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let&apos;s build something <span className="accent-text">practical</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Ready to discuss your next project? I&apos;m available for consulting, development, 
              and technical advisory work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="mailto:contact.giuseppe00@gmail.com" className="btn-accent">
                Start a Conversation
              </Link>
              <div className="flex items-center gap-2">
                <span className="status-led"></span>
                <span className="text-gray-400 text-sm">Available</span>
              </div>
              <PronunciationButton className="text-gray-400 text-sm hover:text-cyan-400 transition-colors flex items-center gap-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 * Main Page
 * ────────────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* Unified Hero - clean centered design for all devices */}
      <UnifiedHero />
      
      <MarqueeRibbon />
      <CaseStudiesRail />
      <BlogPreview />
      <CTABanner />
      
      {/* Sticky Mobile CTA - only visible on mobile */}
      <StickyMobileCTA />
    </>
  );
}