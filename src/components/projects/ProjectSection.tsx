import { type Project } from "@/types/data";
import { ProjectDetails } from "@/components/projects/ProjectDetails";
import { ProjectCarousel } from "@/components/projects/ProjectCarousel";

type ProjectSectionProps = {
  projects: Project[];
};

export function ProjectSection({ projects }: ProjectSectionProps) {
  return (
    <div className="flex flex-col gap-40 py-20">
      {projects.map((project) => (
        <section key={project.title} id="project-section">
          <div className="max-w-7xl grid lg:grid-cols-2 items-center justify-center gap-5 mx-auto px-3">
            <ProjectDetails
              title={project.title}
              descriptions={project.description}
              projectUrl={project.projectUrl}
              sourceCodeUrl={project.sourceCodeUrl}
              skills={project.skills}
            />

            <ProjectCarousel images={project.images} />
          </div>
        </section>
      ))}
    </div>
  );
}
