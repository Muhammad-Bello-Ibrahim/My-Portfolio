import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function EducationSection() {
  return (
    <AnimatedSection id="education" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading badge="Education" title="Academic Background" />
      <article className="glass-card rounded-3xl p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 dark:text-sky-300">Gombe State University · Graduated December 2025</p>
        <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">B.Sc. (Hons) Computer Science</h3>
        <p className="mt-2 font-semibold text-emerald-600 dark:text-emerald-300">Second Class Honours (Upper Division)</p>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
          My academic work strengthened my software-engineering and problem-solving foundations. I built Connectrix, a campus club and student-engagement platform, as my final-year project.
        </p>
      </article>
    </AnimatedSection>
  );
}
