"use client";
import PageHeroSection from "@/app/components/PageHeroSection";
import { Star, Send, ExternalLink, Lock, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <>
        <PageHeroSection title="Feedback & Review" breadcrumb={[{ label: "Feedback & Review", href: "/feedback" }]} />
        <section className="py-24 px-4 text-center" style={{ background: "var(--ayu-cream)" }}>
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🙏</span>
          </div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Thank You for Your Feedback!</h2>
          <p className="text-gray-600 max-w-md mx-auto">Your response has been recorded confidentially and shared with our senior management. We deeply value your experience and will work to continuously improve our services.</p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg" style={{ background: "rgba(74,124,63,0.08)", color: "var(--ayu-green)" }}>
            <ShieldCheck size={15} /> Your feedback is confidential and reviewed only by senior hospital authority.
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeroSection
        title="Feedback & Review"
        subtitle="Share your experience to help us serve you and future patients better."
        breadcrumb={[{ label: "Feedback & Review", href: "/feedback" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-2xl mx-auto">

          {/* Confidentiality notice — per Excel requirement */}
          <div className="flex items-start gap-3 p-4 rounded-xl mb-8" style={{ background: "rgba(45,90,39,0.06)", border: "1px solid rgba(45,90,39,0.2)" }}>
            <Lock size={18} style={{ color: "var(--ayu-forest)", flexShrink: 0, marginTop: "2px" }} />
            <div>
              <p className="font-bold text-sm mb-1" style={{ color: "var(--ayu-forest)" }}>Confidential Feedback</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Your feedback and review notifications are sent directly and exclusively to senior hospital authority. All responses are treated as strictly confidential and are used only for quality improvement purposes.
              </p>
            </div>
          </div>

          {/* External review links */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { name: "Google Reviews", link: "#", icon: "🌐", count: "4.8 ⭐ (245)" },
              { name: "Practo", link: "#", icon: "🏥", count: "4.9 ⭐ (182)" },
              { name: "JustDial", link: "#", icon: "📱", count: "4.7 ⭐ (130)" },
            ].map((p) => (
              <a key={p.name} href={p.link} className="ayu-card bg-white rounded-xl p-4 text-center" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
                <p className="text-2xl mb-1">{p.icon}</p>
                <p className="text-xs font-bold" style={{ color: "var(--ayu-forest)" }}>{p.name}</p>
                <p className="text-[10px] text-gray-400">{p.count}</p>
                <ExternalLink size={10} className="mx-auto mt-1 text-gray-300" />
              </a>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Submit Your Feedback</h2>
            <p className="text-xs text-gray-500 mb-6 flex items-center gap-1">
              <ShieldCheck size={12} style={{ color: "var(--ayu-green)" }} /> Feedback is confidential — reviewed only by senior management.
            </p>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--ayu-forest)" }}>Patient Name *</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--ayu-forest)" }}>Mobile Number</label>
                  <input type="tel" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400" placeholder="10-digit mobile" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--ayu-forest)" }}>Treating Doctor</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400">
                  <option value="">Select Doctor</option>
                  <option>Dr. Anjali Deshmukh – Kayachikitsa</option>
                  <option>Dr. Ramesh Patil – Shalyatantra</option>
                  <option>Dr. Kavita Sharma – Panchakarma</option>
                  <option>Dr. Preethi Venkat – Stri Roga & Prasuti</option>
                  <option>Dr. Suresh Joshi – Kayachikitsa</option>
                  <option>Dr. Meera Desai – Shalakyatantra</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--ayu-forest)" }}>Department / Service</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400">
                  <option value="">Select Department</option>
                  <option>Kayachikitsa (Internal Medicine)</option>
                  <option>Shalyatantra (Surgery)</option>
                  <option>Panchakarma</option>
                  <option>Prasuti Tantra & Stri Roga</option>
                  <option>Shalakyatantra (ENT & Eye)</option>
                  <option>OPD Services</option>
                  <option>IPD Services</option>
                  <option>Pharmacy</option>
                  <option>Nursing / Ward</option>
                  <option>Reception / Administration</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--ayu-forest)" }}>Overall Rating *</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setRating(s)}
                      onMouseEnter={() => setHover(s)}
                      onMouseLeave={() => setHover(0)}
                    >
                      <Star
                        size={32}
                        fill={(hover || rating) >= s ? "#c8973a" : "none"}
                        stroke={(hover || rating) >= s ? "#c8973a" : "#d1d5db"}
                        className="transition-colors"
                      />
                    </button>
                  ))}
                  {rating > 0 && (
                    <span className="ml-2 self-center text-sm font-semibold" style={{ color: "var(--ayu-gold)" }}>
                      {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][rating]}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--ayu-forest)" }}>Your Feedback *</label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-green-400 resize-none"
                  placeholder="Please share your experience about treatment quality, staff behaviour, cleanliness, facilities, or any suggestions for improvement..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--ayu-forest)" }}>Would you recommend us to others?</label>
                <div className="flex flex-wrap gap-4">
                  {["Yes, definitely", "Yes, probably", "Not sure", "No"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="radio" name="recommend" className="accent-green-600" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg flex items-start gap-2 text-xs" style={{ background: "rgba(45,90,39,0.05)", color: "var(--ayu-forest)" }}>
                <Lock size={12} className="flex-shrink-0 mt-0.5" />
                Your feedback will be sent only to senior hospital management and treated as strictly confidential. It will not be shared publicly without your explicit consent.
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="btn-primary w-full justify-center text-base"
              >
                <Send size={16} /> Submit Feedback Confidentially
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
