import Link from "next/link";
import Image from "next/image";
import Aurora from "@/components/Aurora";

export const metadata = {
  title: "Why Data Excites Me (And Where I See It Going) | Giuseppe Giona",
  description: "My perspective on the data revolution, from business intelligence to AI, and why we're just getting started.",
  openGraph: {
    title: "Why Data Excites Me (And Where I See It Going)",
    description: "My perspective on the data revolution, from business intelligence to AI, and why we're just getting started.",
    images: ["/BlogPostImage1.png"],
  },
};

export default function DataExcitementPost() {
  return (
    <>
      <div className="min-h-screen text-zinc-100 relative">
        <Aurora />
        
        <section className="relative pt-24 pb-8">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="mb-8">
              <Link 
                href="/blog" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-mono text-sm inline-flex items-center gap-2 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
                Back to Blog
              </Link>
            </div>
            
            <div className="max-w-6xl">
              <div className="flex flex-wrap gap-3 mb-8">
                {["data-science", "ai", "future", "analytics", "insights"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 border border-cyan-400/20 text-cyan-400 rounded-full text-sm font-mono hover:bg-cyan-400/20 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text text-transparent leading-tight">
                Why Data Excites Me
                <span className="block text-4xl lg:text-6xl mt-4 text-blue-400">
                  (And Where It's Going)
                </span>
              </h1>
              
              <div className="flex items-center gap-6 text-zinc-400 font-mono text-sm mb-12">
                <time dateTime="2024-11-10">November 10, 2024</time>
                <span>•</span>
                <span>6 min read</span>
                <span>•</span>
                <span className="text-blue-400">Data & AI</span>
              </div>
            </div>
          </div>
        </section>

        <main className="relative">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="prose prose-xl prose-invert max-w-none">
              <div className="text-xl leading-relaxed text-zinc-300 mb-12 border-l-4 border-blue-400 pl-8 bg-blue-400/5 rounded-r-xl py-6">
                <p className="mb-6">
                  Data isn't just numbers in spreadsheets anymore. It's the language that businesses speak, the fuel that powers AI, and the key to understanding our increasingly complex world.
                </p>
                <p className="text-blue-400 font-semibold">
                  We're at the beginning of the most exciting data revolution in history.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-2xl p-8 mb-16">
                <h2 className="text-3xl font-bold text-blue-400 mb-6">📊 The Data Revolution</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-4">🎯 Business Intelligence</h3>
                    <p className="text-zinc-400 text-sm mb-3">Making smarter decisions with data</p>
                    <ul className="space-y-1 text-sm text-zinc-300">
                      <li>• Real-time dashboards</li>
                      <li>• Predictive analytics</li>
                      <li>• Customer insights</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-4">🤖 AI & Machine Learning</h3>
                    <p className="text-zinc-400 text-sm mb-3">Teaching machines to learn from data</p>
                    <ul className="space-y-1 text-sm text-zinc-300">
                      <li>• Pattern recognition</li>
                      <li>• Automated decision making</li>
                      <li>• Intelligent recommendations</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-4">🌍 Societal Impact</h3>
                    <p className="text-zinc-400 text-sm mb-3">Solving real-world problems</p>
                    <ul className="space-y-1 text-sm text-zinc-300">
                      <li>• Healthcare breakthroughs</li>
                      <li>• Climate modeling</li>
                      <li>• Social good initiatives</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-2xl p-8 mb-16">
                <h2 className="text-3xl font-bold text-purple-400 mb-6">🚀 Where Data is Headed</h2>
                
                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-3">🧠 Democratization of AI</h3>
                    <p className="text-zinc-300 text-sm">
                      No-code ML platforms are making advanced analytics accessible to everyone, not just data scientists.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-3">⚡ Real-time Everything</h3>
                    <p className="text-zinc-300 text-sm">
                      Stream processing and edge computing are enabling instant insights and immediate action.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-3">🔒 Privacy-First Analytics</h3>
                    <p className="text-zinc-300 text-sm">
                      Federated learning and differential privacy are making it possible to gain insights while protecting individual privacy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-blue-400/20 rounded-2xl p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">The Data Story is Just Beginning</h3>
                <p className="text-lg text-zinc-300 mb-6">
                  Every app, every device, every interaction generates data. The companies and individuals who learn to harness this information will shape the future.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/projects"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 to-purple-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-200"
                  >
                    See Data Projects
                    <span>→</span>
                  </Link>
                  <Link 
                    href="/blog/ai-tool-for-growth-creativity-efficiency"
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors duration-200"
                  >
                    AI Tools Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
