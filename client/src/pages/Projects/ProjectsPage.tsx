import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import { PROJECTS } from "@/data/portfolio";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "uiux", label: "UI/UX" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <>
      <section className="section">
        <Container>
          <SectionHeader
            label="Projects"
            title="Featured Projects"
            subtitle="A selection of applications I've built end to end."
            editorial
          />
          <div className="projects-grid" style={{ marginTop: "var(--space-10)" }}>
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--compact">
        <Container>
          <SectionHeader label="Archive" title="All Projects" />

          <div className="filter-bar">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`filter-bar__btn ${activeFilter === filter.id ? "filter-bar__btn--active" : ""}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
