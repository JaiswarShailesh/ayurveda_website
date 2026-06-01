import PageHeroSection from "@/app/components/PageHeroSection";
import ManagementSection from "./ManagementSection";

const managementMembers = [
  {
    name: "Person 1",
    role: "President",
    image: "/images/president.jpg",
  },
  {
    name: "Person 2",
    role: "Vice President",
    image: "/images/male_user.png",
  },
  {
    name: "Person 3",
    role: "Hon. Secretary",
    image: "/images/male_user.png",
  },
  {
    name: "Person 4",
    role: "Joint Secretary",
    image: "/images/male_user.png",
  },
  {
    name: "Person 5",
    role: "Treasurer",
    image: "/images/male_user.png",
  },
];

export default function Page() {
  return (
    <>
      <PageHeroSection
        title="Management Team"
        subtitle="Detailed information about our services and facilities."
        breadcrumb={[{ label: "Management Team", href: "#" }]}
      />

      <ManagementSection members={managementMembers} />
    </>
  );
}
