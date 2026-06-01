"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronRight, Star, Users, Award, Heart, Video, CalendarCheck } from "lucide-react";

const slides = [
  {
    headline: "Ancient Wisdom,\nModern Healing",
    sub: "Experience the transformative power of authentic Ayurveda — where 5000 years of holistic science meets compassionate modern care.",
    bg: "from-[#1a3d18] via-[#2d5a27] to-[#3a6e34]",
  },
  {
    headline: "Heal Naturally,\nLive Abundantly",
    sub: "Our expert Vaidyas offer personalised Panchakarma, surgical and speciality clinic care rooted in classical Ayurvedic tradition.",
    bg: "from-[#3d2800] via-[#6b4c2a] to-[#8b6e4e]",
  },
  {
    headline: "Rejuvenate Body,\nMind & Spirit",
    sub: "Comprehensive wellness packages designed to restore balance, detoxify, and revitalize — tailored to your unique Prakriti.",
    bg: "from-[#1a2e3d] via-[#2d4a5a] to-[#3a6275]",
  },
];

const stats = [
  { icon: Users, value: "15,000+", label: "Patients Healed" },
  { icon: Award, value: "25+", label: "Years of Excellence" },
  { icon: Heart, value: "98%", label: "Patient Satisfaction" },
  { icon: Star, value: "50+", label: "Expert Vaidyas" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [apptOpen, setApptOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-[92vh] flex flex-col overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-all duration-1000`} />
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, var(--ayu-gold) 0%, transparent 70%)" }} />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-5" style={{ background: "radial-gradient(circle, #7ba05b 0%, transparent 70%)" }} />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='28' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3Ccircle cx='30' cy='30' r='20' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3Ccircle cx='30' cy='30' r='10' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-screen-xl mx-auto px-6 md:px-12 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase" style={{ background: "rgba(200,151,58,0.2)", color: "var(--ayu-amber)", border: "1px solid rgba(200,151,58,0.4)" }}>
            <span>🌿</span> SVKM&apos;s Premier Ayurveda Hospital
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            {slide.headline.split("\n").map((line, i) => (
              <span key={i}>
                {i === 1 ? <span style={{ color: "var(--ayu-amber)" }}>{line}</span> : line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            {slide.sub}
          </p>

          {/* CTAs - per Excel: Explore Treatment + Book Appointment (with video/OPD sub-options) */}
          <div className="flex flex-wrap gap-4 relative">
            <Link href="/treatments" className="btn-gold inline-flex items-center gap-2">
              Explore Treatment <ChevronRight size={18} />
            </Link>

            {/* Book Appointment with dropdown */}
            <div className="relative">
              <button
                onClick={() => setApptOpen(!apptOpen)}
                className="btn-outline inline-flex items-center gap-2"
                style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}
              >
                Book Appointment <ChevronRight size={16} className={`transition-transform ${apptOpen ? "rotate-90" : ""}`} />
              </button>
              {apptOpen && (
                <div className="absolute top-full mt-2 left-0 w-72 dropdown-glass shadow-2xl rounded-xl overflow-hidden animate-fadeIn z-50">
                  <Link
                    href="/hospital/online-consultation"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition-colors border-b border-gray-100"
                    onClick={() => setApptOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Video size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: "var(--ayu-forest)" }}>Video Consultation</p>
                      <p className="text-xs text-gray-500">Consult our Vaidya online from home</p>
                    </div>
                  </Link>
                  <Link
                    href="/appointment"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition-colors"
                    onClick={() => setApptOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                      <CalendarCheck size={16} style={{ color: "var(--ayu-green)" }} />
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: "var(--ayu-forest)" }}>OPD Appointment</p>
                      <p className="text-xs text-gray-500">Book in-person with your specialist</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{ background: i === current ? "var(--ayu-gold)" : "rgba(255,255,255,0.4)", width: i === current ? "2rem" : "0.5rem" }}
            />
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10" style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(10px)" }}>
        <div className="max-w-screen-xl mx-auto px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 text-white">
                <div className="p-2.5 rounded-lg" style={{ background: "rgba(200,151,58,0.25)" }}>
                  <Icon size={20} style={{ color: "var(--ayu-amber)" }} />
                </div>
                <div>
                  <p className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{value}</p>
                  <p className="text-xs text-white/65">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
