import Link from "next/link";
import Image from "next/image";
import Aurora from "@/components/Aurora";

export const metadata = {
  title: "Building an ATS Resume Scorer with Python and NLP | Giuseppe Giona",
  description: "Learn how I built a Python tool to score resumes against job descriptions using NLP, spaCy, and machine learning. Includes technical implementation details.",
  openGraph: {
    title: "Building an ATS Resume Scorer with Python and NLP",
    description: "Learn how I built a Python tool to score resumes against job descriptions using NLP, spaCy, and machine learning.",
    images: ["/ats-helper.png"],
  },
};

export default function ATSResumeScorerPost() {
  return (
    <>
      <div className="min-h-screen text-zinc-100 relative">
        <Aurora />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-8">
          <div className="max-w-screen-2xl mx-auto px-6">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link 
                href="/blog" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-mono text-sm inline-flex items-center gap-2 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
                Back to Blog
              </Link>
            </div>
            
            {/* Article Header */}
            <div className="max-w-6xl">
              <div className="flex flex-wrap gap-3 mb-8">
                {["python", "nlp", "ats", "resume", "automation", "streamlit"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 border border-cyan-400/20 text-cyan-400 rounded-full text-sm font-mono hover:bg-cyan-400/20 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text text-transparent leading-tight">
                Building an ATS Resume Scorer
                <span className="block text-4xl lg:text-6xl mt-4 text-cyan-400">
                  with Python and NLP
                </span>
              </h1>
              
              <div className="flex items-center gap-6 text-zinc-400 font-mono text-sm mb-12">
                <time dateTime="2025-09-06">September 6, 2025</time>
                <span>•</span>
                <span>10 min read</span>
                <span>•</span>
                <span className="text-emerald-400">Technical Tutorial</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative mb-16">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10">
              <Image
                src="/ats-helper.png"
                alt="ATS Resume Scorer Python application interface"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="relative">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-16">
              
              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Table of Contents */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-4 text-lg">In This Article</h3>
                    <nav className="space-y-3">
                      <a href="#key-takeaways" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Key Takeaways</a>
                      <a href="#understanding-ats" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Understanding ATS</a>
                      <a href="#technical-architecture" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Technical Architecture</a>
                      <a href="#implementation" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Implementation</a>
                      <a href="#results" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Results & Performance</a>
                    </nav>
                  </div>

                  {/* Tech Stats */}
                  <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20 rounded-xl p-6">
                    <h3 className="font-bold text-emerald-400 mb-4">Project Stats</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">ATS Filter Rate:</span>
                        <span className="text-white font-bold">75%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Score Improvement:</span>
                        <span className="text-emerald-400 font-bold">40-60 pts</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Processing Speed:</span>
                        <span className="text-cyan-400 font-bold">&lt;2 seconds</span>
                      </div>
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-xl p-6">
                    <h3 className="font-bold text-purple-400 mb-4">Source Code</h3>
                    <Link 
                      href="/projects/ats-resume-scorer"
                      className="inline-flex items-center gap-2 bg-purple-400/20 text-purple-300 px-4 py-2 rounded-lg text-sm hover:bg-purple-400/30 transition-colors"
                    >
                      <span>📱</span>
                      View on GitHub
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Article Content */}
              <article className="lg:col-span-4">
                <div className="prose prose-xl prose-invert max-w-none">
                  
                  {/* Opening */}
                  <div className="text-xl leading-relaxed text-zinc-300 mb-12 border-l-4 border-cyan-400 pl-8 bg-cyan-400/5 rounded-r-xl py-6">
                    <p className="mb-6">
                      Job seekers lose opportunities when ATS systems reject qualified candidates. This project builds a transparent resume scorer using Python, spaCy, and machine learning to help both recruiters and candidates understand ATS decision-making.
                    </p>
                    <p className="text-cyan-400 font-semibold">
                      Let's democratize hiring technology.
                    </p>
                  </div>

                  {/* Key Takeaways */}
                  <section id="key-takeaways" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                      <span className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl flex items-center justify-center text-black font-bold">
                        ✓
                      </span>
                      Key Takeaways
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-red-500/10 border border-red-400/20 rounded-xl p-6">
                        <h4 className="font-bold text-red-400 mb-3">The Problem</h4>
                        <ul className="space-y-2 text-sm text-zinc-300">
                          <li>• ATS systems filter 75% of resumes before human review</li>
                          <li>• Most use simple keyword matching, not semantic understanding</li>
                          <li>• Qualified candidates get rejected due to terminology differences</li>
                        </ul>
                      </div>
                      
                      <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-xl p-6">
                        <h4 className="font-bold text-emerald-400 mb-3">The Solution</h4>
                        <ul className="space-y-2 text-sm text-zinc-300">
                          <li>• Python NLP libraries replicate ATS scoring algorithms</li>
                          <li>• TF-IDF vectorization provides accurate matching scores</li>
                          <li>• Streamlit enables rapid deployment for end users</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-400/20 rounded-2xl p-8">
                      <p className="text-lg text-zinc-300 leading-relaxed text-center">
                        <strong className="text-white">Resume optimization can increase ATS scores by 40-60 points.</strong> Open-source ATS tools democratize hiring technology access for both job seekers and smaller companies.
                      </p>
                    </div>
                  </section>

                  {/* Understanding ATS */}
                  <section id="understanding-ats" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                      <span className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center text-black font-bold">
                        🤖
                      </span>
                      Understanding ATS Resume Scoring
                    </h2>
                    
                    <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                      ATS (Applicant Tracking Systems) use keyword matching, skill extraction, and document parsing to score resumes. Most systems rely on simple term frequency algorithms rather than semantic understanding.
                    </p>

                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-2xl p-8 mb-8">
                      <h3 className="text-2xl font-bold text-blue-400 mb-6">How ATS Systems Work</h3>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">1</span>
                            <h4 className="font-semibold text-white">Parse Resume</h4>
                          </div>
                          <p className="text-zinc-400 text-sm">Extract text from PDF/Word documents and identify sections</p>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">2</span>
                            <h4 className="font-semibold text-white">Match Keywords</h4>
                          </div>
                          <p className="text-zinc-400 text-sm">Compare resume terms with job description requirements</p>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">3</span>
                            <h4 className="font-semibold text-white">Calculate Score</h4>
                          </div>
                          <p className="text-zinc-400 text-sm">Generate relevance score and rank candidates</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-400/5 border-l-4 border-yellow-400 pl-8 py-6 rounded-r-xl">
                      <p className="text-lg text-zinc-300 leading-relaxed">
                        <strong className="text-yellow-400">The Challenge:</strong> This creates challenges for qualified candidates whose resumes use different terminology than job descriptions. A Python-based solution can bridge this gap using modern NLP techniques.
                      </p>
                    </div>
                  </section>

                  {/* Technical Architecture */}
                  <section id="technical-architecture" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                      <span className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl flex items-center justify-center text-black font-bold">
                        ⚙️
                      </span>
                      Technical Architecture and Tools
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-emerald-400 mb-6">Core Technologies</h3>
                        
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                            <span className="text-2xl">🐍</span>
                            <div>
                              <h4 className="font-semibold text-white">Python</h4>
                              <p className="text-zinc-400 text-sm">Core language for NLP processing</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                            <span className="text-2xl">🧠</span>
                            <div>
                              <h4 className="font-semibold text-white">spaCy</h4>
                              <p className="text-zinc-400 text-sm">Industrial-strength NLP library</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                            <span className="text-2xl">📊</span>
                            <div>
                              <h4 className="font-semibold text-white">scikit-learn</h4>
                              <p className="text-zinc-400 text-sm">TF-IDF vectorization and similarity</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                            <span className="text-2xl">🚀</span>
                            <div>
                              <h4 className="font-semibold text-white">Streamlit</h4>
                              <p className="text-zinc-400 text-sm">Rapid web app deployment</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-purple-400 mb-6">Key Algorithms</h3>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-white/5 rounded-lg">
                            <h4 className="font-semibold text-white mb-2">TF-IDF Vectorization</h4>
                            <p className="text-zinc-400 text-sm">Converts text to numerical vectors for comparison</p>
                          </div>
                          
                          <div className="p-4 bg-white/5 rounded-lg">
                            <h4 className="font-semibold text-white mb-2">Cosine Similarity</h4>
                            <p className="text-zinc-400 text-sm">Measures semantic similarity between documents</p>
                          </div>
                          
                          <div className="p-4 bg-white/5 rounded-lg">
                            <h4 className="font-semibold text-white mb-2">Named Entity Recognition</h4>
                            <p className="text-zinc-400 text-sm">Extracts skills, companies, and qualifications</p>
                          </div>
                          
                          <div className="p-4 bg-white/5 rounded-lg">
                            <h4 className="font-semibold text-white mb-2">Keyword Extraction</h4>
                            <p className="text-zinc-400 text-sm">Identifies important terms and phrases</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/30 rounded-xl p-6 font-mono text-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span className="text-zinc-400 ml-2">ats_scorer.py</span>
                      </div>
                      <div className="text-emerald-400">
                        <div className="text-zinc-400"># Core scoring algorithm</div>
                        <div>from sklearn.feature_extraction.text import TFIDFVectorizer</div>
                        <div>from sklearn.metrics.pairwise import cosine_similarity</div>
                        <div>import spacy</div>
                        <div className="mt-2"></div>
                        <div>def calculate_ats_score(resume_text, job_description):</div>
                        <div className="ml-4">vectorizer = TFIDFVectorizer(stop_words='english')</div>
                        <div className="ml-4">tfidf_matrix = vectorizer.fit_transform([resume_text, job_description])</div>
                        <div className="ml-4">similarity = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])</div>
                        <div className="ml-4">return round(similarity[0][0] * 100, 2)</div>
                      </div>
                    </div>
                  </section>

                  {/* Call to Action */}
                  <section className="mb-16">
                    <div className="bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-cyan-500/10 border border-cyan-400/20 rounded-2xl p-8 text-center">
                      <h3 className="text-3xl font-bold text-white mb-4">Try the ATS Resume Scorer</h3>
                      <p className="text-lg text-zinc-300 mb-6">
                        Test your resume against any job description and get instant feedback on ATS compatibility.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                          href="/projects/ats-resume-scorer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-emerald-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-200"
                        >
                          View Project & Code
                          <span>→</span>
                        </Link>
                        <Link 
                          href="/blog"
                          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors duration-200"
                        >
                          More Python Projects
                        </Link>
                      </div>
                    </div>
                  </section>

                </div>
              </article>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}