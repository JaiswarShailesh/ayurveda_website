import PageHeroSection from "@/app/components/PageHeroSection";
import { Users, Phone, Mail } from "lucide-react";

type Member = { name: string; role: string; dept: string; phone?: string; email?: string };
type Level = { level: string; color: string; members: Member[] };
const organogram: Level[] = [
  {
    level: "Governing Body",
    color: "#2d5a27",
    members: [
      { name: "Shri Amrish Patel", role: "President, SVKM Trust", dept: "Governing Body" },
      { name: "Shri Jagdish Patel", role: "Vice President, SVKM Trust", dept: "Governing Body" },
    ],
  },
  {
    level: "Hospital Administration",
    color: "#c8973a",
    members: [
      { name: "Dr. Rajesh Desai", role: "Medical Superintendent", dept: "Administration", phone: "Ext. 101", email: "ms@svkmayurveda.ac.in" },
      { name: "Mrs. Anita Shah", role: "Hospital Administrator", dept: "Administration", phone: "Ext. 102", email: "admin@svkmayurveda.ac.in" },
      { name: "Mr. Vikram Mehta", role: "Chief Finance Officer", dept: "Finance", phone: "Ext. 103", email: "finance@svkmayurveda.ac.in" },
    ],
  },
  {
    level: "Academic & Research",
    color: "#3a7eb5",
    members: [
      { name: "Dr. Priya Sharma", role: "Principal, Ayurveda College", dept: "Academics", phone: "Ext. 104", email: "principal@svkmayurveda.ac.in" },
      { name: "Dr. Mohan Kulkarni", role: "Research Director", dept: "Research", phone: "Ext. 105", email: "research@svkmayurveda.ac.in" },
    ],
  },
  {
    level: "Clinical Heads",
    color: "#c4683a",
    members: [
      { name: "Dr. Anjali Deshmukh", role: "HOD – Kayachikitsa", dept: "Kayachikitsa", phone: "Ext. 201" },
      { name: "Dr. Ramesh Patil", role: "HOD – Shalyatantra", dept: "Shalyatantra", phone: "Ext. 202" },
      { name: "Dr. Kavita Sharma", role: "HOD – Panchakarma", dept: "Panchakarma", phone: "Ext. 203" },
      { name: "Dr. Preethi Venkat", role: "HOD – Stri Roga & Prasuti", dept: "Gynaecology", phone: "Ext. 204" },
      { name: "Dr. Suresh Nair", role: "HOD – Shalakyatantra", dept: "ENT & Eye", phone: "Ext. 205" },
      { name: "Dr. Meera Joshi", role: "HOD – Swasthavritta", dept: "Preventive Medicine", phone: "Ext. 206" },
    ],
  },
  {
    level: "Support Services",
    color: "#7b5ea7",
    members: [
      { name: "Mrs. Sunita Patil", role: "Matron / Chief Nursing Officer", dept: "Nursing", phone: "Ext. 301" },
      { name: "Mr. Ganesh Rao", role: "Chief Pharmacist", dept: "Pharmacy", phone: "Ext. 302" },
      { name: "Mr. Dilip Sharma", role: "HR Manager", dept: "Human Resources", phone: "Ext. 303" },
      { name: "Mr. Anil Kumar", role: "IT Manager", dept: "Information Technology", phone: "Ext. 304" },
    ],
  },
];

export default function AdministrationPage() {
  return (
    <>
      <PageHeroSection
        title="Administration"
        subtitle="Meet the leadership and administrative team driving excellence in Ayurvedic healthcare at SVKM's Hospital."
        breadcrumb={[{ label: "About Us", href: "/about/institution" }, { label: "Administration", href: "/about/administration" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto">
          {/* Organogram visual */}
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--ayu-gold)" }}>Organisational Structure</p>
            <h2 className="section-title">Administration Organogram</h2>
            <div className="gold-divider" />
          </div>

          <div className="space-y-10">
            {organogram.map((level) => (
              <div key={level.level}>
                {/* Level header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-0.5 flex-1" style={{ background: `${level.color}30` }} />
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-sm font-semibold" style={{ background: level.color }}>
                    <Users size={14} />
                    {level.level}
                  </div>
                  <div className="h-0.5 flex-1" style={{ background: `${level.color}30` }} />
                </div>

                {/* Members grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {level.members.map((m) => (
                    <div key={m.name} className="ayu-card bg-white rounded-xl p-5 flex gap-4" style={{ border: `1px solid ${level.color}20` }}>
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0" style={{ background: `linear-gradient(135deg, ${level.color}, ${level.color}99)` }}>
                        {m.name.split(" ").map(n => n[0]).slice(1, 3).join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{m.name}</h3>
                        <p className="text-xs font-semibold mb-0.5" style={{ color: level.color }}>{m.role}</p>
                        <p className="text-xs text-gray-400 mb-1">{m.dept}</p>
                        {m.phone && (
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Phone size={10} /> {m.phone}
                          </div>
                        )}
                        {m.email && (
                          <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                            <Mail size={10} />
                            <a href={`mailto:${m.email}`} className="hover:underline truncate">{m.email}</a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
