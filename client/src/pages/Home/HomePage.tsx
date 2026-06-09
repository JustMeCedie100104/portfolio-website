import { HeroSection } from "@/components/sections/home/HeroSection";
import { TechStackMarquee } from "@/components/sections/home/TechStackMarquee";
import { QuickIntroSection } from "@/components/sections/home/QuickIntroSection";
import { WhyHireMeSection } from "@/components/sections/home/WhyHireMeSection";
import { FeaturedSkillsSection } from "@/components/sections/home/FeaturedSkillsSection";
import { FeaturedProjectsSection } from "@/components/sections/home/FeaturedProjectsSection";
import { AchievementHighlightsSection } from "@/components/sections/home/AchievementHighlightsSection";
import { ContactCTASection } from "@/components/sections/home/ContactCTASection";
import { RevealSection } from "@/components/shared/RevealSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <RevealSection variant="fade-in"><TechStackMarquee /></RevealSection>
      <RevealSection variant="fade-up"><QuickIntroSection /></RevealSection>
      <RevealSection variant="fade-up" delay={60}><WhyHireMeSection /></RevealSection>
      <RevealSection variant="fade-up" delay={80}><FeaturedSkillsSection /></RevealSection>
      <RevealSection variant="fade-up" delay={80}><FeaturedProjectsSection /></RevealSection>
      <RevealSection variant="fade-up" delay={60}><AchievementHighlightsSection /></RevealSection>
      <RevealSection variant="fade-in"><ContactCTASection /></RevealSection>
    </>
  );
}
