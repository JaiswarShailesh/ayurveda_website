import PageHeroSection from "@/app/components/PageHeroSection";

export default function KayachikitsaPage() {
  return (
    <>
      <PageHeroSection
        title="Department of Kayachikitsa"
        subtitle="Detailed information about our services and facilities."
        breadcrumb={[{ label: "Department of Kayachikitsa", href: "#" }]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-8">
          <p className="text-green-800 leading-relaxed">
            The Department of Kayachikitsa provides in-depth clinical exposure
            in the management of chronic diseases such as diabetes,
            hypertension, rheumatological conditions, and metabolic disorders.
            Students learn classical diagnostic approaches like{" "}
            <span className="font-semibold">Roga–Rogi Pariksha</span> along with
            relevant modern investigations.
          </p>
          <p className="text-green-800 leading-relaxed">
            Regular OPD and IPD services are offered, with individualized
            treatment plans based on dosha assessment, dietary guidance,
            lifestyle counseling, and appropriate Panchakarma or allied
            therapies where indicated.
          </p>
        </div>
      </section>
    </>
  );
}

