import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function VisionSection() {
  return (
    <AnimatedSection id="vision" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading badge="Orao Technologies" title="Vision & Mission" />

      <div className="grid gap-5 md:grid-cols-2">
        <article className="glass-card rounded-3xl p-6">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Vision</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            To grow an African technology company that builds useful, dependable digital products for organisations and communities.
          </p>
        </article>

        <article className="glass-card rounded-3xl p-6">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Mission</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Orao Technologies designs practical software, delivers technology training, and develops products that help people and organisations work more effectively.
          </p>
        </article>
      </div>
    </AnimatedSection>
  );
}
