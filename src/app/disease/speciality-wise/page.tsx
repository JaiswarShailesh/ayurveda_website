import PageHeroSection from "@/app/components/PageHeroSection";
import Link from "next/link";
import { Heart, ArrowRight, Calendar } from "lucide-react";

const specialities = [
  {
    dept: "Kayachikitsa (Internal Medicine)",
    color: "#e05454",
    diseases: [
      { name: "Diabetes Mellitus (Madhumeha)", desc: "Comprehensive management through diet, herbs and lifestyle modifications." },
      { name: "Hypertension (Raktagatavata)", desc: "Natural blood pressure regulation with Ayurvedic protocols." },
      { name: "Rheumatoid Arthritis (Amavata)", desc: "Reduce inflammation and joint pain through Panchakarma and herbal therapy." },
      { name: "Irritable Bowel Syndrome", desc: "Digestive restoration through Agni correction and Virechana." },
      { name: "Chronic Liver Disease", desc: "Hepato-protective Ayurvedic herbs and detox therapies." },
      { name: "Obesity & Metabolic Syndrome", desc: "Medodhatu regulation with Lekhana Chikitsa." },
    ],
  },
  {
    dept: "Panchakarma",
    color: "#4a7c3f",
    diseases: [
      { name: "Lumbar Spondylosis", desc: "Kati Basti and Abhyanga for lower back pain relief." },
      { name: "Cervical Spondylosis", desc: "Greeva Basti and Nasya for neck disorders." },
      { name: "Frozen Shoulder", desc: "Pizhichil and joint mobilization techniques." },
      { name: "Sciatica (Gridhrasi)", desc: "Kati Basti, Basti therapy for nerve compression." },
      { name: "Fibromyalgia", desc: "Whole-body Abhyanga and Swedana for pain relief." },
      { name: "Chronic Fatigue Syndrome", desc: "Rasayana therapy and Brimhana treatments." },
    ],
  },
  {
    dept: "Stri Roga & Prasuti (Gynaecology)",
    color: "#c4683a",
    diseases: [
      { name: "Polycystic Ovarian Syndrome", desc: "Hormonal balance through Shodhan and herbal medicine." },
      { name: "Uterine Fibroids", desc: "Non-surgical management with Ayurvedic protocols." },
      { name: "Dysmenorrhoea", desc: "Natural pain management for menstrual disorders." },
      { name: "Infertility (Vandhyatva)", desc: "Fertility enhancement with Vajikaran Chikitsa." },
      { name: "Menopausal Syndrome", desc: "Hormonal transition support with Rasayana therapy." },
      { name: "Leucorrhoea (Shwetapradar)", desc: "Herbal douche and internal medicine." },
    ],
  },
  {
    dept: "Shalya Tantra (Surgery)",
    color: "#7b5ea7",
    diseases: [
      { name: "Haemorrhoids (Arsha)", desc: "Ksharasutra therapy — minimally invasive and highly effective." },
      { name: "Fistula-in-Ano (Bhagandara)", desc: "Ksharasutra — gold standard Ayurvedic treatment." },
      { name: "Pilonidal Sinus", desc: "Minimally invasive Ksharasutra technique." },
      { name: "Hernia (Antra Vriddhi)", desc: "Supportive Ayurvedic management and surgical care." },
      { name: "Varicose Veins", desc: "Jalauka (leech therapy) and herbal protocols." },
      { name: "Wound Healing Disorders", desc: "Vrana Ropana with herbal formulations." },
    ],
  },
  {
    dept: "Shalakya Tantra (ENT & Ophthalmology)",
    color: "#3a7eb5",
    diseases: [
      { name: "Chronic Sinusitis (Pratishyaya)", desc: "Nasya karma and Dhumapana for sinus relief." },
      { name: "Allergic Rhinitis", desc: "Desensitization through Anuvasana and Nasya." },
      { name: "Eye Disorders (Timira)", desc: "Netra Tarpana for refractive errors and dryness." },
      { name: "Hearing Loss", desc: "Karna Purana and Karna Dhupana therapies." },
      { name: "Glaucoma (Adhimantha)", desc: "Pressure management with Shiro Vasti." },
      { name: "Tonsillitis (Tundikeri)", desc: "Kavala Graha and Gandusha therapies." },
    ],
  },
  {
    dept: "Dantachikitsa (Oral Health)",
    color: "#3a9e8f",
    diseases: [
      { name: "Pyorrhoea (Dantamool Roga)", desc: "Oil pulling and herbal gum care." },
      { name: "Bleeding Gums (Shitada)", desc: "Astringent herb applications and diet." },
      { name: "Tooth Sensitivity", desc: "Remineralization with Ayurvedic dental pastes." },
      { name: "Mouth Ulcers (Mukha Paka)", desc: "Kavala with medicated oils." },
      { name: "Bad Breath (Mukha Daurgandhya)", desc: "Triphala and Neem-based protocols." },
      { name: "TMJ Disorders", desc: "Greeva Basti and Abhyanga for jaw pain." },
    ],
  },
];

export default function SpecialityWiseDiseasePage() {
  return (
    <>
      <PageHeroSection
        title="Diseases We Treat"
        subtitle="Speciality-wise guide to conditions treated with authentic Ayurvedic protocols at our hospital."
        breadcrumb={[{ label: "Disease", href: "/disease/speciality-wise" }]}
      />
      <section className="py-16 px-4 mandala-bg" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid gap-10">
            {specialities.map((s) => (
              <div key={s.dept} className="bg-white rounded-2xl overflow-hidden shadow-sm" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
                <div className="px-6 py-4 flex items-center gap-3" style={{ background: `${s.color}12`, borderBottom: `3px solid ${s.color}` }}>
                  <Heart size={20} style={{ color: s.color }} />
                  <h2 className="text-xl font-bold" style={{ color: s.color, fontFamily: "var(--font-heading)" }}>{s.dept}</h2>
                </div>
                <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {s.diseases.map((d) => (
                    <div key={d.name} className="p-4 rounded-xl ayu-card" style={{ background: "var(--ayu-cream)", border: "1px solid rgba(0,0,0,0.05)" }}>
                      <h3 className="font-bold text-sm mb-1" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{d.name}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed mb-3">{d.desc}</p>
                      <Link href="/appointment" className="text-xs font-semibold flex items-center gap-1" style={{ color: s.color }}>
                        <Calendar size={12} /> Book Appointment <ArrowRight size={12} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
