import { Link } from "react-router-dom";
import type { ProjectItem } from "@/data/portfolio";
import { ROUTES } from "@/app/router/routes";

interface ProjectCardProps {
  project: ProjectItem;
}

// GitHub icon
function IconGitHub() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// External link icon
function IconExternal() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="pcard">
      {/* ── Image / gradient banner ── */}
      <div
        className="pcard__visual"
        style={{ background: project.imageGradient }}
        role="img"
        aria-label={`${project.title} preview`}
      >
        {/* Category pill */}
        <span className="pcard__category">{project.category}</span>
      </div>

      {/* ── Body ── */}
      <div className="pcard__body">
        <h3 className="pcard__title">{project.title}</h3>
        <p className="pcard__desc">{project.description}</p>

        {/* Tech badges */}
        <div className="pcard__stack">
          {project.techStack.map((tech) => (
            <span key={tech} className="pcard__badge">{tech}</span>
          ))}
        </div>

        {/* Action row */}
        <div className="pcard__actions">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pcard__btn pcard__btn--primary"
            >
              <IconExternal />
              Live Demo
            </a>
          ) : (
            <Link
              to={`${ROUTES.PROJECTS}/${project.slug}`}
              className="pcard__btn pcard__btn--primary"
            >
              <IconExternal />
              Case Study
            </Link>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pcard__btn pcard__btn--icon"
              aria-label="View source on GitHub"
            >
              <IconGitHub />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
