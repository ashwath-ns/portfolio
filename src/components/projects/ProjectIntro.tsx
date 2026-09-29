import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import ProjectLoader from "./ProjectLoader";

export default function ProjectIntro({ project }: { project: Project }) {
  const reducedMotion = useReducedMotion();
  return <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 pt-28 md:px-10 md:pb-20"><motion.img src={project.image} alt="" className="absolute inset-0 h-full w-full object-cover" initial={{ opacity: 0, scale: 1.08, filter: "blur(12px)" }} animate={{ opacity: .5, scale: 1, filter: "blur(0px)" }} transition={{ duration: reducedMotion ? .01 : 1.05, ease: [0.22, 1, 0.36, 1] }} /><div className="absolute inset-0 bg-slate-950/65" /><div className="relative"><motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reducedMotion ? 0 : .28, duration: .5 }} className="text-xs font-bold uppercase tracking-[.2em] text-blue-200">{project.category}</motion.p><motion.h2 initial={{ opacity: 0, y: 28, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: reducedMotion ? 0 : .36, duration: .7, ease: [0.22, 1, 0.36, 1] }} className="mt-4 max-w-4xl text-5xl font-bold tracking-[-.06em] text-white sm:text-7xl md:text-8xl">{project.title}</motion.h2><ProjectLoader /></div></div>;
}
