import React from "react";
import Navbar from "./components/navbar";
import HeroBanner from "./components/heroBanner";
import Footer from "./components/footer";
import Courses from "./components/courses";
import AboutUsSection from "./components/aboutUsSection";
import SpecialiySection from "./components/specialitySection";
import OurServicesSection from "./components/ourServicesSection";
import CounterSection from "./components/counterSection";
import ContactSection from "./components/contactSection";
import TestimonialSection from "./components/testimonialSection";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <AboutUsSection />
      <CounterSection />
      <OurServicesSection />
      <SpecialiySection />
      <Courses />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
