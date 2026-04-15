import { profile } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading badge="About" title="Story and Mission" />
      <div className="grid gap-6 rounded-3xl border border-slate-500/20 bg-white/70 p-6 shadow-xl shadow-slate-900/5 backdrop-blur sm:p-8 lg:grid-cols-2 dark:bg-slate-900/50">
        <article>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">My Story</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{profile.bio}</p>
        </article>
        <article>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Mission</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{profile.mission}</p>
        </article>
      </div>
    </AnimatedSection>
  );
}
