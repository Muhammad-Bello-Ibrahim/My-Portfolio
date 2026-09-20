import { profile } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { BriefcaseBusiness, GitFork, MessageCircle } from "lucide-react";

const socialIcons = { LinkedIn: BriefcaseBusiness, X: MessageCircle };

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="bg-[#0E3746] py-24 text-white">
      <div className="section-shell [&_h2]:!text-white">
      <SectionHeading badge="Contact" title="Have a useful idea? Let’s make it real." />

      <div className="rounded-[2rem] border border-white/15 bg-white/[0.06] p-8 sm:p-12">
        <p className="max-w-2xl text-lg text-white/65">
          Open to frontend opportunities, product collaborations, technology training, and practical software projects with meaningful impact.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a href="https://github.com/Muhammad-Bello-Ibrahim" target="_blank" rel="noreferrer" className="interactive rounded-xl bg-[#BE2623] px-5 py-3 text-sm font-bold text-white">
            <GitFork aria-hidden="true" className="mr-2 inline h-4 w-4" />
            View GitHub
          </a>
          {profile.socialLinks.filter((social) => social.label !== "GitHub").map((social) => {
              const SocialIcon = socialIcons[social.label as keyof typeof socialIcons];
              return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="interactive rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-white"
              >
                {SocialIcon && <SocialIcon aria-hidden="true" className="mr-2 inline h-4 w-4" />}
                {social.label}
              </a>
            );})}
        </div>
      </div></div>
    </AnimatedSection>
  );
}
