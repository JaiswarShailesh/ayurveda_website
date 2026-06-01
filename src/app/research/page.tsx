import PageHeroSection from "@/app/components/PageHeroSection";
import { BookOpen, Microscope, FileText } from "lucide-react";

const papers = [
  { title: "Clinical Study on Ksharasutra in Fistula-in-Ano", authors: "Dr. R. Nair, Dr. P. Sharma", journal: "Journal of Ayurveda & Integrative Medicine, 2025", impact: "IF: 2.8" },
  { title: "Efficacy of Panchakarma in Rheumatoid Arthritis", authors: "Dr. A. Kulkarni, Dr. M. Desai", journal: "Ancient Science of Life, 2024", impact: "IF: 1.5" },
  { title: "Rasayana Therapy in Age-related Cognitive Decline", authors: "Dr. S. Joshi et al.", journal: "Journal of Ethnopharmacology, 2024", impact: "IF: 5.4" },
  { title: "Shatavari in PCOS Management — Randomized Trial", authors: "Dr. P. Venkat, Dr. K. Nair", journal: "Phytomedicine, 2023", impact: "IF: 6.7" },
];

export default function ResearchPage() {
  return (
    <>
      <PageHeroSection
        title="Research Centre"
        subtitle="Advancing Ayurvedic science through rigorous clinical research, publications and evidence-based practice."
        breadcrumb={[{ label: "Research", href: "/research" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-5 mb-12">
            {[{ icon: Microscope, label: "Active Studies", value: "12", color: "#4a7c3f" }, { icon: FileText, label: "Publications", value: "45+", color: "#c8973a" }, { icon: BookOpen, label: "Research Partners", value: "8", color: "#3a7eb5" }].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="bg-white rounded-2xl p-6 text-center ayu-card" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: `${color}12` }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <p className="text-3xl font-bold mb-1" style={{ color, fontFamily: "var(--font-heading)" }}>{value}</p>
                <p className="text-sm text-gray-500">{label}</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Recent Publications</h2>
          <div className="space-y-4">
            {papers.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-5 ayu-card" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{p.title}</h3>
                    <p className="text-sm text-gray-500 mb-1">{p.authors}</p>
                    <p className="text-sm" style={{ color: "var(--ayu-green)" }}>{p.journal}</p>
                  </div>
                  <span className="text-xs font-bold px-2 py-1 rounded-full flex-shrink-0" style={{ background: "rgba(74,124,63,0.1)", color: "var(--ayu-green)" }}>{p.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
