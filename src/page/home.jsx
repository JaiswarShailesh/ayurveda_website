import React from "react";
import AboutUsSection from "../components/aboutUsSection";
import ContactSection from "../components/contactSection";
import HeroBanner from "../components/heroBanner";
import OurInstitutesSection from "../components/ourInstitutesSection";

const HomePage = () => {
  return (
    <>
      <HeroBanner
        imageUrl={"/assets/images/hospitalCollegeResearchCenter_banner.png"}
      />
      <AboutUsSection />
      <OurInstitutesSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
