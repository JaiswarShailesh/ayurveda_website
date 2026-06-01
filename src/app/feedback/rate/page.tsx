import PageHeroSection from "@/app/components/PageHeroSection";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <PageHeroSection
        title="Rate"
        subtitle="Patient feedback and reviews — helping us improve our services for you."
        breadcrumb={[{ label: "Feedback & Review", href: "/feedback" }, { label: "Rate", href: "/feedback/rate" }]}
      />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-6">This section is coming soon. Use our feedback form to share your experience.</p>
          <Link href="/feedback" className="btn-primary inline-flex items-center gap-2">Submit Feedback</Link>
        </div>
      </section>
    </>
  );
}
