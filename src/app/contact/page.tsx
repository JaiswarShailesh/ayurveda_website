"use client";
import PageHeroSection from "@/app/components/PageHeroSection";
import dynamic from "next/dynamic";

const ContactUs = dynamic(() => import("@/app/components/ContactUs"), {
  ssr: false,
});

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title="Contact Us"
        subtitle="Detailed information about our services and facilities."
        breadcrumb={[{ label: "Contact Us", href: "#" }]}
      />
      <ContactUs />
    </>
  );
}
