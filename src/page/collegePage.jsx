import React from "react";
import HeroBanner from "../components/heroBanner";

const CollegePage = () => {
  return (
    <>
      <HeroBanner imageUrl={"/assets/images/ayurveda_college_hero_banner.png"} />
      <section id="collegePage" className="section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center">Content Comming Soon...</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CollegePage;
