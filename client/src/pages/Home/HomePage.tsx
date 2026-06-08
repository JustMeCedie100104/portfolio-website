import { HeroSection } from "@/components/sections/home/HeroSection";
import { TechStackMarquee } from "@/components/sections/home/TechStackMarquee";
import { QuickIntroSection } from "@/components/sections/home/QuickIntroSection";
import { WhyHireMeSection } from "@/components/sections/home/WhyHireMeSection";
import { FeaturedSkillsSection } from "@/components/sections/home/FeaturedSkillsSection";
import { FeaturedProjectsSection } from "@/components/sections/home/FeaturedProjectsSection";
import { AchievementHighlightsSection } from "@/components/sections/home/AchievementHighlightsSection";
import { ContactCTASection } from "@/components/sections/home/ContactCTASection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStackMarquee />
      <QuickIntroSection />
      <WhyHireMeSection />
      <FeaturedSkillsSection />
      <FeaturedProjectsSection />
      <AchievementHighlightsSection />
      <ContactCTASection />
    </>
  );
}
