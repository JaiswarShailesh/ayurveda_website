import PageHeroSection from "@/app/components/PageHeroSection";
import React from "react";
import AboutInstitution from "./aboutInstitution";

const instituteDescription = [
  "SVKM's Smt. Krutiben Bhupeshbhai Patel Multispeciality Ayurveda Hospital & Research Centre is committed to preserving the ancient wisdom of Ayurveda while integrating modern medical practices. With a strong academic foundation and exceptional clinical exposure, we develop skilled Ayurvedic professionals capable of making meaningful contributions to healthcare.",
  "Our institution focuses on patient-centric healing, research-driven learning, and a holistic approach to wellness. We strive to maintain the highest standards in education, treatment, and community service — all rooted in classical Ayurvedic tradition.",
];

const Page = () => {
  return (
    <>
      <PageHeroSection
        title="About Our Institution"
        subtitle="Learn more about our institution, our values, and our journey in Ayurvedic excellence."
        breadcrumb={[{ label: "About", href: "/about/institution" }]}
      />
      <AboutInstitution
        data={instituteDescription}
        instituteImage="/images/ayurveda_aboutus_medium_banner.png"
        altText="institute image"
      />
    </>
  );
};

export default Page;
