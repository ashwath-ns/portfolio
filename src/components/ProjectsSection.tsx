import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { Carousel360 } from "./ui/image-fan-carousel";
import { ExternalLink, LayoutGrid, Box } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const badgeColorMap: Record<string, string> = {
  pink: "bg-[#feecee] text-[#e11d48]",
  blue: "bg-[#e0f2fe] text-[#0284c7]",
  green: "bg-[#ecfdf5] text-[#059669]",
  purple: "bg-[#f3e8ff] text-[#7c3aed]",
  indigo: "bg-[#e0e7ff] text-[#4f46e5]",
  orange: "bg-[#ffedd5] text-[#ea580c]",
};

export default function ProjectsSection({
  onProjectSelect,
}: {
  onProjectSelect: (project: Project) => void;
}) {
  const [viewMode, setViewMode] = useState<"3d" | "grid">("3d");

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      {/* Header with View Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end"
      >
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-blue-600">
            Selected work
          </p>
          <h2 className="text-4xl font-bold tracking-[-.045em] text-slate-950 sm:text-5xl">
            Projects that solve real problems.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            A collection of projects I&apos;ve built, showcasing my skills in frontend development,
            problem-solving, and creating engaging user experiences.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1.5 self-start rounded-2xl border border-slate-200/80 bg-white/80 p-1.5 shadow-xs backdrop-blur-xs md:self-end">
          <button
            type="button"
            onClick={() => setViewMode("3d")}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              viewMode === "3d"
                ? "bg-slate-950 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/70"
            }`}
          >
            <Box className="h-4 w-4" />
            3D Motion
          </button>
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              viewMode === "grid"
                ? "bg-slate-950 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/70"
            }`}
          >
            <LayoutGrid className="h-4 w-4" />
            Grid View
          </button>
        </div>
      </motion.div>

      {/* Main View Container */}
      <AnimatePresence mode="wait">
        {viewMode === "3d" ? (
          <motion.div
            key="3d-view"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
            className="w-full overflow-hidden"
          >
            <Carousel360
              projects={projects}
              onProjectSelect={onProjectSelect}
            />
          </motion.div>
        ) : (
          <motion.div
            key="grid-view"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col rounded-[28px] border border-slate-100 bg-white p-4 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
              >
                {/* Project Image Preview */}
                <div
                  className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-2xl bg-slate-100 mb-5"
                  onClick={() => onProjectSelect(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Category Badge */}
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold self-start mb-3 ${
                    badgeColorMap[project.badge.variant] || "bg-blue-50 text-blue-600"
                  }`}
                >
                  {project.badge.text}
                </span>

                {/* Project Title */}
                <h3
                  className="text-2xl font-bold tracking-tight text-slate-900 mb-2 cursor-pointer transition-colors hover:text-blue-600"
                  onClick={() => onProjectSelect(project)}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Action Buttons matching screenshot */}
                <div className="flex items-center gap-2.5 mt-auto pt-2">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f172a] hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold py-2.5 px-3 transition-colors shadow-sm"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold py-2.5 px-3 transition-colors"
                  >
                    <FaGithub className="h-3.5 w-3.5 text-slate-800" />
                    View Repo
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
