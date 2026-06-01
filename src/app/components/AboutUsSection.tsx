import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(74,124,63,0.1), rgba(200,151,58,0.1))" }} />
            <Image
              src="/images/ayurveda_aboutus_medium_banner.png"
              alt="About SVKM Ayurveda Hospital"
              width={600}
              height={420}
              className="rounded-2xl shadow-lg relative z-10 w-full h-auto object-cover"
            />
            {/* Floating stat */}
            <div className="absolute -bottom-5 -right-3 bg-white rounded-xl shadow-lg p-4 z-20 flex items-center gap-3" style={{ border: "1px solid rgba(200,151,58,0.2)" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(200,151,58,0.1)" }}>
                <Award size={20} style={{ color: "var(--ayu-gold)" }} />
              </div>
              <div>
                <p className="text-lg font-bold leading-none" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>25+</p>
                <p className="text-xs text-gray-500">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--ayu-gold)" }}>Our Story</p>
          <h2 className="section-title mb-4">About Our Institution</h2>
          <div className="gold-divider" style={{ margin: "0 0 1.5rem" }} />
          <p className="section-subtitle mb-4">
            SVKM&apos;s Smt. Krutiben Bhupeshbhai Patel Multispeciality Ayurveda Hospital &amp; Research Centre is a premier institution committed to preserving the ancient wisdom of Ayurveda while integrating modern medical practices.
          </p>
          <p className="section-subtitle mb-6">
            With a strong academic foundation, world-class infrastructure and a team of over 50 expert Vaidyas, we offer authentic Panchakarma, speciality surgical procedures and holistic wellness programmes — all rooted in classical Ayurvedic tradition.
          </p>

          {/* Mini stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { icon: Users, value: "15,000+", label: "Patients Healed", color: "#4a7c3f" },
              { icon: Heart, value: "98%", label: "Satisfaction Rate", color: "#c4683a" },
              { icon: Award, value: "10+", label: "Departments", color: "#c8973a" },
            ].map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="text-center p-3 rounded-xl" style={{ background: `${color}08`, border: `1px solid ${color}20` }}>
                <Icon size={18} className="mx-auto mb-1" style={{ color }} />
                <p className="text-lg font-bold" style={{ color, fontFamily: "var(--font-heading)" }}>{value}</p>
                <p className="text-xs text-gray-500">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/about/institution" className="btn-primary inline-flex items-center gap-2">
              Learn More <ArrowRight size={16} />
            </Link>
            <Link href="/hospital/doctors" className="btn-outline inline-flex items-center gap-2">
              Meet Our Doctors
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
