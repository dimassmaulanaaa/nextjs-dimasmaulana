import { Metadata } from "next";
import { type Project, ProjectCategory } from "@/types/data";
import { projects } from "@/data/projects";
import { ProjectSection } from "@/components/projects/ProjectSection";

export const metadata: Metadata = {
  title: "Graphic Design Projects",
};

function getSortedGraphicDesignProjects(projects: Project[]) {
  const graphicDesignProjects = projects.filter(
    (project) => project.category === ProjectCategory.GRAPHIC_DESIGN
  );

  const sortedGraphicDesignProjects = graphicDesignProjects.toReversed();

  return [...sortedGraphicDesignProjects];
}

export default function GraphicDesign() {
  return <ProjectSection projects={getSortedGraphicDesignProjects(projects)} />;
}
