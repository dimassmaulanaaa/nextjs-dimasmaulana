import { Metadata } from "next";
import { type Project, ProjectCategory } from "@/types/data";
import { projects } from "@/data/projects";
import { ProjectSection } from "@/components/projects/ProjectSection";

export const metadata: Metadata = {
  title: "Projects",
};

function getSortedAllProjects(projects: Project[]) {
  const webDevelopmentProjects = projects.filter(
    (project) => project.category === ProjectCategory.WEB_DEVELOPMENT
  );
  const graphicDesignProjects = projects.filter(
    (project) => project.category === ProjectCategory.GRAPHIC_DESIGN
  );

  const sortedWebDevelopmentProjects = webDevelopmentProjects.toReversed();
  const sortedGraphicDesignProjects = graphicDesignProjects.toReversed();

  return [...sortedWebDevelopmentProjects, ...sortedGraphicDesignProjects];
}

export default function Projects() {
  return <ProjectSection projects={getSortedAllProjects(projects)} />;
}
