"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu, X, ChevronDown, PhoneCall, Stethoscope, Ambulance,
  Leaf, Package, ShoppingCart, Image as ImageIcon,
  Calendar, Megaphone, Award, Play,
  BookOpen, Microscope, Search, MessageCircle
} from "lucide-react";

type SubItem = { label: string; href: string; desc?: string };
type ChildMenu = { label: string; href?: string; icon?: React.ElementType; sub?: SubItem[] };
type MenuItem = { label: string; href?: string; icon?: React.ElementType; sub?: (ChildMenu | SubItem)[] };

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    sub: [
      { label: "About Institution", href: "/about/institution" },
      { label: "About SVKM", href: "/about/svkm" },
      { label: "Vision & Mission", href: "/about/mission-vision" },
      { label: "President's Message", href: "/about/president" },
      { label: "Administration", href: "/about/administration" },
      { label: "Management", href: "/about/management" },
    ],
  },
  {
    label: "Hospital",
    sub: [
      { label: "Find Your Doctor", href: "/hospital/doctors" },
      {
        label: "Services Offered",
        sub: [
          { label: "OPD Services", href: "/hospital/services/opd" },
          { label: "IPD Services", href: "/hospital/services/ipd" },
          { label: "Panchakarma Therapy", href: "/hospital/services/panchakarma" },
          { label: "Garbhasanskar", href: "/hospital/services/garbhasanskar" },
          { label: "Swarnaprashan", href: "/hospital/services/swarnaprashan" },
          { label: "Yoga & Wellness", href: "/hospital/services/yoga-wellness" },
          { label: "Operation Theater", href: "/hospital/services/operation-theater" },
          { label: "Normal Delivery & C-Section", href: "/hospital/services/delivery" },
          { label: "Radiology (X-Ray, Sonography)", href: "/hospital/services/radiology" },
          { label: "Pathology (Biochemistry, Microbiology)", href: "/hospital/services/pathology" },
          { label: "Other Diagnostics (ECG, PFT)", href: "/hospital/services/diagnostics" },
          { label: "Speciality Clinic", href: "/hospital/services/speciality-clinic" },
          { label: "ENT Procedure", href: "/hospital/services/ent" },
          { label: "Audiometry", href: "/hospital/services/audiometry" },
          { label: "Ophthalmology Procedure", href: "/hospital/services/ophthalmology" },
          { label: "Community Services", href: "/hospital/services/community" },
          { label: "Pharmacy", href: "/hospital/services/pharmacy" },
          { label: "Ambulance Services", href: "/hospital/services/ambulance" },
          { label: "Emergency Services", href: "/hospital/services/emergency" },
        ],
      } as ChildMenu,
      {
        label: "Department",
        sub: [
          { label: "Emergency Department", href: "/departments/emergency" },
          { label: "Shalyatantra", href: "/departments/shalya" },
          { label: "Panchakarma", href: "/departments/panchakarma" },
          { label: "Kayachikitsa", href: "/departments/kayachikitsa" },
          { label: "Prasuti Tantra & Stri Roga", href: "/departments/stri-roga" },
          { label: "Shalakyatantra (Netra & ENT)", href: "/departments/shalakya" },
          { label: "Vishachikitsa", href: "/departments/vishachikitsa" },
          { label: "Balroga / Kaumarbhritya", href: "/departments/kaumarbhritya" },
          { label: "Swasthavritta (Preventive Medicine)", href: "/departments/swasthavritta" },
          { label: "Yoga Department", href: "/departments/yoga" },
          { label: "Physiotherapy", href: "/departments/physiotherapy" },
          { label: "Health Check-Up", href: "/departments/health-checkup" },
        ],
      } as ChildMenu,
      { label: "Online Consulting", href: "/hospital/online-consultation" },
    ],
  },
  {
    label: "Our Treatment",
    icon: Leaf,
    sub: [
      { label: "Disease-wise Guide", href: "/disease/speciality-wise" },
      { label: "Arthritis & Joint Disorders", href: "/disease/arthritis" },
      { label: "Digestive Disorders", href: "/disease/digestive" },
      { label: "Skin Diseases", href: "/disease/skin" },
      { label: "Respiratory Disorders", href: "/disease/respiratory" },
      { label: "Neurological Disorders", href: "/disease/neurological" },
      { label: "Women's Health", href: "/disease/womens-health" },
      { label: "Lifestyle Diseases", href: "/disease/lifestyle" },
      { label: "All Treatments", href: "/treatments" },
      { label: "Panchakarma Therapy", href: "/treatments/panchakarma" },
      { label: "Ayurvedic Surgery", href: "/treatments/surgery" },
      { label: "Gynaecology & Obstetrics", href: "/treatments/gynaecology" },
      { label: "Ophthalmology (Shalakya)", href: "/treatments/ophthalmology" },
      { label: "Dental (Dantachikitsa)", href: "/treatments/dental" },
      { label: "Speciality Clinics", href: "/treatments/speciality-clinics" },
      { label: "Book Appointment", href: "/appointment" },
    ],
  },
  {
    label: "Packages",
    icon: Package,
    sub: [
      { label: "All Packages", href: "/packages" },
      { label: "Health Checkup – Male", href: "/packages/health-checkup-male" },
      { label: "Health Checkup – Female", href: "/packages/health-checkup-female" },
      { label: "Panchakarma Package", href: "/packages/panchakarma" },
      { label: "Weight Reduction Package", href: "/packages/weight-reduction" },
      { label: "Rejuvenating Package", href: "/packages/rejuvenation" },
      { label: "Skin & Beauty Package", href: "/packages/skin-beauty" },
      { label: "Offers & Discounts", href: "/packages/offers" },
    ],
  },
  {
    label: "Shop",
    icon: ShoppingCart,
    sub: [
      { label: "Ayurvedic Medicines", href: "/shop" },
      { label: "Health Products", href: "/shop/health-products" },
      { label: "Disease-wise Medicines", href: "/shop/disease-wise" },
      { label: "My Cart", href: "/shop/cart" },
    ],
  },
  {
    label: "Gallery",
    icon: ImageIcon,
    sub: [
      { label: "Hospital Gallery", href: "/gallery" },
      { label: "Department Photos", href: "/gallery/departments" },
      { label: "Staff & Wards", href: "/gallery/staff" },
    ],
  },
  {
    label: "Events & News",
    icon: Calendar,
    sub: [
      { label: "Upcoming Events", href: "/events" },
      { label: "News & Media", href: "/events/news" },
      { label: "CME & Conferences", href: "/events/cme" },
      { label: "Staff Training", href: "/events/training" },
      { label: "Camp Photos", href: "/events/camps" },
    ],
  },
  {
    label: "Announcements",
    icon: Megaphone,
    sub: [
      { label: "New Consultant Welcome", href: "/announcements" },
      { label: "Employee of the Month", href: "/announcements/employee-month" },
      { label: "Package Offers", href: "/packages/offers" },
      { label: "Camp Schedules", href: "/events/camps" },
    ],
  },
  {
    label: "Achievement & Research",
    icon: Award,
    sub: [
      { label: "Awards & Certifications", href: "/achievements" },
      { label: "Research Publications", href: "/research" },
      { label: "Accreditations", href: "/achievements/accreditations" },
    ],
  },
  {
    label: "Patient Stories",
    icon: Play,
    sub: [
      { label: "Video Testimonials", href: "/patient-stories" },
      { label: "Photo Testimonials", href: "/patient-stories/photo-testimonials" },
    ],
  },
  {
    label: "Feedback & Review",
    icon: MessageCircle,
    sub: [
      { label: "Submit Feedback", href: "/feedback" },
      { label: "Patient Reviews", href: "/feedback/reviews" },
      { label: "Rate Your Experience", href: "/feedback/rate" },
    ],
  },
  {
    label: "Wellness Library",
    icon: BookOpen,
    sub: [
      { label: "Health Blogs", href: "/wellness" },
      { label: "Health Talks & Podcasts", href: "/wellness/podcasts" },
      { label: "YouTube Videos", href: "/wellness/videos" },
      { label: "Research Literature", href: "/research" },
    ],
  },
  { label: "Research", href: "/research", icon: Microscope },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeParent, setActiveParent] = useState<string | null>(null);
  const [activeChild, setActiveChild] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveParent(null);
        setActiveChild(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  const toggleParent = (menu: string) => {
    setActiveParent(activeParent === menu ? null : menu);
    setActiveChild(null);
  };
  const toggleChild = (menu: string) => setActiveChild(activeChild === menu ? null : menu);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top bar */}
      <div className={`transition-all duration-300 ${scrolled ? "py-1.5" : "py-2.5"} bg-white/97 backdrop-blur-md border-b border-amber-100 shadow-sm`}>
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="hidden lg:flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Image src="/images/hospital_logo.png" alt="Hospital Logo" width={70} height={70} className="h-[60px] w-auto" priority />
              <div className="leading-tight">
                <p className="text-xs font-semibold" style={{ color: "var(--ayu-gold)" }}>SVKM&apos;s</p>
                <p className="text-sm font-bold leading-tight" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>
                  Smt. Krutiben Bhupeshbhai Patel
                </p>
                <p className="text-xs font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>
                  Multispeciality Ayurveda Hospital &amp; Research Centre
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex gap-4 text-sm flex-shrink-0">
              <a href="tel:7045517269" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                <div className="p-1.5 rounded-full" style={{ background: "rgba(74,124,63,0.1)" }}>
                  <PhoneCall size={13} style={{ color: "var(--ayu-green)" }} />
                </div>
                <div>
                  <p className="font-semibold text-[10px] text-gray-500">OPD Appointment</p>
                  <p className="font-bold text-xs" style={{ color: "var(--ayu-forest)" }}>7045517269</p>
                </div>
              </a>
              <a href="tel:9920747327" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                <div className="p-1.5 rounded-full" style={{ background: "rgba(74,124,63,0.1)" }}>
                  <Stethoscope size={13} style={{ color: "var(--ayu-green)" }} />
                </div>
                <div>
                  <p className="font-semibold text-[10px] text-gray-500">Diagnostic Center</p>
                  <p className="font-bold text-xs" style={{ color: "var(--ayu-forest)" }}>99207 47327</p>
                </div>
              </a>
              <a href="tel:02224278888" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                <div className="p-1.5 rounded-full bg-red-50">
                  <Ambulance size={13} className="text-red-600" />
                </div>
                <div>
                  <p className="font-semibold text-[10px] text-red-500">Emergency / Ambulance 24×7</p>
                  <p className="font-bold text-xs text-red-600">022 2427 8888</p>
                </div>
              </a>
            </div>

            {/* Right side: Search + Book + SVKM Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Search */}
              <div className="relative">
                {searchOpen ? (
                  <div className="flex items-center gap-1 border border-gray-300 rounded-lg overflow-hidden">
                    <input
                      ref={searchRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search doctors, treatments..."
                      className="px-3 py-1.5 text-sm outline-none w-52"
                    />
                    <button onClick={() => { setSearchOpen(false); setSearchQuery(""); }} className="px-2 py-1.5 text-gray-400 hover:text-gray-600">
                      <X size={14} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors hover:bg-gray-100"
                    style={{ color: "var(--ayu-forest)", border: "1px solid rgba(0,0,0,0.1)" }}
                  >
                    <Search size={14} /> Search
                  </button>
                )}
              </div>
              <Link href="/appointment" className="btn-primary text-xs py-2 px-3">
                Book Appointment
              </Link>
              <a href="https://svkm.ac.in" target="_blank" rel="noreferrer">
                <Image src="/images/svkm-logo.png" width={50} height={50} alt="SVKM Logo" className="h-10 w-auto" />
              </a>
            </div>
          </div>

          {/* Mobile header */}
          <div className="lg:hidden flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/images/hospital_logo.png" alt="Logo" width={44} height={44} className="h-[44px] w-auto" />
              <div>
                <p className="text-[10px] font-semibold" style={{ color: "var(--ayu-gold)" }}>SVKM&apos;s</p>
                <p className="text-xs font-bold" style={{ color: "var(--ayu-forest)", fontFamily: "var(--font-heading)" }}>Smt. KBP Ayurveda Hospital</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <a href="tel:02224278888" className="p-1.5 rounded-full bg-red-50">
                <Ambulance size={16} className="text-red-600" />
              </a>
              <a href="tel:7045517269" className="p-1.5 rounded-full" style={{ background: "rgba(74,124,63,0.1)" }}>
                <PhoneCall size={16} style={{ color: "var(--ayu-green)" }} />
              </a>
              <button className="p-1.5 rounded-full" style={{ background: "rgba(74,124,63,0.1)" }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={18} style={{ color: "var(--ayu-forest)" }} /> : <Menu size={18} style={{ color: "var(--ayu-forest)" }} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav ref={dropdownRef} style={{ background: "linear-gradient(135deg, var(--ayu-forest) 0%, #3a6e34 50%, #2d5a27 100%)" }} className="shadow-lg">
        <div className="max-w-screen-xl mx-auto px-4">
          <ul className="hidden lg:flex items-center flex-wrap gap-0">
            {menuItems.map((menu) => (
              <li key={menu.label} className="relative">
                {menu.sub ? (
                  <>
                    <button
                      onClick={() => toggleParent(menu.label)}
                      className={`flex items-center gap-1 px-2.5 py-3 text-xs font-medium transition-all duration-200 hover:text-amber-300 ${activeParent === menu.label ? "text-amber-300 bg-white/10" : "text-white/90"}`}
                    >
                      {menu.icon && <menu.icon size={12} />}
                      {menu.label}
                      <ChevronDown size={11} className={`transition-transform duration-200 ${activeParent === menu.label ? "rotate-180" : ""}`} />
                    </button>

                    {activeParent === menu.label && (
                      <ul className="absolute top-full left-0 mt-1 min-w-[220px] dropdown-glass shadow-2xl animate-fadeIn z-50 max-h-[80vh] overflow-y-auto">
                        {menu.sub.map((sub) => (
                          <li key={sub.label} className="relative">
                            {(sub as ChildMenu).sub ? (
                              <>
                                <button
                                  onClick={() => toggleChild(sub.label)}
                                  className="flex justify-between items-center w-full px-4 py-2.5 text-sm hover:bg-green-50 transition-colors"
                                  style={{ color: "var(--ayu-forest)" }}
                                >
                                  {sub.label}
                                  <ChevronDown size={12} className={`transition-transform flex-shrink-0 ml-2 ${activeChild === sub.label ? "rotate-180" : ""}`} />
                                </button>
                                {activeChild === sub.label && (
                                  <ul className="absolute left-full top-0 min-w-[240px] dropdown-glass shadow-2xl max-h-[70vh] overflow-y-auto">
                                    {(sub as ChildMenu).sub!.map((child) => (
                                      <li key={child.label}>
                                        <Link href={(child as SubItem).href} className="block px-4 py-2 text-sm hover:bg-green-50 transition-colors" style={{ color: "var(--ayu-forest)" }}>
                                          {child.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            ) : (
                              <Link href={(sub as SubItem).href || "#"} className="block px-4 py-2.5 text-sm hover:bg-green-50 transition-colors" style={{ color: "var(--ayu-forest)" }}>
                                {sub.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={menu.href || "#"}
                    className="flex items-center gap-1 px-2.5 py-3 text-xs font-medium text-white/90 hover:text-amber-300 transition-all duration-200"
                  >
                    {menu.icon && <menu.icon size={12} />}
                    {menu.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden max-h-[75vh] overflow-y-auto" style={{ background: "var(--ayu-forest)" }}>
            {/* Mobile search */}
            <div className="px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                <Search size={14} className="text-white/60" />
                <input type="text" placeholder="Search doctors, treatments..." className="bg-transparent text-white placeholder-white/50 text-sm outline-none flex-1" />
              </div>
            </div>
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.sub ? (
                  <button
                    onClick={() => toggleParent(item.label)}
                    className="flex items-center justify-between w-full px-5 py-3 text-white/90 border-b border-white/10 text-sm font-medium"
                  >
                    <span className="flex items-center gap-2">
                      {item.icon && <item.icon size={13} />}
                      {item.label}
                    </span>
                    <ChevronDown size={13} className={`transition-transform ${activeParent === item.label ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="flex items-center gap-2 px-5 py-3 text-white/90 border-b border-white/10 text-sm font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon && <item.icon size={13} />}
                    {item.label}
                  </Link>
                )}
                {item.sub && activeParent === item.label && (
                  <div style={{ background: "rgba(0,0,0,0.2)" }}>
                    {item.sub.map((sub) => (
                      <Link
                        key={sub.label}
                        href={(sub as SubItem).href || "#"}
                        className="block px-8 py-2.5 text-white/75 hover:text-amber-300 text-sm border-b border-white/5"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        — {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="p-4 border-t border-white/20">
              <Link href="/appointment" className="btn-gold w-full text-center block" onClick={() => setMobileMenuOpen(false)}>
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
