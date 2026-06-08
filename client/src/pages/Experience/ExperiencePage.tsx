import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { EXPERIENCE, EDUCATION } from "@/data/portfolio";

export function ExperiencePage() {
  return (
    <>
      <section className="section">
        <Container>
          <SectionHeader
            label="Experience"
            title="Work Experience"
            subtitle="Professional roles, internships, and freelance work."
            editorial
          />

          <div style={{ marginTop: "var(--space-10)" }}>
            {EXPERIENCE.map((item) => (
              <article key={item.id} className="card card--flat" style={{ marginBottom: "var(--space-4)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--space-2)", marginBottom: "var(--space-3)" }}>
                  <Badge>{item.type}</Badge>
                  <span className="why-card__desc">{item.period}</span>
                </div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc" style={{ marginBottom: "var(--space-3)" }}>
                  {item.company}
                </p>
                <p className="why-card__desc">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--compact">
        <Container>
          <SectionHeader label="Education" title="Academic Background" />

          <article className="card card--flat" style={{ marginTop: "var(--space-8)" }}>
            <h3 className="why-card__title">{EDUCATION.degree}</h3>
            <p className="why-card__desc">
              {EDUCATION.school} &middot; {EDUCATION.year}
            </p>

            <div style={{ marginTop: "var(--space-6)" }}>
              <p className="section__label">Relevant Courses</p>
              <div className="bento__skills" style={{ marginTop: "var(--space-3)" }}>
                {EDUCATION.courses.map((course) => (
                  <Badge key={course}>{course}</Badge>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "var(--space-6)" }}>
              <p className="section__label">Achievements</p>
              <div className="bento__skills" style={{ marginTop: "var(--space-3)" }}>
                {EDUCATION.achievements.map((achievement) => (
                  <Badge key={achievement}>{achievement}</Badge>
                ))}
              </div>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
