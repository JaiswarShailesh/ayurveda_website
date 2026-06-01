import Link from "next/link";
import { ArrowRight } from "lucide-react";

const departments = [
  { name: "Emergency Department", sub: "24×7 Critical Care", emoji: "🚨", color: "#e05454", href: "/departments/emergency", desc: "Round-the-clock emergency medical care with experienced duty doctors, nursing staff and rapid response teams." },
  { name: "Kayachikitsa", sub: "Internal Medicine", emoji: "🫀", color: "#c4683a", href: "/departments/kayachikitsa", desc: "Treatment of systemic diseases — diabetes, hypertension, arthritis, digestive disorders and metabolic conditions." },
  { name: "Panchakarma", sub: "Detox & Rejuvenation", emoji: "🌿", color: "#4a7c3f", href: "/departments/panchakarma", desc: "Five-fold purification therapy for deep cleansing, detoxification and systemic rejuvenation of body and mind." },
  { name: "Shalyatantra", sub: "Ayurvedic Surgery", emoji: "⚕️", color: "#7b5ea7", href: "/departments/shalya", desc: "Ksharasutra, Agnikarma and para-surgical care for ano-rectal and surgical disorders." },
  { name: "Prasuti Tantra & Stri Roga", sub: "Gynaecology & Obstetrics", emoji: "🌸", color: "#c4683a", href: "/departments/stri-roga", desc: "Holistic women's health — PCOS, infertility, antenatal, postnatal care and delivery services." },
  { name: "Shalakyatantra", sub: "Netra & ENT", emoji: "👁️", color: "#3a7eb5", href: "/departments/shalakya", desc: "Eye, ear, nose and throat disorders — Netra Tarpana, Nasya, Karna Purana and ENT procedures." },
  { name: "Vishachikitsa", sub: "Toxicology", emoji: "🔬", color: "#b5963a", href: "/departments/vishachikitsa", desc: "Specialised Ayurvedic management of toxicological conditions, allergies, poisoning and drug toxicity." },
  { name: "Balroga / Kaumarbhritya", sub: "Paediatrics", emoji: "👶", color: "#3a9e8f", href: "/departments/kaumarbhritya", desc: "Ayurvedic paediatric care for child growth, immunity, nutrition and common childhood disorders." },
  { name: "Swasthavritta", sub: "Preventive Medicine", emoji: "🧘", color: "#4a7c3f", href: "/departments/swasthavritta", desc: "Preventive and promotive healthcare — Ayurvedic lifestyle, diet counselling and wellness programmes." },
  { name: "Yoga Department", sub: "Yoga & Wellness", emoji: "🙏", color: "#c8973a", href: "/departments/yoga", desc: "Therapeutic yoga, pranayama and meditation programmes for physical and mental well-being." },
  { name: "Physiotherapy", sub: "Rehabilitation", emoji: "🤸", color: "#3a7eb5", href: "/departments/physiotherapy", desc: "Physiotherapy and rehabilitative care integrated with Ayurvedic treatment for faster recovery." },
  { name: "Health Check-Up", sub: "Preventive Screening", emoji: "📋", color: "#6b4c2a", href: "/departments/health-checkup", desc: "Comprehensive health screening packages combining Ayurvedic prakriti analysis with modern diagnostics." },
];

export default function Departments() {
  return (
    <section className="py-16 px-4" style={{ background: "var(--ayu-beige)" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--ayu-gold)" }}>Our Specialities</p>
          <h2 className="section-title">Clinical Departments</h2>
          <div className="gold-divider" />
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Twelve specialised departments staffed by qualified Vaidyas — offering comprehensive inpatient and outpatient Ayurvedic care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {departments.map((dept) => (
            <Link key={dept.name} href={dept.href} className="ayu-card bg-white rounded-2xl p-5 group" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: `${dept.color}10` }}>
                  {dept.emoji}
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-snug" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{dept.name}</h3>
                  <p className="text-xs font-semibold" style={{ color: dept.color }}>{dept.sub}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">{dept.desc}</p>
              <div className="flex items-center gap-1 text-xs font-semibold transition-colors" style={{ color: dept.color }}>
                Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
