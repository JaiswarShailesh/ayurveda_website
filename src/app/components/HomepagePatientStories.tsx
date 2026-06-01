import Link from "next/link";
import { Play, Star, Quote, MessageCircle } from "lucide-react";

const stories = [
  { name: "Suresh Mehta, 58", condition: "Rheumatoid Arthritis", quote: "After 10 years of suffering, Panchakarma gave me back my life. I walk freely now without any pain medication.", rating: 5, color: "#4a7c3f", type: "video" },
  { name: "Kavitha R., 34", condition: "PCOS & Infertility", quote: "Within 6 months, my PCOS was controlled and I conceived naturally. Forever grateful to the team at SVKM.", rating: 5, color: "#c4683a", type: "video" },
  { name: "Rajesh Patil, 45", condition: "Fistula-in-Ano", quote: "Ksharasutra was painless and discharged in 2 days. Zero recurrence in 2 years. Outstanding treatment.", rating: 5, color: "#3a7eb5", type: "photo" },
  { name: "Anita Sharma, 52", condition: "Type 2 Diabetes", quote: "HbA1c dropped from 9.2 to 6.8 in just 4 months without insulin. Truly life-changing Ayurvedic protocol.", rating: 5, color: "#c8973a", type: "photo" },
];

export default function HomepagePatientStories() {
  return (
    <section className="py-16 px-4" style={{ background: "var(--ayu-beige)" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--ayu-gold)" }}>Healing Stories</p>
          <h2 className="section-title">Patient Testimonials</h2>
          <div className="gold-divider" />
          <p className="section-subtitle mt-3 max-w-xl mx-auto">Real patients, real results — see how Ayurveda transformed their health.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stories.map((s) => (
            <div key={s.name} className="ayu-card bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="relative h-32 flex items-center justify-center" style={{ background: `${s.color}10` }}>
                {s.type === "video" ? (
                  <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play size={18} style={{ color: s.color }} fill={s.color} />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ background: s.color }}>
                    {s.name[0]}
                  </div>
                )}
                <span className="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full text-white font-semibold" style={{ background: s.color }}>
                  {s.type === "video" ? "▶ Video" : "Photo"}
                </span>
              </div>
              <div className="p-4">
                <div className="flex mb-2">
                  {[...Array(s.rating)].map((_, j) => <Star key={j} size={11} fill="#c8973a" stroke="none" />)}
                </div>
                <Quote size={14} className="mb-1" style={{ color: s.color, opacity: 0.5 }} />
                <p className="text-xs text-gray-600 leading-relaxed italic mb-3">{s.quote}</p>
                <p className="text-xs font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{s.name}</p>
                <p className="text-xs" style={{ color: s.color }}>{s.condition}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center flex flex-wrap gap-3 justify-center">
          <Link href="/patient-stories" className="btn-primary inline-flex items-center gap-2">
            <Play size={15} /> Watch More Stories
          </Link>
          {/* Feedback is now a separate nav tile */}
          <Link href="/feedback" className="btn-outline inline-flex items-center gap-2">
            <MessageCircle size={15} /> Feedback &amp; Review
          </Link>
        </div>
      </div>
    </section>
  );
}
