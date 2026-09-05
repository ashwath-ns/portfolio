import { useEffect, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GitBranch,
} from 'lucide-react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

// ─── Project Data ─────────────────────────────────────────────────────────────

interface ProjectCard {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  liveDemo: string;
  github: string;
  badge: {
    text: string;
    variant: 'pink' | 'indigo' | 'orange' | 'blue';
  };
}

const projects: ProjectCard[] = [
  {
    id: 'vibe-energy',
    title: 'Vibe Energy',
    category: 'Frontend Project',
    description:
      'An e-commerce website for selling juice products.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/vibe-energy.png',
    liveDemo: 'https://vibe-energy.vercel.app/',
    github: 'https://github.com/ashwath-ns/vibe-energy',
    badge: {
      text: 'Frontend',
      variant: 'pink',
    },
  },

  {
    id: 'weather-web',
    title: 'WeatherWeb',
    category: 'Frontend Web Application',
    description:
      'A modern weather dashboard providing real-time weather updates, forecasts, humidity, and wind data using the Open-Meteo API with a clean dark UI.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/weather-web.png',
    liveDemo:
      'https://weather-web-dusky-seven.vercel.app/',
    github:
      'https://github.com/ashwath-ns/WeatherWeb',
    badge: {
      text: 'Weather',
      variant: 'indigo',
    },
  },

  {
    id: 'attendance-pro',
    title: 'AttendancePro',
    category: 'Frontend Web Application',
    description:
      'A simple web application that helps students calculate how many classes they can bunk while maintaining the required attendance percentage.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/attendance-pro.png',
    liveDemo: 'https://bunkzone.vercel.app/',
    github:
      'https://github.com/ashwath-ns/attendancePro',
    badge: {
      text: 'Utility',
      variant: 'orange',
    },
  },

  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    category: 'Frontend Game / Web Application',
    description:
      'A simple and interactive two-player Tic Tac Toe game with winner detection, draw detection, and restart functionality.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/tic-tac-toe.png',
    liveDemo:
      'https://ashwath-ns.github.io/tic-tac-toe/',
    github:
      'https://github.com/ashwath-ns/tic-tac-toe',
    badge: {
      text: 'Game',
      variant: 'blue',
    },
  },
];

// ─── Badge Colors ─────────────────────────────────────────────────────────────

const badgeColors: Record<
  ProjectCard['badge']['variant'],
  string
