import { Shield, Award, Leaf, Users, Clock, Microscope, Heart, Star } from "lucide-react";

const reasons = [
  { icon: Award, title: "NABH Accredited", desc: "Nationally accredited hospital maintaining highest standards of quality, safety and patient care.", color: "#c8973a" },
  { icon: Leaf, title: "Authentic Ayurveda", desc: "Classical therapies performed by qualified Vaidyas using GMP-certified, hospital-grade herbs and medicines.", color: "#4a7c3f" },
  { icon: Microscope, title: "Research-Backed Care", desc: "Integrating evidence-based Ayurvedic research with traditional protocols for superior clinical outcomes.", color: "#3a7eb5" },
  { icon: Users, title: "50+ Expert Vaidyas", desc: "Multidisciplinary team of MD and MS Ayurveda specialists across 10+ departments.", color: "#7b5ea7" },
  { icon: Clock, title: "24×7 Emergency Care", desc: "Round-the-clock emergency services with experienced duty doctors and modern diagnostic support.", color: "#e05454" },
  { icon: Shield, title: "Patient-First Approach", desc: "Personalised treatment plans based on individual Prakriti, ensuring safe and effective healing.", color: "#3a9e8f" },
  { icon: Heart, title: "Holistic Wellness", desc: "Addressing root causes — not just symptoms — through integrated diet, lifestyle and therapeutic interventions.", color: "#c4683a" },
  { icon: Star, title: "98% Patient Satisfaction", desc: "Consistently high patient satisfaction scores reflecting quality of care, outcomes and staff compassion.", color: "#b5963a" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--ayu-gold)" }}>The SVKM Difference</p>
          <h2 className="section-title">Why Choose Us</h2>
          <div className="gold-divider" />
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            More than a hospital — a sanctuary of authentic Ayurvedic healing, where tradition meets modern clinical excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="ayu-card bg-white rounded-2xl p-5" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${color}12` }}>
                <Icon size={22} style={{ color }} />
              </div>
              <h3 className="font-bold mb-2" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
