import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import ProjectIntro from "./ProjectIntro";

export default function ProjectTransition({ project, onComplete }: { project: Project | null; onComplete: () => void }) {
  const reducedMotion = useReducedMotion();
  useEffect(() => { if (!project) return; const timer = window.setTimeout(onComplete, reducedMotion ? 80 : 1650); return () => window.clearTimeout(timer); }, [project, onComplete, reducedMotion]);
  return <AnimatePresence>{project && <motion.div key={project.id} className="fixed inset-0 z-[70] overflow-hidden bg-slate-950" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: reducedMotion ? .01 : .35 } }}><ProjectIntro project={project} /></motion.div>}</AnimatePresence>;
}
