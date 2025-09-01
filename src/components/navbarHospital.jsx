import React, { useEffect, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";

const NavbarHospital = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "academics" | "students" | "news" | null

  // Toggle body class for mobile nav (no querySelector)
  useEffect(() => {
    document.body.classList.toggle("mobile-nav-active", mobileOpen);
    return () => document.body.classList.remove("mobile-nav-active");
  }, [mobileOpen]);

  // Optional: add/remove "scrolled" class on body
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 100;
      document.body.classList.toggle("scrolled", scrolled);
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("load", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("load", onScroll);
    };
  }, []);

  const toggleDropdown = useCallback((name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  }, []);

  const closeMobileOnLink = useCallback(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, []);

  return (
    <>
      <header id="header" className="header sticky-top">
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <a href="" className="d-none d-lg-block">
                <i className="bi bi-envelope d-flex align-items-center ms-4">
                  <span>contact@kbpayurvedahospital.com</span>
                </i>
              </a>
              <a href="" className="d-none d-lg-block">
                <i className="bi bi-phone d-flex align-items-center ms-4">
                  <span>Request a Callback</span>
                </i>
              </a>
              <a href="">
                <i className="bi bi-phone d-flex align-items-center ms-4">
                  <span>Emergency Number: +1 5589 55488 55</span>
                </i>
              </a>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          className="container-fluid container-xl position-relative d-flex align-items-center"
          style={{ padding: "5px" }}
        >
          <a
            href="/"
            className="logo d-flex align-items-center me-auto"
            onClick={closeMobileOnLink}
          >
            {/* <h1 className="sitename">Ayurveda</h1> */}
            <img
              src="assets/images/hospital_logo.png"
              alt="ayurveda hospital college logo"
            />
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                {/* <a href="/" onClick={closeMobileOnLink}>
                  Home
                </a> */}
                <NavLink to="/hospital" onClick={closeMobileOnLink}>
                  Home
                </NavLink>
              </li>

              <li>
                <a href="/about" onClick={closeMobileOnLink}>
                  About Us
                </a>
              </li>

              {/* Academics */}
              <li className="dropdown">
                {/* Use anchor for styling, but prevent navigation and toggle via React */}
                <a
                  href="/#"
                  className={openDropdown === "academics" ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown("academics");
                  }}
                >
                  <span>Departments</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul
                  className={
                    openDropdown === "academics" ? "dropdown-active" : ""
                  }
                >
                  <li>
                    <a href="/courses" onClick={closeMobileOnLink}>
                      Kayachikitsa
                    </a>
                  </li>
                  <li>
                    <a href="/departments" onClick={closeMobileOnLink}>
                      Panchakarma
                    </a>
                  </li>
                  <li>
                    <a href="/research" onClick={closeMobileOnLink}>
                      Shalya Tantra
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/admission" onClick={closeMobileOnLink}>
                  Doctors
                </a>
              </li>

              <li className="dropdown">
                <a
                  href="/#"
                  className={openDropdown === "news" ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown("news");
                  }}
                >
                  <span>Patient Services</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul
                  className={openDropdown === "news" ? "dropdown-active" : ""}
                >
                  <li>
                    <a href="/events" onClick={closeMobileOnLink}>
                      OPD
                    </a>
                  </li>
                  <li>
                    <a href="/blogs" onClick={closeMobileOnLink}>
                      IPD
                    </a>
                  </li>
                  <li>
                    <a href="/blogs" onClick={closeMobileOnLink}>
                      Emergency
                    </a>
                  </li>
                </ul>
              </li>

              {/* <li className="dropdown">
                <a
                  href="/#"
                  className={openDropdown === "news" ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown("news");
                  }}
                >
                  <span>Facilities</span>
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul
                  className={openDropdown === "news" ? "dropdown-active" : ""}
                >
                  <li>
                    <a href="/events" onClick={closeMobileOnLink}>
                      Pharmacy
                    </a>
                  </li>
                  <li>
                    <a href="/blogs" onClick={closeMobileOnLink}>
                      Laboratory
                    </a>
                  </li>
                  <li>
                    <a href="/blogs" onClick={closeMobileOnLink}>
                      Diagnostic Services
                    </a>
                  </li>
                </ul>
              </li> */}

              <li>
                <a href="/careers" onClick={closeMobileOnLink}>
                  Career
                </a>
              </li>
              <li>
                <a href="/careers" onClick={closeMobileOnLink}>
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Mobile toggle button (icon swaps via state) */}
            <button
              type="button"
              aria-label="Toggle navigation"
              className="mobile-nav-toggle d-xl-none border-0 btn bg-transparent"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <i
                className={mobileOpen ? "bi bi-x bg-transparent" : "bi bi-list"}
              />
            </button>
          </nav>

          <a
            className="btn-getstarted d-none d-sm-block text-nowrap"
            href="/courses"
            onClick={closeMobileOnLink}
          >
            Book Appoinment
          </a>
        </div>
      </header>
    </>
  );
};

export default NavbarHospital;
