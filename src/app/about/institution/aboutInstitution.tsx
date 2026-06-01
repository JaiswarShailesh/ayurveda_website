"use client";

interface Props {
  data: string[];
  instituteImage: string;
  altText: string;
}

export default function AboutInstitution({
  data,
  instituteImage,
  altText,
}: Props) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900">
            About Our Institution
          </h2>
          <div className="w-20 h-1 bg-green-600 mt-3 rounded-full"></div>

          <div className="mt-6 space-y-6">
            {data.map((para, index) => (
              <p
                className="text-gray-700 text-base md:text-lg leading-relaxed"
                key={index}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          <img
            src={instituteImage}
            alt={altText}
            className="rounded-2xl shadow-xl w-full object-cover h-[260px] md:h-[360px]"
          />

          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}
