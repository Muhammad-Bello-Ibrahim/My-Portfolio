import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading badge="Skills" title="Technology Toolbox" description="Categorized to match product delivery across frontend, backend, and intelligent systems." />

      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="glass-card rounded-2xl p-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-slate-500/20 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
