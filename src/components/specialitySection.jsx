import React from "react";
import SectionHeading from "./sectionHeading";
// import ayuvedaCourse1 from "../assets/images/panchakarma_thumbnail.png";
// import ayuvedaCourse2 from "../assets/images/shalya_tantra_thumbnail.png";
// import ayuvedaCourse3 from "../assets/images/kayachikitsa_thumbnail.png";
import { keySpecialties } from "../data/keySpecialties";

const SpecialiySection = () => {
  return (
    <section id="keySpeciality" className="key-speciality courses section">
      <SectionHeading
        sectionTitle={"Departments"}
        sectionSubTitle={"Key Speciality"}
      />
      <div className="container">
        <div className="row">
          {keySpecialties.map((speciality, index) => (
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mb-4"
              data-aos="zoom-in"
              data-aos-delay={(index + 1) * 100}
              key={speciality.id}
            >
              <div className="course-item departments-card overflow-hidden">
                <a href={speciality.link}>
                  <img
                    src={speciality.image}
                    className="img-fluid"
                    alt={speciality.name}
                  />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3"></div>
                    <h3>{speciality.name}</h3>
                    <p className="description">{speciality.description}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}

          {/* <!-- End Course Item--> */}
        </div>
      </div>
    </section>
  );
};

export default SpecialiySection;
