import PageHeroSection from "@/app/components/PageHeroSection";
import Link from "next/link";
import { Package, CheckCircle, ArrowRight, Tag } from "lucide-react";

const packages = [
  {
    name: "Male Health Checkup Package",
    price: "₹2,499",
    tag: "Popular",
    tagColor: "#3a7eb5",
    duration: "1 Day",
    href: "/packages/health-checkup-male",
    desc: "Complete Ayurvedic & modern diagnostic health assessment for men including prakriti analysis.",
    benefits: ["Blood profile (CBC, LFT, KFT, Lipids)", "Prakriti Analysis", "ECG & Blood Pressure", "Ophthalmology screening", "Consultant physician review", "Diet & Lifestyle counselling"],
    color: "#3a7eb5",
  },
  {
    name: "Female Health Checkup Package",
    price: "₹2,799",
    tag: "Recommended",
    tagColor: "#c4683a",
    duration: "1 Day",
    href: "/packages/health-checkup-female",
    desc: "Comprehensive health screening for women with gynaecological assessment and Prakriti analysis.",
    benefits: ["Complete blood investigations", "Gynaecological examination", "Breast examination", "Bone density screening", "Thyroid profile", "Prakriti Analysis & Counselling"],
    color: "#c4683a",
  },
  {
    name: "Panchakarma Detox Package",
    price: "₹12,999",
    tag: "Best Value",
    tagColor: "#4a7c3f",
    duration: "7–14 Days",
    href: "/packages/panchakarma",
    desc: "Authentic five-fold purification therapy for deep cleansing, detoxification and rejuvenation.",
    benefits: ["Snehana (internal & external oleation)", "Swedana (herbal steam)", "Vamana or Virechana therapy", "Basti (medicated enema)", "Nasya (nasal therapy)", "Post-Panchakarma counselling"],
    color: "#4a7c3f",
  },
  {
    name: "Weight Reduction Package",
    price: "₹8,999",
    tag: "Trending",
    tagColor: "#7b5ea7",
    duration: "10–21 Days",
    href: "/packages/weight-reduction",
    desc: "Medically supervised Ayurvedic weight management programme targeting root cause of obesity.",
    benefits: ["Udwartana (herbal powder massage)", "Lekhana Basti", "Dietary planning (Langhana)", "Yoga & breathing exercises", "Herbal medicine course", "Monthly follow-up consultation"],
    color: "#7b5ea7",
  },
  {
    name: "Rejuvenation (Rasayana) Package",
    price: "₹15,999",
    tag: "Premium",
    tagColor: "#c8973a",
    duration: "14–28 Days",
    href: "/packages/rejuvenation",
    desc: "Anti-aging and immunity-boosting Rasayana therapy for vitality, mental clarity and longevity.",
    benefits: ["Abhyanga (therapeutic oil massage)", "Shirodhara (stress relief)", "Kizhi (herbal bolus therapy)", "Rasayana herbal formulations", "Meditation & Pranayama", "Personalized Ahara plan"],
    color: "#c8973a",
  },
  {
    name: "Skin & Beauty Package",
    price: "₹5,999",
    tag: "New",
    tagColor: "#3a9e8f",
    duration: "5–7 Days",
    href: "/packages/skin-beauty",
    desc: "Holistic Ayurvedic skin care programme for glowing skin, acne, pigmentation and hair health.",
    benefits: ["Mukhalepam (herbal face pack)", "Takradhara (buttermilk therapy)", "Blood purifying herb course", "Diet & nutrition counselling", "Hair care Shiroabhyanga", "Herbal skin care kit"],
    color: "#3a9e8f",
  },
];

export default function PackagesPage() {
  return (
    <>
      <PageHeroSection
        title="Health & Wellness Packages"
        subtitle="Comprehensive Ayurvedic packages designed for every health goal — from prevention to deep healing."
        breadcrumb={[{ label: "Packages", href: "/packages" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--ayu-gold)" }}>Curated for You</p>
            <h2 className="section-title">Choose Your Healing Journey</h2>
            <div className="gold-divider" />
            <p className="section-subtitle mt-4 max-w-2xl mx-auto">Each package is crafted by senior Vaidyas combining classical Ayurvedic protocols with evidence-based diagnostics.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className="ayu-card bg-white rounded-2xl overflow-hidden flex flex-col" style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <div className="h-2" style={{ background: pkg.color }} />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="ayu-badge text-xs mb-2 inline-block" style={{ background: pkg.tagColor }}>{pkg.tag}</span>
                      <h3 className="text-lg font-bold leading-tight" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{pkg.name}</h3>
                    </div>
                    <Package size={28} style={{ color: pkg.color, opacity: 0.7 }} className="flex-shrink-0 ml-2" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-bold" style={{ color: pkg.color, fontFamily: "var(--font-heading)" }}>{pkg.price}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">{pkg.duration}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{pkg.desc}</p>
                  <ul className="space-y-1.5 flex-1 mb-5">
                    {pkg.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: pkg.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Link href={pkg.href} className="flex-1 text-center py-2.5 rounded-lg text-sm font-semibold transition-colors" style={{ background: `${pkg.color}12`, color: pkg.color, border: `1px solid ${pkg.color}30` }}>
                      View Details
                    </Link>
                    <Link href="/appointment" className="flex-1 text-center py-2.5 rounded-lg text-sm font-semibold text-white flex items-center justify-center gap-1" style={{ background: pkg.color }}>
                      Book Now <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Offer banner */}
          <div className="mt-12 rounded-2xl p-8 text-center text-white" style={{ background: "linear-gradient(135deg, var(--ayu-forest), var(--ayu-green))" }}>
            <Tag size={32} className="mx-auto mb-3" style={{ color: "var(--ayu-amber)" }} />
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>Seasonal Offers Available</h3>
            <p className="text-white/80 mb-4">Get up to 20% off on selected packages during our wellness festivals. Call us or book online.</p>
            <Link href="/packages/offers" className="btn-gold inline-flex items-center gap-2">View All Offers <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
