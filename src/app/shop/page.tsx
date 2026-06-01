import PageHeroSection from "@/app/components/PageHeroSection";
import Link from "next/link";
import { ShoppingCart, Star, Package, ArrowRight, AlertCircle } from "lucide-react";

const products = [
  { name: "Ashwagandha Root Powder", price: "₹380", mrp: "₹450", rating: 4.8, reviews: 124, category: "Adaptogen", expiry: "Dec 2026", tag: "Bestseller", desc: "Pure KSM-66 Ashwagandha for stress relief, energy and immunity enhancement." },
  { name: "Triphala Churna", price: "₹220", mrp: "₹280", rating: 4.9, reviews: 210, category: "Digestive", expiry: "Jan 2027", tag: "Popular", desc: "Three-fruit combination for gentle detox, digestion and eye health." },
  { name: "Brahmi Tablets", price: "₹340", mrp: "₹400", rating: 4.7, reviews: 89, category: "Neuro", expiry: "Nov 2026", tag: "Recommended", desc: "Brain tonic for memory, concentration and stress reduction." },
  { name: "Chyawanprash (500g)", price: "₹480", mrp: "₹560", rating: 4.8, reviews: 175, category: "Immunity", expiry: "Oct 2026", tag: "Seasonal", desc: "Classical Rasayana formulation — 40+ herbs for immunity and vitality." },
  { name: "Neem Leaf Capsules", price: "₹260", mrp: "₹310", rating: 4.5, reviews: 67, category: "Skin Health", expiry: "Feb 2027", tag: "", desc: "Blood purifier for skin disorders, acne and metabolic health." },
  { name: "Kanchanar Guggulu", price: "₹295", mrp: "₹350", rating: 4.6, reviews: 43, category: "Thyroid & Glands", expiry: "Mar 2027", tag: "", desc: "Classical formulation for thyroid, lymph nodes and glandular disorders." },
  { name: "Shatavari Granules", price: "₹420", mrp: "₹500", rating: 4.9, reviews: 98, category: "Women's Health", expiry: "Jan 2027", tag: "New", desc: "Hormonal balance, lactation support and female reproductive tonic." },
  { name: "Trikatu Churna", price: "₹195", mrp: "₹240", rating: 4.4, reviews: 55, category: "Metabolism", expiry: "Dec 2026", tag: "", desc: "Three-spice blend for Agni kindling, weight management and digestion." },
  { name: "Mahanarayan Taila (100ml)", price: "₹540", mrp: "₹620", rating: 4.7, reviews: 132, category: "Musculoskeletal", expiry: "Aug 2027", tag: "Hospital Formula", desc: "Classical medicated oil for joint pain, arthritis and muscle stiffness." },
];

export default function ShopPage() {
  return (
    <>
      <PageHeroSection
        title="Ayurvedic Medicine Shop"
        subtitle="Authentic, hospital-grade Ayurvedic medicines and health products — quality verified by our Vaidyas."
        breadcrumb={[{ label: "Shop", href: "/shop" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto">
          {/* Notice */}
          <div className="flex items-start gap-3 p-4 rounded-xl mb-10 text-sm" style={{ background: "rgba(200,151,58,0.08)", border: "1px solid rgba(200,151,58,0.3)" }}>
            <AlertCircle size={18} style={{ color: "var(--ayu-gold)", flexShrink: 0 }} />
            <p style={{ color: "var(--ayu-brown)" }}>
              <strong>Doctor Consultation Required:</strong> Prescription-based medicines are dispensed only after consultation with our specialist doctor. Please <Link href="/appointment" className="underline">book an appointment</Link> for personalised medicine recommendation.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["All", "Immunity", "Digestive", "Women's Health", "Skin Health", "Adaptogen", "Musculoskeletal", "Neuro"].map((cat) => (
              <button key={cat} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${cat === "All" ? "text-white" : "bg-white text-gray-600 border border-gray-200 hover:border-green-300"}`} style={cat === "All" ? { background: "var(--ayu-forest)" } : {}}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="ayu-card bg-white rounded-xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                {/* Image placeholder */}
                <div className="h-36 flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--ayu-beige), #efe8d4)" }}>
                  <Package size={48} style={{ color: "var(--ayu-sage)", opacity: 0.5 }} />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(74,124,63,0.1)", color: "var(--ayu-green)" }}>{p.category}</span>
                    {p.tag && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: "var(--ayu-gold)" }}>{p.tag}</span>}
                  </div>
                  <h3 className="font-bold text-sm mt-2" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{p.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 mb-2 leading-relaxed">{p.desc}</p>
                  <div className="flex items-center gap-1 mb-2">
                    <Star size={12} fill="#c8973a" stroke="none" />
                    <span className="text-xs font-semibold">{p.rating}</span>
                    <span className="text-xs text-gray-400">({p.reviews})</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mb-3">Exp: {p.expiry}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{p.price}</span>
                      <span className="text-xs text-gray-400 line-through ml-2">{p.mrp}</span>
                    </div>
                    <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white text-sm font-medium" style={{ background: "var(--ayu-forest)" }}>
                      <ShoppingCart size={14} /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/appointment" className="btn-primary inline-flex items-center gap-2">
              Consult Doctor for Prescription <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
