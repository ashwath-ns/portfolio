import { motion, useReducedMotion } from "framer-motion";
import { Award, Code2, FolderKanban, Home, Mail, Menu, UserRound, X } from "lucide-react";
import { useState, type ReactNode } from "react";

export type CircleMenuItem = { label: string; href: string };

const iconMap: Record<string, ReactNode> = {
  Home: <Home className="h-4 w-4" />, About: <UserRound className="h-4 w-4" />, Skills: <Code2 className="h-4 w-4" />,
  Projects: <FolderKanban className="h-4 w-4" />, Certifications: <Award className="h-4 w-4" />, Contact: <Mail className="h-4 w-4" />,
};

export function CircleMenu({ items, onNavigate }: { items: CircleMenuItem[]; onNavigate: (href: string) => void }) {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const radius = 128;

  return <nav className="fixed left-5 top-5 z-[60] h-52 w-52 sm:left-7 sm:top-7" aria-label="Portfolio navigation">
    {items.map((item, index) => {
      const angle = (8 + index * 16) * (Math.PI / 180);
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return <motion.a key={item.label} href={item.href} onClick={(event) => { event.preventDefault(); onNavigate(item.href); setOpen(false); }} aria-hidden={!open} tabIndex={open ? 0 : -1} initial={false} animate={open ? { opacity: 1, x, y, scale: 1 } : { opacity: 0, x: 0, y: 0, scale: .72 }} transition={reducedMotion ? { duration: .01 } : { type: "spring", stiffness: 310, damping: 24, delay: open ? index * .035 : 0 }} className="group absolute left-0 top-0 flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3 text-xs font-semibold text-slate-600 shadow-[0_8px_20px_rgba(15,23,42,.10)] backdrop-blur-sm transition-colors hover:border-blue-200 hover:bg-blue-600 hover:text-white"><span className="grid h-4 w-4 place-items-center">{iconMap[item.label]}</span><span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-200 group-hover:max-w-28 group-hover:opacity-100">{item.label}</span><span className="sr-only">{item.label}</span></motion.a>;
    })}
    <motion.button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} whileTap={reducedMotion ? undefined : { scale: .94 }} className="absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-slate-950 text-white shadow-[0_10px_26px_rgba(15,23,42,.18)] transition hover:bg-blue-700">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</motion.button>
  </nav>;
}
