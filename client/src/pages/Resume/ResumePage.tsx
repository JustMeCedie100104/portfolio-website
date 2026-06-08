import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { SITE, EXPERIENCE, EDUCATION, SKILL_CATEGORIES } from "@/data/portfolio";

export function ResumePage() {
  return (
    <section className="section">
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "var(--space-4)", marginBottom: "var(--space-10)" }}>
          <SectionHeader label="Resume" title="Resume Preview" editorial />
          <div style={{ display: "flex", gap: "var(--space-3)" }}>
            <Button href={SITE.resumeUrl} variant="primary">
              Download PDF
            </Button>
            <Button variant="ghost" onClick={() => window.print()}>
              Print
            </Button>
          </div>
        </div>

        <article className="card" style={{ maxWidth: "800px" }}>
          <header style={{ marginBottom: "var(--space-8)", borderBottom: "1px solid var(--color-border)", paddingBottom: "var(--space-6)" }}>
            <h2 className="hero__name" style={{ fontSize: "var(--text-3xl)" }}>{SITE.name}</h2>
            <p className="hero__role">{SITE.role}</p>
            <p className="why-card__desc" style={{ marginTop: "var(--space-2)" }}>
              {SITE.email} &middot; {SITE.location}
            </p>
          </header>

          <section style={{ marginBottom: "var(--space-8)" }}>
            <h3 className="section__label">Summary</h3>
            <p className="why-card__desc" style={{ marginTop: "var(--space-3)" }}>
              {SITE.tagline} Focused on full-stack development with clean code practices
              and user-centered design.
            </p>
          </section>

          <section style={{ marginBottom: "var(--space-8)" }}>
            <h3 className="section__label">Experience</h3>
            {EXPERIENCE.map((item) => (
              <div key={item.id} style={{ marginTop: "var(--space-4)" }}>
                <p className="why-card__title">{item.title} — {item.company}</p>
                <p className="why-card__desc">{item.period}</p>
                <p className="why-card__desc">{item.description}</p>
              </div>
            ))}
          </section>

          <section style={{ marginBottom: "var(--space-8)" }}>
            <h3 className="section__label">Education</h3>
            <div style={{ marginTop: "var(--space-4)" }}>
              <p className="why-card__title">{EDUCATION.degree}</p>
              <p className="why-card__desc">{EDUCATION.school}, {EDUCATION.year}</p>
            </div>
          </section>

          <section>
            <h3 className="section__label">Skills</h3>
            <div style={{ marginTop: "var(--space-4)" }}>
              {SKILL_CATEGORIES.map((cat) => (
                <p key={cat.id} className="why-card__desc" style={{ marginBottom: "var(--space-2)" }}>
                  <strong>{cat.label}:</strong> {cat.skills.join(", ")}
                </p>
              ))}
            </div>
          </section>
        </article>
      </Container>
    </section>
  );
}
