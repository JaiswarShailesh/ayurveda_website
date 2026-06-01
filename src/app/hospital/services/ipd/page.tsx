import PageHeroSection from "@/app/components/PageHeroSection";
import Link from "next/link";
import { CheckCircle, Bed, Shield, ArrowRight } from "lucide-react";

const ipdFacilities = [
  {
    name: "General Ward & Special Rooms",
    emoji: "🏥",
    color: "#4a7c3f",
    desc: "Comfortable inpatient accommodation with continuous medical and nursing care for patients requiring admission and long-term treatment.",
  },
  {
    name: "ICU (Intensive Care Unit)",
    emoji: "🫀",
    color: "#e05454",
    desc: "Advanced critical care facilities for close monitoring and management of seriously ill patients requiring intensive medical attention and emergency care.",
  },
  {
    name: "NICU (Neonatal Intensive Care Unit)",
    emoji: "👶",
    color: "#3a7eb5",
    desc: "Specialized neonatal care for newborns requiring intensive monitoring, supportive care, and management under expert supervision.",
  },
  {
    name: "Labour Room & Maternity Care",
    emoji: "🌸",
    color: "#c4683a",
    desc: "Comprehensive maternal healthcare services including antenatal care, safe childbirth, postnatal care, and newborn management in a well-equipped labour room setting.",
  },
  {
    name: "Normal Delivery & Caesarean Section (C-Section)",
    emoji: "⚕️",
    color: "#7b5ea7",
    desc: "Safe and expert obstetric care for both normal vaginal deliveries and surgical deliveries with modern operation theatre support and post-delivery monitoring.",
  },
  {
    name: "Panchakarma IPD Services",
    emoji: "🌿",
    color: "#c8973a",
    desc: "Specialized inpatient Panchakarma therapies for detoxification, rejuvenation, stress management, pain relief, neurological disorders, musculoskeletal conditions, and chronic disease management under expert Ayurvedic supervision.",
  },
  {
    name: "Shalyatantra Surgical Procedures",
    emoji: "🔬",
    color: "#6b4c2a",
    desc: "Ayurvedic and integrated surgical management for piles, fissure, fistula, abscess, chronic wounds, and other surgical conditions including para-surgical procedures like Ksharasutra therapy.",
  },
  {
    name: "Ophthalmology Services",
    emoji: "👁️",
    color: "#3a9e8f",
    desc: "Specialized eye care procedures and treatments for various ophthalmic disorders using Ayurvedic and integrated therapeutic approaches.",
  },
  {
    name: "ENT Services (Shalakyatantra)",
    emoji: "👂",
    color: "#b5963a",
    desc: "Diagnosis and treatment for ear, nose, throat, head, and neck disorders including therapeutic and minor surgical procedures.",
  },
  {
    name: "Post-Operative & Rehabilitation Care",
    emoji: "🤸",
    color: "#3a7eb5",
    desc: "Dedicated recovery support, physiotherapy guidance, dietary counseling, and rehabilitative care for faster healing and improved patient outcomes.",
  },
];

const ipdHighlights = [
  "Round-the-clock medical supervision and nursing care",
  "General wards, semi-private and private rooms",
  "Personalized treatment plans by expert Vaidyas",
  "Integrated Ayurvedic and modern medical care",
  "Emergency support services 24×7",
  "Continuous patient monitoring",
  "Dedicated physiotherapy and rehabilitation",
  "Diet counseling and post-discharge support",
];

export default function IPDServicesPage() {
  return (
    <>
      <PageHeroSection
        title="IPD Services"
        subtitle="Comprehensive Inpatient Department — expert Ayurvedic and integrated medical care in a safe, comfortable hospital environment."
        breadcrumb={[{ label: "Hospital", href: "/hospital/doctors" }, { label: "Services Offered", href: "/hospital/services/opd" }, { label: "IPD Services", href: "/hospital/services/ipd" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto">

          {/* Intro */}
          <div className="bg-white rounded-2xl p-8 mb-12" style={{ border: "1px solid rgba(200,151,58,0.2)" }}>
            <div className="flex items-center gap-3 mb-4">
              <Bed size={28} style={{ color: "var(--ayu-gold)" }} />
              <h2 className="text-2xl font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Ayurvedic IPD Services</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our Ayurvedic Inpatient Department (IPD) offers comprehensive inpatient healthcare services with an integrated approach combining classical Ayurveda and modern medical facilities. We are committed to providing safe, effective, and patient-centered care through continuous monitoring, personalized treatment plans, and holistic healing therapies in a comfortable hospital environment.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The IPD is equipped with well-maintained general wards, semi-private and private rooms designed to ensure patient comfort and hygiene during hospitalization. Round-the-clock medical supervision, nursing care, and emergency support services are available to provide quality inpatient care for acute, chronic, and post-operative conditions. Our experienced team of Ayurvedic physicians, surgeons, consultants, therapists, nurses, and support staff work together to deliver holistic, compassionate, and quality healthcare focused on restoring health and enhancing overall well-being.
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {ipdHighlights.map((h) => (
                <div key={h} className="flex items-start gap-2">
                  <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: "var(--ayu-green)" }} />
                  <span className="text-sm text-gray-600">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* IPD Facilities */}
          <div className="flex items-center gap-3 mb-6">
            <Shield size={24} style={{ color: "var(--ayu-gold)" }} />
            <h2 className="text-2xl font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Specialized IPD Facilities &amp; Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {ipdFacilities.map((s) => (
              <div key={s.name} className="ayu-card bg-white rounded-2xl p-5" style={{ border: `1px solid ${s.color}20` }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: `${s.color}10` }}>
                    {s.emoji}
                  </div>
                  <h3 className="font-bold text-sm leading-snug" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{s.name}</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl p-8 text-white" style={{ background: "linear-gradient(135deg, var(--ayu-forest), var(--ayu-green))" }}>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>Need Inpatient Care?</h3>
            <p className="text-white/80 mb-5">Contact our hospital for IPD admission enquiries, availability and personalised treatment plans.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Contact for Admission <ArrowRight size={15} />
              </Link>
              <a href="tel:7045517269" className="btn-outline inline-flex items-center gap-2" style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}>
                Call: 70455 17269
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
