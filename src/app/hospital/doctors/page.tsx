"use client";
import PageHeroSection from "@/app/components/PageHeroSection";
import Link from "next/link";
import { useState } from "react";
import { Calendar, Video, Clock, IndianRupee, Search, Filter } from "lucide-react";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Anjali Deshmukh",
    qual: "MD (Ay), PhD – Kayachikitsa",
    dept: "Kayachikitsa",
    speciality: "Diabetes, Hypertension, Arthritis, Digestive Disorders",
    opd: ["Mon, Wed, Fri", "Tue, Thu, Sat"],
    time: ["9:00 AM – 1:00 PM", "2:00 PM – 4:00 PM"],
    fee: "₹400",
    exp: "22 years",
    img: "/images/doctor_1.png",
    bio: "Prof. Dr. Anjali Deshmukh is Professor & Head of the Department of Kayachikitsa with 22 years of clinical and academic experience. She specialises in the management of chronic lifestyle diseases including diabetes, hypertension, obesity and digestive disorders using classical Ayurvedic protocols and modern evidence-based approaches.",
  },
  {
    name: "Dr. Ramesh Patil",
    qual: "MS (Shalya Tantra), BAMS",
    dept: "Shalyatantra",
    speciality: "Ksharasutra, Piles, Fistula, Fissure, Anorectal Disorders",
    opd: ["Mon, Tue, Thu", "Wed, Fri"],
    time: ["9:00 AM – 12:00 PM", "2:00 PM – 5:00 PM"],
    fee: "₹500",
    exp: "18 years",
    img: "/images/doctor_2.png",
    bio: "Dr. Ramesh Patil is an Associate Professor and senior surgeon in Shalyatantra with 18 years of specialised experience. He is an expert in Ksharasutra therapy — the gold-standard Ayurvedic treatment for fistula-in-ano, haemorrhoids and fissure — with over 2000 successful procedures to his credit.",
  },
  {
    name: "Dr. Kavita Sharma",
    qual: "MD (Panchkarma), BAMS",
    dept: "Panchakarma",
    speciality: "Shirodhara, Basti Therapy, Vamana, Virechana, Nasya",
    opd: ["Mon to Sat"],
    time: ["10:00 AM – 2:00 PM"],
    fee: "₹400",
    exp: "14 years",
    img: "/images/doctor_3.png",
    bio: "Dr. Kavita Sharma is an experienced Panchakarma specialist with 14 years of expertise in Ayurvedic detoxification and rejuvenation therapies. She has managed over 5000 Panchakarma courses and specialises in treating musculoskeletal disorders, neurological conditions, and lifestyle diseases through authentic five-fold purification therapy.",
  },
  {
    name: "Dr. Preethi Venkat",
    qual: "MD (Stri Roga & Prasuti), BAMS",
    dept: "Prasuti Tantra & Stri Roga",
    speciality: "PCOS, Infertility, Antenatal Care, Menstrual Disorders, Menopausal Syndrome",
    opd: ["Mon, Wed, Fri", "Tue, Thu"],
    time: ["9:00 AM – 1:00 PM", "3:00 PM – 5:00 PM"],
    fee: "₹450",
    exp: "10 years",
    img: "/images/doctor_4.png",
    bio: "Dr. Preethi Venkat is an Assistant Professor and women's health specialist in Prasuti Tantra & Stri Roga. With 10 years of dedicated practice, she provides holistic Ayurvedic care for PCOS, infertility, menstrual disorders, antenatal and postnatal care, and menopausal management using classical herbs and Panchakarma therapies.",
  },
  {
    name: "Dr. Suresh Joshi",
    qual: "MD (Kayachikitsa), BAMS",
    dept: "Kayachikitsa",
    speciality: "Diabetes Management, Liver Disorders, Skin Diseases, Respiratory Disorders",
    opd: ["Tue, Thu, Sat"],
    time: ["9:00 AM – 1:00 PM"],
    fee: "₹400",
    exp: "16 years",
    img: "/images/doctor_1.png",
    bio: "Dr. Suresh Joshi brings 16 years of clinical excellence in Kayachikitsa, focusing on lifestyle disorders, metabolic conditions and chronic disease management. He has published extensively in Ayurvedic research journals and is known for his patient-friendly approach combining Ayurvedic herbs, diet therapy and Panchakarma.",
  },
  {
    name: "Dr. Meera Desai",
    qual: "MD (Shalakyatantra), BAMS",
    dept: "Shalakyatantra (ENT & Eye)",
    speciality: "Eye Disorders, Sinusitis, Allergic Rhinitis, ENT Conditions",
    opd: ["Mon, Wed, Fri"],
    time: ["10:00 AM – 1:00 PM"],
    fee: "₹400",
    exp: "12 years",
    img: "/images/doctor_2.png",
    bio: "Dr. Meera Desai is a Shalakyatantra specialist with 12 years of expertise in Ayurvedic eye and ENT care. She specialises in Netra Tarpana for eye disorders, Nasya therapy for sinus conditions and Karnapurana for ear disorders. Her gentle and patient-centred approach is widely appreciated by patients.",
  },
];

