import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/portfolio";
import { Check, Code2, Database, PlugZap, Wrench, type LucideIcon } from "lucide-react";

const groupIcons: Record<string, LucideIcon> = {
  "Frontend Engineering": Code2,
  "Backend & Data": Database,
  "Platforms & Integrations": PlugZap,
  "Languages & Tools": Wrench,
};

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="bg-[#EAE8DC] py-24 dark:bg-[#0E3746]">
      <div className="section-shell">
      <SectionHeading badge="Skills" title="Technology Toolbox" description="Categorized to match product delivery across frontend, backend, and intelligent systems." />

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => {
          const GroupIcon = groupIcons[group.title] ?? Code2;
          return <article key={group.title} className="interactive rounded-[1.75rem] border border-[#0E3746]/10 bg-[#F4F2EC] p-6 dark:border-white/10 dark:bg-white/5">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0E3746] text-[#F4F2EC] dark:bg-[#F4F2EC] dark:text-[#0E3746]"><GroupIcon aria-hidden="true" className="h-5 w-5" /></span>
              {group.title}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-bold text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/75"
                >
                  <Check aria-hidden="true" className="h-3.5 w-3.5 text-[#BE2623]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>;
        })}
      </div></div>
    </AnimatedSection>
  );
}
