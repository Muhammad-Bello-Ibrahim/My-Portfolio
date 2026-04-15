import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { insights } from "@/data/portfolio";

export function InsightsSection() {
  return (
    <AnimatedSection id="insights" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading badge="Insights" title="Ideas, Articles & Product Thinking" description="A lightweight blog-style section for thought leadership and updates." />
      <div className="grid gap-5 md:grid-cols-3">
        {insights.map((item) => (
          <article key={item.title} className="glass-card interactive rounded-2xl p-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.excerpt}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
