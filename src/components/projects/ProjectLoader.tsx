import { motion, useReducedMotion } from "framer-motion";

export default function ProjectLoader() {
  const reducedMotion = useReducedMotion();
  return <div className="mt-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.22em] text-white/70"><span>Loading project</span><div className="h-px w-16 overflow-hidden bg-white/25"><motion.div className="h-full bg-white" animate={reducedMotion ? { width: "100%" } : { x: ["-100%", "100%"] }} transition={{ duration: .9, repeat: Infinity, ease: "easeInOut" }} /></div></div>;
}
