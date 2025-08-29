import React from "react";

const SectionHeading = ({ sectionTitle, sectionSubTitle }) => {
  return (
    <div className="container section-title" data-aos="fade-up">
      <h2>{sectionTitle}</h2>
      <p>{sectionSubTitle}</p>
    </div>
  );
};

export default SectionHeading;
