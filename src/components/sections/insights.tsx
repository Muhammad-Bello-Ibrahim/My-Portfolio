import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { insights } from "@/data/portfolio";

export function InsightsSection() {
  return (
    <AnimatedSection id="insights" className="bg-[#F4F2EC] py-24 dark:bg-[#0E3746]">
      <div className="section-shell">
      <SectionHeading badge="Current Focus" title="What I’m Learning & Exploring" description="Areas guiding my present learning, research interests, and product decisions." />
      <div className="grid gap-5 md:grid-cols-3">
        {insights.map((item) => (
          <article key={item.title} className="interactive rounded-[1.75rem] border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-white/5">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/60 dark:text-white/60">{item.excerpt}</p>
          </article>
        ))}
      </div></div>
    </AnimatedSection>
  );
}
