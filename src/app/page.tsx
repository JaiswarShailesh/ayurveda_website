import AboutSection from "./components/AboutUsSection";
import ConditionsWeTreat from "./components/ConditionsWeTreat";
import ContactUs from "./components/ContactUs";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import HowOnlineConsultationWorks from "./components/HowOnlineConsultationWorks";
import OurAyurvedicSpecialities from "./components/OurAyurvedicSpecialities";
import Departments from "./components/OurDepartmentsSection";
import FacultySection from "./components/OurExpertsSection";
import NoticeRunner from "./components/RunnerNotice";
import Testimonials from "./components/Testimonials";
import Treatments from "./components/Treatments";
import WhyChooseUs from "./components/WhyChooseUs";
import QuickNavTiles from "./components/QuickNavTiles";
import HomepageAnnouncements from "./components/HomepageAnnouncements";
import HomepagePackages from "./components/HomepagePackages";
import HomepagePatientStories from "./components/HomepagePatientStories";
import WellnessSnippets from "./components/WellnessSnippets";

const notices = [
  "🌿 New Panchakarma Wing now open — 20 dedicated beds for immersive therapy.",
  "📅 Free Arthritis Camp: 25 May 2026 — 9 AM to 1 PM at OPD Hall.",
  "🏆 Awarded Best Ayurveda Hospital – Western India 2025 by AIMA.",
  "👨‍⚕️ Dr. Aishwarya Kulkarni (Panchakarma Specialist) now available for consultations.",
  "📦 Seasonal wellness packages with up to 20% off — Limited period offer.",
  "📞 OPD Appointment: 7045517269 | Ambulance / Emergency 24×7: 022 2427 8888",
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <NoticeRunner notices={notices} />
      <QuickNavTiles />
      <AboutSection />
      <HomepageAnnouncements />
      <ConditionsWeTreat />
      <HomepagePackages />
      <OurAyurvedicSpecialities />
      <HowOnlineConsultationWorks />
      <WhyChooseUs />
      <Departments />
      <FacultySection />
      <Treatments />
      <HomepagePatientStories />
      <WellnessSnippets />
      <Testimonials />
      <Gallery />
      <ContactUs />
    </>
  );
}