> = {
  pink: 'bg-pink-600/90 text-white',
  indigo: 'bg-indigo-600/90 text-white',
  orange: 'bg-orange-500/90 text-white',
  blue: 'bg-blue-600/90 text-white',
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function Slider_01() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const shift = (direction: 'next' | 'prev') => {
    setCurrentIndex((prev) =>
      direction === 'next'
        ? (prev + 1) % projects.length
        : (prev - 1 + projects.length) % projects.length
    );
  };

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      let position = i - currentIndex;

      if (position < -Math.floor(projects.length / 2)) {
        position += projects.length;
      } else if (
        position > Math.floor(projects.length / 2)
      ) {
        position -= projects.length;
      }

      const x = position * 310;

      // Keep active card slightly lower for depth
      const y = position === 0 ? 10 : 0;

      const scale = position === 0 ? 1.04 : 0.94;

      const zIndex =
        position === 0
          ? 10
          : Math.max(1, 8 - Math.abs(position) * 2);

      const opacity =
        Math.abs(position) === 0
          ? 1
          : Math.abs(position) === 1
            ? 0.45
            : 0;

      gsap.to(card, {
        x,
        y,
        scale,
        zIndex,
        opacity,
        duration: 0.6,
        ease: 'power2.out',
      });
    });
  }, [currentIndex]);

  return (
    <div className="relative w-full py-0">

      {/* ── Carousel Container ── */}
      <div
        className="relative overflow-hidden mx-auto"
        style={{
          maxWidth: '100%',
          height: '390px',
        }}
      >

        {/* ── Cards Track ── */}
        <div className="absolute inset-0 flex items-start justify-center">

          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="absolute"
              style={{
                willChange: 'transform',
              }}
            >

              {/* ── Project Card ── */}
              <div className="w-[272px] rounded-2xl overflow-hidden border border-white/10 hover:border-[#60A5FA]/40 bg-gradient-to-b from-[#080d1a]/95 to-[#050810]/95 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-md group transition-all duration-300 hover:shadow-[0_20px_60px_rgba(96,165,250,0.15)]">

                {/* ── Image ── */}
                <div className="relative h-[176px] overflow-hidden bg-gradient-to-br from-[#0d1530] to-[#070c18]">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (
                        e.target as HTMLImageElement
                      ).style.display = 'none';
                    }}
                  />

                  {/* Bottom Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent pointer-events-none" />

                  {/* ── Badge ── */}
                  <div className="absolute top-4 -left-8 -rotate-45">

                    <div
                      className={cn(
                        'px-6 py-0.5 text-[10px] font-bold tracking-wider shadow-md',
                        badgeColors[
                        project.badge.variant
                        ]
                      )}
                    >
                      {project.badge.text}
                    </div>

                  </div>

                  {/* ── Category ── */}
                  <div className="absolute top-3 right-3">

                    <span className="text-[9px] font-mono uppercase tracking-wider text-gray-400 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/10">

                      {project.category}

                    </span>

                  </div>

                </div>

                {/* ── Content ── */}
                <div className="p-4 flex flex-col gap-2.5">

                  {/* Title */}
                  <h3 className="text-sm font-bold text-white tracking-wide leading-tight">

                    {project.title}

                  </h3>

                  {/* Description */}
                  <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2">

                    {project.description}

                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="text-[9px] px-1.5 py-[2px] rounded font-mono bg-[#60A5FA]/10 text-[#60A5FA] border border-[#60A5FA]/20"
                      >

                        {tech}

                      </span>

                    ))}

                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/5" />

                  {/* ── Buttons ── */}
                  <div className="flex gap-2">

                    {/* Live Demo */}
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                      className="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#60A5FA]/15 border border-[#60A5FA]/30 text-[#60A5FA] text-[11px] font-medium hover:bg-[#60A5FA]/25 hover:border-[#60A5FA]/60 transition-all duration-200"
                    >

                      <ExternalLink className="w-3 h-3 shrink-0" />

                      Live Demo

                    </a>

                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                      className="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-[11px] font-medium hover:bg-white/10 hover:text-white hover:border-white/25 transition-all duration-200"
                    >

                      <GitBranch className="w-3 h-3 shrink-0" />

                      GitHub

                    </a>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ── Navigation ── */}
      <div className="flex items-center justify-center gap-4 mt-2">

        {/* Dots */}
        <div className="flex items-center gap-2">

          {projects.map((_, i) => (

            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to project ${i + 1}`}
              className={cn(
                'rounded-full transition-all duration-300',
                i === currentIndex
                  ? 'w-5 h-1.5 bg-[#60A5FA]'
                  : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
              )}
            />

          ))}

        </div>

        {/* Arrows */}
        <div className="flex gap-2 ml-2">

          <button
            onClick={() => shift('prev')}
            aria-label="Previous project"
            className="p-2 rounded-full border border-white/10 bg-[#070c18]/80 text-gray-300 hover:border-[#60A5FA]/40 hover:bg-[#60A5FA]/10 hover:text-white hover:scale-110 transition-all duration-200"
          >

            <ChevronLeft className="w-4 h-4" />

          </button>

          <button
            onClick={() => shift('next')}
            aria-label="Next project"
            className="p-2 rounded-full border border-white/10 bg-[#070c18]/80 text-gray-300 hover:border-[#60A5FA]/40 hover:bg-[#60A5FA]/10 hover:text-white hover:scale-110 transition-all duration-200"
          >

            <ChevronRight className="w-4 h-4" />

          </button>

        </div>

      </div>

    </div>
  );
}