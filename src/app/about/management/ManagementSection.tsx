"use client";

import ManagementCard from "./ManagementCard";

interface Member {
  name: string;
  role: string;
  image: string;
}

interface Props {
  members: Member[];
}

export default function ManagementSection({ members }: Props) {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {members.map((m, i) => (
            <ManagementCard
              key={i}
              name={m.name}
              role={m.role}
              image={m.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
