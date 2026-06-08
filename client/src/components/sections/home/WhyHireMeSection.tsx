import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WHY_HIRE_ME } from "@/data/portfolio";

export function WhyHireMeSection() {
  return (
    <section className="section section--system">
      <Container>
        <SectionHeader
          label="Why Hire Me"
          title="Why Work With Me"
          editorial
        />
        <div className="why-grid" style={{ marginTop: "var(--space-12)" }}>
          {WHY_HIRE_ME.map((item) => (
            <article key={item.number} className="card card--flat card--hover">
              <p className="why-card__number">{item.number}</p>
              <h3 className="why-card__title">{item.title}</h3>
              <p className="why-card__desc">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
