"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactUs() {
  const [sent, setSent] = useState(false);

  return (
    <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--ayu-gold)" }}>We&apos;re Here For You</p>
          <h2 className="section-title">Contact Us</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-5">
            <div className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, var(--ayu-forest), var(--ayu-green))", color: "white" }}>
              <h3 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-heading)" }}>Hospital Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0"><MapPin size={16} style={{ color: "var(--ayu-amber)" }} /></div>
                  <div>
                    <p className="font-semibold text-sm">Address</p>
                    <p className="text-white/75 text-sm">Bhaktivedanta Swami Marg, SVKM Campus, Vile Parle (W), Mumbai – 400 056</p>
                  </div>
                </div>
                {[
                  { label: "OPD Appointment", val: "70455 17269", icon: Phone },
                  { label: "Diagnostic Centre", val: "99207 47327", icon: Phone },
                  { label: "Emergency (24×7)", val: "022 2427 8888", icon: Phone },
                  { label: "Email", val: "ayurveda.hospital@svkm.ac.in", icon: Mail },
                ].map(({ label, val, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0"><Icon size={16} style={{ color: "var(--ayu-amber)" }} /></div>
                    <div>
                      <p className="font-semibold text-sm">{label}</p>
                      <p className="text-white/75 text-sm">{val}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0"><Clock size={16} style={{ color: "var(--ayu-amber)" }} /></div>
                  <div>
                    <p className="font-semibold text-sm">OPD Hours</p>
                    <p className="text-white/75 text-sm">Mon–Sat: 9:00 AM – 4:00 PM</p>
                    <p className="text-white/75 text-sm">Sunday: 9:00 AM – 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl h-48 flex items-center justify-center" style={{ background: "var(--ayu-beige)", border: "2px dashed rgba(200,151,58,0.3)" }}>
              <div className="text-center">
                <MapPin size={28} className="mx-auto mb-2" style={{ color: "var(--ayu-gold)" }} />
                <p className="text-sm font-semibold" style={{ color: "var(--ayu-brown)" }}>Google Map — SVKM Campus</p>
                <p className="text-xs text-gray-400">Vile Parle (W), Mumbai</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl p-8" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 text-3xl">🙏</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Message Received!</h3>
                <p className="text-gray-600 text-sm">Our team will get back to you within 24 hours. For urgent queries, please call us directly.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-6" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Send Us a Message</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--ayu-forest)" }}>Full Name *</label>
                      <input type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--ayu-forest)" }}>Phone *</label>
                      <input type="tel" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400" placeholder="Mobile number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--ayu-forest)" }}>Email</label>
                    <input type="email" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--ayu-forest)" }}>Department / Enquiry</label>
                    <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400">
                      <option value="">Select department or topic</option>
                      <option>General Enquiry</option>
                      <option>OPD Appointment</option>
                      <option>Panchakarma Packages</option>
                      <option>Admission</option>
                      <option>Research Collaboration</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--ayu-forest)" }}>Message *</label>
                    <textarea rows={4} className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400 resize-none" placeholder="Describe your query or health concern..." />
                  </div>
                  <button type="button" onClick={() => setSent(true)} className="btn-primary w-full justify-center">
                    <Send size={15} /> Send Message
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
