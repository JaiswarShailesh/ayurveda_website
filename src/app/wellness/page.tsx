import PageHeroSection from "@/app/components/PageHeroSection";
import Link from "next/link";
import { BookOpen, Mic, Youtube, ArrowRight, Leaf } from "lucide-react";

const blogs = [
  { title: "Understanding Your Prakriti: The Ayurvedic Body Constitution", author: "Dr. Suresh Joshi", dept: "Kayachikitsa", category: "Fundamentals", readTime: "8 min", excerpt: "Discover the three doshas — Vata, Pitta and Kapha — and how knowing your constitution can transform your health decisions, diet and daily routine." },
  { title: "5 Ayurvedic Morning Rituals (Dinacharya) for Optimal Health", author: "Dr. Meera Desai", dept: "Internal Medicine", category: "Lifestyle", readTime: "6 min", excerpt: "From tongue scraping to oil pulling and yoga — a practical guide to building a morning routine rooted in Ayurvedic wisdom." },
  { title: "Panchakarma: The Complete Ayurvedic Detox Guide", author: "Dr. Aishwarya Kulkarni", dept: "Panchakarma", category: "Therapy", readTime: "12 min", excerpt: "A comprehensive overview of the five cleansing therapies, who benefits most and what to expect during a Panchakarma program." },
  { title: "Ayurvedic Management of PCOS: A Natural Approach", author: "Dr. Preethi Venkat", dept: "Gynaecology", category: "Women's Health", readTime: "10 min", excerpt: "Evidence-based Ayurvedic protocols for polycystic ovarian syndrome including herbs, diet modifications and Panchakarma interventions." },
  { title: "Joint Pain & Arthritis: Vata Imbalance and Ayurvedic Solutions", author: "Dr. Ramesh Nair", dept: "Shalya Tantra", category: "Musculoskeletal", readTime: "9 min", excerpt: "How Ayurveda views degenerative joint disease and the therapeutic approaches including Basti therapy and anti-inflammatory herbs." },
  { title: "Seasonal Eating (Ritucharya) for Year-Round Health", author: "Dr. Suresh Joshi", dept: "Kayachikitsa", category: "Nutrition", readTime: "7 min", excerpt: "Adapt your diet with the seasons following Ayurvedic seasonal regimen to prevent disease and maintain energy and immunity." },
];

const categoryColors: Record<string, string> = {
  "Fundamentals": "#4a7c3f", "Lifestyle": "#c8973a", "Therapy": "#3a7eb5",
  "Women's Health": "#c4683a", "Musculoskeletal": "#7b5ea7", "Nutrition": "#3a9e8f"
};

export default function WellnessLibraryPage() {
  return (
    <>
      <PageHeroSection
        title="Care & Wellness Library"
        subtitle="Expert health insights, disease guides, lifestyle tips and research — written by our senior Vaidyas."
        breadcrumb={[{ label: "Wellness Library", href: "/wellness" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto">
          {/* Section nav */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { label: "Health Blogs", icon: BookOpen, href: "/wellness", active: true },
              { label: "Health Talks & Podcasts", icon: Mic, href: "/wellness/podcasts", active: false },
              { label: "YouTube Videos", icon: Youtube, href: "/wellness/videos", active: false },
            ].map(({ label, icon: Icon, href, active }) => (
              <Link key={label} href={href} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all" style={active ? { background: "var(--ayu-forest)", color: "white" } : { background: "white", color: "var(--ayu-forest)", border: "1px solid rgba(0,0,0,0.1)" }}>
                <Icon size={14} /> {label}
              </Link>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button className="px-4 py-1.5 rounded-full text-sm font-medium text-white" style={{ background: "var(--ayu-forest)" }}>All Topics</button>
            {Object.keys(categoryColors).map((cat) => (
              <button key={cat} className="px-4 py-1.5 rounded-full text-sm font-medium bg-white border border-gray-200 hover:border-green-300 transition-colors" style={{ color: "var(--ayu-forest)" }}>{cat}</button>
            ))}
          </div>

          {/* Featured article */}
          <div className="mb-10 rounded-2xl p-8 md:p-10" style={{ background: "linear-gradient(135deg, var(--ayu-forest), var(--ayu-green))" }}>
            <span className="ayu-badge mb-3 inline-block">Featured Article</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Panchakarma: The Complete Ayurvedic Detox Guide
            </h2>
            <p className="text-white/80 mb-4 max-w-2xl">A comprehensive overview of the five cleansing therapies, who benefits most and what to expect during a Panchakarma program at SVKM Hospital.</p>
            <div className="flex items-center gap-4 text-white/60 text-sm mb-5">
              <span>By Dr. Aishwarya Kulkarni</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
            <button className="btn-gold inline-flex items-center gap-2 text-sm">Read Full Article <ArrowRight size={14} /></button>
          </div>

          {/* Blog grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogs.map((b) => (
              <div key={b.title} className="ayu-card bg-white rounded-2xl overflow-hidden flex flex-col" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                <div className="h-3" style={{ background: categoryColors[b.category] || "#4a7c3f" }} />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: `${categoryColors[b.category]}15`, color: categoryColors[b.category] }}>{b.category}</span>
                    <span className="text-xs text-gray-400">{b.readTime} read</span>
                  </div>
                  <h3 className="font-bold mb-2 leading-snug" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{b.excerpt}</p>
                  <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <div>
                      <p className="text-xs font-semibold" style={{ color: "var(--ayu-green)" }}>{b.author}</p>
                      <p className="text-xs text-gray-400">{b.dept}</p>
                    </div>
                    <button className="text-xs font-semibold flex items-center gap-1" style={{ color: "var(--ayu-gold)" }}>
                      Read <ArrowRight size={11} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Research literature */}
          <div className="rounded-2xl p-8 bg-white" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            <div className="flex items-center gap-3 mb-4">
              <Leaf size={22} style={{ color: "var(--ayu-gold)" }} />
              <h3 className="text-xl font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Ayurvedic Research Literature</h3>
            </div>
            <p className="text-sm text-gray-600 mb-5">Reference library of classical Ayurvedic texts, research papers and clinical evidence curated by our Research Centre.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {["Charaka Samhita Excerpts", "Sushruta Samhita References", "Ashtanga Hridayam", "Recent Clinical Trials", "Ethnobotanical Studies", "WHO-AYUSH Guidelines"].map((item) => (
                <div key={item} className="flex items-center gap-2 p-3 rounded-lg text-sm" style={{ background: "var(--ayu-beige)", color: "var(--ayu-forest)" }}>
                  <BookOpen size={14} style={{ color: "var(--ayu-gold)", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
