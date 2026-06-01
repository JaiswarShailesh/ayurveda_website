import Link from "next/link";
import { ArrowRight } from "lucide-react";

const specialities = [
  { name: "Vata Disorders", emoji: "💨", desc: "Wind-element imbalances causing pain, dryness, anxiety, constipation and neurological symptoms.", color: "#7b5ea7" },
  { name: "Pitta Disorders", emoji: "🔥", desc: "Fire-element imbalances causing inflammation, acidity, skin disorders, fever and liver issues.", color: "#c4683a" },
  { name: "Kapha Disorders", emoji: "🌊", desc: "Water-element imbalances causing obesity, lethargy, respiratory disorders and sluggish metabolism.", color: "#3a7eb5" },
  { name: "Rasayana Therapy", emoji: "✨", desc: "Rejuvenation and anti-aging therapies to boost immunity, vitality and mental clarity.", color: "#c8973a" },
  { name: "Vajikaran", emoji: "💪", desc: "Fertility enhancement and reproductive health for men and women through classical aphrodisiac formulations.", color: "#4a7c3f" },
  { name: "Nidana Panchaka", emoji: "🔍", desc: "Comprehensive Ayurvedic diagnostic framework for accurate disease identification and root cause analysis.", color: "#3a9e8f" },
];

export default function OurAyurvedicSpecialities() {
  return (
    <section className="py-16 px-4" style={{ background: "var(--ayu-beige)" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--ayu-gold)" }}>Ancient Science</p>
          <h2 className="section-title">Ayurvedic Specialities</h2>
          <div className="gold-divider" />
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Rooted in classical Tridosha theory — our treatments are tailored to your individual Prakriti and doshic imbalances.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {specialities.map((s) => (
            <div key={s.name} className="ayu-card bg-white rounded-2xl p-6 flex gap-4" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: `${s.color}10` }}>
                {s.emoji}
              </div>
              <div>
                <h3 className="font-bold mb-1" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{s.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/treatments" className="btn-primary inline-flex items-center gap-2">
            Explore All Treatments <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
