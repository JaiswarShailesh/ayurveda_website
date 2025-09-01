import React from "react";
import SectionHeading from "./sectionHeading";

const OurInstitutesSection = () => {
  return (
    <section
      id="ourInstitutions"
      className="section trainers-index our-institutions"
    >
      <SectionHeading
        sectionTitle={"Centers of Excellence"}
        sectionSubTitle={"Our Institutions"}
      />

      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 d-flex aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a href="/college" target="_blank">
              <div class="member">
                <div className="overflow-hidden">
                  <img
                    src="assets/images/college_thumbnail.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-content">
                  <h4>College</h4>
                </div>
              </div>
            </a>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a href="/hospital" target="_blank">
              <div class="member">
                <div className="overflow-hidden">
                  <img
                    src="assets/images/hospital_thumbnail.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-content">
                  <h4>Hospital</h4>
                </div>
              </div>
            </a>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <a href="/research-center" target="_blank">
              <div class="member">
                <div className="overflow-hidden">
                  <img
                    src="assets/images/researchCentre_thumbnail.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-content">
                  <h4>Research Centre</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurInstitutesSection;
