import PageHeroSection from "@/app/components/PageHeroSection";
import { Image as ImageIcon, MapPin, Calendar } from "lucide-react";

const campPhotos = [
  { title: "Arthritis & Joint Pain Camp", date: "25 March 2026", location: "OPD Hall, SVKM Campus", patients: 120, color: "#e05454" },
  { title: "Diabetic Screening Camp", date: "15 February 2026", location: "Community Centre, Andheri West", patients: 200, color: "#4a7c3f" },
  { title: "Free Eye Check-up Camp (Netra Tarpana)", date: "12 January 2026", location: "SVKM Campus Auditorium", patients: 85, color: "#3a7eb5" },
  { title: "Women's Health Awareness Camp", date: "8 March 2026", location: "Juhu Community Hall", patients: 165, color: "#c4683a" },
  { title: "Ayurveda & Yoga Day Camp", date: "21 June 2025", location: "Hospital Lawn, Vile Parle", patients: 400, color: "#c8973a" },
  { title: "Blood Pressure & Lifestyle Camp", date: "5 May 2025", location: "Andheri Sports Complex", patients: 250, color: "#7b5ea7" },
];

const colors = ["#2d5a27", "#4a7c3f", "#7ba05b", "#c8973a", "#c4683a", "#3a7eb5"];

export default function CampPhotosPage() {
  return (
    <>
      <PageHeroSection
        title="Camp Photos"
        subtitle="Photo gallery of health camps, awareness drives and community outreach events conducted by SVKM's Ayurveda Hospital."
        breadcrumb={[{ label: "Events & News", href: "/events" }, { label: "Camp Photos", href: "/events/camps" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto">
          {/* Past Camps */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Past Camp Gallery</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {campPhotos.map((camp, i) => (
                <div key={camp.title} className="ayu-card bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                  {/* Photo placeholder */}
                  <div className="relative h-44 flex items-center justify-center cursor-pointer group" style={{ background: `${camp.color}10` }}>
                    <ImageIcon size={40} style={{ color: camp.color, opacity: 0.4 }} />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `${camp.color}80` }}>
                      <p className="text-white text-sm font-semibold">View Photos</p>
                    </div>
                    <div className="absolute bottom-2 right-2 text-xs px-2 py-0.5 rounded-full text-white font-semibold" style={{ background: camp.color }}>
                      {camp.patients}+ attended
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-1" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{camp.title}</h3>
                    <div className="flex flex-col gap-1 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><Calendar size={10} /> {camp.date}</span>
                      <span className="flex items-center gap-1"><MapPin size={10} /> {camp.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo mosaic placeholder */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Photo Highlights</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {colors.concat(colors).map((c, _i) => (
                <div key={_i} className="rounded-lg aspect-square flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity" style={{ background: `${c}15`, border: `1px solid ${c}20` }}>
                  <ImageIcon size={20} style={{ color: c, opacity: 0.5 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
