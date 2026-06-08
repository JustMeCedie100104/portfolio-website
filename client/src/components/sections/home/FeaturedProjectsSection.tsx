import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { PROJECTS } from "@/data/portfolio";
import { ROUTES } from "@/app/router/routes";

export function FeaturedProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section className="section section--editorial">
      <Container>
        <SectionHeader
          label="Featured Projects"
          title="Selected Work"
          subtitle="Complete applications built from database to deployment."
          editorial
        />

        <div className="project-showcase" style={{ marginTop: "var(--space-12)" }}>
          {featured.map((project, index) => (
            <article
              key={project.id}
              className={`project-showcase__item ${index % 2 === 1 ? "project-showcase__item--reverse" : ""}`}
            >
              <div
                className="project-showcase__visual"
                style={{ background: project.imageGradient }}
                role="img"
                aria-label={`${project.title} preview`}
              />
              <div className="project-showcase__content">
                <h3 className="project-showcase__title">{project.title}</h3>
                <p className="project-showcase__desc">{project.description}</p>
                <div className="project-showcase__stack">
                  {project.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="project-showcase__links">
                  <Link to={`${ROUTES.PROJECTS}/${project.slug}`}>View Case Study</Link>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
