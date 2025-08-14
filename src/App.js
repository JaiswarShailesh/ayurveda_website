import React from "react";
import Navbar from "./components/navbar";
import HeroBanner from "./components/heroBanner";
import Footer from "./components/footer";
import Courses from "./components/courses";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Courses />
      <Footer />
    </>
  );
};

export default App;
