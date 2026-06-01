import Link from "next/link";
import { Package, ArrowRight, CheckCircle } from "lucide-react";

const pkgs = [
  { name: "Panchakarma Detox", price: "₹12,999", duration: "7–14 Days", color: "#4a7c3f", tag: "Best Value", benefits: ["Vamana & Virechana", "Basti Therapy", "Nasya Karma", "Post-care counselling"] },
  { name: "Rejuvenation (Rasayana)", price: "₹15,999", duration: "14–28 Days", color: "#c8973a", tag: "Premium", benefits: ["Shirodhara", "Abhyanga", "Kizhi", "Rasayana herbs"] },
  { name: "Weight Reduction", price: "₹8,999", duration: "10–21 Days", color: "#7b5ea7", tag: "Trending", benefits: ["Udwartana", "Lekhana Basti", "Diet Planning", "Yoga sessions"] },
  { name: "Female Health Checkup", price: "₹2,799", duration: "1 Day", color: "#c4683a", tag: "Recommended", benefits: ["Full blood panel", "Gynaec exam", "Prakriti Analysis", "Diet counselling"] },
];

export default function HomepagePackages() {
  return (
    <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--ayu-gold)" }}>Tailored for You</p>
            <h2 className="section-title">Health & Wellness Packages</h2>
            <div className="gold-divider" style={{ margin: "0.75rem 0 0" }} />
          </div>
          <Link href="/packages" className="hidden sm:flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--ayu-green)" }}>
            All Packages <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pkgs.map((p) => (
            <div key={p.name} className="ayu-card bg-white rounded-2xl overflow-hidden flex flex-col" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="h-1.5" style={{ background: p.color }} />
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <Package size={22} style={{ color: p.color }} />
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: p.color }}>{p.tag}</span>
                </div>
                <h3 className="font-bold mb-1" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{p.name}</h3>
                <p className="text-xl font-bold mb-1" style={{ color: p.color, fontFamily: "var(--font-heading)" }}>{p.price}</p>
                <p className="text-xs text-gray-400 mb-3">{p.duration}</p>
                <ul className="space-y-1 flex-1 mb-4">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle size={11} style={{ color: p.color }} /> {b}
                    </li>
                  ))}
                </ul>
                <Link href="/appointment" className="text-center py-2 rounded-lg text-sm font-semibold text-white" style={{ background: p.color }}>
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/packages" className="btn-outline inline-flex items-center gap-2">
            View All Packages <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
