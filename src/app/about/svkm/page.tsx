import React from "react";
import PageHeroSection from "../../components/PageHeroSection";

const instituteDescription = [
  "Shri Vile Parle Kelavani Mandal is a Public Charitable Trust registered under the Society’s Registration Act and Bombay Public Trust Act. From its humble beginnings in 1934, when it took over the Rashtriya Shala, a school established in 1921 in the wake of the National Movement, the Mandal today has grown into a big educational complex imparting high-level education to more than 50,000 students.",
  "The ethos of the Mandal, is marked by patriotic fervor, selfless service and a spirit of indigenous enterprise. These values permeate all the institutions set up by the Mandal and are the guiding principles for all of them.",
  "After beginning its journey in the early 1930s SVKM has blossomed into an educational colossus that has attained national recognition in multiple streams of higher education. With a strong guiding philosophy of providing education to all levels of the student community along with creating a feeling of bonding and commitment amongst academic and nonacademic employees. SVKM has mastered the art of being able to transform itself into a close knit family and at the same time help its students to attain all-round development, be employable and achieve success.",
  "Over the past 85 years, the Mandal has developed a large educational complex in Vile Parle, in Suburban Mumbai and has spread its wings to metro cities like Bangalore, Hyderabad, Chandigarh, Ahmedabad, Navi Mumbai, Indore, Nagpur etc. SVKM today is proud of some of the finest educational institutes in the country like NMIMS deemed to be University, N.M. College of Commerce and Economics, Mithibai College, D.J. Sanghvi College of Engineering, Bhagubhai Mafatlal Polytechnic – to name a few. It has also in its family schools from Nursery to Secondary, Jr. College providing ICSE or IB, IGCSE curriculum or CBSE curriculum. With a strong vision and passion for being the pioneers of the modern education system, all SVKM institutes are state of the art, with ever expanding facilities and infrastructure.",
  "From its beginning with the Swadeshi Movement, the Mandal has now grown into an educational foundation promoting global thinking consistent with national interest and promoting the values, professionalism, social sensitivity and dynamic entrepreneurship.",
];

const Page = () => {
  return (
    <>
      <PageHeroSection
        title="About SVKM"
        subtitle="Detailed information about our services and facilities."
        breadcrumb={[{ label: "About SVKM", href: "#" }]}
      />

      {/* About Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          
          {/* Section Heading */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900">
              Shri Vile Parle Kelavani Mandal (SVKM)
            </h2>
            <div className="w-20 h-1 bg-green-600 mt-3 rounded-full"></div>
          </div>

          {/* Paragraphs */}
          <div className="space-y-6">
            {instituteDescription.map((para, index) => (
              <p
                className="text-gray-700 text-base leading-relaxed md:text-lg"
                key={index}
              >
                {para}
              </p>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Page;
