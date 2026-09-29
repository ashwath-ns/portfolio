import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

// Next.js Image compatible component for Vite/React environment
const Image: React.FC<{
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  onLoad?: () => void;
  loading?: "lazy" | "eager";
}> = ({ src, alt = "", className, onLoad, loading }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    onLoad={onLoad}
    loading={loading}
  />
);

// ─────────────────────────────────────────────
// Default 21st.dev demo images
// ─────────────────────────────────────────────

const defaultImages = [
  "https://cdn.21st.dev/assets/mirror/bf/bfc82fd647c38dffaf3692024acb366ee99ca95b1338490cfec2c2340d3674a1.jpg",
  "https://cdn.21st.dev/assets/mirror/d6/d64315e93e25068a473e2afaf4651506238618b8589384249fc1ebfce90308cb.jpg",
  "https://cdn.21st.dev/assets/mirror/72/72043d7a404d9d51139f262eea3c282cba95f83c19e8d89c62fc7def551b7f28.jpg",
  "https://cdn.21st.dev/assets/mirror/44/441003ea453f17deb37d9a2353c175aee9e7f0d324b22cc6e5913cbe991266ba.jpg",
  "https://cdn.21st.dev/assets/mirror/0a/0a83a37ee79d76f68a994d707180a02601cb5300151e330b66f5baaebd26ae04.jpg",
  "https://cdn.21st.dev/assets/mirror/27/2728292f8798de2cf1178713570c0a3bb43ffe1bbccea828546ad2dbb5131e85.jpg",
  "https://cdn.21st.dev/assets/mirror/54/54cdd60a4acf0408c150c4076c6133f4969ffd37fe10d8e1fd8ec11c28384f56.jpg",
  "https://cdn.21st.dev/assets/mirror/7e/7e8c47a6830f821879eb755b513688d36329270ccd084655aa7a01f682bcbcf7.jpg",
  "https://cdn.21st.dev/assets/mirror/37/377d530717b131e081629c4e9adf6719393929166ffd8addc623ec0e56b9261c.jpg",
  "https://cdn.21st.dev/assets/mirror/d4/d4a88876ee811f5919081652440246ff6f8c9485142a4ea0da601b2797798eca.jpg",
];

// How often the carousel auto-rotates (ms)
const AUTOPLAY_INTERVAL_MS = 3800;

// Spring physics for the ring rotation
const springTransition = {
  type: "spring",
  stiffness: 60,
  damping: 16,
  mass: 0.7,
} as const;

// Ring depth (radius) bounds and how much of the container width it uses
const RADIUS_MIN = 140;
const RADIUS_MAX = 340;
const RADIUS_WIDTH_RATIO = 0.52;
const PERSPECTIVE_MULTIPLIER = 2.4; // how strong the 3D perspective looks
const RING_TILT_DEG = 32; // tilt angle of ring thumbnails

// Center image crossfade
const CROSSFADE_DURATION_S = 0.45;
const CROSSFADE_EASE = [0.22, 1, 0.36, 1] as const;

// Size classes — thumbnails on the ring
const THUMB_SIZE_CLASSES =
  "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28";
const THUMB_SIZES_ATTR =
  "(max-width: 640px) 64px, (max-width: 768px) 80px, 112px";

// Nav button size
const BUTTON_SIZE_CLASSES = "w-10 h-10 sm:w-11 sm:h-11";

// Small spinner shown while an image is loading
const ImageLoader: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-black/5 dark:bg-white/5">
    <div className="w-1/4 aspect-square rounded-full border-2 border-black/15 dark:border-white/20 border-t-black/50 dark:border-t-white/60 animate-spin" />
  </div>
);

const badgeColorMap: Record<string, string> = {
  pink: "bg-[#feecee] text-[#e11d48]",
  blue: "bg-[#e0f2fe] text-[#0284c7]",
  green: "bg-[#ecfdf5] text-[#059669]",
  purple: "bg-[#f3e8ff] text-[#7c3aed]",
  indigo: "bg-[#e0e7ff] text-[#4f46e5]",
  orange: "bg-[#ffedd5] text-[#ea580c]",
};

export interface Carousel360Props {
  images?: string[];
  projects?: Project[];
  onProjectSelect?: (project: Project) => void;
}

