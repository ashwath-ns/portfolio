import { motion } from 'framer-motion';
import Slider_01 from './ui/ruixen-carousel-wave';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full relative z-10 overflow-hidden"
    >
      {/* Ambient backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-indigo-600/10 via-blue-600/10 to-purple-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* ── Section Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center"
      >


        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
          Projects
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
          A collection of projects I've built, showcasing my skills in frontend
          development, problem-solving, and creating engaging user experiences.
        </p>

        {/* Animated accent line */}
        <div className="mt-6  relative w-48 h-[2px] overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent"
          />
        </div>
      </motion.div>

      {/* ── Carousel ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <Slider_01 />
      </motion.div>


    </section>
  );
}
