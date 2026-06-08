import { Link, useParams } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/data/portfolio";
import { ROUTES } from "@/app/router/routes";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="section">
        <Container>
          <h1 className="section__title">Project Not Found</h1>
          <p className="section__subtitle">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link to={ROUTES.PROJECTS} style={{ marginTop: "var(--space-6)", display: "inline-block" }}>
            Back to Projects
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <section className="section">
      <Container>
        <Link to={ROUTES.PROJECTS} className="section__label">
          &larr; All Projects
        </Link>

        <h1 className="editorial__headline" style={{ marginTop: "var(--space-4)", marginBottom: "var(--space-6)" }}>
          {project.title}
        </h1>

        <div
          className="case-study-hero"
          style={{ background: project.imageGradient }}
          role="img"
          aria-label={`${project.title} hero`}
        />

        <div className="case-study-meta">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="case-study-section">
          <h2>Overview</h2>
          <p>{project.description}</p>
        </div>

        <div className="case-study-section">
          <h2>Problem</h2>
          <p>
            Users needed a reliable, scalable solution that could handle real-world workflows
            while maintaining a clean and intuitive interface.
          </p>
        </div>

        <div className="case-study-section">
          <h2>Solution</h2>
          <p>
            Built a full-stack application with a React frontend, REST API backend, and
            relational database — designed for maintainability and future growth.
          </p>
        </div>

        <div className="case-study-section">
          <h2>Architecture</h2>
          <p>
            Frontend: React + TypeScript. Backend: Node.js + Express. Database: PostgreSQL.
            External services integrated as needed for auth and storage.
          </p>
        </div>

        <div className="case-study-section">
          <h2>Challenges</h2>
          <p>
            Balancing feature scope with clean architecture, implementing secure authentication,
            and optimizing database queries for performance.
          </p>
        </div>

        <div className="case-study-section">
          <h2>Lessons Learned</h2>
          <p>
            Early planning saves refactoring later. User feedback shapes better products.
            Consistent code patterns make collaboration easier.
          </p>
        </div>

        <div style={{ display: "flex", gap: "var(--space-4)", marginTop: "var(--space-8)" }}>
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="ghost" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
