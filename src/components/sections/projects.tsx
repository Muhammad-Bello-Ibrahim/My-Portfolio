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
    <AnimatedSection id="projects" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
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
                ? "border-sky-500 bg-sky-500 text-white"
                : "border-slate-400/30 bg-white/70 text-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
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
            className="glass-card overflow-hidden rounded-3xl border border-slate-500/20"
          >
            <div className="relative h-44 w-full">
              <Image src={project.image} alt={`${project.name} preview`} fill className="object-cover" />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 dark:text-sky-300">{project.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{project.name}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.summary}</p>

              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li key={item} className="rounded-full bg-slate-200/70 px-2.5 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex gap-3 text-sm font-semibold">
                <a href={project.links.live ?? "#"} className="text-sky-500 hover:text-sky-600 dark:text-sky-300 dark:hover:text-sky-200">
                  Live
                </a>
                <a href={project.links.github ?? "#"} className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                  Source
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
