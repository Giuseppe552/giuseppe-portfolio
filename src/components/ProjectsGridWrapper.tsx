"use client";
import ProjectsGrid, { ProjectCardData } from "./ProjectsGrid";

export default function ProjectsGridWrapper({ cards }: { cards: ProjectCardData[] }) {
  return <ProjectsGrid cards={cards} />;
}

// ...existing code...
// <h3 className="text-lg font-medium text-zinc-100">{card.name}</h3>
// {card.summary && (
//   <p className="text-zinc-400 text-sm mt-1">{card.summary}</p>
// )}
// ...existing code...
