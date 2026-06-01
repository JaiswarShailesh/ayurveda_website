import PageHeroSection from "@/app/components/PageHeroSection";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Mrs. Geeta Iyer", age: 49, city: "Mumbai", doctor: "Dr. A. Kulkarni", condition: "Osteoarthritis", rating: 5, text: "I had severe knee pain and was advised surgery. Dr. Kulkarni's Panchakarma protocol gave me complete relief without surgery. It has been 18 months and I am pain-free." },
  { name: "Mr. Dinesh Patel", age: 56, city: "Ahmedabad", doctor: "Dr. R. Nair", condition: "Haemorrhoids (Grade III)", rating: 5, text: "The Ksharasutra treatment was done as a day procedure. Minimal pain and quick recovery. No recurrence in 2 years. Excellent technique and caring staff." },
  { name: "Mrs. Nisha Kapoor", age: 38, city: "Pune", doctor: "Dr. P. Venkat", condition: "Uterine Fibroids", rating: 5, text: "Fibroids reduced significantly after 6 months of Ayurvedic treatment. Avoided hysterectomy. Wonderful doctor and very personalised treatment plan." },
  { name: "Mr. Arun Krishnan", age: 42, city: "Chennai", doctor: "Dr. S. Joshi", condition: "Chronic Sinusitis", rating: 4, text: "Nasya treatment gave me relief from chronic sinusitis that I had for 15 years. The breathing improved dramatically after just 2 weeks of treatment." },
  { name: "Mrs. Sunita Sharma", age: 55, city: "Delhi", doctor: "Dr. M. Desai", condition: "Type 2 Diabetes", rating: 5, text: "My blood sugar is now well controlled with Ayurvedic medicines and diet. Reduced insulin dosage by 50% under medical supervision. Truly life-changing." },
  { name: "Mr. Rahul Sawant", age: 33, city: "Nashik", doctor: "Dr. K. Pillai", condition: "Psoriasis", rating: 5, text: "Skin cleared almost completely after 3 months of treatment. No steroids, only Ayurvedic medicines. The blood purification therapy worked beautifully." },
];

const cols = ["#4a7c3f", "#3a7eb5", "#c4683a", "#7b5ea7", "#3a9e8f", "#c8973a"];

export default function PhotoTestimonialsPage() {
  return (
    <>
      <PageHeroSection
        title="Patient Testimonials"
        subtitle="Read what our patients say about their healing journey with Ayurveda."
        breadcrumb={[{ label: "Patient Stories", href: "/patient-stories" }, { label: "Photo Testimonials", href: "/patient-stories/photo-testimonials" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className="ayu-card bg-white rounded-2xl p-6" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                <Quote size={24} className="mb-3" style={{ color: cols[i % cols.length], opacity: 0.5 }} />
                <div className="flex" style={{ marginBottom: "0.5rem" }}>
                  {[...Array(t.rating)].map((_, s) => <Star key={s} size={14} fill="#c8973a" stroke="none" />)}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ background: cols[i % cols.length] }}>
                    {t.name[4]}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{t.name}, {t.age}</p>
                    <p className="text-xs text-gray-400">{t.city} • {t.condition}</p>
                    <p className="text-xs" style={{ color: "var(--ayu-green)" }}>Treated by: {t.doctor}</p>
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
