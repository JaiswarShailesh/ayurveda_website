import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import NavbarHospital from "../components/navbarHospital";
import NavbarCollege from "../components/navbarCollege";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrollToTop";
import NavbarResearchCentre from "../components/navbarResearchCentre";

const MainLayout = () => {
  const location = useLocation();
  const path = location.pathname;

  const renderNavbar = () => {
    if (path.startsWith("/hospital")) return <NavbarHospital />;
    if (path.startsWith("/college")) return <NavbarCollege />;
    if (path.startsWith("/research-centre")) return <NavbarResearchCentre />; // or custom ResearchCentreNavbar
    return <Navbar />;
  };

  return (
    <>
      {renderNavbar()}
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default MainLayout;
