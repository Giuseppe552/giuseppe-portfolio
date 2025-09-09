"use client";
import ProjectsGrid, { ProjectCardData } from "./ProjectsGrid";

export default function ProjectsGridWrapper({ cards }: { cards: ProjectCardData[] }) {
  return <ProjectsGrid cards={cards} />;
}
