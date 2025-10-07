import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/Header";
import Aurora from "@/components/Aurora";
import SiteFooter from "@/components/SiteFooter";
import { readBlogFile, listBlogSlugs } from "@/lib/safeFs";
import { getBlogPostBySlug } from "@/lib/blogConfig";
import { notFound } from "next/navigation";

// Define allowed parameters based on Next.js App Router
interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

// Render a blog post (only for markdown posts now)
export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  
  // Check if this slug exists in our blog config and if it's a markdown post
  const blogConfig = getBlogPostBySlug(slug);
  
  // If it's not a markdown post, or doesn't exist, let Next.js handle it (404 or custom page.tsx)
  if (!blogConfig || blogConfig.type !== 'markdown') {
    notFound();
  }
  
  const raw = readBlogFile(slug);
  const { data, content } = matter(raw);

  return (
    <>
      <div className="min-h-screen text-zinc-100 relative">
        <Header />
        <Aurora />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-20">
          <div className="max-w-screen-2xl mx-auto px-6">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link 
                href="/blog" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-mono text-sm inline-flex items-center gap-2"
              >
                ← Back to Blog
              </Link>
            </div>
            
            {/* Article Header */}
            <div className="max-w-5xl">
              <div className="flex flex-wrap gap-3 mb-8">
                {data.tags?.map((tag: string) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 border border-cyan-400/20 text-cyan-400 rounded-full text-sm font-mono hover:bg-cyan-400/20 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-text leading-tight">
                {data.title}
              </h1>
              
              <div className="flex items-center gap-8 text-base text-zinc-400 font-mono mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">G</span>
                  </div>
                  <span className="text-white">Giuseppe Giona</span>
                </div>
                <span>•</span>
                <span>{new Date(data.date).toLocaleDateString("en-US", { 
                  year: "numeric", 
                  month: "long", 
                  day: "numeric" 
                })}</span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold">~{Math.ceil(content.split(' ').length / 200)} min read</span>
              </div>
              
              {data.summary && (
                <p className="text-2xl text-zinc-300 leading-relaxed mb-10 max-w-4xl font-light">
                  {data.summary}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Main Article Content */}
        <main className="relative pb-24">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-16">
              
              {/* Table of Contents Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="glass rounded-xl p-6 mb-6">
                    <h3 className="text-sm font-semibold text-emerald-400 mb-4 uppercase tracking-wide">
                      In This Article
                    </h3>
                    <nav className="space-y-2 text-sm">
                      <a href="#intro" className="block text-zinc-400 hover:text-cyan-400 transition-colors">
                        Introduction
                      </a>
                      <a href="#setup" className="block text-zinc-400 hover:text-cyan-400 transition-colors">
                        Setup & Configuration
                      </a>
                      <a href="#implementation" className="block text-zinc-400 hover:text-cyan-400 transition-colors">
                        Implementation
                      </a>
                      <a href="#best-practices" className="block text-zinc-400 hover:text-cyan-400 transition-colors">
                        Best Practices
                      </a>
                    </nav>
                  </div>
                  
                  {/* Share & Actions */}
                  <div className="glass rounded-xl p-6">
                    <h3 className="text-sm font-semibold text-emerald-400 mb-4 uppercase tracking-wide">
                      Share Article
                    </h3>
                    <div className="flex flex-col gap-2">
                      <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition-colors">
                        <span className="w-4 h-4">📄</span>
                        Copy Link
                      </button>
                      <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition-colors">
                        <span className="w-4 h-4">🐦</span>
                        Share on X
                      </button>
                      <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition-colors">
                        <span className="w-4 h-4">💼</span>
                        Share on LinkedIn
                      </button>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Article Content - Much Wider */}
              <article className="lg:col-span-4">
                <div className="glass rounded-2xl p-8 lg:p-16">
                  <div className="prose prose-invert prose-zinc max-w-none prose-xl
                    prose-headings:gradient-text 
                    prose-headings:font-bold 
                    prose-h1:text-5xl prose-h1:mb-10 prose-h1:mt-16 prose-h1:leading-tight
                    prose-h2:text-4xl prose-h2:mb-8 prose-h2:mt-12 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                    prose-h3:text-3xl prose-h3:mb-6 prose-h3:mt-10 prose-h3:text-emerald-400
                    prose-h4:text-2xl prose-h4:mb-4 prose-h4:mt-8 prose-h4:text-cyan-400
                    prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-8 prose-p:text-lg
                    prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300 prose-a:transition-colors
                    prose-strong:text-emerald-400 prose-strong:font-semibold
                    prose-em:text-cyan-300 prose-em:not-italic
                    prose-code:text-emerald-300 prose-code:bg-emerald-400/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-base prose-code:font-mono
                    prose-pre:bg-zinc-900/50 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:p-6 prose-pre:overflow-hidden
                    prose-blockquote:border-l-4 prose-blockquote:border-cyan-400 prose-blockquote:bg-cyan-400/5 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:my-8
                    prose-blockquote:text-cyan-100 prose-blockquote:italic prose-blockquote:text-lg
                    prose-ul:text-zinc-300 prose-ol:text-zinc-300 prose-ul:text-lg prose-ol:text-lg
                    prose-li:mb-3 prose-li:text-zinc-300
                    prose-img:rounded-xl prose-img:border prose-img:border-white/10 prose-img:shadow-2xl prose-img:my-10
                    prose-hr:border-white/10 prose-hr:my-16
                    prose-table:border-collapse prose-table:border prose-table:border-white/10 prose-table:rounded-lg prose-table:overflow-hidden prose-table:my-8
                    prose-th:bg-white/5 prose-th:text-emerald-400 prose-th:font-semibold prose-th:p-4 prose-th:border prose-th:border-white/10 prose-th:text-base
                    prose-td:p-4 prose-td:border prose-td:border-white/10 prose-td:text-zinc-300 prose-td:text-base"
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {content}
                    </ReactMarkdown>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = listBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}