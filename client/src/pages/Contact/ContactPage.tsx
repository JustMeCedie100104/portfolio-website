import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/data/portfolio";
import { RevealSection } from "@/components/shared/RevealSection";

// ── Icons ─────────────────────────────────────────────────────
function IconGitHub() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function IconStatus() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

// ── Orbit data ────────────────────────────────────────────────
// angle: 0 = right, counter-clockwise from CSS perspective
// We use (angle - 90) so 0° = top
const NODES = [
  { id: "github",   angle: 324, icon: <IconGitHub />,   label: "GitHub",      href: SITE.github,            color: "#e2e8f0" },
  { id: "linkedin", angle: 36,  icon: <IconLinkedIn />, label: "LinkedIn",    href: SITE.linkedin,          color: "#0A66C2" },
  { id: "email",    angle: 108, icon: <IconEmail />,    label: "Email",       href: `mailto:${SITE.email}`, color: "#4f8ef7" },
  { id: "location", angle: 180, icon: <IconLocation />, label: "Philippines", href: undefined,              color: "#a855f7" },
  { id: "status",   angle: 252, icon: <IconStatus />,   label: "Available",   href: undefined,              color: "#22c55e" },
];

// ── Component ─────────────────────────────────────────────────
export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const SIZE   = 320; // container px
  const RADIUS = 118; // orbit radius from center
  const CENTER = SIZE / 2;

  return (
    <section className="section">
      <Container>
        <RevealSection variant="fade-up">
          <SectionHeader
            label="Contact"
            title="Let's Build Something Great"
            subtitle="Reach out for collaborations, opportunities, or just to say hello."
            editorial
          />
        </RevealSection>

        <div className="contact-layout" style={{ marginTop: "var(--space-12)" }}>

          {/* LEFT — Social orbit */}
          <RevealSection variant="fade-left" delay={100}>
            <div className="contact-orbit">

              {/* SVG layer: dashed ring + connector lines */}
              <svg
                className="contact-orbit__svg"
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                aria-hidden="true"
              >
                {/* Outer dashed orbit ring */}
                <circle
                  cx={CENTER} cy={CENTER} r={RADIUS}
                  fill="none"
                  stroke="rgba(168,85,247,0.3)"
                  strokeWidth="1.5"
                  strokeDasharray="6 5"
                />
                {/* Inner subtle ring */}
                <circle
                  cx={CENTER} cy={CENTER} r={RADIUS * 0.55}
                  fill="none"
                  stroke="rgba(168,85,247,0.12)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />
                {/* Connector lines from center to each node */}
                {NODES.map((n) => {
                  const rad = ((n.angle - 90) * Math.PI) / 180;
                  const nx  = CENTER + RADIUS * Math.cos(rad);
                  const ny  = CENTER + RADIUS * Math.sin(rad);
                  return (
                    <line key={n.id}
                      x1={CENTER} y1={CENTER} x2={nx} y2={ny}
                      stroke="rgba(168,85,247,0.1)"
                      strokeWidth="1"
                      strokeDasharray="3 4"
                    />
                  );
                })}
              </svg>

              {/* Center figure */}
              <div className="contact-orbit__center" aria-hidden="true">
                <svg viewBox="0 0 60 90" fill="none" width="60" height="90">
                  {/* head */}
                  <circle cx="30" cy="12" r="10" fill="#a855f7" />
                  {/* glow */}
                  <circle cx="30" cy="12" r="14" fill="#a855f7" opacity="0.25" />
                  {/* body */}
                  <path d="M18 30 Q30 26 42 30 L44 58 Q30 62 16 58 Z" fill="#7c3aed" />
                  {/* left arm */}
                  <path d="M18 34 Q10 46 12 56" stroke="#a855f7" strokeWidth="5" strokeLinecap="round" />
                  {/* right arm + paper */}
                  <path d="M42 34 Q50 46 48 56" stroke="#a855f7" strokeWidth="5" strokeLinecap="round" />
                  <rect x="42" y="50" width="11" height="14" rx="1.5" fill="white" opacity="0.85" />
                  <line x1="44" y1="54" x2="51" y2="54" stroke="#a855f7" strokeWidth="1.2" />
                  <line x1="44" y1="57" x2="51" y2="57" stroke="#a855f7" strokeWidth="1.2" />
                  <line x1="44" y1="60" x2="48" y2="60" stroke="#a855f7" strokeWidth="1.2" />
                  {/* legs */}
                  <path d="M22 57 L18 82 L26 82" stroke="#6b21a8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M38 57 L42 82 L34 82" stroke="#6b21a8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>

              {/* Orbit nodes */}
              {NODES.map((n) => {
                const rad = ((n.angle - 90) * Math.PI) / 180;
                const nx  = CENTER + RADIUS * Math.cos(rad);
                const ny  = CENTER + RADIUS * Math.sin(rad);
                const Tag = n.href ? "a" : "div";
                const extra = n.href
                  ? { href: n.href, target: "_blank", rel: "noopener noreferrer" }
                  : {};
                return (
                  <Tag
                    key={n.id}
                    className="contact-orbit__node"
                    style={{
                      left: nx,
                      top: ny,
                      "--nc": n.color,
                    } as React.CSSProperties}
                    {...extra}
                  >
                    <span className="contact-orbit__node-icon">{n.icon}</span>
                    <span className="contact-orbit__node-label">{n.label}</span>
                  </Tag>
                );
              })}
            </div>
          </RevealSection>

          {/* RIGHT — Form */}
          <RevealSection variant="fade-right" delay={180}>
            <form onSubmit={handleSubmit}>
              {submitted ? (
                <div className="card">
                  <p className="why-card__title">Message Sent</p>
                  <p className="why-card__desc">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <div className="form-group" style={{ marginBottom: "var(--space-4)" }}>
                    <label className="form-label" htmlFor="name">Name</label>
                    <input className="form-input" id="name" name="name" required />
                  </div>
                  <div className="form-group" style={{ marginBottom: "var(--space-4)" }}>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-input" id="email" name="email" type="email" required />
                  </div>
                  <div className="form-group" style={{ marginBottom: "var(--space-6)" }}>
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea className="form-textarea" id="message" name="message" required />
                  </div>
                  <Button type="submit" variant="primary">Send Message</Button>
                </>
              )}
            </form>
          </RevealSection>
        </div>
      </Container>
    </section>
  );
}
