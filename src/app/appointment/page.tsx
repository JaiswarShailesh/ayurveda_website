"use client";
import PageHeroSection from "@/app/components/PageHeroSection";
import dynamic from "next/dynamic";

const OnlineConsultation = dynamic(
  () => import("@/app/hospital/online-consultation/page"),
  {
    ssr: false,
  },
);

export default function AppointmentPage() {
  return (
    <>
      <PageHeroSection
        title="Book An Online Consultation"
        subtitle="Detailed information about our services and facilities."
        breadcrumb={[{ label: "Book An Online Consultation", href: "#" }]}
      />
      <OnlineConsultation />
    </>
  );
}
