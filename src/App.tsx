import ParticleDrift from "@/components/ui/particle-drift";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import { motion, type Variants } from "framer-motion";
import { Mail, ArrowRight, ArrowUpRight, Download } from "lucide-react";

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function App() {
  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CERTIFICATIONS", href: "#certifications" },
    { name: "CONTACT", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: <GithubIcon className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <LinkedinIcon className="w-5 h-5" />,
    },
    {
      name: "Email",
      href: "mailto:ashwath.ns@example.com",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#030509] text-white selection:bg-[#60A5FA] selection:text-[#030509]">
      {/* Exact Preserved Particle Drift Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticleDrift className="w-full h-full" />
      </div>

      {/* Foreground Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header / Navbar */}
        <motion.header
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="sticky top-0 z-40 backdrop-blur-md bg-[#030509]/60 border-b border-white/5 px-6 md:px-12 py-5"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Nav Links */}
            <nav className="flex items-center gap-6 md:gap-10 text-xs md:text-sm tracking-widest font-mono font-medium text-gray-300">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.05, color: "#60A5FA" }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-colors duration-200"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* Download CV Button */}
            <motion.a
              href="#download-cv"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(96,165,250,0.15)", borderColor: "rgba(96,165,250,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 rounded-full text-xs font-mono tracking-wider font-semibold text-[#60A5FA] border border-[#60A5FA]/30 bg-[#60A5FA]/10 transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(96,165,250,0.15)]"
            >
              <Download className="w-4 h-4" />
              DOWNLOAD CV
            </motion.a>
          </div>
        </motion.header>

        {/* Hero Section */}
        <main id="home" className="flex-1 flex items-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto w-full py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Subtitle Greeting */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-[#60A5FA] bg-[#60A5FA]/10 px-3.5 py-1.5 rounded-full border border-[#60A5FA]/20">
                HELLO, I'M
              </span>
            </motion.div>

            {/* Main Name Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-3"
            >
              ASHWATH NS
            </motion.h1>

            {/* Role Subtitle */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wider text-[#60A5FA] mb-6 font-mono"
            >
              SOFTWARE ENGINEER
            </motion.h2>

            {/* Description Text */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-10 max-w-2xl"
            >
              I design, develop, and deploy scalable software solutions, combining modern technologies with cloud and DevOps practices to build reliable applications.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(96,165,250,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-[#60A5FA] text-[#030509] font-medium text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 font-mono group"
              >
                VIEW PROJECTS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white/5 text-white border border-white/15 font-medium text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 font-mono backdrop-blur-sm group"
              >
                CONTACT ME
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#60A5FA]" />
              </motion.a>
            </motion.div>
          </motion.div>
        </main>

        {/* About Me Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Vertical Social Media Sidebar (Fixed on Right Side) */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-6"
        >
          <div className="w-[1px] h-12 bg-white/15 mb-1" />

          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              whileHover={{ scale: 1.25, color: "#60A5FA" }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-[#60A5FA]/40 hover:bg-[#60A5FA]/10 transition-all duration-300 backdrop-blur-md shadow-lg"
            >
              {social.icon}
            </motion.a>
          ))}

          <div className="w-[1px] h-12 bg-white/15 mt-1" />
        </motion.aside>
      </div>
    </div>
  );
}
