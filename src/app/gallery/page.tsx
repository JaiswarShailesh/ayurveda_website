import PageHeroSection from "@/app/components/PageHeroSection";
import { Image as ImageIcon, Building, Users } from "lucide-react";

const categories = [
  { label: "Hospital Exterior & Reception", count: 12, icon: Building },
  { label: "OPD & Departments", count: 28, icon: Building },
  { label: "Therapy & Treatment Rooms", count: 35, icon: Users },
  { label: "Dedicated Staff", count: 20, icon: Users },
  { label: "Wards & Amenities", count: 15, icon: Building },
  { label: "Events & Camps", count: 40, icon: ImageIcon },
];

const colors = ["#2d5a27", "#4a7c3f", "#7ba05b", "#c8973a", "#e8b45a", "#c4683a", "#7b5ea7", "#3a7eb5", "#3a9e8f", "#6b4c2a", "#2d5a27", "#4a7c3f"];

export default function GalleryPage() {
  return (
    <>
      <PageHeroSection
        title="Hospital Gallery"
        subtitle="A visual tour of our hospital, departments, trained staff, therapy rooms and wellness events."
        breadcrumb={[{ label: "Gallery", href: "/gallery" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto">
          {/* Category filters — NOTE: No "Procedure Video" sub-tile per update */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            <button className="px-5 py-2 rounded-full text-sm font-semibold text-white" style={{ background: "var(--ayu-forest)" }}>All</button>
            {categories.map((c) => (
              <button key={c.label} className="px-5 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 hover:border-green-300 transition-colors" style={{ color: "var(--ayu-forest)" }}>
                {c.label} <span className="text-gray-400">({c.count})</span>
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {colors.map((c, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden cursor-pointer group"
                style={{ aspectRatio: i % 5 === 0 ? "4/3" : "1/1" }}
              >
                <div className="w-full h-full flex items-center justify-center min-h-[140px]" style={{ background: `${c}20`, border: `2px solid ${c}30` }}>
                  <ImageIcon size={32} style={{ color: c, opacity: 0.4 }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" style={{ background: `${c}85` }}>
                  <div className="text-center text-white">
                    <ImageIcon size={24} className="mx-auto mb-1" />
                    <p className="text-xs font-semibold">View Photo</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
