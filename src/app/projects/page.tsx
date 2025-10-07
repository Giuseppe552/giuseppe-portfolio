// src/app/projects/page.tsx - Premium Hacker Aesthetic Projects Index

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

/* ──────────────────────────────────────────────────────────────────────────
 * Types
 * ────────────────────────────────────────────────────────────────────────── */

export interface Project {
  title: string;
  slug: string;
  tagline: string;
  metric: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  image: string;
  links: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
  primaryCategory: "AI" | "Security" | "Automation" | "Data" | "Web";
  tags: string[];
  year: number;
}

type FilterOption = "All" | "AI" | "Security" | "Automation" | "Data" | "Web";
type SortOption = "Newest" | "Impact" | "Complexity";

/* ──────────────────────────────────────────────────────────────────────────
 * Data
 * ────────────────────────────────────────────────────────────────────────── */

const PROJECTS: Project[] = [
  {
    title: "JobMate AI",
    slug: "jobmate-ai",
    tagline: "CV ↔ job description matching with semantic similarity scores.",
    metric: "+18% shortlist precision",
    problem: "Strong candidates are missed by ATS due to keyword mismatch.",
    solution: "Python + spaCy + TF-IDF/cosine similarity with clean upload UI.",
    impact: "Faster screening for recruiters and immediate fit feedback.",
    tech: ["Python", "spaCy", "scikit-learn", "Flask", "PDF parsing"],
    image: "/jobmate-ai.png",
    links: { 
      demo: "#", 
      github: "https://github.com/Giuseppe552/jobmateAI", 
      caseStudy: "#" 
    },
    primaryCategory: "AI",
    tags: ["AI", "Hiring", "Automation", "NLP"],
    year: 2025,
  },
  {
    title: "Email Compliance Checker", 
    slug: "email-compliance-checker",
    tagline: "Scans CSV email exports for risky terms and compliance issues.",
    metric: "−60% manual review time",
    problem: "Manual review of large email datasets is slow and error-prone.",
    solution: "Python + Pandas ruleset scanning with severity scoring.",
    impact: "Quicker, more consistent compliance checks with audit output.",
    tech: ["Python", "Pandas", "Streamlit", "CSV"],
    image: "/email-compliance-checker.png",
    links: { 
      demo: "#", 
      github: "https://github.com/Giuseppe552/email-compliance-checker",
      caseStudy: "#" 
    },
    primaryCategory: "Security",
    tags: ["Security", "Compliance", "Data", "Automation"],
    year: 2025,
  },
  {
    title: "Ghost Protocol",
    slug: "ghost-protocol", 
    tagline: "Hardened Tor+Firefox launcher with privacy verification dashboard.",
    metric: "Verified anonymity",
    problem: "Users can&apos;t easily verify their Tor setup is working correctly.",
    solution: "Automated launcher with real-time privacy posture monitoring.",
    impact: "Confidence in anonymity tools with clear verification metrics.",
    tech: ["Python", "Tor", "Firefox", "Dashboard", "Privacy"],
    image: "/ghost-protocol.png",
    links: { 
      demo: "#", 
      github: "https://github.com/Giuseppe552/ghost-protocol",
      caseStudy: "#" 
    },
    primaryCategory: "Security",
    tags: ["Security", "Privacy", "Automation", "CLI"],
    year: 2024,
  },
  {
    title: "Invoice Reconciliation Tool",
    slug: "invoice-reconciliation",
    tagline: "Automated diff analysis between invoices and payouts.",
    metric: "99% accuracy rate",
    problem: "Manual invoice reconciliation is time-consuming and error-prone.",
    solution: "Streamlit app with pandas for data processing and visual insights.",
    impact: "Reduced reconciliation time from hours to minutes.",
    tech: ["Python", "Streamlit", "Pandas", "Data Visualization"],
    image: "/invoice-reconciliation.png",
    links: { 
      demo: "#", 
      github: "https://github.com/Giuseppe552/invoice-reconciliation",
      caseStudy: "#" 
    },
    primaryCategory: "Data",
    tags: ["Data", "Automation", "Business", "Analytics"],
    year: 2024,
  },
  {
    title: "ATS Resume Scorer",
    slug: "ats-helper",
    tagline: "Scores CVs against job descriptions with keyword coverage analysis.",
    metric: "Instant ATS-readiness score", 
    problem: "Candidates don&apos;t know if their CV will pass ATS filters.",
    solution: "spaCy/NLP keyword extraction with scoring and feedback.",
    impact: "Clear feedback loop for CV optimization before applying.",
    tech: ["Python", "spaCy", "NLP", "PDF/DOCX"],
    image: "/ats-helper.png",
    links: { 
      demo: "#", 
      github: "https://github.com/Giuseppe552/ats-helper",
      caseStudy: "#" 
    },
    primaryCategory: "AI",
    tags: ["AI", "Hiring", "NLP", "CLI"],
    year: 2023,
  },
  {
    title: "Secure Messaging CLI",
    slug: "secure-messaging-cli",
    tagline: "End-to-end encrypted messaging with sane defaults.",
    metric: "Military-grade encryption",
    problem: "Secure communication tools are often complex to use correctly.",
    solution: "CLI tool with good crypto hygiene and user-friendly interface.",
    impact: "Accessible secure communication for technical and non-technical users.",
    tech: ["Python", "Cryptography", "CLI", "Security"],
    image: "/secure-messaging-cli.png",
    links: { 
      demo: "#", 
      github: "https://github.com/Giuseppe552/secure-messaging-cli",
      caseStudy: "#" 
    },
    primaryCategory: "Security",
    tags: ["Security", "Cryptography", "CLI", "Communication"],
    year: 2023,
  },
  {
    title: "Linux Security Toolkit",
    slug: "linux-security-toolkit",
    tagline: "Fast security checks and fixes for Linux system hardening.",
    metric: "50+ security checks",
    problem: "Manual security audits are time-consuming and inconsistent.",
    solution: "Automated toolkit for common security misconfigurations.",
    impact: "Rapid security assessment and remediation for Linux systems.",
    tech: ["Bash", "Linux", "Security", "Automation"],
    image: "/linux-security-toolkit.png",
    links: { 
      demo: "#", 
      github: "https://github.com/Giuseppe552/linux-security-toolkit",
      caseStudy: "#" 
    },
    primaryCategory: "Security",
    tags: ["Security", "Linux", "Automation", "DevOps"],
    year: 2023,
  },
  {
    title: "Network Scanner",
    slug: "network-scanner",
    tagline: "Fast, multi-threaded port scanner with service detection.",
    metric: "Parallel scanning",
    problem: "Manual network recon is slow for security assessments.",
    solution: "Python multi-threaded scanner with banner grabbing.",
    impact: "Quick service inventory for penetration testing workflows.",
    tech: ["Python", "Sockets", "Threading", "Networking"],
    image: "/network-scanner.png",
    links: { 
      demo: "#", 
      github: "https://github.com/Giuseppe552/network-scanner",
      caseStudy: "#" 
    },
    primaryCategory: "Security",
    tags: ["Security", "Networking", "CLI", "Pentesting"],
    year: 2023,
  },
];

