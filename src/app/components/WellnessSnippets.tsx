import Link from "next/link";
import { BookOpen, ArrowRight, Mic, Youtube } from "lucide-react";

const blogs = [
  { title: "Understanding Your Prakriti (Body Constitution)", author: "Dr. Suresh Joshi", category: "Fundamentals", color: "#4a7c3f", readTime: "8 min" },
  { title: "5 Ayurvedic Morning Rituals for Optimal Health", author: "Dr. Meera Desai", category: "Lifestyle", color: "#c8973a", readTime: "6 min" },
  { title: "Panchakarma: The Complete Ayurvedic Detox Guide", author: "Dr. A. Kulkarni", category: "Therapy", color: "#3a7eb5", readTime: "12 min" },
];

const podcasts = [
  { title: "Ayurveda & Modern Chronic Diseases", speaker: "Dr. S. Joshi", duration: "24 min" },
  { title: "Women's Health Through Ayurveda", speaker: "Dr. P. Venkat", duration: "32 min" },
];

export default function WellnessSnippets() {
  return (
    <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Blogs */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--ayu-gold)" }}>Expert Insights</p>
                <h2 className="text-2xl font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Wellness Library</h2>
              </div>
              <Link href="/wellness" className="text-sm font-semibold flex items-center gap-1" style={{ color: "var(--ayu-green)" }}>
                All Articles <ArrowRight size={13} />
              </Link>
            </div>
            <div className="space-y-4">
              {blogs.map((b) => (
                <div key={b.title} className="ayu-card bg-white rounded-xl p-4 flex gap-4" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${b.color}12` }}>
                    <BookOpen size={18} style={{ color: b.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full mb-1 inline-block" style={{ background: `${b.color}12`, color: b.color }}>{b.category}</span>
                    <h3 className="font-bold text-sm leading-snug" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{b.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                      <span>{b.author}</span>
                      <span>• {b.readTime} read</span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="flex-shrink-0 self-center" style={{ color: "var(--ayu-sage)" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Podcasts & Videos */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold flex items-center gap-2" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>
                  <Mic size={18} style={{ color: "var(--ayu-gold)" }} /> Health Talks
                </h3>
                <Link href="/wellness/podcasts" className="text-xs font-semibold" style={{ color: "var(--ayu-green)" }}>All</Link>
              </div>
              <div className="space-y-3">
                {podcasts.map((p) => (
                  <div key={p.title} className="ayu-card bg-white rounded-xl p-4 flex items-center gap-3" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <Mic size={16} style={{ color: "var(--ayu-gold)" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm truncate" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{p.title}</p>
                      <p className="text-xs text-gray-400">{p.speaker} • {p.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-5 text-white" style={{ background: "linear-gradient(135deg, var(--ayu-forest), var(--ayu-green))" }}>
              <Youtube size={24} className="mb-2" style={{ color: "var(--ayu-amber)" }} />
              <h3 className="font-bold mb-1" style={{ fontFamily: "var(--font-heading)" }}>YouTube Health Videos</h3>
              <p className="text-sm text-white/80 mb-3">Subscribe to our channel for Ayurvedic health education videos by expert Vaidyas.</p>
              <Link href="/wellness/videos" className="btn-gold text-sm inline-flex items-center gap-1">
                Watch Now <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
