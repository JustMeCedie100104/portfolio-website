import { SITE } from "@/data/portfolio";

export function SocialLinks() {
  const links = [
    { label: "GitHub", href: SITE.github },
    { label: "LinkedIn", href: SITE.linkedin },
    { label: "Email", href: `mailto:${SITE.email}` },
  ];

  return (
    <div className="social-links">
      {links.map((link, index) => (
        <span key={link.label}>
          {index > 0 && <span className="social-links__separator" aria-hidden="true"> • </span>}
          <a
            href={link.href}
            className="social-links__item"
            target={link.label !== "Email" ? "_blank" : undefined}
            rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
          >
            {link.label}
          </a>
        </span>
      ))}
    </div>
  );
}
