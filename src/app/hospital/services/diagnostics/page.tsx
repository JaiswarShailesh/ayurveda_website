import PageHeroSection from "@/app/components/PageHeroSection";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <PageHeroSection
        title="Diagnostics"
        subtitle="SVKM's Krutiben Bhupeshbhai Patel Ayurveda Hospital — quality healthcare services."
        breadcrumb={[{ label: "Hospital", href: "/hospital/doctors" }, { label: "Services", href: "/hospital/services/opd" }, { label: "Diagnostics", href: "/hospital/services/diagnostics" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-6">Detailed information about Diagnostics services is being updated. Please contact us directly for enquiries.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">Contact Us</Link>
            <Link href="/appointment" className="btn-outline inline-flex items-center gap-2">Book Appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
