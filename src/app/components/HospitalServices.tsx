"use client";

import Image from "next/image";

export default function HospitalServices() {
  return (
    <section className="bg-[#f4f7f3] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="relative">
          <Image
            src="/images/hospital-services.jpg"
            alt="Ayurveda hospital"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-800/20 to-transparent rounded-2xl" />
        </div>

        {/* Right Side - Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Hospital & Patient Services
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our Ayurveda hospital blends traditional wisdom with modern care.
            We provide holistic treatments that focus on restoring balance and
            harmony within the body and mind.
          </p>

          <ul className="space-y-3 text-gray-800">
            {[
              "In-patient and Out-patient Care",
              "Authentic Panchakarma Therapies",
              "Ayurvedic Consultations",
              "Herbal Medicine Dispensary",
              "Diet & Lifestyle Counseling",
              "Yoga & Meditation Support",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-green-600 text-xl">🌿</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
