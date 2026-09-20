import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/portfolio";
import { Check, Code2, Palette, Server, Wrench, type LucideIcon } from "lucide-react";

const groupIcons: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Server,
  "Product & Design": Palette,
  Tools: Wrench,
};

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading badge="Skills" title="Technology Toolbox" description="Categorized to match product delivery across frontend, backend, and intelligent systems." />

      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => {
          const GroupIcon = groupIcons[group.title] ?? Code2;
          return <article key={group.title} className="glass-card rounded-2xl p-5">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-300"><GroupIcon aria-hidden="true" className="h-5 w-5" /></span>
              {group.title}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-500/20 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
                >
                  <Check aria-hidden="true" className="h-3.5 w-3.5 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </article>;
        })}
      </div>
    </AnimatedSection>
  );
}
