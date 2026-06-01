import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const faculty = [
  { name: "Dr. Anjali Deshmukh", title: "Professor & Head, Kayachikitsa", qual: "MD (Ay), PhD", exp: "22 yrs", img: "/images/doctor_1.png", speciality: "Diabetes, Lifestyle Disorders" },
  { name: "Dr. Ramesh Patil", title: "Assoc. Professor, Shalya Tantra", qual: "MS (Shalya), BAMS", exp: "18 yrs", img: "/images/doctor_2.png", speciality: "Ksharasutra, Ano-rectal Surgery" },
  { name: "Dr. Kavita Sharma", title: "Asst. Professor, Panchakarma", qual: "MD (Panchkarma)", exp: "14 yrs", img: "/images/doctor_3.png", speciality: "Shirodhara, Basti Therapy" },
  { name: "Dr. Vivek Rao", title: "Medical Officer, Hospital", qual: "BAMS, MD (Ay)", exp: "10 yrs", img: "/images/doctor_4.png", speciality: "General Ayurvedic Medicine" },
];

export default function FacultySection() {
  return (
    <section className="py-16 px-4 mandala-bg" style={{ background: "var(--ayu-beige)" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--ayu-gold)" }}>Expert Vaidyas</p>
          <h2 className="section-title">Meet Our Doctors</h2>
          <div className="gold-divider" />
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Our team of senior Vaidyas combine classical Ayurvedic training with modern clinical expertise — committed to personalised, compassionate healing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {faculty.map((member) => (
            <div key={member.name} className="ayu-card bg-white rounded-2xl overflow-hidden text-center" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="relative h-52 overflow-hidden" style={{ background: "linear-gradient(135deg, var(--ayu-beige), #e8e0cc)" }}>
                <Image src={member.img} alt={member.name} fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-xs text-white font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(200,151,58,0.85)" }}>{member.exp} experience</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>{member.name}</h3>
                <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--ayu-gold)" }}>{member.title}</p>
                <p className="text-xs text-gray-400 mb-1">{member.qual}</p>
                <p className="text-xs text-gray-500 mb-3">{member.speciality}</p>
                <Link href="/appointment" className="flex items-center justify-center gap-1.5 text-xs font-semibold py-2 rounded-lg text-white" style={{ background: "var(--ayu-forest)" }}>
                  <Calendar size={12} /> Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/hospital/doctors" className="btn-outline inline-flex items-center gap-2">
            View All Doctors <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
