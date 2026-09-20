import { profile } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";
import { ArrowDown, BriefcaseBusiness, GitFork, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <AnimatedSection id="home" className="relative min-h-screen overflow-hidden bg-[#0E3746] px-5 pb-16 pt-28 text-white sm:px-8 lg:px-12 lg:pt-32">
      <div className="absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full border border-white/10" />
      <div className="absolute -right-20 top-40 h-[22rem] w-[22rem] rounded-full border border-[#EAE8DC]/25" />

      <div className="relative mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="eyebrow inline-flex rounded-full border border-white/20 px-4 py-2 text-[#EAE8DC]">{profile.role}</p>
          <h1 className="mt-7 max-w-3xl text-6xl font-black leading-[0.88] tracking-[-0.065em] sm:text-7xl lg:text-[6.5rem]">
            Building ideas<br/><span className="text-[#BE2623]">that move</span><br/>people forward.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">Full-stack developer, product builder, and technology founder creating useful digital experiences from Gombe, Nigeria.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="interactive rounded-xl bg-[#BE2623] px-6 py-3.5 text-sm font-bold text-white"
            >
              <ArrowDown aria-hidden="true" className="mr-2 inline h-4 w-4" />
              View Projects
            </a>
            <a
              href="https://github.com/Muhammad-Bello-Ibrahim"
              target="_blank"
              rel="noreferrer"
              className="interactive rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white"
            >
              <GitFork aria-hidden="true" className="mr-2 inline h-4 w-4" />
              GitHub Profile
            </a>
          </div>
        </div>

        <div className="relative flex flex-col items-center lg:items-end">
          <Image src="/muhammad-bello-ibrahim.webp" alt="Muhammad Bello Ibrahim" width={1066} height={1280} priority sizes="(max-width: 1024px) 90vw, 40vw" className="relative z-10 h-auto w-full max-w-[430px] object-contain" />
          <div className="relative mt-5 w-full max-w-[430px]">
            <p className="eyebrow text-[#EAE8DC]">{profile.handle}</p>
            <h2 className="mt-1 text-xl font-bold text-white">{profile.name}</h2>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/60">
              <span className="inline-flex items-center gap-1.5"><MapPin aria-hidden="true" className="h-4 w-4 text-[#BE2623]" />{profile.location}</span>
              <span className="inline-flex items-center gap-1.5"><BriefcaseBusiness aria-hidden="true" className="h-4 w-4 text-[#BE2623]" />5+ years building for the web</span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
