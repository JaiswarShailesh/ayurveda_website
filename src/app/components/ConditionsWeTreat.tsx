import Link from "next/link";
import { Bone, Droplets, Activity, Moon, HeartPulse, Scissors, Brain, Eye, ArrowRight } from "lucide-react";

const conditions = [
  { title: "Joint & Spine Disorders", desc: "Arthritis, spondylosis, back pain, sciatica, frozen shoulder.", icon: Bone, color: "#e05454", href: "/disease/arthritis" },
  { title: "Skin Diseases", desc: "Psoriasis, eczema, acne, pigmentation, hair loss, urticaria.", icon: Droplets, color: "#4a7c3f", href: "/disease/skin" },
  { title: "Digestive Disorders", desc: "IBS, colitis, constipation, acidity, liver disease, piles.", icon: Activity, color: "#c8973a", href: "/disease/digestive" },
  { title: "Sleep & Mental Health", desc: "Insomnia, anxiety, depression, chronic stress, fatigue.", icon: Moon, color: "#7b5ea7", href: "/disease/lifestyle" },
  { title: "Lifestyle Diseases", desc: "Diabetes, hypertension, obesity, thyroid, cholesterol.", icon: HeartPulse, color: "#c4683a", href: "/disease/lifestyle" },
  { title: "Women's Health", desc: "PCOS, infertility, fibroids, leucorrhoea, menopause.", icon: Scissors, color: "#3a9e8f", href: "/disease/womens-health" },
  { title: "Neurological Disorders", desc: "Migraine, paralysis, motor neuron, Parkinson's support.", icon: Brain, color: "#3a7eb5", href: "/disease/neurological" },
  { title: "Eye & ENT Disorders", desc: "Dry eyes, sinusitis, allergic rhinitis, tinnitus.", icon: Eye, color: "#b5963a", href: "/disease/respiratory" },
];

export default function ConditionsWeTreat() {
  return (
    <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--ayu-gold)" }}>Comprehensive Care</p>
          <h2 className="section-title">Conditions We Treat</h2>
          <div className="gold-divider" />
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            From chronic lifestyle diseases to complex surgical conditions — we treat the root cause, not just the symptoms.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {conditions.map(({ title, desc, icon: Icon, color, href }) => (
            <Link key={title} href={href} className="ayu-card bg-white rounded-2xl p-5 group" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}12` }}>
                <Icon size={20} style={{ color }} />
              </div>
              <h3 className="font-bold mb-1.5 text-sm" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/disease/speciality-wise" className="btn-outline inline-flex items-center gap-2">
            View All Conditions <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
