import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PortraitFrame } from "@/components/ui/PortraitFrame";
import { Badge } from "@/components/ui/Badge";
import {
  JOURNEY,
  WHAT_I_DO,
  PHILOSOPHY,
  QUICK_INTRO,
} from "@/data/portfolio";

export function AboutPage() {
  return (
    <>
      {/* EDITORIAL MODE B: About Hero */}
      <section className="section section--editorial">
        <Container>
          <div className="about-hero">
            {/* Image as Editorial Anchor */}
            <div className="about-hero__portrait">
              <PortraitFrame mode="editorial" size="large" />
            </div>
            
            {/* Editorial Content Block */}
            <div className="about-hero__content">
              <SectionHeader label="About" title="About Me" editorial />
              <div className="about-hero__bio reveal">
                <p className="about-hero__tagline">{QUICK_INTRO.tagline}</p>
                {QUICK_INTRO.paragraphs.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* EDITORIAL MODE B: Journey Timeline */}
      <section className="section section--editorial">
        <Container>
          <SectionHeader label="My Journey" title="How I Got Here" editorial />
          <div className="timeline" style={{ marginTop: "var(--space-10)" }}>
            {JOURNEY.map((item) => (
              <article key={item.year} className="timeline__item">
                <p className="timeline__year">{item.year}</p>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__desc">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* SYSTEM MODE A: What I Do */}
      <section className="section section--system">
        <Container>
          <SectionHeader label="What I Do" title="Services & Focus" />
          <div className="grid" style={{ marginTop: "var(--space-8)" }}>
            {WHAT_I_DO.map((item) => (
              <div key={item} className="grid-span-4">
                <div className="card card--flat card--hover">
                  <h3 className="card__title">{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SYSTEM MODE A: Philosophy Grid */}
      <section className="section section--system">
        <Container>
          <SectionHeader
            label="Philosophy"
            title="Development Philosophy"
          />
          <div className="why-grid" style={{ marginTop: "var(--space-10)" }}>
            {PHILOSOPHY.map((item) => (
              <article key={item.title} className="card card--flat card--hover">
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* EDITORIAL MODE B: Future Goals */}
      <section className="section section--editorial section--compact">
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
      </section>
    </>
  );
}
