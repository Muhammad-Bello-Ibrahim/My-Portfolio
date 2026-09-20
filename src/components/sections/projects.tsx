"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projectCategories, projects, type ProjectCategory } from "@/data/portfolio";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = useMemo(
    () => (activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)),
    [activeCategory],
  );
  const slidingProjects = [...filteredProjects, ...filteredProjects];

  return (
    <AnimatedSection id="projects" className="overflow-hidden bg-[#0E3746] py-24 text-white">
      <div className="section-shell [&_h2]:!text-white">
      <SectionHeading
        badge="Projects"
        title="Product Work Across Industries"
        description="Selected products moving continuously across the screen. Pause the track with your pointer, or filter it by domain."
      />

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`interactive rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeCategory === category
                ? "border-[#BE2623] bg-[#BE2623] text-white"
                : "border-white/20 bg-white/5 text-white/70"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      </div>
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-2">
        <div className="project-track flex gap-5 px-5 sm:px-8">
        {slidingProjects.map((project, index) => (
          <article
            key={`${project.name}-${index}`}
            aria-hidden={index >= filteredProjects.length ? true : undefined}
            className="w-[82vw] max-w-[420px] shrink-0 overflow-hidden rounded-[2rem] border border-white/15 bg-[#F4F2EC] text-[#0E3746] sm:w-[390px]"
          >
            <div className="relative h-44 w-full">
              <Image src={project.image} alt={`${project.name} preview`} fill className="object-cover" />
            </div>
            <div className="p-5">
              <p className="eyebrow text-[#BE2623]">{project.category}</p>
              <h3 className="mt-2 text-2xl font-bold">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#0E3746]/70">{project.summary}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#BE2623]">{project.status}</p>

              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li key={item} className="rounded-full border border-[#0E3746]/15 bg-[#EAE8DC] px-2.5 py-1 text-xs text-[#0E3746]/80">
                    {item}
                  </li>
                ))}
              </ul>

              {(project.links.live || project.links.github) && <div className="mt-4 flex gap-3 text-sm font-semibold">
                {project.links.live && <a href={project.links.live} className="text-sky-500 hover:text-sky-600 dark:text-sky-300 dark:hover:text-sky-200">Live</a>}
                {project.links.github && <a href={project.links.github} className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Source</a>}
              </div>}
            </div>
          </article>
        ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
