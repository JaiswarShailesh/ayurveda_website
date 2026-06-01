import Link from "next/link";
import { ArrowRight, UserCheck, CalendarCheck, Video, Package } from "lucide-react";

const steps = [
  { icon: UserCheck, step: "01", title: "Choose Your Specialist", desc: "Browse our team of qualified Vaidyas by speciality and select the doctor most suited to your health concern.", color: "#4a7c3f" },
  { icon: CalendarCheck, step: "02", title: "Book a Slot Online", desc: "Select a convenient date and time from available slots. Receive instant confirmation via SMS and email.", color: "#c8973a" },
  { icon: Video, step: "03", title: "Virtual Consultation", desc: "Connect with your Vaidya via secure video call. Discuss symptoms, medical history and receive personalised advice.", color: "#3a7eb5" },
  { icon: Package, step: "04", title: "Receive Your Plan", desc: "Get a detailed prescription, diet plan, lifestyle recommendations and medicines delivered to your doorstep.", color: "#7b5ea7" },
];

export default function HowOnlineConsultationWorks() {
  return (
    <section className="py-16 px-4" style={{ background: "var(--ayu-forest)" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--ayu-amber)" }}>Heal from Anywhere</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>Online Ayurvedic Consultation</h2>
          <div className="w-14 h-0.5 mx-auto mt-4" style={{ background: "var(--ayu-amber)" }} />
          <p className="text-white/70 mt-4 max-w-xl mx-auto text-sm">Expert Ayurvedic care accessible from the comfort of your home — four simple steps to begin your healing journey.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map(({ icon: Icon, step, title, desc, color }, i) => (
            <div key={step} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px" style={{ background: "rgba(255,255,255,0.15)" }} />
              )}
              <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-4 relative" style={{ background: `${color}25`, border: `2px solid ${color}40` }}>
                <Icon size={26} style={{ color }} />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white" style={{ background: color }}>
                  {step}
                </span>
              </div>
              <h3 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/hospital/online-consultation" className="btn-gold inline-flex items-center gap-2">
            Start Online Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
