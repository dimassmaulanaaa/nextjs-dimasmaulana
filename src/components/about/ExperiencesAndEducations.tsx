import { Educations } from "@/components/about/Educations";
import { Experiences } from "@/components/about/Experiences";

export function ExperiencesAndEducations() {
  return (
    <div className="grid grid-row md:grid-cols-2 gap-20 md:gap-5 lg:mr-[300px] lg:pr-5">
      <Experiences />

      <Educations />
    </div>
  );
}
