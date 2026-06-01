import PageHeroSection from "@/app/components/PageHeroSection";
export default function Page() {
  return (
    <>
      <PageHeroSection title="Sitemap" breadcrumb={[{ label: "Sitemap", href: "/sitemap" }]} />
      <section className="py-16 px-4" style={{ background: "var(--ayu-cream)" }}>
        <div className="max-w-3xl mx-auto text-gray-600 text-sm leading-relaxed space-y-4">
          <p>This page contains our Sitemap information. Please contact us at ayurveda.hospital@svkm.ac.in for specific queries.</p>
        </div>
      </section>
    </>
  );
}
