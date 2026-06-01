import Image from "next/image";

interface Props {
  imgUrl: string;
  altText: string;
  name: string;
  designation: string;
  body: string;
  message: string[];
}

export default function ProfileComponent({
  body,
  message: content,
  imgUrl,
  altText,
  designation,
  name,
}: Props) {
  return (
    <section className="py-15 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <Image
            src={imgUrl}
            alt={altText}
            width={220}
            height={180}
            className="rounded-full shadow-xl border-4 border-green-700"
          />
        </div>

        {/* Name + Title */}
        <h2 className="mt-6 text-2xl md:text-3xl font-bold text-green-800">
          {name}
        </h2>
        <p className="text-green-700 font-medium mt-1">
          {designation}, {body}
        </p>

        {/* Animated Underline */}
        <div className="mt-4 flex justify-center">
          <span className="block h-[3px] w-20 bg-green-700 rounded-full animate-pulse"></span>
        </div>

        {/* Message */}
        <div className="mt-10 text-gray-700 text-base md:text-lg leading-relaxed space-y-6 text-left">
          {content.map((para, index) => (
            <p key={index}>{para}</p>
          ))}

          <p className="font-semibold text-green-800">
            Warm regards, <br />
            {name}
          </p>
        </div>
      </div>
    </section>
  );
}
