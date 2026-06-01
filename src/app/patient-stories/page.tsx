import PageHeroSection from "@/app/components/PageHeroSection";
import Link from "next/link";
import { Play, Star, Quote, ArrowRight } from "lucide-react";

const videoTestimonials = [
  { name: "Suresh Mehta", age: 58, condition: "Rheumatoid Arthritis", doctor: "Dr. A. Kulkarni", duration: "3:45 min", desc: "After 10 years of suffering, Panchakarma completely changed my life. I can now walk freely without any pain medication.", rating: 5 },
  { name: "Kavitha Ramachandran", age: 34, condition: "PCOS & Infertility", doctor: "Dr. P. Venkat", duration: "4:20 min", desc: "Within 6 months of Ayurvedic treatment, my PCOS was under control and I conceived naturally. Forever grateful.", rating: 5 },
  { name: "Rajesh Patil", age: 45, condition: "Fistula-in-Ano", doctor: "Dr. R. Nair", duration: "3:10 min", desc: "The Ksharasutra procedure was painless and I was discharged in 2 days. No recurrence even after 2 years.", rating: 5 },
  { name: "Anita Sharma", age: 52, condition: "Diabetes Management", doctor: "Dr. S. Joshi", duration: "5:00 min", desc: "My HbA1c dropped from 9.2 to 6.8 in 4 months without any insulin. The Ayurvedic protocol really works.", rating: 5 },
  { name: "Vikram Singh", age: 62, condition: "Lumbar Spondylosis", doctor: "Dr. M. Desai", duration: "3:30 min", desc: "3 years of back pain resolved in just one Panchakarma course. The Kati Basti treatment was extraordinary.", rating: 5 },
  { name: "Priya Nambiar", age: 29, condition: "Chronic Skin Disease", doctor: "Dr. K. Pillai", duration: "4:15 min", desc: "Psoriasis since childhood finally cleared through Ayurvedic blood purification treatment. Amazing results.", rating: 5 },
];

const colors = ["#e05454", "#4a7c3f", "#3a7eb5", "#c8973a", "#7b5ea7", "#3a9e8f"];

export default function PatientStoriesPage() {
  return (
    <>
      <PageHeroSection
        title="Patient Stories"
        subtitle="Real stories of healing — watch and read how our patients transformed their health with Ayurveda."
        breadcrumb={[{ label: "Patient Stories", href: "/patient-stories" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--ayu-gold)" }}>Real Healing, Real People</p>
            <h2 className="section-title">Video Testimonials</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {videoTestimonials.map((t, i) => (
              <div key={t.name} className="ayu-card bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                <div className="relative h-44 flex items-center justify-center cursor-pointer group" style={{ background: `${colors[i % colors.length]}12` }}>
                  <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={24} style={{ color: colors[i % colors.length] }} fill={colors[i % colors.length]} />
                  </div>
                  <div className="absolute bottom-3 right-3 text-xs px-2 py-0.5 rounded-full text-white" style={{ background: "rgba(0,0,0,0.5)" }}>{t.duration}</div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{t.name}, {t.age}</h3>
                      <p className="text-xs" style={{ color: colors[i % colors.length] }}>{t.condition}</p>
                    </div>
                    <div className="flex">
                      {[...Array(t.rating)].map((_, s) => (
                        <Star key={s} size={12} fill="#c8973a" stroke="none" />
                      ))}
                    </div>
                  </div>
                  <Quote size={16} className="mb-1" style={{ color: "var(--ayu-gold)", opacity: 0.6 }} />
                  <p className="text-sm text-gray-600 leading-relaxed mb-3 italic">{t.desc}</p>
                  <p className="text-xs text-gray-400">Treated by: <span className="font-semibold" style={{ color: "var(--ayu-green)" }}>{t.doctor}</span></p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA — NOTE: Feedback is a separate navigation tile now, not a sub-tile here */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl p-8 text-white" style={{ background: "linear-gradient(135deg, var(--ayu-forest), var(--ayu-green))" }}>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>Photo Testimonials</h3>
              <p className="text-white/80 text-sm mb-4">Read written testimonials with patient photos and treating doctor details.</p>
              <Link href="/patient-stories/photo-testimonials" className="btn-gold inline-flex items-center gap-2 text-sm">View All <ArrowRight size={14} /></Link>
            </div>
            <div className="rounded-2xl p-8 text-white" style={{ background: "linear-gradient(135deg, #c8973a, #e8b45a)" }}>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>Share Your Story</h3>
              <p className="text-white/80 text-sm mb-4">Your healing story can inspire others. Submit your feedback or testimonial via our Feedback & Review section.</p>
              <Link href="/feedback" className="btn-outline inline-flex items-center gap-2 text-sm" style={{ borderColor: "white", color: "white" }}>
                Feedback &amp; Review <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
