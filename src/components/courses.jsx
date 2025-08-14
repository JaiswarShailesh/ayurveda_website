import React from "react";
import ayuvedaCourse1 from "../assets/images/ayurveda_course_1.png";
import ayuvedaCourse2 from "../assets/images/ayurveda_course_2.png";
import ayuvedaCourse3 from "../assets/images/ayurveda_course_3.png";

const Courses = () => {
  return (
    // <!-- Courses Section -->
    <section id="courses" class="courses section">
      {/* <!-- Section Title --> */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Courses</h2>
        <p>Popular Courses</p>
      </div>
      {/* <!-- End Section Title --> */}

      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div class="course-item">
              <img src={ayuvedaCourse1} class="img-fluid" alt="..." />
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <p class="category">Undergraduate Programs</p>
                  {/* <p class="price">$169</p> */}
                </div>

                <h3>
                  <a href="course-details.html">
                    Bachelor of Ayurvedic Medicine and Surgery (BAMS)
                  </a>
                </h3>
                <p class="description">
                  A comprehensive program that combines the principles of
                  Ayurveda with modern medical science, preparing students to
                  become qualified Ayurvedic physicians.
                </p>
                {/* <div class="trainer d-flex justify-content-between align-items-center">
                  <div class="trainer-profile d-flex align-items-center">
                    <img
                      src="assets/img/trainers/trainer-1-2.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <a href="" class="trainer-link">
                      Antonio
                    </a>
                  </div>
                  <div class="trainer-rank d-flex align-items-center">
                    <i class="bi bi-person user-icon"></i>&nbsp;50 &nbsp;&nbsp;
                    <i class="bi bi-heart heart-icon"></i>&nbsp;65
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* <!-- End Course Item--> */}

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="course-item">
              <img src={ayuvedaCourse2} class="img-fluid" alt="..." />
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <p class="category">Postgraduate Programs</p>
                  {/* <p class="price">$250</p> */}
                </div>

                <h3>
                  <a href="course-details.html">
                    MD (Ayurveda) – Kayachikitsa (General Medicine)
                  </a>
                </h3>
                <p class="description">
                  Advanced specialization in Ayurvedic internal medicine,
                  focusing on diagnosis, treatment, and management of chronic
                  and acute illnesses.
                </p>
                {/* <div class="trainer d-flex justify-content-between align-items-center">
                  <div class="trainer-profile d-flex align-items-center">
                    <img
                      src="assets/img/trainers/trainer-2-2.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <a href="" class="trainer-link">
                      Lana
                    </a>
                  </div>
                  <div class="trainer-rank d-flex align-items-center">
                    <i class="bi bi-person user-icon"></i>&nbsp;35 &nbsp;&nbsp;
                    <i class="bi bi-heart heart-icon"></i>&nbsp;42
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* <!-- End Course Item--> */}

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div class="course-item">
              <img src={ayuvedaCourse3} class="img-fluid" alt="..." />
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <p class="category">Diploma & Certificate Courses</p>
                  {/* <p class="price">$180</p> */}
                </div>

                <h3>
                  <a href="course-details.html">
                    Certificate Course in Ayurvedic Nutrition & Dietetics
                  </a>
                </h3>
                <p class="description">
                  Short-term course covering Ayurvedic dietary principles, food
                  planning, and nutritional therapy for maintaining and
                  restoring health.
                </p>
                {/* <div class="trainer d-flex justify-content-between align-items-center">
                  <div class="trainer-profile d-flex align-items-center">
                    <img
                      src="assets/img/trainers/trainer-3-2.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <a href="" class="trainer-link">
                      Brandon
                    </a>
                  </div>
                  <div class="trainer-rank d-flex align-items-center">
                    <i class="bi bi-person user-icon"></i>&nbsp;20 &nbsp;&nbsp;
                    <i class="bi bi-heart heart-icon"></i>&nbsp;85
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* <!-- End Course Item--> */}
        </div>
      </div>
    </section>
    //* <!-- /Courses Section --> */
  );
};

export default Courses;
