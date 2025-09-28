import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { skillsIcons } from "@/data/skillsIcons";
import { Button } from "@/components/ui/button";

type ProjectDetailsProps = {
  title: string;
  descriptions: string[];
  projectUrl: string | undefined;
  sourceCodeUrl: string | undefined;
  skills: string[];
};

export function ProjectDetails({
  title,
  descriptions,
  projectUrl,
  sourceCodeUrl,
  skills,
}: ProjectDetailsProps) {
  return (
    <div className="order-2 lg:order-1 space-y-5">
      <div className="flex flex-col space-y-2.5">
        <h2 className="font-medium text-4xl md:text-5xl">{title}</h2>

        {descriptions.map((description) => (
          <p key={description} className="text-lg md:text-xl">
            {description}
          </p>
        ))}
      </div>

      {projectUrl || sourceCodeUrl ? (
        <div className="flex space-x-2.5">
          {projectUrl && (
            <Button variant="outline" size="icon" asChild>
              <Link href={projectUrl} target="_blank">
                <FaEye />
              </Link>
            </Button>
          )}

          {sourceCodeUrl && (
            <Button variant="outline" size="icon" asChild>
              <Link href={sourceCodeUrl} target="_blank">
                <SiGithub />
              </Link>
            </Button>
          )}
        </div>
      ) : null}

      <div className="flex flex-col space-y-2.5">
        <h3 className="font-medium text-2xl md:text-3xl">Tech & Tools</h3>

        <div className="flex flex-wrap gap-5">
          {skills.map((skill) => {
            const IconComponent = skillsIcons[skill];

            return (
              <span key={skill} title={skill} aria-label={skill}>
                {IconComponent && (
                  <IconComponent className="size-10 md:size-11" />
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
