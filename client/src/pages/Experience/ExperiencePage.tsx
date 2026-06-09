import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { EXPERIENCE, EDUCATION } from "@/data/portfolio";
import { RevealSection } from "@/components/shared/RevealSection";

// ── Icon: briefcase (work) ────────────────────────────────────
function IconBriefcase() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12" />
    </svg>
  );
}

// ── Icon: graduation cap (education) ─────────────────────────
function IconGradCap() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 2 2.686 3 6 3s6-1 6-3v-5" />
      <line x1="22" y1="10" x2="22" y2="16" />
    </svg>
  );
}

// ── Icon: star / award ────────────────────────────────────────
function IconStar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function ExperiencePage() {
  return (
    <>
      {/* ── WORK EXPERIENCE ────────────────────────────────── */}
      <section className="section exp-section">
        <Container>
          {/* Centered heading */}
          <div className="exp-heading">
            <p className="section__label">Career</p>
            <h1 className="exp-heading__title">Work Experience</h1>
            <p className="exp-heading__sub">
              Professional roles, internships, and freelance work.
            </p>
          </div>

          {/* Timeline */}
          <div className="exp-timeline">
            {/* Animated vertical line */}
            <div className="exp-timeline__line" aria-hidden="true">
              <div className="exp-timeline__line-fill" />
            </div>

            {EXPERIENCE.map((item, i) => (
              <RevealSection key={item.id} variant="fade-left" delay={i * 100} className="exp-timeline__row">
                {/* Icon node */}
                <div
                  className="exp-timeline__icon"
                  style={{
                    background: i % 2 === 0
                      ? "linear-gradient(135deg,#a855f7,#4f8ef7)"
                      : "linear-gradient(135deg,#22c55e,#06b6d4)",
                  }}
                >
                  <IconBriefcase />
                </div>

                {/* Card */}
                <article className="exp-card">
                  <div className="exp-card__header">
                    <div className="exp-card__left">
                      <h3 className="exp-card__title">{item.title}</h3>
                      <p className="exp-card__company">{item.company}</p>
                    </div>
                    <div className="exp-card__right">
                      <span className="exp-card__period">{item.period}</span>
                      <span className="exp-card__badge">{item.type}</span>
                    </div>
                  </div>
                  <p className="exp-card__desc">{item.description}</p>
                </article>
              </RevealSection>
            ))}
          </div>
        </Container>
      </section>

      {/* ── EDUCATION ──────────────────────────────────────── */}
      <section className="section exp-section">
        <Container>
          {/* Centered heading */}
          <div className="exp-heading">
            <p className="section__label">Academic</p>
            <h1 className="exp-heading__title">Education</h1>
            <p className="exp-heading__sub">My academic background.</p>
          </div>

          {/* Single-entry timeline */}
          <div className="exp-timeline">
            <div className="exp-timeline__line" aria-hidden="true">
              <div className="exp-timeline__line-fill" />
            </div>

            <RevealSection variant="fade-left" delay={100} className="exp-timeline__row">
              {/* Icon node */}
              <div
                className="exp-timeline__icon"
                style={{ background: "linear-gradient(135deg,#a855f7,#4f8ef7)" }}
              >
                <IconGradCap />
              </div>

              {/* Card */}
              <article className="exp-card">
                <div className="exp-card__header">
                  <div className="exp-card__left">
                    <h3 className="exp-card__title">{EDUCATION.degree}</h3>
                    <p className="exp-card__company">{EDUCATION.school}</p>
                  </div>
                  <div className="exp-card__right">
                    <span className="exp-card__period">{EDUCATION.year}</span>
                    <span className="exp-card__badge">{EDUCATION.program}</span>
                  </div>
                </div>

                {/* Courses */}
                <div className="exp-card__section">
                  <p className="exp-card__section-label">Relevant Courses</p>
                  <div className="exp-card__tags">
                    {EDUCATION.courses.map((c) => (
                      <Badge key={c}>{c}</Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="exp-card__section">
                  <p className="exp-card__section-label">Achievements</p>
                  <div className="exp-card__tags">
                    {EDUCATION.achievements.map((a) => (
                      <span key={a} className="exp-card__achievement">
                        <IconStar />
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </RevealSection>
          </div>
        </Container>
      </section>
    </>
  );
}
