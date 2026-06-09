import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import { PROJECTS } from "@/data/portfolio";
import { RevealSection } from "@/components/shared/RevealSection";

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
      <RevealSection variant="fade-up" as="section" className="section">
        <Container>
          <SectionHeader
            label="Projects"
            title="Featured Projects"
            subtitle="A selection of applications I've built end to end."
            editorial
          />
          <div className="pcard-grid" style={{ marginTop: "var(--space-10)" }}>
            {featured.map((project, i) => (
              <RevealSection key={project.id} variant="fade-up" delay={i * 80}>
                <ProjectCard project={project} />
              </RevealSection>
            ))}
          </div>
        </Container>
      </RevealSection>

      <RevealSection variant="fade-up" as="section" className="section section--compact">
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

          <div className="pcard-grid">
            {filtered.map((project, i) => (
              <RevealSection key={project.id} variant="fade-up" delay={i * 60}>
                <ProjectCard project={project} />
              </RevealSection>
            ))}
          </div>
        </Container>
      </RevealSection>
    </>
  );
}
