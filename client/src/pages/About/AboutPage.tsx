import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { SITE, HERO_STATS, QUICK_INTRO, JOURNEY, PHILOSOPHY } from "@/data/portfolio";
import { RevealSection } from "@/components/shared/RevealSection";

// ── Philosophy icons ──────────────────────────────────────────
const PHIL_ICONS = [
  <svg key="code" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  <svg key="users" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
  <svg key="book" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>,
  <svg key="bulb" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="18" x2="15" y2="18" /><line x1="10" y1="22" x2="14" y2="22" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" /></svg>,
];

export function AboutPage() {
  return (
    <>
      {/* ── ABOUT HERO ── */}
      <section className="section ab-hero">
        <Container>
          <div className="ab-hero__layout">

            {/* LEFT — portrait card */}
            <RevealSection variant="fade-left" className="ab-hero__card-wrap">
              <div className="ab-card">
                {/* Gradient border frame */}
                <div className="ab-card__border" aria-hidden="true" />

                {/* Top-left status badge */}
                <div className="ab-card__badge">
                  <span className="ab-card__badge-dot" aria-hidden="true" />
                  {SITE.availability}
                </div>

                {/* Top-right ID tag */}
                <div className="ab-card__id" aria-hidden="true">CS · 001</div>

                {/* Image */}
                <div className="ab-card__img-wrap">
                  {SITE.portraitImageUrl ? (
                    <img
                      src={SITE.portraitImageUrl}
                      alt={`${SITE.name} portrait`}
                      className="ab-card__img"
                    />
                  ) : (
                    <div className="ab-card__initials">
                      {SITE.name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Bottom frosted glass overlay */}
                <div className="ab-card__overlay">
                  <p className="ab-card__role">{SITE.role}</p>
                  <p className="ab-card__name">{SITE.name}</p>
                  <div className="ab-card__underline" aria-hidden="true" />
                </div>
              </div>
            </RevealSection>

            {/* RIGHT — content */}
            <div className="ab-hero__content">
              <RevealSection variant="fade-up">
                <p className="section__label">About</p>
                <h1 className="ab-hero__title">
                  About <span className="ab-hero__title-accent">Me</span>
                </h1>
                <p className="ab-hero__tagline">{QUICK_INTRO.tagline}</p>
              </RevealSection>

              {/* Stats bar */}
              <RevealSection variant="fade-up" delay={80}>
                <div className="ab-stats">
                  {HERO_STATS.map((s) => (
                    <div className="ab-stats__item" key={s.num}>
                      <span className="ab-stats__meta">{s.num} · {s.label}</span>
                      <span className="ab-stats__value">{s.value}</span>
                    </div>
                  ))}
                </div>
              </RevealSection>

              {/* Paragraphs */}
              <div className="ab-hero__paras">
                {QUICK_INTRO.paragraphs.map((p, i) => (
                  <RevealSection key={p.slice(0, 20)} variant="fade-up" delay={i * 60}>
                    <p className="ab-hero__para">{p}</p>
                  </RevealSection>
                ))}
              </div>
            </div>
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
                  <span className="jt__ghost" aria-hidden="true">{item.year}</span>
                  <article className="jt__card">
                    <span className="jt__year-label">{item.year}</span>
                    <h3 className="jt__title">{item.title}</h3>
                    <p className="jt__desc">{item.description}</p>
                  </article>
                  <div className="jt__node" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Philosophy ── */}
      <RevealSection variant="fade-up" as="section" className="section section--system">
        <Container>
          <SectionHeader label="Philosophy" title="Development Philosophy" />
          <div className="phil-grid" style={{ marginTop: "var(--space-10)" }}>
            {PHILOSOPHY.map((item, i) => (
              <RevealSection key={item.title} variant="fade-up" delay={i * 80}>
                <article className="phil-card">
                  <span className="phil-card__icon">{PHIL_ICONS[i]}</span>
                  <h3 className="phil-card__title">{item.title}</h3>
                  <p className="phil-card__desc">{item.description}</p>
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
