import PageHeroSection from "@/app/components/PageHeroSection";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <PageHeroSection
        title="Health Checkup Department"
        subtitle="Expert Ayurvedic care from qualified specialists at SVKM's Krutiben Bhupeshbhai Patel Ayurveda Hospital."
        breadcrumb={[{ label: "Hospital", href: "/hospital/doctors" }, { label: "Departments", href: "/hospital/doctors" }, { label: "Health Checkup", href: "/departments/health-checkup" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-6">Detailed information for Health Checkup Department is being updated. Please contact us for doctor schedules and appointments.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/hospital/doctors" className="btn-primary inline-flex items-center gap-2">Find a Doctor</Link>
            <Link href="/appointment" className="btn-outline inline-flex items-center gap-2">Book Appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}
