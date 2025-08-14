import React from "react";
import Navbar from "./components/navbar";
import HeroBanner from "./components/heroBanner";
import Footer from "./components/footer";
import Courses from "./components/courses";
import AboutUsSection from "./components/aboutUsSection";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <AboutUsSection />
      <Courses />
      <Footer />
    </>
  );
};

export default App;
