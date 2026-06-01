import PageHeroSection from "@/app/components/PageHeroSection";
import AboutSection from "@/app/components/AboutUsSection";

export default function OverviewPage() {
  return (
    <>
      <PageHeroSection
        title="Institution Overview"
        subtitle="Detailed information about our services and facilities."
        breadcrumb={[{ label: "Institution Overview", href: "#" }]}
      />
      <AboutSection />
    </>
  );
}

