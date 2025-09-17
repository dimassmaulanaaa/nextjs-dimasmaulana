import { educations } from "@/data/educations";
import { getFormatMonthYear } from "@/lib/utils";

export function Educations() {
  return (
    <section className="space-y-3.5" aria-labelledby="educations-section-title">
      <h2
        id="educations-section-title"
        className="font-medium text-3xl md:text-4xl"
      >
        Educations
      </h2>

      {educations.toReversed().map((education) => (
        <div
          key={education.school}
          className="grid grid-cols-[8px_1fr] md:grid-cols-[12px_1fr] gap-2 md:gap-3"
        >
          <div className="relative order-1 block">
            <span className="h-full w-[2px] md:w-1 absolute left-[3px] md:left-1 rounded-full bg-foreground"></span>

            <span className="size-2 md:size-3 absolute top-[38px] rounded-full bg-foreground"></span>
          </div>

          <div className="order-2">
            <div className="flex flex-col">
              <span className="text-primary/75">
                {getFormatMonthYear(education.startDate)} -{" "}
                {education.endDate
                  ? getFormatMonthYear(education.endDate)
                  : "Present"}
              </span>

              <p className="font-medium text-xl md:text-2xl py-1">
                {education.school}
              </p>

              <span>
                {education.degree}, {education.fieldOfStudy}
              </span>

              <span className="text-primary/75">Grade: {education.grade}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
