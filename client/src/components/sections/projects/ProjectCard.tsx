import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/Badge";
import type { ProjectItem } from "@/data/portfolio";
import { ROUTES } from "@/app/router/routes";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card card--flat" style={{ padding: 0, overflow: "hidden" }}>
      <div
        className="project-card__visual"
        style={{ background: project.imageGradient }}
        role="img"
        aria-label={`${project.title} preview`}
      />
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-showcase__stack">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="project-showcase__links">
          <Link to={`${ROUTES.PROJECTS}/${project.slug}`}>Case Study</Link>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
