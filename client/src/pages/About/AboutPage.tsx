import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { SITE } from "@/data/portfolio";
import { RevealSection } from "@/components/shared/RevealSection";
import {
  JOURNEY,
  WHAT_I_DO,
  PHILOSOPHY,
  QUICK_INTRO,
} from "@/data/portfolio";

export function AboutPage() {
  return (
    <>
      {/* ── ABOUT HERO — reference layout ── */}
      <section className="section about-intro">
        <Container>
          <RevealSection variant="fade-up">
            <div className="about-intro__heading">
              <p className="section__label">About</p>
              <h1 className="about-intro__title">About Me</h1>
              <p className="about-intro__subtitle">{QUICK_INTRO.tagline}</p>
            </div>
          </RevealSection>

          <div className="about-intro__body">
            <RevealSection variant="fade-left" delay={100} className="about-intro__card">
              {QUICK_INTRO.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="about-intro__para">{p}</p>
              ))}
            </RevealSection>

            <RevealSection variant="fade-right" delay={200} className="about-intro__photo-wrap">
              <div className="about-photo">
                <div className="about-photo__ring" aria-hidden="true" />
                <div className="about-photo__circle">
                  {SITE.portraitImageUrl ? (
                    <img
                      src={SITE.portraitImageUrl}
                      alt={`${SITE.name} portrait`}
                      className="about-photo__img"
                    />
                  ) : (
                    <span className="about-photo__initials" aria-hidden="true">
                      {SITE.name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
              </div>
            </RevealSection>
          </div>
        </Container>
      </section>

      {/* ── Journey Timeline ── */}
      <section className="section section--editorial">
        <Container>
          <RevealSection variant="fade-up">
            <SectionHeader label="My Journey" title="How I Got Here" editorial />
          </RevealSection>

          <div className="jt" style={{ marginTop: "var(--space-16)" }}>
            {/* Central vertical line */}
            <div className="jt__spine" aria-hidden="true">
              <div className="jt__spine-fill" />
            </div>

            {JOURNEY.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <RevealSection
                  key={item.year}
                  variant={isLeft ? "fade-right" : "fade-left"}
                  delay={i * 100}
                  className={`jt__row${isLeft ? " jt__row--left" : " jt__row--right"}`}
                >
                  {/* Ghost year watermark */}
                  <span className="jt__ghost" aria-hidden="true">{item.year}</span>

                  {/* Card */}
                  <article className="jt__card">
                    <span className="jt__year-label">{item.year}</span>
                    <h3 className="jt__title">{item.title}</h3>
                    <p className="jt__desc">{item.description}</p>
                  </article>

                  {/* Center icon node */}
                  <div className="jt__node" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── What I Do ── */}
      <RevealSection variant="fade-up" as="section" className="section section--system">
        <Container>
          <SectionHeader label="What I Do" title="Services & Focus" />
          <div className="wid-masonry" style={{ marginTop: "var(--space-8)" }}>
            {WHAT_I_DO.map((item, i) => (
              <RevealSection key={item} variant="fade-up" delay={i * 70}>
                <div className="wid-card">
                  <span className="wid-card__num">0{i + 1}</span>
                  <h3 className="wid-card__title">{item}</h3>
                  <div className="wid-card__line" aria-hidden="true" />
                </div>
              </RevealSection>
            ))}
          </div>
        </Container>
      </RevealSection>

      {/* ── Philosophy ── */}
      <RevealSection variant="fade-up" as="section" className="section section--system">
        <Container>
          <SectionHeader label="Philosophy" title="Development Philosophy" />
          <div className="why-grid" style={{ marginTop: "var(--space-10)" }}>
            {PHILOSOPHY.map((item, i) => (
              <RevealSection key={item.title} variant="fade-up" delay={i * 80}>
                <article className="wid-card">
                  <span className="wid-card__num">0{i + 1}</span>
                  <h3 className="wid-card__title">{item.title}</h3>
                  <p className="why-card__desc" style={{ marginTop: "var(--space-3)" }}>
                    {item.description}
                  </p>
                  <div className="wid-card__line" aria-hidden="true" />
                </article>
              </RevealSection>
            ))}
          </div>
        </Container>
      </RevealSection>

      {/* ── Future Goals ── */}
      <RevealSection variant="fade-up" as="section" className="section section--editorial section--compact">
        <Container>
          <div className="editorial-block">
            <SectionHeader label="Future" title="What's Next" editorial />
            <p className="editorial-block__content">
              Seeking a professional role where I can contribute to meaningful products,
              collaborate with experienced teams, and continue growing as a full-stack developer.
            </p>
            <div className="editorial-block__tags" style={{ marginTop: "var(--space-6)" }}>
              {["Cloud Deployment", "System Architecture", "Team Collaboration", "Open Source"].map((goal) => (
                <Badge key={goal}>{goal}</Badge>
              ))}
            </div>
          </div>
        </Container>
      </RevealSection>
    </>
  );
}
