import { Suspense } from "react";
import { Metadata } from "next";
import { AboutMe } from "@/components/about/AboutMe";
import { ExperiencesAndEducations } from "@/components/about/ExperiencesAndEducations";
import { DevActivity } from "@/components/about/DevActivity";
import { DevActivitySkeleton } from "@/components/about/DevActivitySkeleton";
import { TechAndTools } from "@/components/about/TechAndTools";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <main id="about">
      <div className="max-w-7xl flex flex-col gap-16 mt-[72px] mb-[36px] mx-auto py-[17.5px] md:py-[35px] px-3">
        <AboutMe />

        <ExperiencesAndEducations />

        <Suspense fallback={<DevActivitySkeleton />}>
          <DevActivity />
        </Suspense>

        <TechAndTools />
      </div>
    </main>
  );
}
