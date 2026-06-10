import { Container } from "@/components/ui/Container";
import { QUICK_INTRO, PHILOSOPHY } from "@/data/portfolio";
import { RevealSection } from "@/components/shared/RevealSection";

// ── Small accent icons per philosophy card ────────────────────
const PHILOSOPHY_ICONS = [
  // Clean Code — code brackets
  <svg key="code" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>,
  // User-Centered Design — users
  <svg key="users" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>,
  // Continuous Learning — book open
  <svg key="book" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
  </svg>,
  // Problem Solving — lightbulb
  <svg key="bulb" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="10" y1="22" x2="14" y2="22" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 018.91 14" />
  </svg>,
];

export function QuickIntroSection() {
  return (
    <section className="section qi-section">
      <Container>
        <div className="qi-layout">

          {/* LEFT — label + display headline + paragraphs */}
          <RevealSection variant="fade-left" className="qi-left">
            <p className="section__label">About Me</p>

            <h2 className="qi-headline">
              <span className="qi-headline__line1">Building digital</span>
              <span className="qi-headline__line2">experiences.</span>
            </h2>

            <div className="qi-paras">
              {QUICK_INTRO.paragraphs.map((p) => (
                <p key={p.slice(0, 20)} className="qi-para">{p}</p>
              ))}
            </div>
          </RevealSection>

          {/* RIGHT — 2×2 philosophy cards */}
          <div className="qi-cards">
            {PHILOSOPHY.map((item, i) => (
              <RevealSection key={item.title} variant="fade-up" delay={i * 80}>
                <div className="qi-card">
                  <span className="qi-card__icon">{PHILOSOPHY_ICONS[i]}</span>
                  <h3 className="qi-card__title">{item.title}</h3>
                  <p className="qi-card__desc">{item.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