/* ──────────────────────────────────────────────────────────────────────────
 * Components
 * ────────────────────────────────────────────────────────────────────────── */

function ProjectsHeader() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        <span className="accent-text">Projects</span> & Case Studies
      </h1>
      <p className="text-gray-400 text-lg max-w-3xl mx-auto">
        Real-world solutions built with modern technologies. Each project solves specific problems 
        with clean code, security best practices, and comprehensive documentation.
      </p>
    </div>
  );
}

function FilterChips({ 
  activeFilter, 
  onFilterChange 
}: { 
  activeFilter: FilterOption; 
  onFilterChange: (filter: FilterOption) => void;
}) {
  const filters: FilterOption[] = ["All", "AI", "Security", "Automation", "Data", "Web"];

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`filter-chip ${activeFilter === filter ? 'active' : ''}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

function SortDropdown({ 
  activeSort, 
  onSortChange 
}: { 
  activeSort: SortOption; 
  onSortChange: (sort: SortOption) => void;
}) {
  const sorts: SortOption[] = ["Newest", "Impact", "Complexity"];

  return (
    <div className="flex justify-center mb-8">
      <div className="glass rounded-lg p-1">
        <select
          value={activeSort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="bg-transparent text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          {sorts.map((sort) => (
            <option key={sort} value={sort} className="bg-slate-800">
              Sort by {sort}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card glass gradient-border rounded-2xl overflow-hidden h-full">
      <div className="relative">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={300}
          className="w-full h-48 object-cover project-image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/60 backdrop-blur text-cyan-400 text-sm rounded-full">
            {project.primaryCategory}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 bg-black/60 backdrop-blur text-gray-300 text-xs rounded-full">
            {project.year}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.tagline}
        </p>
        
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-1">Key Metric</div>
          <div className="text-cyan-400 font-medium text-sm">{project.metric}</div>
        </div>
        
        {/* Problem/Solution/Impact snippets */}
        <div className="space-y-3 mb-6">
          <div>
            <div className="text-xs font-medium text-red-400 mb-1">Problem</div>
            <p className="text-gray-400 text-xs line-clamp-2">{project.problem}</p>
          </div>
          <div>
            <div className="text-xs font-medium text-blue-400 mb-1">Solution</div>
            <p className="text-gray-400 text-xs line-clamp-2">{project.solution}</p>
          </div>
          <div>
            <div className="text-xs font-medium text-green-400 mb-1">Impact</div>
            <p className="text-gray-400 text-xs line-clamp-2">{project.impact}</p>
          </div>
        </div>
        
        {/* Tech badges */}
        <div className="flex flex-wrap gap-1 mb-6">
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 bg-white/5 text-gray-500 text-xs rounded-full">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
        
        {/* Links */}
        <div className="flex gap-2">
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs px-3 py-1.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Code
            </Link>
          )}
          {project.links.demo && project.links.demo !== "#" && (
            <Link
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"  
              className="btn-accent text-xs px-3 py-1.5"
            >
              Demo
            </Link>
          )}
        </div>
        
        {/* Callout bar */}
        <div className="callout-bar glass absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20">
          <span className="text-cyan-400 text-sm font-medium">View case study →</span>
        </div>
      </div>
    </article>
  );
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="glass rounded-2xl p-12 max-w-md mx-auto">
          <svg 
            width="64" 
            height="64" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            className="mx-auto mb-4 text-gray-500"
          >
            <path d="M20 7h-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h11v-1" strokeWidth="2"/>
            <path d="m9 12 2 2 4-4" strokeWidth="2"/>
          </svg>
          <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
          <p className="text-gray-400">Try adjusting your filters to see more projects.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 * Main Page
 * ────────────────────────────────────────────────────────────────────────── */

export default function ProjectsIndex() {
  const [activeFilter, setActiveFilter] = React.useState<FilterOption>("All");
  const [activeSort, setActiveSort] = React.useState<SortOption>("Newest");

  // Filter projects
  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "All") return true;
    return project.primaryCategory === activeFilter;
  });

  // Sort projects  
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (activeSort) {
      case "Newest":
        return b.year - a.year;
      case "Impact":
        // Sort by a rough "impact score" based on metrics and category
        const getImpactScore = (p: Project) => {
          let score = p.year * 10; // Newer projects get higher score
          if (p.primaryCategory === "AI") score += 50;
          if (p.primaryCategory === "Security") score += 40; 
          if (p.metric.includes("%") || p.metric.includes("+")) score += 30;
          return score;
        };
        return getImpactScore(b) - getImpactScore(a);
      case "Complexity":
        // Sort by tech stack size and category complexity
        const getComplexityScore = (p: Project) => {
          let score = p.tech.length * 10;
          if (p.primaryCategory === "AI") score += 30;
          if (p.primaryCategory === "Security") score += 25;
          if (p.primaryCategory === "Data") score += 20;
          return score;
        };
        return getComplexityScore(b) - getComplexityScore(a);
      default:
        return 0;
    }
  });

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProjectsHeader />
        
        <div className="sticky top-20 z-30 glass rounded-2xl p-6 mb-12 -mx-4 sm:mx-0">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <FilterChips 
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
            <SortDropdown
              activeSort={activeSort}
              onSortChange={setActiveSort}
            />
          </div>
          <div className="text-center mt-4">
            <span className="text-gray-400 text-sm">
              {sortedProjects.length} project{sortedProjects.length !== 1 ? 's' : ''} 
              {activeFilter !== "All" && ` in ${activeFilter}`}
            </span>
          </div>
        </div>
        
        <ProjectGrid projects={sortedProjects} />
        
        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass gradient-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Have a project in mind?
            </h2>
            <p className="text-gray-400 mb-6">
              I&apos;m always interested in discussing new challenges and opportunities.
            </p>
            <Link href="mailto:contact.giuseppe00@gmail.com" className="btn-accent">
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}