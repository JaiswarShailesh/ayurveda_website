"use client";
import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  { name: "Suresh Mehta", role: "Patient – Rheumatoid Arthritis", text: "After 10 years of suffering, the Panchakarma treatment here completely changed my life. I can walk freely now without any pain medication. The doctors are genuinely knowledgeable and caring.", rating: 5, color: "#4a7c3f" },
  { name: "Kavitha Ramachandran", role: "Patient – PCOS & Infertility", text: "Within 6 months of Ayurvedic treatment, my PCOS was under control and I conceived naturally. The approach was holistic and personalised. Forever grateful to Dr. Venkat and the team.", rating: 5, color: "#c4683a" },
  { name: "Rajesh Patil", role: "Patient – Fistula-in-Ano", text: "The Ksharasutra procedure was completely painless and I was discharged in just 2 days. No recurrence even after 2 years. Truly outstanding technique and very caring staff throughout.", rating: 5, color: "#3a7eb5" },
  { name: "Anita Sharma", role: "Patient – Type 2 Diabetes", text: "My HbA1c dropped from 9.2 to 6.8 in just 4 months without insulin. The Ayurvedic protocol — herbs, diet and lifestyle — really works. I feel healthier than I have in decades.", rating: 5, color: "#c8973a" },
  { name: "Dr. Kavita Iyer", role: "Consultant Physician", text: "Their approach to Ayurveda is deeply rooted in tradition yet extremely professional. The integration of classical protocols with modern diagnostics sets this hospital apart from others.", rating: 5, color: "#7b5ea7" },
  { name: "Vikram Singh", role: "Patient – Lumbar Spondylosis", text: "Three years of debilitating back pain resolved after one Panchakarma course. The Kati Basti treatment was extraordinary. The hospital environment is serene and healing in itself.", rating: 5, color: "#3a9e8f" },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="py-16 px-4" style={{ background: "linear-gradient(135deg, var(--ayu-forest) 0%, #3a6e34 50%, #2d5a27 100%)" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--ayu-amber)" }}>Patient Voices</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>What Our Patients Say</h2>
          <div className="w-14 h-0.5 mx-auto mt-4" style={{ background: "var(--ayu-amber)" }} />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 text-center relative">
            <Quote size={40} className="mx-auto mb-4 opacity-40" style={{ color: "var(--ayu-amber)" }} />
            <div className="flex justify-center mb-4">
              {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="#e8b45a" stroke="none" />)}
            </div>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed italic mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white mx-auto mb-2" style={{ background: t.color }}>
              {t.name[0]}
            </div>
            <p className="font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>{t.name}</p>
            <p className="text-sm text-white/60">{t.role}</p>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prev} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <ChevronLeft size={18} className="text-white" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} className="w-2 h-2 rounded-full transition-all" style={{ background: i === active ? "var(--ayu-amber)" : "rgba(255,255,255,0.3)", width: i === active ? "1.5rem" : "0.5rem" }} />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <ChevronRight size={18} className="text-white" />
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/patient-stories" className="btn-gold inline-flex items-center gap-2">
              Read All Patient Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
