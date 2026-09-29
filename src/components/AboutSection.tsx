import { motion } from "framer-motion";
import { ArrowRight, Cloud, Code2, Download, GraduationCap, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Full-Stack Developer", description: "Building end-to-end web solutions" },
  { icon: GraduationCap, title: "Always Learning", description: "Exploring new technologies and improving my skills" },
  { icon: Cloud, title: "Cloud & DevOps Enthusiast", description: "Working with cloud platforms and DevOps practices" },
  { icon: Rocket, title: "Problem Solver", description: "Solving real-world problems with efficient code" },
];

export default function AboutSection() {
  return <section id="about" className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(30,64,175,0.07)] sm:p-10 lg:p-14">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55 }}>
          <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-blue-600">About me</p>
          <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-[-.045em] text-slate-950 sm:text-5xl">Building useful products with care and clarity.</h2>
          <div className="mt-7 max-w-xl space-y-4 text-base leading-7 text-slate-600"><p>I'm Ashwath NS, an aspiring Full-Stack Web Developer and Software Engineer passionate about building modern web applications. I enjoy working with frontend and backend technologies, databases, cloud platforms, and DevOps practices.</p><p>I'm continuously learning, building projects, and improving my skills to become a better developer every day.</p></div>
          <div className="mt-8 flex flex-wrap items-center gap-5"><a href="#skills" className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-blue-600">Explore my skills <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a><a href="#download-cv" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"><Download className="h-4 w-4" />Download CV</a></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55, delay: .1 }} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {highlights.map(({ icon: Icon, title, description }) => <div key={title} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/75 p-4 transition-colors hover:border-blue-100 hover:bg-blue-50/50"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-100 text-blue-700"><Icon className="h-5 w-5" /></div><div><h3 className="text-sm font-bold text-slate-900">{title}</h3><p className="mt-1 text-sm leading-5 text-slate-500">{description}</p></div></div>)}
        </motion.div>
      </div>
    </div>
  </section>;
}
