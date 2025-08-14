import React from "react";
import aboutUsBanner from "../assets/images/ayurveda_aboutus_medium_banner.png";

const AboutUsSection = () => {
  return (
    // <!-- About Section -->
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src={aboutUsBanner} className="img-fluid" alt="" />
          </div>

          <div
            className="col-lg-6 order-2 order-lg-1 content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>About Us</h3>
            <p className="fst-italic">
              Our Ayurveda College, Hospital, and Research Center is dedicated
              to preserving the ancient wisdom of Ayurveda while integrating it
              with modern healthcare practices. We nurture future healers
              through comprehensive education, compassionate care, and
              groundbreaking research.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle"></i>{" "}
                <span>
                  Quality Education – Experienced faculty guiding students with
                  a balanced blend of theory and practice.
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle"></i>{" "}
                <span>
                  Holistic Healthcare – Personalized treatments based on
                  centuries-old Ayurvedic principles.
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle"></i>{" "}
                <span>
                  Innovative Research – Advancing Ayurveda for the needs of the
                  modern world.
                </span>
              </li>
            </ul>
            <a href="#" className="read-more">
              <span>Read More</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    //* <!-- /About Section --> */
  );
};

export default AboutUsSection;
