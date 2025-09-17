import { experiences } from "@/data/experiences";
import { getFormatMonthYear } from "@/lib/utils";

export function Experiences() {
  return (
    <section
      className="space-y-3.5"
      aria-labelledby="experiences-section-title"
    >
      <h2
        id="experiences-section-title"
        className="font-medium text-3xl md:text-4xl"
      >
        Experiences
      </h2>

      {experiences.toReversed().map((experience) => (
        <div
          key={experience.company}
          className="grid grid-cols-[8px_1fr] md:grid-cols-[12px_1fr] gap-2 md:gap-3"
        >
          <div className="relative order-1 block">
            <span className="h-full w-[2px] md:w-1 absolute left-[3px] md:left-1 rounded-full bg-foreground"></span>

            <span className="size-2 md:size-3 absolute top-[38px] rounded-full bg-foreground"></span>
          </div>

          <div className="order-2">
            <div className="flex flex-col">
              <span className="text-primary/75">
                {getFormatMonthYear(experience.startDate)} -{" "}
                {experience.endDate
                  ? getFormatMonthYear(experience.endDate)
                  : "Present"}
              </span>

              <p className="font-medium text-xl md:text-2xl py-1">
                {experience.title}
              </p>

              <span>
                {experience.company}{" "}
                <span className="text-primary/75">
                  - {experience.employmentType}
                </span>
              </span>

              <span className="text-primary/75">{experience.location}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
