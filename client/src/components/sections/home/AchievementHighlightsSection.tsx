import { useState, useCallback, useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ACHIEVEMENTS } from "@/data/portfolio";

// ── helpers ──────────────────────────────────────────────────

/** Clamp a value between min and max */
function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/** Map distance from active card → visual transform values */
function getCardStyle(offset: number): React.CSSProperties {
  const absOffset = Math.abs(offset);

  // Only render up to 2 cards away; beyond that hide completely
  if (absOffset > 2) {
    return { opacity: 0, pointerEvents: "none", zIndex: 0 };
  }

  const sign = offset === 0 ? 0 : offset > 0 ? 1 : -1;

  const rotateY    = sign * clamp(absOffset * 45, 0, 90);   // deg — fans out
  const translateX = sign * clamp(absOffset * 42, 0, 84);   // % — horizontal spread
  const translateZ = -clamp(absOffset * 80, 0, 160);        // px — depth
  const scale      = 1 - clamp(absOffset * 0.18, 0, 0.36);  // shrinks side cards
  const opacity    = 1 - clamp(absOffset * 0.28, 0, 0.56);

  return {
    transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
    opacity,
    zIndex: 10 - absOffset,
    pointerEvents: offset === 0 ? "auto" : "none",
  };
}

// ── component ────────────────────────────────────────────────

export function AchievementHighlightsSection() {
  const total = ACHIEVEMENTS.length;
  const [active, setActive] = useState(0);

  const prev = useCallback(
    () => setActive((i) => (i - 1 + total) % total),
    [total]
  );
  const next = useCallback(
    () => setActive((i) => (i + 1) % total),
    [total]
  );

  // Keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Touch / drag support
  const dragStart = useRef<number | null>(null);

  function onPointerDown(e: React.PointerEvent) {
    dragStart.current = e.clientX;
  }

  function onPointerUp(e: React.PointerEvent) {
    if (dragStart.current === null) return;
    const delta = e.clientX - dragStart.current;
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev();
    dragStart.current = null;
  }

  return (
    <section className="section section--system">
      <Container>
        <SectionHeader
          label="Achievements"
          title="Achievement Highlights"
          subtitle="Certifications, awards, and milestones."
        />

        {/* ── Coverflow stage ── */}
        <div
          className="coverflow"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          role="region"
          aria-label="Achievement highlights carousel"
          aria-roledescription="carousel"
        >
          <div className="coverflow__track" aria-live="polite">
            {ACHIEVEMENTS.map((item, i) => {
              const offset = i - active;
              const isActive = offset === 0;
              return (
                <article
                  key={item.id}
                  className={`coverflow__card${isActive ? " coverflow__card--active" : ""}`}
                  style={getCardStyle(offset)}
                  aria-hidden={!isActive}
                  onClick={() => !isActive && setActive(i)}
                >
                  {/* Gradient face */}
                  <div
                    className="coverflow__face"
                    style={{ background: item.gradient }}
                  >
                    {/* Gloss overlay */}
                    <div className="coverflow__gloss" aria-hidden="true" />

                    <div className="coverflow__body">
                      <span className="coverflow__number">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="coverflow__title">{item.title}</h3>
                      <p className="coverflow__issuer">{item.issuer}</p>
                    </div>
                  </div>

                  {/* Reflection */}
                  <div
                    className="coverflow__reflection"
                    style={{ background: item.gradient }}
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>

          {/* Navigation controls */}
          <div className="coverflow__controls" aria-label="Carousel controls">
            <button
              className="coverflow__btn"
              onClick={prev}
              aria-label="Previous achievement"
            >
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="coverflow__dots" role="tablist" aria-label="Go to slide">
              {ACHIEVEMENTS.map((item, i) => (
                <button
                  key={item.id}
                  className={`coverflow__dot${i === active ? " coverflow__dot--active" : ""}`}
                  onClick={() => setActive(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Achievement ${i + 1}: ${item.title}`}
                />
              ))}
            </div>

            <button
              className="coverflow__btn"
              onClick={next}
              aria-label="Next achievement"
            >
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Active card label below */}
          <div className="coverflow__label" aria-live="polite">
            <p className="coverflow__label-title">
              {ACHIEVEMENTS[active].title}
            </p>
            <p className="coverflow__label-issuer">
              {ACHIEVEMENTS[active].issuer}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
