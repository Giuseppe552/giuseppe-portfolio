// Blog posts configuration - defines all blog posts with their metadata
// This allows us to have both markdown and custom page.tsx posts

export type BlogPostConfig = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  cover?: string;
  readTime?: string;
  type: 'markdown' | 'page'; // Whether it's a .md file or custom page.tsx
  featured?: boolean;
};

export const blogPosts: BlogPostConfig[] = [
  {
    slug: "why-every-business-needs-automation",
    title: "Why Every Business Needs Automation (Even Small Ones)",
    date: "2025-05-01",
    tags: ["automation", "business", "productivity", "small-business", "growth"],
    excerpt: "Discover how automation can save hours, reduce costs, and help small businesses compete with larger companies. Learn practical automation strategies that pay for themselves.",
    cover: "/BusinessAutomation.png",
    readTime: "8 min",
    type: "page",
    featured: true,
  },
  {
    slug: "ethical-linux-hardening-2025",
    title: "Ethical Linux Hardening: My 2025 Security Approach",
    date: "2025-01-15",
    tags: ["linux", "security", "hardening", "privacy", "cybersecurity"],
    excerpt: "A comprehensive guide to hardening Linux systems in 2025. From kernel security to network protection, learn ethical approaches to system security.",
    cover: "/linux-security-toolkit.png",
    readTime: "12 min",
    type: "page",
    featured: true,
  },
  {
    slug: "ats-resume-scorer",
    title: "I Built an ATS Resume Scorer (And It Changed My Job Hunt)",
    date: "2024-12-10",
    tags: ["career", "automation", "python", "job-search", "tools"],
    excerpt: "How I created an automated resume scoring tool that helped me understand what recruiters really look for. Includes code and insights.",
    cover: "/ats-helper.png",
    readTime: "10 min",
    type: "page",
  },
  {
    slug: "stay-motivated-as-a-developer",
    title: "How to Stay Motivated as a Developer (When Code Feels Like Work)",
    date: "2024-11-20",
    tags: ["motivation", "career", "growth", "productivity", "mindset"],
    excerpt: "Practical strategies for maintaining passion and momentum in your coding journey, even when the grind gets real.",
    cover: "/MotivatedAsDevelopers.png",
    readTime: "7 min",
    type: "page",
  },
  {
    slug: "what-i-wish-i-knew-before-learning-to-code",
    title: "What I Wish I Knew Before Learning to Code",
    date: "2024-11-15",
    tags: ["beginner", "career", "learning", "advice", "coding-journey"],
    excerpt: "Honest advice for new developers: the challenges, the misconceptions, and the mindset shifts that actually matter.",
    cover: "/LearningToCode.png",
    readTime: "9 min",
    type: "page",
  },
  {
    slug: "why-data-excites-me-and-where-i-see-it-going",
    title: "Why Data Excites Me (And Where I See It Going)",
    date: "2024-11-10",
    tags: ["data-science", "ai", "future", "analytics", "insights"],
    excerpt: "My perspective on the data revolution, from business intelligence to AI, and why we're just getting started.",
    cover: "/BlogPostImage1.png",
    readTime: "6 min",
    type: "page",
  },
  {
    slug: "why-security-matters-beginner-guide",
    title: "Why Security Matters: A Beginner's Guide to Staying Safe Online",
    date: "2024-11-05",
    tags: ["security", "privacy", "beginner", "cybersecurity", "safety"],
    excerpt: "Essential security practices everyone should know, explained in plain English. No technical jargon, just practical protection.",
    cover: "/BlogPostImage2.png",
    readTime: "8 min",
    type: "page",
  },
  {
    slug: "why-side-projects-can-be-more-valuable-than-certifications",
    title: "Why Side Projects Can Be More Valuable Than Certifications",
    date: "2024-10-30",
    tags: ["career", "projects", "learning", "portfolio", "skills"],
    excerpt: "Real projects teach you more than any certification. Here's why building beats studying, and how to showcase your work.",
    cover: "/CertificationsVsSideProjects.png",
    readTime: "11 min",
    type: "page",
  },
  {
    slug: "ai-tool-for-growth-creativity-efficiency",
    title: "The AI Tool That's Quietly Revolutionizing Growth, Creativity, and Efficiency",
    date: "2024-10-25",
    tags: ["ai", "productivity", "tools", "automation", "efficiency"],
    excerpt: "Discover the AI tools that are actually making a difference in how we work, create, and grow our businesses.",
    cover: "/BlogPostImage3.png",
    readTime: "5 min",
    type: "page",
  },
];

// Helper functions for working with blog posts
export function getAllBlogPosts(): BlogPostConfig[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedBlogPosts(): BlogPostConfig[] {
  return blogPosts.filter(post => post.featured).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPostConfig | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByTag(tag: string): BlogPostConfig[] {
  return blogPosts.filter(post => post.tags.includes(tag)).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllTags(): string[] {
  const allTags = blogPosts.flatMap(post => post.tags);
  return [...new Set(allTags)].sort();
}

export function getTagCounts(): Record<string, number> {
  const tagCounts: Record<string, number> = {};
  blogPosts.forEach(post => {
    post.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  return tagCounts;
}