import { motion } from "framer-motion";
import { Code2, GraduationCap, Cloud, Rocket, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: <Code2 className="w-5 h-5 text-[#60A5FA]" />,
      title: "Full-Stack Developer",
      description: "Building end-to-end web solutions",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-[#60A5FA]" />,
      title: "Always Learning",
      description: "Exploring new technologies and improving my skills",
    },
    {
      icon: <Cloud className="w-5 h-5 text-[#60A5FA]" />,
      title: "Cloud & DevOps Enthusiast",
      description: "Working with cloud platforms and DevOps practices",
    },
    {
      icon: <Rocket className="w-5 h-5 text-[#60A5FA]" />,
      title: "Problem Solver",
      description: "Solving real-world problems with efficient code",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full relative z-10">
      {/* Main Glassmorphic Outer Card */}
      <div className="relative rounded-3xl bg-[#070c18]/75 border border-[#60A5FA]/30 backdrop-blur-xl shadow-[0_0_50px_rgba(96,165,250,0.12)] p-8 md:p-14 overflow-hidden">
        {/* Subtle Background Futuristic Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          {/* Faint network grid lines */}
          <svg className="absolute w-full h-full inset-0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="net-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(96,165,250,0.08)" strokeWidth="1" />
                <circle cx="40" cy="40" r="1.5" fill="rgba(96,165,250,0.2)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#net-grid)" />
          </svg>

          {/* Vertical Glowing Accent Lines */}
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#60A5FA]/20 to-transparent" />
          <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-[#60A5FA]/20 to-transparent" />

          {/* Floating Code Symbols */}
          <span className="absolute top-6 right-12 text-[#60A5FA]/20 font-mono text-sm">&lt;/&gt;</span>
          <span className="absolute bottom-8 left-10 text-[#60A5FA]/20 font-mono text-sm">{`{ ... }`}</span>
          <span className="absolute top-1/2 right-6 text-[#60A5FA]/20 font-mono text-xs">010101</span>
        </div>

        {/* Outer Corner Brackets */}
        <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-[#60A5FA]/40" />
        <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-[#60A5FA]/40" />
        <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-[#60A5FA]/40" />
        <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-[#60A5FA]/40" />

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              {/* Small Futuristic Label */}
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#60A5FA] mb-4 flex items-center gap-2 font-medium">
                <span className="w-6 h-[1px] bg-[#60A5FA]" />
                ABOUT ME
              </div>

              {/* Large Modern Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                Getting to know <br />
                <span className="text-[#60A5FA]">me better</span>
              </h2>

              {/* Body Text */}
              <div className="space-y-4 text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-8">
                <p>
                  I'm Ashwath NS, an aspiring Full-Stack Web Developer and Software Engineer passionate about building modern web applications. I enjoy working with frontend and backend technologies, databases, cloud platforms, and DevOps practices.
                </p>
                <p>
                  I'm continuously learning, building projects, and improving my skills to become a better developer every day.
                </p>
              </div>
            </div>

            {/* Outlined Button */}
            <div>
              <motion.a
                href="#skills"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(96,165,250,0.15)", borderColor: "#60A5FA" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 border border-[#60A5FA]/40 bg-[#60A5FA]/10 text-[#60A5FA] px-7 py-3.5 rounded-full font-mono text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(96,165,250,0.15)] group"
              >
                EXPLORE MORE
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side – About Highlights Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#030611]/80 border border-[#60A5FA]/20 backdrop-blur-md shadow-xl relative">
              {/* Top Card Badge */}
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#60A5FA]/60 mb-6 flex items-center justify-between border-b border-white/5 pb-3">
                <span>// CORE HIGHLIGHTS</span>
                <span className="w-2 h-2 rounded-full bg-[#60A5FA] animate-pulse" />
              </div>

              {/* Four Items */}
              <div className="space-y-6">
                {highlights.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-[#60A5FA]/10 border border-[#60A5FA]/20 shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-base mb-1 tracking-wide">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Thin Subtle Glowing Divider (except last item) */}
                    {index < highlights.length - 1 && (
                      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#60A5FA]/20 to-transparent mt-6" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
