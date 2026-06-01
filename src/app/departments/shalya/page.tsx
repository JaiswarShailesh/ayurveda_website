import PageHeroSection from "@/app/components/PageHeroSection";

export default function ShalyaPage() {
  return (
    <>
      <PageHeroSection
        title="Department of Shalya Tantra"
        subtitle="Detailed information about our services and facilities."
        breadcrumb={[{ label: "Department of Shalya Tantra", href: "#" }]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-8">
          <p className="text-green-800 leading-relaxed">
            The Shalya Tantra department imparts training in classical surgical
            concepts such as <span className="font-semibold">Shastra</span> and{" "}
            <span className="font-semibold">Kshara Karma</span>, wound care,
            and para-surgical procedures, aligned with modern operation theatre
            standards and aseptic protocols.
          </p>
          <p className="text-green-800 leading-relaxed">
            Students observe and assist in a variety of minor and selected
            major procedures, gaining confidence in pre-operative assessment,
            intra-operative support, and post-operative Ayurvedic management.
          </p>
        </div>
      </section>
    </>
  );
}

