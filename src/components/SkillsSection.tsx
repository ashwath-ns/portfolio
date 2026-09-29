import { motion } from "framer-motion";
import { techIconMap } from "./ui/TechIcons";

interface ToolCategory {
  title: string;
  tools: string[];
}

const categories: ToolCategory[] = [
  {
    title: "Frontend",
    tools: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    tools: ["Express.js", "Python", "C++", "Node.js"],
  },
  {
    title: "Design",
    tools: ["Google Stitch", "Figma", "Canva"],
  },
  {
    title: "Database",
    tools: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools & DevOps",
    tools: ["Jenkins", "Git", "GitHub", "Docker"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-2xl"
      >
        <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-blue-600">
          My expertise
        </p>
        <h2 className="text-4xl font-bold tracking-[-.045em] text-slate-950 sm:text-5xl">
          Tools I work with.
        </h2>
        <p className="mt-5 text-base leading-7 text-slate-600">
          Technologies and tools I use to bring ideas to life and build scalable, efficient, and modern solutions.
        </p>
      </motion.div>

      {/* Categorized Straight Tool Rows */}
      <div className="mt-14 flex flex-col divide-y divide-slate-200/80 rounded-2xl border border-slate-200/80 bg-white/50 p-4 shadow-xs backdrop-blur-xs sm:p-6 md:p-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="tools-category-row flex flex-col sm:flex-row sm:items-center gap-3 py-4 first:pt-2 last:pb-2 sm:gap-6 sm:py-5"
          >
            {/* Category Title - fixed on the left */}
            <div className="w-28 shrink-0 sm:w-36 md:w-44">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0 sm:h-2 sm:w-2" />
                <h3 className="font-postamp text-sm font-bold uppercase tracking-wider text-slate-900 sm:text-base md:text-lg">
                  {category.title}
                </h3>
              </div>
            </div>

            {/* Tools displayed straight */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-7">
              {category.tools.map((name) => {
                const Icon = techIconMap[name];
                return (
                  <div
                    key={name}
                    className="group flex shrink-0 items-center gap-2.5 transition-transform duration-200 hover:scale-105"
                  >
                    {Icon ? (
                      <Icon className="h-6 w-6 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                    ) : null}
                    <span className="whitespace-nowrap text-xs font-medium text-slate-700 transition-colors duration-150 group-hover:text-slate-950 sm:text-sm">
                      {name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
