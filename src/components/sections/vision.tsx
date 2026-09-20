import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function VisionSection() {
  return (
    <AnimatedSection id="vision" className="bg-[#EAE8DC] py-24 text-[#0E3746]">
      <div className="section-shell [&_h2]:!text-[#0E3746]">
      <SectionHeading badge="Orao Technologies" title="Vision & Mission" />

      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-[2rem] border border-black/15 bg-white/40 p-8">
          <h3 className="text-2xl font-bold">Vision</h3>
          <p className="mt-3 text-black/65">
            To grow an African technology company that builds useful, dependable digital products for organisations and communities.
          </p>
        </article>

        <article className="rounded-[2rem] bg-[#0E3746] p-8 text-white">
          <h3 className="text-2xl font-bold">Mission</h3>
          <p className="mt-3 text-white/65">
            Orao Technologies designs practical software, delivers technology training, and develops products that help people and organisations work more effectively.
          </p>
        </article>
      </div></div>
    </AnimatedSection>
  );
}
