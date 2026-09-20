"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

  return (
    <AnimatedSection id="projects" className="bg-[#130a18] py-24 text-white">
      <div className="section-shell [&_h2]:!text-white">
      <SectionHeading
        badge="Projects"
        title="Product Work Across Industries"
        description="Filter by domain to explore selected portfolio initiatives."
      />

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`interactive rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeCategory === category
                ? "border-[#d8ff63] bg-[#d8ff63] text-[#130a18]"
                : "border-white/20 bg-white/5 text-white/70"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <motion.article
            key={project.name}
            whileHover={{ y: -6 }}
            className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06]"
          >
            <div className="relative h-44 w-full">
              <Image src={project.image} alt={`${project.name} preview`} fill className="object-cover" />
            </div>
            <div className="p-5">
              <p className="eyebrow text-[#d8ff63]">{project.category}</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{project.summary}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#ff8d72]">{project.status}</p>

              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li key={item} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                    {item}
                  </li>
                ))}
              </ul>

              {(project.links.live || project.links.github) && <div className="mt-4 flex gap-3 text-sm font-semibold">
                {project.links.live && <a href={project.links.live} className="text-sky-500 hover:text-sky-600 dark:text-sky-300 dark:hover:text-sky-200">Live</a>}
                {project.links.github && <a href={project.links.github} className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Source</a>}
              </div>}
            </div>
          </motion.article>
        ))}
      </div></div>
    </AnimatedSection>
  );
}
