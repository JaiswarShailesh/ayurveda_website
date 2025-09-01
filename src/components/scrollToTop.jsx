import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // <a
    //   href="#"
    //   id="scroll-top"
    //   class="scroll-top d-flex align-items-center justify-content-center"
    // >
    //   <i class="bi bi-arrow-up-short"></i>
    // </a>
    <a
      href="#"
      id="scroll-top"
      className={
        isVisible
          ? "scroll-top d-flex align-items-center justify-content-center visible opacity-100"
          : "scroll-top d-flex align-items-center justify-content-center"
      }
      onClick={scrollToTop}
      style={isVisible ? { bottom: "15px" } : {}}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default ScrollToTop;
