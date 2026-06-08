import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { QUICK_INTRO } from "@/data/portfolio";

export function QuickIntroSection() {
  return (
    <section className="section section--editorial section--compact">
      <Container>
        {/* EDITORIAL MODE B: Narrative Introduction */}
        <div className="editorial-intro">
          <SectionHeader label="Quick Introduction" title={QUICK_INTRO.title} editorial />
          <div className="editorial-intro__content reveal">
            <p className="editorial-intro__tagline">{QUICK_INTRO.tagline}</p>
            {QUICK_INTRO.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="editorial-intro__paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
