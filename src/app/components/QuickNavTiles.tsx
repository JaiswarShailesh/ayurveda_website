import Link from "next/link";
import { Heart, Package, ShoppingCart, Image, Calendar, Megaphone, Award, Play, MessageCircle, BookOpen } from "lucide-react";

const tiles = [
  { icon: Heart, label: "Our Treatment", sub: "Diseases & Therapies", href: "/treatments", color: "#4a7c3f" },
  { icon: Package, label: "Packages", sub: "Health & Wellness", href: "/packages", color: "#c8973a" },
  { icon: ShoppingCart, label: "Shop", sub: "Medicines & Products", href: "/shop", color: "#7b5ea7" },
  { icon: Image, label: "Gallery", sub: "Photos & Videos", href: "/gallery", color: "#3a7eb5" },
  { icon: Calendar, label: "Events & News", sub: "Camps & CME", href: "/events", color: "#e07b3a" },
  { icon: Megaphone, label: "Announcements", sub: "Latest Updates", href: "/announcements", color: "#3a9e8f" },
  { icon: Award, label: "Achievement & Research", sub: "Awards & Publications", href: "/achievements", color: "#b5963a" },
  { icon: Play, label: "Patient Stories", sub: "Testimonials", href: "/patient-stories", color: "#c4683a" },
  { icon: MessageCircle, label: "Feedback & Review", sub: "Share Your Experience", href: "/feedback", color: "#7ba05b" },
  { icon: BookOpen, label: "Wellness Library", sub: "Blogs & Podcasts", href: "/wellness", color: "#4a6b9c" },
];

export default function QuickNavTiles() {
  return (
    <section className="py-10 px-4" style={{ background: "var(--ayu-beige)" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--ayu-gold)" }}>Navigate Our Hospital</p>
          <h2 className="section-title">Everything You Need</h2>
          <div className="gold-divider" />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-10 gap-3">
          {tiles.map(({ icon: Icon, label, sub, href, color }) => (
            <Link
              key={label}
              href={href}
              className="ayu-card flex flex-col items-center gap-2 p-3 rounded-xl bg-white text-center group"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ background: `${color}15` }}>
                <Icon size={20} style={{ color }} />
              </div>
              <div>
                <p className="text-xs font-bold leading-tight" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{label}</p>
                <p className="text-[10px] text-gray-400 leading-tight mt-0.5">{sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
