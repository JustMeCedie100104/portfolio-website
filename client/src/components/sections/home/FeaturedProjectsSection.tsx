import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import { PROJECTS } from "@/data/portfolio";
import { ROUTES } from "@/app/router/routes";

export function FeaturedProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section className="section section--system">
      <Container>
        <SectionHeader
          label="Featured Projects"
          title="Selected Work"
          subtitle="Complete applications built from database to deployment."
        />

        <div className="pcard-grid" style={{ marginTop: "var(--space-10)" }}>
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "var(--space-10)" }}>
          <Link to={ROUTES.PROJECTS} className="pcard__view-all">
            View All Projects →
          </Link>
        </div>
      </Container>
    </section>
  );
}
