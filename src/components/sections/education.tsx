import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function EducationSection() {
  return (
    <AnimatedSection id="education" className="bg-white py-24 dark:bg-[#0E3746]">
      <div className="section-shell">
      <SectionHeading badge="Education" title="Academic Background" />
      <article className="rounded-[2rem] bg-[#BE2623] p-8 text-white sm:p-12">
        <p className="eyebrow text-white/70">Gombe State University · Graduated December 2025</p>
        <h3 className="mt-4 text-4xl font-black tracking-[-0.03em] sm:text-5xl">B.Sc. (Hons) Computer Science</h3>
        <p className="mt-3 font-bold text-[#F4F2EC]">Second Class Honours (Upper Division)</p>
        <p className="mt-5 max-w-3xl text-white/80">
          My academic work strengthened my software-engineering and problem-solving foundations. I built Connectrix, a campus club and student-engagement platform, as my final-year project.
        </p>
      </article></div>
    </AnimatedSection>
  );
}
