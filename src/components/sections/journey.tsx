import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { journey } from "@/data/portfolio";

export function JourneySection() {
  return (
    <AnimatedSection id="journey" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading badge="Experience" title="Professional Journey" />

      <div className="relative mx-auto max-w-3xl border-l border-slate-500/25 pl-6">
        {journey.map((item, index) => (
          <article key={item.title} className={`relative pb-8 ${index === journey.length - 1 ? "pb-0" : ""}`}>
            <span className="absolute -left-[31px] mt-1.5 h-3.5 w-3.5 rounded-full border border-sky-300 bg-sky-500" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500 dark:text-sky-300">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
