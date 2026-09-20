import { profile } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="bg-[#fbfaf6] py-24 dark:bg-[#130a18]">
      <div className="section-shell">
      <SectionHeading badge="About" title="Technology should feel useful, human, and clear." />
      <div className="grid overflow-hidden rounded-[2rem] border border-black/10 lg:grid-cols-2 dark:border-white/10">
        <article className="bg-white p-8 sm:p-12 dark:bg-white/5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">My Story</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{profile.bio}</p>
        </article>
        <article className="bg-[#d8ff63] p-8 text-[#130a18] sm:p-12">
          <h3 className="text-lg font-semibold text-[#130a18]">Mission</h3>
          <p className="mt-3 text-black/70">{profile.mission}</p>
        </article>
      </div></div>
    </AnimatedSection>
  );
}
