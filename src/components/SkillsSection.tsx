import { motion, type Variants } from "framer-motion";
import { techIconMap } from "./ui/TechIcons";

interface SkillItem {
  name: string;
}

// All 19 Target Skills
const skillsList: SkillItem[] = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "Tailwind CSS" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "Python" },
  { name: "C++" },
  { name: "MongoDB" },
  { name: "MySQL" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "Docker" },
  { name: "AWS" },
  { name: "Jenkins" },
  { name: "Figma" },
  { name: "Canva" },
  { name: "Google Stitch" },
];

// Desktop Pyramid Breakdown (6 - 5 - 4 - 3 - 1 = 19 items)
const pyramidRows: SkillItem[][] = [
  skillsList.slice(0, 6),   // HTML, CSS, JavaScript, React, Tailwind CSS, Node.js
  skillsList.slice(6, 11),  // Express.js, Python, C++, MongoDB, MySQL
  skillsList.slice(11, 15), // Git, GitHub, Docker, AWS
  skillsList.slice(15, 18), // Jenkins, Figma, Canva
  skillsList.slice(18, 19), // Google Stitch
];

function FloatingSkillItem({ skill, index }: { skill: SkillItem; index: number }) {
  const IconComponent = techIconMap[skill.name];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.035,
        ease: [0.215, 0.61, 0.355, 1.0],
      }}
      className="flex flex-col items-center justify-center cursor-pointer group select-none px-3 py-2"
    >
      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3.2 + (index % 4) * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: (index * 0.18) % 2,
        }}
        whileHover={{
          scale: 1.18,
          y: -8,
          transition: { duration: 0.22, ease: "easeOut" },
        }}
        className="flex flex-col items-center justify-center transition-all duration-300"
      >
        {/* Technology Logo with Ambient Backlight Glow on Hover */}
        <div className="relative mb-2.5 flex items-center justify-center">
          {/* Subtle Soft Glow Effect behind logo on hover */}
          <div className="absolute inset-0 rounded-full bg-purple-500/0 group-hover:bg-[#60A5FA]/25 blur-xl transition-all duration-300 transform group-hover:scale-150 pointer-events-none" />

          {IconComponent ? (
            <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 relative z-10 transition-all duration-300 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] group-hover:drop-shadow-[0_0_20px_rgba(96,165,250,0.8)]" />
          ) : (
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full" />
          )}
        </div>

        {/* Technology Name */}
        <span className="text-[8px] sm:text-[10px] font-medium text-gray-300 group-hover:text-white tracking-wide text-center transition-all duration-200 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] whitespace-nowrap">
          {skill.name}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full relative z-10 overflow-hidden">
      {/* Ambient Radial Backdrop Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Centered Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center relative"
      >
        {/* Small Label */}
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#60A5FA] bg-[#60A5FA]/10 px-4 py-1.5 rounded-full border border-[#60A5FA]/20 mb-4 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#60A5FA] animate-pulse" />
          MY EXPERTISE
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
          Skills
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
          Technologies and tools I use to bring ideas to life and build scalable, efficient, and modern solutions.
        </p>

        {/* Subtle Animated Accent Line */}
        <div className="mt-6 relative w-48 h-[2px] overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent"
          />
        </div>
      </motion.div>

      {/* Centered Pyramid / Staggered Floating Layout (Desktop & Tablet) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="hidden sm:flex flex-col items-center gap-6 lg:gap-9 max-w-5xl mx-auto"
      >
        {pyramidRows.map((row, rowIndex) => {
          const offset = pyramidRows
            .slice(0, rowIndex)
            .reduce((acc, curr) => acc + curr.length, 0);

          return (
            <div
              key={`row-${rowIndex}`}
              className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12"
            >
              {row.map((skill, itemIndex) => (
                <FloatingSkillItem
                  key={skill.name}
                  skill={skill}
                  index={offset + itemIndex}
                />
              ))}
            </div>
          );
        })}
      </motion.div>

      {/* Responsive Centered Wrap Layout (Mobile) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex sm:hidden flex-wrap items-center justify-center gap-6 py-4 max-w-md mx-auto"
      >
        {skillsList.map((skill, index) => (
          <FloatingSkillItem key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>
    </section>
  );
}


