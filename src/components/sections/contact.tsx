import { profile } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading badge="Contact" title="Let's Build Something Meaningful" />

      <div className="glass-card rounded-3xl p-6 sm:p-8">
        <p className="text-slate-600 dark:text-slate-300">
          Available for strategic product collaborations, engineering leadership, and AIoT-driven platform development.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="interactive rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
            {profile.email}
          </a>
          {profile.socialLinks
            .filter((social) => social.label !== "Email")
            .map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="interactive rounded-full border border-slate-400/30 px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200"
              >
                {social.label}
              </a>
            ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
