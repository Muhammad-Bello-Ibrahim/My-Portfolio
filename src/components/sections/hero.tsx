import { profile } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";
import { ArrowDown, BriefcaseBusiness, GitFork, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <AnimatedSection id="home" className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_70%_20%,rgba(99,102,241,0.2),transparent_40%)]" />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500 dark:text-sky-300">{profile.role}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            {profile.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">I design and build practical web products for communities, businesses, education, and healthcare—from Gombe, Nigeria.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="interactive rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
            >
              <ArrowDown aria-hidden="true" className="mr-2 inline h-4 w-4" />
              View Projects
            </a>
            <a
              href="https://github.com/Muhammad-Bello-Ibrahim"
              target="_blank"
              rel="noreferrer"
              className="interactive rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
            >
              <GitFork aria-hidden="true" className="mr-2 inline h-4 w-4" />
              GitHub Profile
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end">
          <Image src="/muhammad-bello-ibrahim.webp" alt="Muhammad Bello Ibrahim" width={1066} height={1280} priority sizes="(max-width: 1024px) 90vw, 40vw" className="h-auto w-full max-w-[430px] object-contain" />
          <div className="mt-5 w-full max-w-[430px]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-500 dark:text-sky-300">{profile.handle}</p>
            <h2 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">{profile.name}</h2>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-1.5"><MapPin aria-hidden="true" className="h-4 w-4 text-sky-500" />{profile.location}</span>
              <span className="inline-flex items-center gap-1.5"><BriefcaseBusiness aria-hidden="true" className="h-4 w-4 text-sky-500" />5+ years building for the web</span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
