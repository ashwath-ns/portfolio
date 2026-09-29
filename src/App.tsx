import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProjectDetails from "@/components/projects/ProjectDetails";
import ProjectTransition from "@/components/projects/ProjectTransition";
import { CircleMenu } from "@/components/ui/circle-menu";
import { projects, type Project } from "@/data/projects";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { useCallback, useState, lazy, Suspense } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RobotModel = lazy(() => import("@/components/ui/robot-model"));

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>;
}
function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>;
}
const navLinks = [{ label: "Home", href: "#home" }, { label: "About", href: "#about" }, { label: "Skills", href: "#skills" }, { label: "Projects", href: "#projects" }, { label: "Certifications", href: "#certifications" }, { label: "Contact", href: "#contact" }];
const itemVariants: Variants = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };


/** Smooth-scroll to a hash with a cubic ease-in-out curve — no extra packages. */
function smoothScrollTo(hash: string, duration = 800) {
  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return;
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + start;
  const distance = end - start;
  let startTime: number | null = null;

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function App() {
  const socialLinks = [{ name: "GitHub", href: "https://github.com/ashwath-ns", icon: <GithubIcon /> }, { name: "LinkedIn", href: "https://www.linkedin.com/in/ashwath-n-s-0882b6380/", icon: <LinkedinIcon /> }, { name: "Email", href: "mailto:ashwathns165@gmail.com", icon: <Mail className="w-5 h-5" /> }];
  const location = useLocation();
  const navigate = useNavigate();
  const activeProject = projects.find((project) => location.pathname.endsWith(`/projects/${project.id}`)) ?? null;
  const [transitionProject, setTransitionProject] = useState<Project | null>(null);
  const openProject = useCallback((project: Project) => setTransitionProject(project), []);
  const finishProjectTransition = useCallback(() => { if (!transitionProject) return; navigate(`/projects/${transitionProject.id}`); setTransitionProject(null); }, [navigate, transitionProject]);
  const returnToPortfolio = useCallback((hash = "#projects") => { navigate(`/${hash}`); window.setTimeout(() => smoothScrollTo(hash), 80); }, [navigate]);
  const handleMenuNavigate = useCallback((hash: string) => { if (activeProject) { returnToPortfolio(hash); return; } smoothScrollTo(hash); }, [activeProject, returnToPortfolio]);
  return <div className="min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-slate-950">
    <div className="page-wash pointer-events-none fixed inset-x-0 top-0 h-[740px]" />
    <CircleMenu items={navLinks} onNavigate={handleMenuNavigate} />
    <AnimatePresence mode="wait">{activeProject ? <ProjectDetails key={activeProject.id} project={activeProject} onBack={() => returnToPortfolio()} /> : <motion.main key="portfolio" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .3 }}>
      <section id="home" className="relative mx-auto flex min-h-[640px] max-w-7xl flex-col lg:flex-row items-center justify-between px-6 py-20 md:min-h-[720px] md:px-10 lg:py-28 overflow-hidden lg:overflow-visible">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        {/* Left hero content: heading, description, buttons */}
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }} className="relative z-20 w-full max-w-2xl lg:max-w-[58%]">
          <motion.p variants={itemVariants} className="mb-7 text-sm font-semibold tracking-[0.16em] text-blue-600 uppercase">HELLO, I&apos;M ASHWATH NS</motion.p>
          <motion.h1
            variants={itemVariants}
            className="max-w-[800px] text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            A developer  <br className="hidden lg:block" />In
            <span className="text-blue-600"> Constant</span>   Evolution.
          </motion.h1>          <motion.p variants={itemVariants} className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">I design, develop, and deploy scalable software solutions, combining modern technologies with cloud and DevOps practices to build reliable applications.</motion.p>
          <motion.div variants={itemVariants} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" onClick={(e) => { e.preventDefault(); smoothScrollTo("#projects"); }} className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.14)] transition hover:-translate-y-0.5 hover:bg-blue-700">View projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScrollTo("#contact"); }} className="group inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50">Contact me <ArrowUpRight className="h-4 w-4 text-blue-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
          </motion.div>
        </motion.div>

        {/* Right side: 3D Robot Hero Component */}
        <div className="robot-container relative z-10 mt-10 w-full max-w-[340px] h-[340px] sm:max-w-[380px] sm:h-[380px] lg:mt-0 lg:absolute lg:right-8 xl:right-14 lg:top-1/2 lg:-translate-y-1/2 lg:w-[440px] lg:h-[480px] xl:w-[480px] xl:h-[520px] pointer-events-auto">
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><div className="w-12 h-12 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" /></div>}>
            <RobotModel />
          </Suspense>
        </div>
      </section>
      <AboutSection /><SkillsSection /><ProjectsSection onProjectSelect={openProject} /><CertificationsSection /></motion.main>}</AnimatePresence>
    <ProjectTransition project={transitionProject} onComplete={finishProjectTransition} />
    {!activeProject && <aside className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex" aria-label="Social links">
      <div className="h-12 w-px bg-slate-300" />
      {socialLinks.map((social) => <a key={social.name} href={social.href} target={social.name === "Email" ? undefined : "_blank"} rel={social.name === "Email" ? undefined : "noopener noreferrer"} aria-label={social.name} className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white/90 text-slate-600 shadow-[0_8px_22px_rgba(15,23,42,.08)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-600 hover:text-white">{social.icon}</a>)}
      <div className="h-12 w-px bg-slate-300" />
    </aside>}
    {!activeProject && <ContactSection onNavigate={handleMenuNavigate} />}
  </div>;
}
