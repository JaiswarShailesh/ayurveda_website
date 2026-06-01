import PageHeroSection from "@/app/components/PageHeroSection";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";

const treatments = [
  {
    name: "Panchakarma Therapy",
    href: "/treatments/panchakarma",
    icon: "🌿",
    color: "#4a7c3f",
    duration: "7–28 days",
    desc: "The five-fold Ayurvedic purification and rejuvenation therapy — the cornerstone of Ayurvedic medicine.",
    procedures: ["Vamana (therapeutic emesis)", "Virechana (purgation therapy)", "Basti (medicated enema)", "Nasya (nasal therapy)", "Raktamokshana (blood-letting)"],
  },
  {
    name: "Ayurvedic Surgery (Shalya Tantra)",
    href: "/treatments/surgery",
    icon: "⚕️",
    color: "#7b5ea7",
    duration: "Varies",
    desc: "Minimally invasive Ayurvedic surgical procedures including Ksharasutra for ano-rectal disorders.",
    procedures: ["Ksharasutra (fistula, piles)", "Agnikarma (cauterisation)", "Jalaukavacharana (leech therapy)", "Shastrakarma (incision & drainage)", "Vrana Ropana (wound healing)"],
  },
  {
    name: "Gynaecology & Obstetrics",
    href: "/treatments/gynaecology",
    icon: "🌸",
    color: "#c4683a",
    duration: "3–6 months",
    desc: "Holistic Ayurvedic care for women's reproductive health across all life stages.",
    procedures: ["PCOS & hormonal disorders", "Infertility management", "Antenatal Ayurvedic care", "Menopausal syndrome", "Postnatal Suvarna Prashan"],
  },
  {
    name: "Ophthalmology (Shalakya)",
    href: "/treatments/ophthalmology",
    icon: "👁️",
    color: "#3a7eb5",
    duration: "7–21 days",
    desc: "Ancient Ayurvedic eye care therapies for refractive errors, glaucoma and dry eye syndrome.",
    procedures: ["Netra Tarpana (eye bath)", "Anjana (collyrium)", "Aschyotana (eye drops)", "Putapaka (eye therapy)", "Netra Dhara (eye stream)"],
  },
  {
    name: "Dental (Dantachikitsa)",
    href: "/treatments/dental",
    icon: "🦷",
    color: "#3a9e8f",
    duration: "2–4 weeks",
    desc: "Natural Ayurvedic oral care for dental and gum disorders without chemical interventions.",
    procedures: ["Kavala Graha (oil pulling)", "Gandusha (mouth gargling)", "Dantadhavana (dental care)", "Lepa application", "Krimidanta treatment"],
  },
  {
    name: "Speciality Clinics",
    href: "/treatments/speciality-clinics",
    icon: "🏥",
    color: "#c8973a",
    duration: "OPD-based",
    desc: "Dedicated speciality OPD clinics combining Ayurvedic and modern diagnostic expertise.",
    procedures: ["Spine & Joint Clinic", "Diabetes Wellness Clinic", "Skin & Trichology Clinic", "Weight Management Clinic", "Stress & Sleep Disorders Clinic"],
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <PageHeroSection
        title="Our Treatments"
        subtitle="Comprehensive Ayurvedic treatment modalities — from ancient Panchakarma to speciality surgical procedures."
        breadcrumb={[{ label: "Treatments", href: "/treatments" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--ayu-gold)" }}>Classical & Evidence-Based</p>
            <h2 className="section-title">Treatments We Offer</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((t) => (
              <div key={t.name} className="ayu-card bg-white rounded-2xl overflow-hidden flex flex-col" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                <div className="h-1.5" style={{ background: t.color }} />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl">{t.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg leading-tight" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{t.name}</h3>
                      <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
                        <Clock size={11} /> {t.duration}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{t.desc}</p>
                  <ul className="space-y-1.5 flex-1 mb-5">
                    {t.procedures.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={13} className="mt-0.5 flex-shrink-0" style={{ color: t.color }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Link href={t.href} className="flex-1 text-center py-2.5 rounded-lg text-sm font-semibold transition-colors" style={{ background: `${t.color}12`, color: t.color }}>
                      Learn More
                    </Link>
                    <Link href="/appointment" className="flex-1 text-center py-2.5 rounded-lg text-sm font-semibold text-white flex items-center justify-center gap-1" style={{ background: t.color }}>
                      Book <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
