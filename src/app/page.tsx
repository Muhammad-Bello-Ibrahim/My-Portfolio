import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { GithubShowcaseSection } from "@/components/sections/github-showcase";
import { HeroSection } from "@/components/sections/hero";
import { InsightsSection } from "@/components/sections/insights";
import { JourneySection } from "@/components/sections/journey";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { VisionSection } from "@/components/sections/vision";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  // Structured data improves discoverability for search engines.
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Bello Ibrahim",
    alternateName: "Mufteem Dev",
    jobTitle: "CEO, Orao Technologies",
    alumniOf: "Gombe State University",
    homeLocation: "Gombe, Nigeria",
    knowsAbout: ["Full-Stack Development", "React", "Next.js", "Node.js", "MongoDB", "Paystack", "Python", "Fintech", "Campus Technology", "Digital Health"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <JourneySection />
        <EducationSection />
        <VisionSection />
        <GithubShowcaseSection />
        <InsightsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
