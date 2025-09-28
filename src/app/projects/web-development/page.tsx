import { Metadata } from "next";
import { type Project, ProjectCategory } from "@/types/data";
import { projects } from "@/data/projects";
import { ProjectSection } from "@/components/projects/ProjectSection";

export const metadata: Metadata = {
  title: "Web Development Projects",
};

function getSortedWebDevelopmentProjects(projects: Project[]) {
  const webDevelopmentProjects = projects.filter(
    (project) => project.category === ProjectCategory.WEB_DEVELOPMENT
  );

  const sortedWebDevelopmentProjects = webDevelopmentProjects.toReversed();

  return [...sortedWebDevelopmentProjects];
}

export default function WebDevelopment() {
  return (
    <ProjectSection projects={getSortedWebDevelopmentProjects(projects)} />
  );
}
