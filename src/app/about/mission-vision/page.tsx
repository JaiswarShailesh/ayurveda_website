"use client";

import PageHeroSection from "@/app/components/PageHeroSection";
import { Eye, Target } from "lucide-react";

export default function page() {
  return (
    <>
      <PageHeroSection
        title="Vision & Mission"
        subtitle="Detailed information about our services and facilities."
        breadcrumb={[{ label: "Vision & Mission", href: "#" }]}
      />
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-green-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-green-200 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-100 text-green-700 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300 flex items-center justify-center p-3">
                  <Eye className="w-8 h-8 " />
                </span>
                <h3 className="text-2xl font-semibold text-emerald-800">
                  Our Vision
                </h3>
              </div>

              <p className="text-green-800 leading-relaxed">
                To be a globally recognized centre of excellence in Ayurvedic
                education, patient care, and research by integrating traditional
                wisdom with modern medical science.
              </p>

              <div className="flex-1"></div>
            </div>

            {/* Mission Card */}
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-green-200 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-100 text-green-700 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300 flex items-center justify-center p-3">
                  <Target className="w-8 h-8 text-emerald-700" />
                </span>
                <h3 className="text-2xl font-semibold text-emerald-800">
                  Our Mission
                </h3>
              </div>

              <p className="text-green-800 leading-relaxed">
                To provide high-quality Ayurvedic education, deliver holistic
                and compassionate patient care, encourage scientific research,
                and promote the values of wellness and sustainable health for
                society.
              </p>

              <div className="flex-1"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
