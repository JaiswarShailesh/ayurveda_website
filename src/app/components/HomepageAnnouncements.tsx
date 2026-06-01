import Link from "next/link";
import { Bell, UserPlus, Trophy, Tag, ArrowRight } from "lucide-react";

const items = [
  { icon: UserPlus, color: "#4a7c3f", label: "New Consultant", title: "Dr. Aishwarya Kulkarni joins Panchakarma", sub: "MD (Panchkarma) • 8 Years Experience", href: "/announcements" },
  { icon: Trophy, color: "#c8973a", label: "Employee of Month", title: "Mrs. Sunita Patil — Head Nurse, Panchakarma", sub: "Recognised for exceptional patient care.", href: "/announcements/employee-month" },
  { icon: Tag, color: "#7b5ea7", label: "Package Offer", title: "15% off Panchakarma Detox Package", sub: "Use code PKTOX15 • Valid till 30 Jun 2026", href: "/packages/offers" },
  { icon: Bell, color: "#3a7eb5", label: "Notice", title: "OPD Mon–Sat: 9 AM – 4 PM | Sun: 9 AM – 12 PM", sub: "Emergency & Ambulance: 022 2427 8888 (24×7)", href: "/announcements" },
];

export default function HomepageAnnouncements() {
  return (
    <section className="py-14 px-4" style={{ background: "var(--ayu-beige)" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--ayu-gold)" }}>Latest from SVKM Ayurveda</p>
            <h2 className="section-title">Announcements</h2>
          </div>
          <Link href="/announcements" className="hidden sm:flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--ayu-green)" }}>
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <Link key={item.title} href={item.href} className="ayu-card bg-white rounded-xl p-5 flex flex-col gap-3" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${item.color}15` }}>
                  <item.icon size={16} style={{ color: item.color }} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: item.color }}>{item.label}</span>
              </div>
              <div>
                <p className="font-bold text-sm leading-snug mb-1" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{item.title}</p>
                <p className="text-xs text-gray-500">{item.sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
