import PageHeroSection from "@/app/components/PageHeroSection";
import Link from "next/link";
import { CheckCircle, Calendar, ArrowRight } from "lucide-react";

const opdServices = [
  {
    name: "Kayachikitsa OPD",
    color: "#e05454",
    emoji: "🫀",
    desc: "Management of chronic and lifestyle disorders such as diabetes, hypertension, arthritis, digestive disorders, skin diseases, obesity, and stress-related illnesses through classical Ayurvedic treatments.",
  },
  {
    name: "Shalyatantra OPD",
    color: "#7b5ea7",
    emoji: "⚕️",
    desc: "Specialized Ayurvedic surgical and para-surgical care for piles, fissure, fistula, chronic wounds, and anorectal disorders, including Ksharasutra therapy.",
  },
  {
    name: "Shalakyatantra OPD",
    color: "#3a7eb5",
    emoji: "👁️",
    desc: "Treatment for diseases related to the eyes, ears, nose, throat, oral cavity, and head using Ayurvedic therapies and procedures.",
  },
  {
    name: "Prasuti Tantra & Stri Roga OPD",
    color: "#c4683a",
    emoji: "🌸",
    desc: "Ayurvedic women's healthcare services including menstrual disorders, infertility management, antenatal and postnatal care, menopausal care, and gynecological conditions.",
  },
  {
    name: "Kaumarbhritya OPD",
    color: "#4a7c3f",
    emoji: "👶",
    desc: "Ayurvedic pediatric care focused on child growth, immunity development, nutrition, and treatment of common childhood disorders.",
  },
  {
    name: "Panchakarma OPD",
    color: "#c8973a",
    emoji: "🌿",
    desc: "Detoxification, rejuvenation, and preventive healthcare therapies designed to restore balance and improve overall physical and mental well-being.",
  },
  {
    name: "Swasthavritta & Yoga OPD",
    color: "#3a9e8f",
    emoji: "🧘",
    desc: "Preventive and promotive healthcare through Ayurvedic lifestyle management, diet counseling, yoga, meditation, and wellness programs.",
  },
  {
    name: "Vishachikitsa OPD",
    color: "#b5963a",
    emoji: "🔬",
    desc: "Specialized care for toxicological conditions, poisonous bites, food and drug toxicity, allergies, and emergency Ayurvedic management of toxic disorders.",
  },
  {
    name: "Speciality OPD",
    color: "#6b4c2a",
    emoji: "🏥",
    desc: "Advanced Ayurvedic consultation and integrated treatment for chronic, difficult-to-manage, and specialty conditions with individualized care plans and expert supervision.",
  },
];

const highlights = [
  "Personalized Ayurvedic consultations for all age groups",
  "Classical Ayurvedic diagnosis (Nadi Pariksha, Prakriti Analysis)",
  "Herbal medications and formulations",
  "Panchakarma therapy referrals",
  "Diet and lifestyle counseling",
  "Preventive and promotive healthcare",
  "Integrated approach with modern diagnostics",
  "Online and video consultation options",
];

export default function OPDServicesPage() {
  return (
    <>
      <PageHeroSection
        title="OPD Services"
        subtitle="Comprehensive Ayurvedic Outpatient Department services — personalized consultations rooted in ancient wisdom, supported by modern diagnostics."
        breadcrumb={[{ label: "Hospital", href: "/hospital/doctors" }, { label: "Services Offered", href: "/hospital/services/opd" }, { label: "OPD Services", href: "/hospital/services/opd" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto">

          {/* Intro */}
          <div className="bg-white rounded-2xl p-8 mb-12" style={{ border: "1px solid rgba(200,151,58,0.2)", background: "linear-gradient(135deg, #fffdf4, white)" }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Ayurvedic OPD Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our Ayurvedic Outpatient Department (OPD) provides comprehensive healthcare based on the timeless principles of Ayurveda, focusing on prevention, cure, and holistic wellness. We offer personalized consultations, Ayurvedic diagnosis, herbal medications, Panchakarma therapies, diet and lifestyle counseling, and natural healing approaches for patients of all age groups.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our dedicated team of Ayurvedic doctors and therapists is committed to providing safe, effective, and holistic healthcare that promotes harmony of body, mind, and spirit.
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {highlights.map((h) => (
                <div key={h} className="flex items-start gap-2">
                  <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: "var(--ayu-green)" }} />
                  <span className="text-sm text-gray-600">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* OPD service grid */}
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>We Offer OPD Services in:</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {opdServices.map((s) => (
              <div key={s.name} className="ayu-card bg-white rounded-2xl p-5" style={{ border: `1px solid ${s.color}20` }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl" style={{ background: `${s.color}10` }}>
                    {s.emoji}
                  </div>
                  <h3 className="font-bold text-sm leading-snug" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{s.name}</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">{s.desc}</p>
                <Link href="/appointment" className="flex items-center gap-1 text-xs font-semibold" style={{ color: s.color }}>
                  <Calendar size={11} /> Book Appointment <ArrowRight size={11} />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-2xl p-8 text-center text-white" style={{ background: "linear-gradient(135deg, var(--ayu-forest), var(--ayu-green))" }}>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>Ready to Begin Your Healing Journey?</h3>
            <p className="text-white/80 mb-5">Book an OPD appointment with our specialist Vaidya today — in-person or via video consultation.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/appointment" className="btn-gold inline-flex items-center gap-2">
                <Calendar size={15} /> Book OPD Appointment
              </Link>
              <Link href="/hospital/online-consultation" className="btn-outline inline-flex items-center gap-2" style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}>
                Video Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
