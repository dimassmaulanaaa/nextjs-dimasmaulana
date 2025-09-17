import { user } from "@/data/user";
import { skillsIcons } from "@/data/skillsIcons";

export function TechAndTools() {
  return (
    <section
      className="space-y-3.5 lg:mr-[300px] lg:pr-5"
      aria-labelledby="tech-and-tools-section-title"
    >
      <h2
        id="tech-and-tools-section-title"
        className="font-medium text-3xl md:text-4xl"
      >
        Tech & Tools
      </h2>

      <div className="flex flex-wrap gap-5">
        {user.skills.map((skill) => {
          const IconComponent = skillsIcons[skill];

          return (
            <span key={skill} title={skill} aria-label={skill}>
              {IconComponent && (
                <IconComponent className="size-13 md:size-15" />
              )}
            </span>
          );
        })}
      </div>
    </section>
  );
}
