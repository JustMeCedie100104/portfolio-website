import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { SITE, HERO_STATS } from "@/data/portfolio";
import { ROUTES } from "@/app/router/routes";

// ── Data ─────────────────────────────────────────────────────
const STATS = HERO_STATS;

// ── Scroll helper ─────────────────────────────────────────────
function scrollToNextSection() {
  const hero = document.querySelector(".hero") as HTMLElement | null;
  if (!hero) return;
  const next = hero.nextElementSibling as HTMLElement | null;
  if (next) {
    next.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  }
}

// ── Component ────────────────────────────────────────────────
export function HeroSection() {
  return (
    <section className="hero" id="hero">
      <Container>
        <div className="hero__layout">

          {/* LEFT — Text content */}
          <div className="hero__content reveal">

            {/* Meta line: availability + location */}
            <p className="hero__meta-line">
              <span className="hero__meta-dot" aria-hidden="true" />
              {SITE.availability} — {SITE.location}
            </p>

            {/* Display headline: two lines, mixed typography */}
            <h1 className="hero__display">
              <span className="hero__display-line1">Software</span>
              <span className="hero__display-line2">Developer.</span>
            </h1>

            {/* Personal intro tagline */}
            <p className="hero__intro">
              I'm {SITE.name} — {SITE.tagline}
            </p>

            {/* CTA buttons */}
            <div className="hero__actions">
              <Link to={ROUTES.CONTACT} className="hero__btn hero__btn--primary">
                Contact Me →
              </Link>
              <Button to={ROUTES.PROJECTS} variant="ghost">
                View Projects
              </Button>
            </div>

            {/* Stats */}
            <div className="hero__stats">
              {STATS.map((stat) => (
                <div className="hero__stat" key={stat.label}>
                  <span className="hero__stat-meta">
                    {stat.num} · {stat.label}
                  </span>
                  <span className="hero__stat-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Multi-ring orbital portrait */}
          <div className="hero__visual">

            {/* Three concentric orbital rings — each spins at a different speed */}
            <div className="hero__orbit hero__orbit--1" aria-hidden="true">
              <svg viewBox="0 0 200 200" className="hero__orbit-svg">
                {/* Outer ring arc — purple→pink */}
                <circle cx="100" cy="100" r="95"
                  fill="none" stroke="url(#ring1_grad)" strokeWidth="1.5"
                  strokeDasharray="440 160" strokeLinecap="round" />
                {/* Glowing dot at arc start */}
                <circle cx="100" cy="5" r="4" fill="white"
                  style={{ filter: "drop-shadow(0 0 6px #fff) drop-shadow(0 0 12px #a855f7)" }} />
                {/* Glowing dot at arc end */}
                <circle cx="194" cy="115" r="3" fill="white"
                  style={{ filter: "drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #4f8ef7)" }} />
                <defs>
                  <linearGradient id="ring1_grad" gradientUnits="userSpaceOnUse" x1="5" y1="100" x2="195" y2="100">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="50%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#4f8ef7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="hero__orbit hero__orbit--2" aria-hidden="true">
              <svg viewBox="0 0 200 200" className="hero__orbit-svg">
                <circle cx="100" cy="100" r="83"
                  fill="none" stroke="url(#ring2_grad)" strokeWidth="1"
                  strokeDasharray="380 140" strokeLinecap="round" />
                <circle cx="100" cy="17" r="3.5" fill="white"
                  style={{ filter: "drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #a855f7)" }} />
                <circle cx="30" cy="160" r="2.5" fill="white"
                  style={{ filter: "drop-shadow(0 0 4px #fff) drop-shadow(0 0 8px #ec4899)" }} />
                <defs>
                  <linearGradient id="ring2_grad" gradientUnits="userSpaceOnUse" x1="17" y1="100" x2="183" y2="100">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="60%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#4f8ef7" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="hero__orbit hero__orbit--3" aria-hidden="true">
              <svg viewBox="0 0 200 200" className="hero__orbit-svg">
                <circle cx="100" cy="100" r="71"
                  fill="none" stroke="url(#ring3_grad)" strokeWidth="0.8"
                  strokeDasharray="300 145" strokeLinecap="round" />
                <circle cx="100" cy="29" r="3" fill="white"
                  style={{ filter: "drop-shadow(0 0 4px #fff) drop-shadow(0 0 8px #4f8ef7)" }} />
                <defs>
                  <linearGradient id="ring3_grad" gradientUnits="userSpaceOnUse" x1="29" y1="100" x2="171" y2="100">
                    <stop offset="0%" stopColor="#4f8ef7" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Portrait circle — innermost */}
            <div className="hero__portrait-circle">
              {SITE.portraitImageUrl ? (
                <img
                  src={SITE.portraitImageUrl}
                  alt={`${SITE.name} portrait`}
                  className="hero__portrait-img"
                />
              ) : (
                <div className="hero__portrait-placeholder" aria-hidden="true">
                  <span className="hero__portrait-initials">
                    {SITE.name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll-down cue */}
      <button
        className="hero__scroll-cue"
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
      >
        <span className="hero__scroll-cue-line" />
        <svg
          className="hero__scroll-cue-arrow"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  );
}
