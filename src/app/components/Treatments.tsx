import Link from "next/link";
import { ArrowRight } from "lucide-react";

const treatments = [
  { name: "Abhyanga", desc: "Full-body therapeutic oil massage to nourish tissues, improve circulation and calm the nervous system.", emoji: "🌿", color: "#4a7c3f" },
  { name: "Shirodhara", desc: "Continuous flow of warm medicated oil on the forehead — profound relaxation for stress, insomnia and anxiety.", emoji: "💧", color: "#3a7eb5" },
  { name: "Panchakarma", desc: "Five-fold detox programme tailored to individual constitution for deep systemic purification.", emoji: "✨", color: "#c8973a" },
  { name: "Kizhi (Bolus Therapy)", desc: "Warm herbal poultice massage for joint pain, muscle stiffness and musculoskeletal disorders.", emoji: "🌾", color: "#c4683a" },
  { name: "Basti Therapy", desc: "Medicated enema therapy — the king of Vata treatments for neurological and degenerative conditions.", emoji: "🏺", color: "#7b5ea7" },
  { name: "Ksharasutra", desc: "Minimally invasive para-surgical technique for fistula, piles and other ano-rectal disorders.", emoji: "⚕️", color: "#3a9e8f" },
];

export default function Treatments() {
  return (
    <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--ayu-gold)" }}>Classical Therapies</p>
          <h2 className="section-title">Signature Treatments</h2>
          <div className="gold-divider" />
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">Time-honoured Ayurvedic procedures performed by expert Vaidyas using authentic, sustainably sourced herbal preparations.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {treatments.map((t) => (
            <div key={t.name} className="ayu-card bg-white rounded-2xl p-6 flex gap-4" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: `${t.color}10` }}>
                {t.emoji}
              </div>
              <div>
                <h3 className="font-bold mb-1.5" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{t.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/treatments" className="btn-primary inline-flex items-center gap-2">
            View All Treatments <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
