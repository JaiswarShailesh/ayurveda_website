import React, { useEffect, useState, useCallback } from "react";

const Navbar = () => {
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
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto" onClick={closeMobileOnLink}>
          <h1 className="sitename">Ayurveda</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/" className="active" onClick={closeMobileOnLink}>
                Home
              </a>
            </li>

            <li>
              <a href="/about" onClick={closeMobileOnLink}>About Us</a>
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
                <span>Academics</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul className={openDropdown === "academics" ? "dropdown-active" : ""}>
                <li><a href="/courses" onClick={closeMobileOnLink}>Courses</a></li>
                <li><a href="/departments" onClick={closeMobileOnLink}>Departments</a></li>
                <li><a href="/research" onClick={closeMobileOnLink}>Research</a></li>
              </ul>
            </li>

            {/* Students */}
            <li className="dropdown">
              <a
                href="/#"
                className={openDropdown === "students" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("students");
                }}
              >
                <span>Students</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul className={openDropdown === "students" ? "dropdown-active" : ""}>
                <li><a href="/students" onClick={closeMobileOnLink}>Students</a></li>
                <li><a href="/international-students" onClick={closeMobileOnLink}>International Student Cell</a></li>
              </ul>
            </li>

            <li>
              <a href="/admission" onClick={closeMobileOnLink}>Admission</a>
            </li>

            <li>
              <a href="/hospital" onClick={closeMobileOnLink}>Hospital</a>
            </li>

            {/* News & Events */}
            <li className="dropdown">
              <a
                href="/#"
                className={openDropdown === "news" ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown("news");
                }}
              >
                <span>News & Events</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul className={openDropdown === "news" ? "dropdown-active" : ""}>
                <li><a href="/events" onClick={closeMobileOnLink}>Events</a></li>
                <li><a href="/blogs" onClick={closeMobileOnLink}>Blogs</a></li>
              </ul>
            </li>

            <li>
              <a href="/careers" onClick={closeMobileOnLink}>Careers</a>
            </li>
          </ul>

          {/* Mobile toggle button (icon swaps via state) */}
          <button
            type="button"
            aria-label="Toggle navigation"
            className="mobile-nav-toggle d-xl-none border-0 btn bg-transparent"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <i className={mobileOpen ? "bi bi-x bg-transparent" : "bi bi-list"} />
          </button>
        </nav>

        <a className="btn-getstarted" href="/courses" onClick={closeMobileOnLink}>
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Navbar;
