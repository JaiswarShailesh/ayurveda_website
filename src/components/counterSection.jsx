import React, { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";

const CounterSection = () => {
  useEffect(() => {
    new PureCounter();
  }, []);
  return (
    // <!-- Counts Section -->
    <section id="counts" className="section counts light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="5000"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Patients</p>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="150"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Doctors</p>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="2500"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Therapies</p>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="1200"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Yoga Sessions</p>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}
        </div>
      </div>
    </section>
    // <!-- /Counts Section -->
  );
};

export default CounterSection;
