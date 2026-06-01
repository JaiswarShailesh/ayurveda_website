import PageHeroSection from "@/app/components/PageHeroSection";
import ProfileComponent from "../ProfileComponent";

const message = [
  "Ayurveda has been a cornerstone of India’s healing traditions, emphasizing balance, harmony, and wellness. At SVKM’s Ayurveda College & Hospital, we remain committed to nurturing the next generation of Ayurvedic physicians who will carry this legacy forward with integrity and excellence.",
  "Our institution combines world-class academic standards with robust clinical exposure, enabling students to gain real experience and deep understanding of Ayurvedic science. We continually invest in infrastructure, research, and faculty development to ensure that our students receive the highest quality education.",
  "I welcome you to explore our campus, engage with our vibrant community, and be a part of this sacred journey towards holistic healing and service to society.",
];

export default function Page() {
  return (
    <>
      <PageHeroSection
        title="President’s Message"
        subtitle="Detailed information about our services and facilities."
        breadcrumb={[{ label: "President’s Message", href: "#" }]}
      />

      <ProfileComponent
        imgUrl={"/images/president.jpg"}
        name={"Shri Amrishbhai Patel"}
        designation={"President"}
        body={"Shree Vile Parle Kelvani Mandal (SVKM)"}
        altText={"President"}
        message={message}
      />
    </>
  );
}