export const Carousel360: React.FC<Carousel360Props> = ({
  images = defaultImages,
  projects,
  onProjectSelect,
}) => {
  const isProjectMode = Boolean(projects && projects.length > 0);
  const itemsCount = isProjectMode ? projects!.length : images.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [radius, setRadius] = useState(240);
  const [isHovered, setIsHovered] = useState(false);
  const [loadedThumbs, setLoadedThumbs] = useState<boolean[]>(() =>
    Array(itemsCount).fill(false),
  );

  const numImages = itemsCount;
  const angleStep = 360 / numImages;

  const steps = Math.round(rotation / angleStep);
  const centerIndex = ((-steps % numImages) + numImages) % numImages;

  const activeProject = isProjectMode ? projects![centerIndex] : null;
  const centerImage = isProjectMode ? activeProject!.image : images[centerIndex];

  // Reset center loader on change
  const [prevCenterIndex, setPrevCenterIndex] = useState(centerIndex);
  const [centerLoaded, setCenterLoaded] = useState(false);
  if (centerIndex !== prevCenterIndex) {
    setPrevCenterIndex(centerIndex);
    setCenterLoaded(false);
  }

  useEffect(() => {
    const updateRadius = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      setRadius(
        Math.max(RADIUS_MIN, Math.min(RADIUS_MAX, width * RADIUS_WIDTH_RATIO)),
      );
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setRotation((prev) => prev + angleStep);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [angleStep, isHovered]);

  const rotateCarousel = useCallback(
    (direction: "left" | "right") => {
      setRotation(
        (prev) => prev + (direction === "left" ? -angleStep : angleStep),
      );
    },
    [angleStep],
  );

  const rotateToIndex = useCallback(
    (index: number) => {
      const currentStep = Math.round(rotation / angleStep);
      const currentNorm = ((-currentStep % numImages) + numImages) % numImages;
      let diff = index - currentNorm;
      if (diff > numImages / 2) diff -= numImages;
      if (diff < -numImages / 2) diff += numImages;
      setRotation((prev) => prev - diff * angleStep);
    },
    [rotation, angleStep, numImages],
  );

  const markThumbLoaded = useCallback((index: number) => {
    setLoadedThumbs((prev) => {
      if (prev[index]) return prev;
      const next = [...prev];
      next[index] = true;
      return next;
    });
  }, []);

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center select-none py-4 sm:py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Ring Stage */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[700px] min-h-[480px] sm:min-h-[520px] flex items-center justify-center"
      >
        {/* 3D Rotating Ring */}
        <div
          className="relative w-full h-full min-h-[480px] sm:min-h-[520px]"
          style={{ perspective: radius * PERSPECTIVE_MULTIPLIER }}
        >
          {Array.from({ length: numImages }).map((_, index) => {
            const targetAngle = rotation + angleStep * index;
            const imgSrc = isProjectMode ? projects![index].image : images[index];
            const itemTitle = isProjectMode ? projects![index].title : `Item ${index + 1}`;
            const isCenter = index === centerIndex;

            return (
              <motion.div
                key={isProjectMode ? projects![index].id : images[index] + index}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: targetAngle }}
                transition={springTransition}
              >
                <motion.div
                  onClick={() => rotateToIndex(index)}
                  className={`pointer-events-auto cursor-pointer relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 ${
                    isCenter ? "ring-2 ring-blue-500 scale-105 opacity-100" : "opacity-75 hover:opacity-100 hover:scale-110"
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{
                    rotateY: -targetAngle,
                    rotateX: RING_TILT_DEG,
                    z: radius,
                  }}
                  transition={springTransition}
                >
                  {!loadedThumbs[index] && <ImageLoader />}
                  <Image
                    src={imgSrc}
                    alt={itemTitle}
                    width={112}
                    height={112}
                    sizes={THUMB_SIZES_ATTR}
                    onLoad={() => markThumbLoaded(index)}
                    className={`object-cover ${THUMB_SIZE_CLASSES} transition-opacity duration-300 ${
                      loadedThumbs[index] ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {isProjectMode && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-1 sm:p-1.5 text-center">
                      <p className="text-[9px] sm:text-[10px] font-semibold text-white truncate">
                        {projects![index].title}
                      </p>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Center Featured Element */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <AnimatePresence mode="wait">
            {isProjectMode && activeProject ? (
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 0.92, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -10 }}
                transition={{
                  duration: CROSSFADE_DURATION_S,
                  ease: CROSSFADE_EASE,
                }}
                className="pointer-events-auto relative w-[90%] max-w-[340px] sm:max-w-[370px] rounded-[28px] border border-slate-100 bg-white p-4 sm:p-5 shadow-[0_16px_40px_rgba(15,23,42,0.12)] text-left flex flex-col"
              >
                {/* Image Preview */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 mb-4 cursor-pointer"
                  onClick={() => onProjectSelect?.(activeProject)}
                >
                  {!centerLoaded && <ImageLoader />}
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    width={370}
                    height={277}
                    loading="lazy"
                    onLoad={() => setCenterLoaded(true)}
                    className={`h-full w-full object-cover transition-transform duration-500 hover:scale-105 ${
                      centerLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                {/* Badge */}
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold self-start mb-3 ${
                    badgeColorMap[activeProject.badge.variant] || "bg-blue-50 text-blue-600"
                  }`}
                >
                  {activeProject.badge.text}
                </span>

                {/* Title */}
                <h3
                  className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-2 cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => onProjectSelect?.(activeProject)}
                >
                  {activeProject.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3">
                  {activeProject.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 sm:gap-3 mt-auto pt-1">
                  <a
                    href={activeProject.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f172a] hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold py-2.5 px-3 transition-colors shadow-sm"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold py-2.5 px-3 transition-colors"
                  >
                    <FaGithub className="h-3.5 w-3.5 text-slate-800" />
                    View Repo
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={centerIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  duration: CROSSFADE_DURATION_S,
                  ease: CROSSFADE_EASE,
                }}
                className="relative rounded-2xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.18)]"
              >
                {!centerLoaded && <ImageLoader />}
                <Image
                  src={centerImage}
                  alt="Featured"
                  width={320}
                  height={320}
                  loading="lazy"
                  onLoad={() => setCenterLoaded(true)}
                  className={`object-cover w-48 h-48 sm:w-64 sm:h-64 transition-opacity duration-300 ${
                    centerLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-4 mt-6 sm:mt-8 z-30">
        <button
          type="button"
          aria-label="Previous image"
          onClick={() => rotateCarousel("left")}
          className={`group relative flex items-center justify-center ${BUTTON_SIZE_CLASSES} rounded-full overflow-hidden
                     shadow-sm shadow-black/10 transition-transform duration-200 active:scale-90 cursor-pointer`}
        >
          <span
            className="absolute inset-0 rounded-full
                       bg-gradient-to-b from-white/90 to-white/60
                       backdrop-blur-lg border border-slate-200
                       shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_8px_rgba(0,0,0,0.06)]
                       transition-all duration-200
                       group-hover:from-white group-hover:to-white/80"
          />
          <FaArrowLeft className="relative z-10 h-3.5 w-3.5 text-slate-700 group-hover:text-slate-950 transition-colors duration-200" />
        </button>

        {/* Indicator dots for projects */}
        {isProjectMode && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-xs backdrop-blur-xs">
            {projects!.map((project, idx) => (
              <button
                key={project.id}
                type="button"
                aria-label={`Jump to ${project.title}`}
                onClick={() => rotateToIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === centerIndex
                    ? "w-6 bg-blue-600"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}

        <button
          type="button"
          aria-label="Next image"
          onClick={() => rotateCarousel("right")}
          className={`group relative flex items-center justify-center ${BUTTON_SIZE_CLASSES} rounded-full overflow-hidden
                     shadow-sm shadow-black/10 transition-transform duration-200 active:scale-90 cursor-pointer`}
        >
          <span
            className="absolute inset-0 rounded-full
                       bg-gradient-to-b from-white/90 to-white/60
                       backdrop-blur-lg border border-slate-200
                       shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_8px_rgba(0,0,0,0.06)]
                       transition-all duration-200
                       group-hover:from-white group-hover:to-white/80"
          />
          <FaArrowRight className="relative z-10 h-3.5 w-3.5 text-slate-700 group-hover:text-slate-950 transition-colors duration-200" />
        </button>
      </div>
    </div>
  );
};

export default Carousel360;
