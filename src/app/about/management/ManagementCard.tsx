"use client";

interface Props {
  name: string;
  role: string;
  image: string;
}

export default function ManagementCard({ name, role, image }: Props) {
  return (
    <div className="group bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100 relative 
                    hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      {/* Decorative top bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-700 to-green-400 rounded-t-2xl"></div>

      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-cover rounded-full mx-auto shadow-md group-hover:scale-105 transition duration-300"
      />

      <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-green-800 transition">
        {name}
      </h3>

      <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
        {role}
      </span>
    </div>
  );
}
