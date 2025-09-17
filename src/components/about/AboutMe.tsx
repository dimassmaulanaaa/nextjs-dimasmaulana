import Image from "next/image";
import { user } from "@/data/user";

export function AboutMe() {
  return (
    <div
      className="grid lg:grid-cols-[1fr_300px] gap-5"
      aria-labelledby="about-me-section-title"
    >
      {/* CONTENT */}
      <div className="order-2 lg:order-1 space-y-3.5">
        <h1
          id="about-me-section-title"
          className="flex flex-col font-medium text-6xl md:text-7xl pb-1.5"
        >
          <span className="text-3xl md:text-4xl">About</span>
          {user.name}
        </h1>

        {user.description.map((desc) => (
          <p key={desc} className="text-lg md:text-xl">
            {desc}
          </p>
        ))}
      </div>

      {/* IMAGE */}
      <div className="order-1 lg:order-2 flex items-start justify-center">
        <Image
          src={user.imageUrl}
          alt={user.imageAltText}
          width={300}
          height={300}
          className="rounded-full"
          priority
        />
      </div>
    </div>
  );
}
