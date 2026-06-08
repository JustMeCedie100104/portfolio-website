import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/data/portfolio";
import { ROUTES } from "@/app/router/routes";

// ── Inline SVG logos ─────────────────────────────────────────
function SupabaseLogo() {
  return (
    <svg viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Supabase">
      <path
        d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
        fill="url(#supabase_grad1)"
      />
      <path
        d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
        fill="url(#supabase_grad2)"
        fillOpacity="0.2"
      />
      <path
        d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
        fill="#3ECF8E"
      />
      <defs>
        <linearGradient id="supabase_grad1" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
          <stop stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient id="supabase_grad2" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function PythonLogo() {
  return (
    <svg viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg" aria-label="Python">
      <defs>
        <linearGradient id="py_grad1" x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%">
          <stop offset="0%" stopColor="#387EB8" />
          <stop offset="100%" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="py_grad2" x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%">
          <stop offset="0%" stopColor="#FFE052" />
          <stop offset="100%" stopColor="#FFC331" />
        </linearGradient>
      </defs>
      <path
        d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zm-34.75 19.826a11.13 11.13 0 0 1 11.13 11.13 11.13 11.13 0 0 1-11.13 11.13 11.13 11.13 0 0 1-11.13-11.13 11.13 11.13 0 0 1 11.13-11.13z"
        fill="url(#py_grad1)"
      />
      <path
        d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21H100.073s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 63.159 33.897zm34.75-19.826a11.13 11.13 0 0 1-11.13-11.13 11.13 11.13 0 0 1 11.13-11.13 11.13 11.13 0 0 1 11.13 11.13 11.13 11.13 0 0 1-11.13 11.13z"
        fill="url(#py_grad2)"
      />
    </svg>
  );
}

function ReactLogo() {
  return (
    <svg viewBox="-11.5 -10.232 23 20.463" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="React">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <ellipse cx="0" cy="0" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" />
      <ellipse cx="0" cy="0" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60)" />
      <ellipse cx="0" cy="0" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120)" />
    </svg>
  );
}

// ── Data ─────────────────────────────────────────────────────
const TECH_BADGES = [
  { id: "supabase", logo: <SupabaseLogo />, label: "Supabase", angle: 330 },
  { id: "python",   logo: <PythonLogo />,   label: "Python",   angle: 210 },
  { id: "react",    logo: <ReactLogo />,    label: "React",    angle: 90  },
];

const STATS = [
  { value: "3+",   label: "Projects Done"  },
  { value: "2026", label: "Graduate"        },
  { value: "5+",   label: "Technologies"   },
];

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
            <p className="hero__role">{SITE.role}</p>

            <h1 className="hero__headline">
              Hello: {" "}
              <span className="hero__headline-accent">Cedie Salinas</span>{" "}
              is Active.
            </h1>

            <p className="hero__tagline">{SITE.tagline}</p>

            <div className="hero__actions">
              <Button to={ROUTES.PROJECTS} variant="primary">
                View Projects
              </Button>
              <a href={ROUTES.CONTACT} className="hero__secondary-link">
                Contact Me →
              </a>
            </div>

            <div className="hero__stats">
              {STATS.map((stat) => (
                <div className="hero__stat" key={stat.label}>
                  <span className="hero__stat-value">{stat.value}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Circular portrait with orbiting tech badges */}
          <div className="hero__visual">
            {/* Animated gradient ring */}
            <div className="hero__ring" aria-hidden="true">
              <div className="hero__ring-track" />
            </div>

            {/* Portrait circle */}
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
                    {SITE.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </span>
                </div>
              )}
            </div>

            {/* Orbiting tech badge icons */}
            {TECH_BADGES.map((badge) => {
              const rad = (badge.angle * Math.PI) / 180;
              const radius = 48; // % from center
              const x = 50 + radius * Math.cos(rad);
              const y = 50 + radius * Math.sin(rad);
              return (
                <div
                  key={badge.id}
                  className="hero__tech-badge"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  title={badge.label}
                  aria-label={badge.label}
                >
                  {badge.logo}
                </div>
              );
            })}
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
