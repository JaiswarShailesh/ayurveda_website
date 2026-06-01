import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about/institution" },
  { label: "Diseases", href: "/disease/speciality-wise" },
  { label: "Treatments", href: "/treatments" },
  { label: "Packages", href: "/packages" },
  { label: "Shop", href: "/shop" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events & News", href: "/events" },
  { label: "Announcements", href: "/announcements" },
  { label: "Achievement & Research", href: "/achievements" },
  { label: "Patient Stories", href: "/patient-stories" },
  { label: "Feedback & Review", href: "/feedback" },
  { label: "Wellness Library", href: "/wellness" },
  { label: "Research", href: "/research" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

const departments = [
  "Kayachikitsa (Internal Medicine)",
  "Panchakarma",
  "Shalya Tantra (Surgery)",
  "Stri Roga & Prasuti",
  "Shalakya Tantra (ENT & Eye)",
  "Dantachikitsa (Dental)",
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--ayu-deep)", color: "rgba(255,255,255,0.85)" }}>
      {/* Top section */}
      <div className="max-w-screen-xl mx-auto px-6 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Branding */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <Image src="/images/hospital_logo.png" alt="Logo" width={60} height={60} className="h-14 w-auto opacity-90" />
            <div>
              <p className="text-xs font-bold" style={{ color: "var(--ayu-amber)" }}>SVKM&apos;s</p>
              <p className="text-sm font-bold leading-tight text-white" style={{ fontFamily: "var(--font-heading)" }}>Smt. Krutiben Bhupeshbhai Patel</p>
              <p className="text-xs text-white/70">Multispeciality Ayurveda Hospital</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-5 text-white/70">
            Blending 5000 years of classical Ayurvedic wisdom with modern evidence-based care — committed to holistic healing of body, mind and spirit.
          </p>
          {/* Social links */}
          <div className="flex gap-3">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Youtube, href: "#" },
            ].map(({ Icon, href }) => (
              <a key={href + Icon.displayName} href={href} className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110" style={{ background: "rgba(255,255,255,0.08)" }}>
                <Icon size={17} style={{ color: "var(--ayu-amber)" }} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-bold mb-5 text-white" style={{ fontFamily: "var(--font-heading)" }}>Quick Links</h3>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-2">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-xs text-white/60 hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ArrowRight size={10} className="flex-shrink-0" style={{ color: "var(--ayu-sage)" }} />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-base font-bold mb-5 text-white" style={{ fontFamily: "var(--font-heading)" }}>Departments</h3>
          <ul className="space-y-2.5">
            {departments.map((d) => (
              <li key={d}>
                <span className="text-xs text-white/60 flex items-start gap-1.5">
                  <span className="mt-0.5 text-[8px]" style={{ color: "var(--ayu-sage)" }}>🌿</span>
                  {d}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h4 className="text-sm font-bold mb-3 text-white" style={{ fontFamily: "var(--font-heading)" }}>OPD Hours</h4>
            <div className="space-y-1.5 text-xs text-white/60">
              <div className="flex items-center gap-2"><Clock size={11} style={{ color: "var(--ayu-amber)" }} /> Mon–Sat: 9:00 AM – 4:00 PM</div>
              <div className="flex items-center gap-2"><Clock size={11} style={{ color: "var(--ayu-amber)" }} /> Sunday: 9:00 AM – 12:00 PM</div>
              <div className="flex items-center gap-2 text-red-300"><Clock size={11} className="text-red-300" /> Emergency: 24 × 7</div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-base font-bold mb-5 text-white" style={{ fontFamily: "var(--font-heading)" }}>Contact Us</h3>
          <div className="space-y-3 text-xs text-white/70">
            <div className="flex items-start gap-2">
              <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color: "var(--ayu-amber)" }} />
              <p>Bhaktivedanta Swami Marg, SVKM Campus, Vile Parle (W), Mumbai – 400 056, Maharashtra</p>
            </div>
            <a href="tel:7045517269" className="flex items-center gap-2 hover:text-amber-300 transition-colors">
              <Phone size={13} style={{ color: "var(--ayu-amber)" }} /> OPD: 70455 17269
            </a>
            <a href="tel:9920747327" className="flex items-center gap-2 hover:text-amber-300 transition-colors">
              <Phone size={13} style={{ color: "var(--ayu-amber)" }} /> Diagnostics: 99207 47327
            </a>
            <a href="tel:02224278888" className="flex items-center gap-2 text-red-300 hover:text-red-200 transition-colors">
              <Phone size={13} /> Emergency: 022 2427 8888
            </a>
            <a href="mailto:ayurveda.hospital@svkm.ac.in" className="flex items-center gap-2 hover:text-amber-300 transition-colors">
              <Mail size={13} style={{ color: "var(--ayu-amber)" }} /> ayurveda.hospital@svkm.ac.in
            </a>
          </div>
          <div className="mt-5">
            <Link href="/appointment" className="btn-gold text-xs w-full text-center block py-2.5">
              Book Appointment Online
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

      {/* Bottom bar */}
      <div className="max-w-screen-xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
        <p>© {new Date().getFullYear()} SVKM&apos;s Smt. Krutiben Bhupeshbhai Patel Multispeciality Ayurveda Hospital &amp; Research Centre. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Use</Link>
          <Link href="/sitemap" className="hover:text-white/70 transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
