import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function EducationSection() {
  return (
    <AnimatedSection id="education" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading badge="Education" title="Academic Background" />
      <article className="glass-card rounded-3xl p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 dark:text-sky-300">Graduated December 2025</p>
        <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">B.Sc. Computer Science</h3>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
          Academic training strengthened my systems thinking and helped shape my professional direction toward AI-powered software, smart systems, and scalable product engineering.
        </p>
      </article>
    </AnimatedSection>
  );
}
