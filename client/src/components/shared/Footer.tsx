import { Container } from "@/components/ui/Container";
import { SocialLinks } from "./SocialLinks";
import { SITE } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__inner">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <SocialLinks />
      </Container>
    </footer>
  );
}
