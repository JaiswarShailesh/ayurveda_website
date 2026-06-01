import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "SVKM's Krutiben Bhupeshbhai Patel Multispeciality Ayurveda Hospital & Research Centre",
  description:
    "Official website of SVKM's Smt. Krutiben Bhupeshbhai Patel Multispeciality Ayurveda Hospital & Research Centre, Mumbai — offering authentic Panchakarma, speciality clinics, surgery and holistic Ayurvedic care.",
  keywords: "Ayurveda hospital Mumbai, Panchakarma, SVKM Ayurveda, Ayurvedic treatment, Vile Parle hospital",
  openGraph: {
    title: "SVKM's Krutiben Bhupeshbhai Patel Multispeciality Ayurveda Hospital",
    description: "Authentic Ayurveda — Panchakarma, speciality clinics, Ayurvedic surgery and holistic wellness in Mumbai.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: "var(--font-body)", background: "var(--ayu-cream)" }}>
        <Navbar />
        <main className="pt-[148px] lg:pt-[148px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
