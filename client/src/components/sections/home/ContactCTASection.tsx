import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/app/router/routes";

export function ContactCTASection() {
  return (
    <section className="contact-cta">
      <Container>
        <h2 className="contact-cta__title">Let&apos;s Build Something Great</h2>
        <p className="contact-cta__subtitle">
          Have a project in mind or want to connect? I&apos;d love to hear from you.
        </p>
        <Button to={ROUTES.CONTACT} variant="primary">
          Get In Touch
        </Button>
      </Container>
    </section>
  );
}
