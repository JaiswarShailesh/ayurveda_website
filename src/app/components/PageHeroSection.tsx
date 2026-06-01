import { ChevronRight } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
};

export default function PageHeroSection({ title, subtitle, breadcrumb }: Props) {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, var(--ayu-forest) 0%, #3a6e34 60%, #2d5a27 100%)" }}>
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10" style={{ background: "radial-gradient(circle, var(--ayu-gold), transparent)" }} />
      <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full opacity-5" style={{ background: "radial-gradient(circle, white, transparent)" }} />
      
      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="flex items-center gap-2">
                <ChevronRight size={14} />
                {i === breadcrumb.length - 1 ? (
                  <span style={{ color: "var(--ayu-amber)" }}>{b.label}</span>
                ) : (
                  <Link href={b.href} className="hover:text-white transition-colors">{b.label}</Link>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1 h-10 rounded-full" style={{ background: "var(--ayu-gold)" }} />
          <h1 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>{title}</h1>
        </div>
        {subtitle && <p className="text-white/75 text-lg max-w-2xl ml-7">{subtitle}</p>}
      </div>
    </section>
  );
}
