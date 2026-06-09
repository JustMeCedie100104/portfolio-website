import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { SITE } from "@/data/portfolio";
import { RevealSection } from "@/components/shared/RevealSection";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

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
          <RevealSection variant="fade-left" delay={100}>
            <div className="contact-info">
              <div className="contact-info__item">
                <p className="contact-info__label">Email</p>
                <p className="contact-info__value">
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </p>
              </div>

              <div className="contact-info__item">
                <p className="contact-info__label">Location</p>
                <p className="contact-info__value">{SITE.location}</p>
              </div>

              <div className="contact-info__item">
                <p className="contact-info__label">Social</p>
                <SocialLinks />
              </div>

              <div className="availability">
                <span className="availability__dot" aria-hidden="true" />
                {SITE.availability}
              </div>
            </div>
          </RevealSection>

          <RevealSection variant="fade-right" delay={180}>
            <form onSubmit={handleSubmit}>
              {submitted ? (
                <div className="card">
                  <p className="why-card__title">Message Sent</p>
                  <p className="why-card__desc">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
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
