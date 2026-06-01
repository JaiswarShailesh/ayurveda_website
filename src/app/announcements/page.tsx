import PageHeroSection from "@/app/components/PageHeroSection";
import { UserPlus, Trophy, Tag, Bell } from "lucide-react";

const newDoctors = [
  { name: "Dr. Aishwarya Kulkarni", dept: "Panchakarma", qual: "MD (Panchkarma), BAMS", joining: "May 2026", message: "Specialises in Shirodhara, Basti and Nasya therapies with 8 years of clinical experience." },
  { name: "Dr. Ramesh Nair", dept: "Shalya Tantra", qual: "MS (Shalya), BAMS", joining: "April 2026", message: "Expert in Ksharasutra procedures for ano-rectal disorders with 12 years of expertise." },
  { name: "Dr. Preethi Venkat", dept: "Stri Roga & Prasuti", qual: "MD (Stri Roga), BAMS", joining: "March 2026", message: "Specialises in PCOS, infertility and antenatal Ayurvedic care. 10 years of practice." },
];

const employees = [
  { name: "Mrs. Sunita Patil", role: "Head Nurse – Panchakarma Ward", month: "May 2026", reason: "Exceptional patient care and initiative in staff training programmes." },
  { name: "Mr. Ganesh Rao", role: "Pharmacist", month: "April 2026", reason: "Outstanding accuracy in medicine dispensing and inventory management." },
];

const offers = [
  { title: "15% off Panchakarma Packages", validity: "Until 30 Jun 2026", code: "PKTOX15" },
  { title: "Free Diet Consultation with Health Checkup", validity: "Until 31 May 2026", code: "DIETFREE" },
  { title: "20% off Skin & Beauty Package", validity: "Until 15 Jun 2026", code: "GLOW20" },
];

export default function AnnouncementsPage() {
  return (
    <>
      <PageHeroSection
        title="Announcements"
        subtitle="Latest updates from SVKM's Krutiben Bhupeshbhai Patel Ayurveda Hospital."
        breadcrumb={[{ label: "Announcements", href: "/announcements" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto space-y-16">
          {/* New Consultants */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <UserPlus size={24} style={{ color: "var(--ayu-gold)" }} />
              <h2 className="text-2xl font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Welcome New Consultants</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newDoctors.map((d) => (
                <div key={d.name} className="ayu-card bg-white rounded-2xl p-6" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4" style={{ background: "linear-gradient(135deg, var(--ayu-forest), var(--ayu-sage))" }}>
                    {d.name.split(" ")[1][0]}
                  </div>
                  <span className="ayu-badge mb-2 inline-block">Joined {d.joining}</span>
                  <h3 className="font-bold text-lg" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{d.name}</h3>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--ayu-gold)" }}>{d.dept}</p>
                  <p className="text-xs text-gray-400 mb-3">{d.qual}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{d.message}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Employee of the Month */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Trophy size={24} style={{ color: "var(--ayu-gold)" }} />
              <h2 className="text-2xl font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Employee of the Month</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {employees.map((e) => (
                <div key={e.name} className="ayu-card bg-white rounded-2xl p-6 flex gap-4" style={{ border: "1px solid rgba(200,151,58,0.3)", background: "linear-gradient(135deg, #fffdf4, white)" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white flex-shrink-0" style={{ background: "var(--ayu-gold)" }}>
                    {e.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--ayu-gold)" }}>🏆 {e.month}</p>
                    <h3 className="font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{e.name}</h3>
                    <p className="text-sm text-gray-500 mb-1">{e.role}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{e.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Package Offers */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Tag size={24} style={{ color: "var(--ayu-gold)" }} />
              <h2 className="text-2xl font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Current Package Offers</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {offers.map((o) => (
                <div key={o.title} className="ayu-card rounded-xl p-5 text-white" style={{ background: "linear-gradient(135deg, var(--ayu-forest), var(--ayu-green))" }}>
                  <Tag size={20} className="mb-2" style={{ color: "var(--ayu-amber)" }} />
                  <h3 className="font-bold mb-1" style={{ fontFamily: "var(--font-heading)" }}>{o.title}</h3>
                  <p className="text-xs text-white/70 mb-2">Valid: {o.validity}</p>
                  <p className="text-sm font-mono font-bold px-2 py-1 rounded" style={{ background: "rgba(255,255,255,0.15)" }}>{o.code}</p>
                </div>
              ))}
            </div>
          </div>

          {/* General Announcements */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Bell size={24} style={{ color: "var(--ayu-gold)" }} />
              <h2 className="text-2xl font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>General Notices</h2>
            </div>
            <div className="space-y-3">
              {[
                { date: "May 2026", text: "OPD timings updated: Monday to Saturday, 9:00 AM – 4:00 PM. Sunday OPD: 9:00 AM – 12:00 PM." },
                { date: "Apr 2026", text: "Online appointment booking is now available for all departments. Call 7045517269 or book via our website." },
                { date: "Mar 2026", text: "New Panchakarma ward (20 beds) inaugurated. Packages now available at introductory pricing." },
                { date: "Feb 2026", text: "Research Centre accepting proposals for Ayurvedic clinical trials. Contact research@svkmayurveda.ac.in." },
              ].map((n) => (
                <div key={n.text} className="flex gap-4 p-4 bg-white rounded-xl" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full h-fit flex-shrink-0" style={{ background: "rgba(200,151,58,0.1)", color: "var(--ayu-gold)" }}>{n.date}</span>
                  <p className="text-sm text-gray-600">{n.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
