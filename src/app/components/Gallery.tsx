import Link from "next/link";
import { Image as ImageIcon, ArrowRight } from "lucide-react";

const galleryItems = [
  { label: "Reception & OPD", color: "#4a7c3f", span: "col-span-2 row-span-2" },
  { label: "Panchakarma Suite", color: "#c8973a", span: "" },
  { label: "Herbal Garden", color: "#7ba05b", span: "" },
  { label: "Therapy Room", color: "#3a7eb5", span: "" },
  { label: "Consultation Room", color: "#c4683a", span: "" },
  { label: "Ward & Patient Care", color: "#7b5ea7", span: "col-span-2" },
];

export default function Gallery() {
  return (
    <section className="py-16 px-4" style={{ background: "var(--ayu-beige)" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--ayu-gold)" }}>Visual Tour</p>
            <h2 className="section-title">Hospital Gallery</h2>
            <div className="gold-divider" style={{ margin: "0.75rem 0 0" }} />
          </div>
          <Link href="/gallery" className="hidden sm:flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--ayu-green)" }}>
            Full Gallery <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-3 h-80">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`rounded-xl overflow-hidden relative group cursor-pointer ${item.span}`}
              style={{ background: `${item.color}15`, border: `2px solid ${item.color}20` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <ImageIcon size={i === 0 ? 40 : 28} style={{ color: item.color, opacity: 0.4 }} />
                <p className="text-xs font-semibold mt-1" style={{ color: item.color }}>{item.label}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" style={{ background: `${item.color}85` }}>
                <p className="text-white text-sm font-semibold">View Photos</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link href="/gallery" className="btn-outline inline-flex items-center gap-2">
            View Full Gallery <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
