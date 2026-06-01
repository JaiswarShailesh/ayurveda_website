import PageHeroSection from "@/app/components/PageHeroSection";
import { Briefcase, Mail } from "lucide-react";

const openings = [
  { role: "Senior Panchakarma Therapist", dept: "Panchakarma", type: "Full-time", exp: "3+ years" },
  { role: "Ayurvedic Consultant – Kayachikitsa", dept: "Kayachikitsa", type: "Full-time", exp: "MD (Ay) required" },
  { role: "Staff Nurse – Panchakarma Ward", dept: "Nursing", type: "Full-time", exp: "2+ years" },
  { role: "Pharmacist – Ayurvedic Dispensary", dept: "Pharmacy", type: "Full-time", exp: "B.Pharm / D.Pharm" },
  { role: "Research Associate", dept: "Research Centre", type: "Contract", exp: "MSc / BAMS" },
];

export default function CareerPage() {
  return (
    <>
      <PageHeroSection
        title="Career Opportunities"
        subtitle="Join SVKM's Ayurveda Hospital — be part of a team committed to healing, learning and Ayurvedic excellence."
        breadcrumb={[{ label: "Career", href: "/career" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Current Openings</h2>
              <div className="space-y-4">
                {openings.map((j) => (
                  <div key={j.role} className="bg-white rounded-xl p-5 ayu-card" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{j.role}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{j.dept} • {j.exp}</p>
                      </div>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0" style={{ background: "rgba(74,124,63,0.1)", color: "var(--ayu-green)" }}>{j.type}</span>
                    </div>
                    <button className="mt-3 text-xs font-semibold" style={{ color: "var(--ayu-gold)" }}>Apply Now →</button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-white rounded-2xl p-8" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                <Briefcase size={28} className="mb-4" style={{ color: "var(--ayu-gold)" }} />
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Send Your Resume</h3>
                <p className="text-sm text-gray-600 mb-5">Don&apos;t see a suitable role? Send us your CV and we&apos;ll reach out when a matching opportunity opens up.</p>
                <div className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400" />
                  <input type="email" placeholder="Email Address" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400" />
                  <input type="tel" placeholder="Mobile Number" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400" />
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400">
                    <option value="">Area of Interest</option>
                    <option>Clinical / Medical</option>
                    <option>Nursing & Para-Medical</option>
                    <option>Pharmacy</option>
                    <option>Research</option>
                    <option>Administration</option>
                  </select>
                  <button className="btn-primary w-full justify-center">
                    <Mail size={15} /> Submit Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
