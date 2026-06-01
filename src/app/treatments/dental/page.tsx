import PageHeroSection from "@/app/components/PageHeroSection";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <PageHeroSection
        title="Dental"
        subtitle="Detailed information about Dental at SVKM's Krutiben Bhupeshbhai Patel Ayurveda Hospital."
        breadcrumb={[{ label: "Treatments", href: "/treatments" }, { label: "Dental", href: "/treatments/dental" }]}
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
