import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WHY_HIRE_ME } from "@/data/portfolio";
import { RevealSection } from "@/components/shared/RevealSection";

export function WhyHireMeSection() {
  return (
    <section className="section section--system">
      <Container>
        <RevealSection variant="fade-up">
          <SectionHeader
            label="Why Hire Me"
            title="Why Work With Me"
            editorial
          />
        </RevealSection>

        <div className="why-grid" style={{ marginTop: "var(--space-12)" }}>
          {WHY_HIRE_ME.map((item, i) => (
            <RevealSection key={item.number} variant="fade-up" delay={i * 80}>
              <article className="wid-card">
                <span className="wid-card__num">{item.number}</span>
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
    </section>
  );
}
