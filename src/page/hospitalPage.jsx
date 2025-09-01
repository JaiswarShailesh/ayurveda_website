import Aos from "aos";
import React, { useEffect } from "react";
import HeroBanner from "../components/heroBanner";
import AboutUsSection from "../components/aboutUsSection";
import CounterSection from "../components/counterSection";
import OurServicesSection from "../components/ourServicesSection";
import SpecialiySection from "../components/specialitySection";
import NewsAndEventsSection from "../components/newsAndEventsSection";
import TestimonialSection from "../components/testimonialSection";
import ContactSection from "../components/contactSection";

const HospitalPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {/* <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Hospital</h1>
                <p className="mb-0">
                  Odio et unde deleniti. Deserunt numquam exercitationem.
                  Officiis quo odio sint voluptas consequatur ut a odio
                  voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
                  ratione sint. Sit quaerat ipsum dolorem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current">Hospital</li>
            </ol>
          </div>
        </nav>
      </div> */}
      {/* <!-- End Page Title --> */}
      <HeroBanner imageUrl={"/assets/images/ayurveda_hero_banner1.png"}/>
      <AboutUsSection />
      <CounterSection />
      <OurServicesSection />
      <SpecialiySection />
      <NewsAndEventsSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

export default HospitalPage;
