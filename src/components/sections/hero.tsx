import { profile } from "@/data/portfolio";
import { AnimatedSection } from "@/components/ui/animated-section";

export function HeroSection() {
  return (
    <AnimatedSection id="home" className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_70%_20%,rgba(99,102,241,0.2),transparent_40%)]" />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500 dark:text-sky-300">{profile.role}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            {profile.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">I build intelligent digital products at the intersection of frontend engineering, product vision, and AIoT innovation.</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="interactive rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
            >
              View Projects
            </a>
            <a
              href={profile.cvPath}
              download
              className="interactive rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Founder Profile</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">{profile.name}</h2>
          <p className="text-sm text-sky-500 dark:text-sky-300">{profile.handle}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{profile.bio}</p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border border-slate-500/20 bg-white/40 p-3 dark:bg-slate-900/40">
              <p className="text-slate-500 dark:text-slate-400">Experience</p>
              <p className="font-semibold text-slate-900 dark:text-white">5+ Years</p>
            </div>
            <div className="rounded-xl border border-slate-500/20 bg-white/40 p-3 dark:bg-slate-900/40">
              <p className="text-slate-500 dark:text-slate-400">Specialization</p>
              <p className="font-semibold text-slate-900 dark:text-white">AIoT + MERN</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
