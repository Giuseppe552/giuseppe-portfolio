import Link from "next/link";
import matter from "gray-matter";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import BackgroundFX from "@/components/BackgroundFX";
import SiteFooter from "@/components/SiteFooter";
import { readBlogFile, listBlogSlugs } from "@/lib/safeFs";
import BlogList, { BlogPost } from "../../components/BlogList";

function getBlogPosts(): BlogPost[] {
  const slugs = listBlogSlugs();
  return slugs.map(slug => {
    const raw = readBlogFile(slug);
    const { data, content } = matter(raw);
    let dateStr = "";
    if (typeof data.date === "object" && data.date instanceof Date) {
      dateStr = data.date.toISOString().slice(0, 10);
    } else if (typeof data.date === "string") {
      const d = new Date(data.date);
      dateStr = isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
    }
    return {
      slug,
      title: data.title || slug,
      date: dateStr,
      tags: data.tags || [],
      repo: data.repo || "",
      content,
    };
  });
}

export default function BlogPage() {
  const posts = getBlogPosts();
  return (
    <div className="min-h-screen text-zinc-100 relative font-['JetBrains_Mono',monospace] cursor-pointer">
      <ResponsiveHeader />
      <BackgroundFX />
      <main>
        <BlogList posts={posts} />
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