const depts = ["All", "Kayachikitsa", "Shalyatantra", "Panchakarma", "Prasuti Tantra & Stri Roga", "Shalakyatantra (ENT & Eye)"];

export default function DoctorsPage() {
  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = doctors.filter(d =>
    (selected === "All" || d.dept === selected) &&
    (search === "" || d.name.toLowerCase().includes(search.toLowerCase()) || d.speciality.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <PageHeroSection
        title="Find Your Doctor"
        subtitle="Browse our team of qualified Vaidyas. View speciality, OPD schedule, consultation fees and book an appointment."
        breadcrumb={[{ label: "Hospital", href: "/hospital/doctors" }, { label: "Find Your Doctor", href: "/hospital/doctors" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by doctor name or speciality..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-400"
              />
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Filter size={15} className="text-gray-400" />
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-green-400 bg-white"
              >
                {depts.map(d => <option key={d}>{d}</option>)}
              </select>
            </div>
          </div>

          {/* Doctor cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((doc) => (
              <div key={doc.name} className="ayu-card bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                <div className="p-5">
                  <div className="flex gap-4 mb-4">
                    {/* Photo */}
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0" style={{ background: "var(--ayu-beige)" }}>
                      <Image src={doc.img} alt={doc.name} fill className="object-cover object-top" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{doc.name}</h3>
                      <p className="text-xs text-gray-500 mb-1">{doc.qual}</p>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(74,124,63,0.1)", color: "var(--ayu-green)" }}>{doc.dept}</span>
                    </div>
                  </div>

                  {/* Speciality */}
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    <span className="font-semibold" style={{ color: "var(--ayu-brown)" }}>Speciality: </span>{doc.speciality}
                  </p>

                  {/* Schedule grid */}
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="text-center p-2 rounded-lg" style={{ background: "var(--ayu-beige)" }}>
                      <Clock size={13} className="mx-auto mb-0.5" style={{ color: "var(--ayu-gold)" }} />
                      <p className="text-[10px] font-semibold text-gray-500">OPD Days</p>
                      <p className="text-xs font-bold" style={{ color: "var(--ayu-forest)" }}>{doc.opd[0]}</p>
                    </div>
                    <div className="text-center p-2 rounded-lg" style={{ background: "var(--ayu-beige)" }}>
                      <Calendar size={13} className="mx-auto mb-0.5" style={{ color: "var(--ayu-gold)" }} />
                      <p className="text-[10px] font-semibold text-gray-500">Timing</p>
                      <p className="text-xs font-bold" style={{ color: "var(--ayu-forest)" }}>{doc.time[0]}</p>
                    </div>
                    <div className="text-center p-2 rounded-lg" style={{ background: "var(--ayu-beige)" }}>
                      <IndianRupee size={13} className="mx-auto mb-0.5" style={{ color: "var(--ayu-gold)" }} />
                      <p className="text-[10px] font-semibold text-gray-500">Consultation</p>
                      <p className="text-xs font-bold" style={{ color: "var(--ayu-forest)" }}>{doc.fee}</p>
                    </div>
                  </div>

                  {/* Bio toggle */}
                  <button
                    onClick={() => setExpanded(expanded === doc.name ? null : doc.name)}
                    className="text-xs font-semibold mb-3 flex items-center gap-1"
                    style={{ color: "var(--ayu-green)" }}
                  >
                    {expanded === doc.name ? "Hide" : "View"} Profile
                  </button>
                  {expanded === doc.name && (
                    <p className="text-xs text-gray-600 leading-relaxed mb-3 p-3 rounded-lg" style={{ background: "var(--ayu-beige)" }}>
                      {doc.bio}
                    </p>
                  )}

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <Link href="/appointment" className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-white" style={{ background: "var(--ayu-forest)" }}>
                      <Calendar size={13} /> Book OPD
                    </Link>
                    <Link href="/hospital/online-consultation" className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-white" style={{ background: "#3a7eb5" }}>
                      <Video size={13} /> Video Consult
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              <p className="text-lg font-semibold mb-2">No doctors found</p>
              <p className="text-sm">Try adjusting your search or department filter.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
