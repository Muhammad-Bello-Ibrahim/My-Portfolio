import { profile } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";

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
              View Projects
            </a>
            <a
              href="https://github.com/Muhammad-Bello-Ibrahim"
              target="_blank"
              rel="noreferrer"
              className="interactive rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        <div className="glass-card overflow-hidden rounded-[2rem] p-3 sm:p-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-950">
            <Image src="/muhammad-bello-ibrahim.webp" alt="Muhammad Bello Ibrahim" fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 pt-24 text-white">
              <p className="text-xs uppercase tracking-[0.25em] text-sky-300">{profile.handle}</p>
              <h2 className="mt-2 text-2xl font-bold">{profile.name}</h2>
              <p className="mt-1 text-sm text-slate-300">{profile.location}</p>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border border-slate-500/20 bg-white/40 p-3 dark:bg-slate-900/40">
              <p className="text-slate-500 dark:text-slate-400">Experience</p>
              <p className="font-semibold text-slate-900 dark:text-white">5+ Years</p>
            </div>
            <div className="rounded-xl border border-slate-500/20 bg-white/40 p-3 dark:bg-slate-900/40">
              <p className="text-slate-500 dark:text-slate-400">Specialization</p>
              <p className="font-semibold text-slate-900 dark:text-white">Frontend + Product</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
