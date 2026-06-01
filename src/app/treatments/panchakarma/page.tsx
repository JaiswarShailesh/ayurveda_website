import PageHeroSection from "@/app/components/PageHeroSection";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <PageHeroSection
        title="Panchakarma"
        subtitle="Detailed information about Panchakarma at SVKM's Krutiben Bhupeshbhai Patel Ayurveda Hospital."
        breadcrumb={[{ label: "Treatments", href: "/treatments" }, { label: "Panchakarma", href: "/treatments/panchakarma" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-gray-600 mb-6">Content for this section is being updated. Please check back soon or contact us directly.</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">Contact Us for Details</Link>
        </div>
      </section>
    </>
  );
}
