import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { journey } from "@/data/portfolio";

export function JourneySection() {
  return (
    <AnimatedSection id="journey" className="bg-[#F4F2EC] py-24 dark:bg-[#0E3746]">
      <div className="section-shell">
      <SectionHeading badge="Experience" title="Professional Journey" />

      <div className="grid gap-4 lg:grid-cols-2">
        {journey.map((item, index) => (
          <article key={item.title} className={`rounded-[1.75rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-white/5 ${index === journey.length - 1 ? "lg:bg-[#EAE8DC] lg:text-[#0E3746]" : ""}`}>
            <p className="eyebrow text-[#BE2623]">{item.period}</p>
            <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
            <p className={`mt-3 text-sm leading-relaxed ${index === journey.length - 1 ? "text-current/70" : "text-black/60 dark:text-white/60"}`}>{item.description}</p>
          </article>
        ))}
      </div></div>
    </AnimatedSection>
  );
}
