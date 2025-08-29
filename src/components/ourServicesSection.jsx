import React from "react";
import SectionHeading from "./sectionHeading";
import ServicesSliders from "./servicesSlider";
import { services1 } from "../data/ourServices";
import { services2 } from "../data/ourServices";

const OurServicesSection = () => {
  return (
    <section id="ourServices" className="our-services section">
      <SectionHeading
        sectionTitle={"Our Services"}
        sectionSubTitle={"Facilities Available"}
      />
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 py-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <ServicesSliders direction={"ltr"} data={services1} />
          </div>
          <div
            className="col-lg-12 py-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <ServicesSliders direction={"rtl"} data={services2} />
          </div>

          {/* <!-- End Course Item--> */}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
