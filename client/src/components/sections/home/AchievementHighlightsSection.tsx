import { useState, useCallback, useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ACHIEVEMENTS } from "@/data/portfolio";

// ── helpers ───────────────────────────────────────────────────

/**
 * Reference layout: flat cards, center card is large + fully lit,
 * adjacent cards are visible but smaller + dimmed + shifted behind.
 * No rotateY — cards stay upright like magazine covers.
 */
function getCardStyle(offset: number): React.CSSProperties {
  const abs = Math.abs(offset);

  // Hide cards more than 2 steps away
  if (abs > 2) return { opacity: 0, pointerEvents: "none", zIndex: 0 };

  const sign = offset < 0 ? -1 : offset > 0 ? 1 : 0;

  // Center card
  if (offset === 0) {
    return {
      transform: "translateX(0) scale(1)",
      opacity: 1,
      zIndex: 10,
      pointerEvents: "auto",
      filter: "none",
    };
  }

  // ±1 — partially visible, shifted and scaled down
  if (abs === 1) {
    return {
      transform: `translateX(${sign * 62}%) scale(0.82)`,
      opacity: 0.65,
      zIndex: 8,
      pointerEvents: "auto",
      filter: "brightness(0.55)",
    };
  }

  // ±2 — barely visible at the edge
  return {
    transform: `translateX(${sign * 108}%) scale(0.68)`,
    opacity: 0.35,
    zIndex: 6,
    pointerEvents: "auto",
    filter: "brightness(0.35)",
  };
}

// ── Component ─────────────────────────────────────────────────
export function AchievementHighlightsSection() {
  const total = ACHIEVEMENTS.length;
  const [active, setActive] = useState(0);

  const prev = useCallback(() => setActive((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setActive((i) => (i + 1) % total), [total]);

  // Keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Pointer drag / swipe
  const dragStart = useRef<number | null>(null);
  function onPointerDown(e: React.PointerEvent) { dragStart.current = e.clientX; }
  function onPointerUp(e: React.PointerEvent) {
    if (dragStart.current === null) return;
    const delta = e.clientX - dragStart.current;
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev();
    dragStart.current = null;
  }

  const current = ACHIEVEMENTS[active];

  return (
    <section className="section section--system">
      <Container>
        <SectionHeader
          label="Achievements"
          title="Achievement Highlights"
          subtitle="Certifications, awards, and milestones."
        />
      </Container>

      {/* Stage is full-width — overflow hidden clips side cards */}
      <div
        className="cf2"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        role="region"
        aria-label="Achievement highlights carousel"
        aria-roledescription="carousel"
      >
        {/* Card track */}
        <div className="cf2__track" aria-live="polite">
          {ACHIEVEMENTS.map((item, i) => {
            const offset = i - active;
            const isActive = offset === 0;
            return (
              <article
                key={item.id}
                className={`cf2__card${isActive ? " cf2__card--active" : ""}`}
                style={getCardStyle(offset)}
                aria-hidden={!isActive}
                onClick={() => !isActive && setActive(i)}
                role="button"
                tabIndex={isActive ? 0 : -1}
              >
                {/* Gradient face */}
                <div
                  className="cf2__face"
                  style={{ background: item.gradient }}
                >
                  {/* Gloss */}
                  <div className="cf2__gloss" aria-hidden="true" />

                  <div className="cf2__body">
                    <span className="cf2__num">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="cf2__title">{item.title}</h3>
                    <p className="cf2__issuer">{item.issuer}</p>
                  </div>
                </div>

                {/* Reflection strip */}
                <div
                  className="cf2__reflection"
                  style={{ background: item.gradient }}
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>

        {/* Left / right arrow buttons */}
        <button className="cf2__arrow cf2__arrow--left" onClick={prev} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
            <path d="M14 7l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="cf2__arrow cf2__arrow--right" onClick={next} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Label + dots below — inside container */}
      <Container>
        <div className="cf2__meta" aria-live="polite">
          <p className="cf2__meta-label">ACHIEVEMENT NO. {String(active + 1).padStart(2, "0")}</p>
          <p className="cf2__meta-title">{current.title}</p>
          <p className="cf2__meta-issuer">{current.issuer}</p>

          <div className="cf2__dots" role="tablist">
            {ACHIEVEMENTS.map((item, i) => (
              <button
                key={item.id}
                className={`cf2__dot${i === active ? " cf2__dot--active" : ""}`}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
                aria-label={`${item.title}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
