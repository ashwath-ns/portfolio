import React from "react";
import {
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiExpress,
  SiPython,
  SiCplusplus,
  SiNodedotjs,
  SiFigma,
  SiMysql,
  SiMongodb,
  SiJenkins,
  SiGit,
  SiGithub,
  SiDocker,
  SiGoogle,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

// ==========================================
// CATEGORY ICONS (Preserved for compatibility)
// ==========================================

export function FrontendCategoryIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  );
}

export function BackendCategoryIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

export function DatabaseCategoryIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export function LanguagesCategoryIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  );
}

export function DevopsCategoryIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

export function DesignCategoryIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

export function AiCategoryIcon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
      <path d="M12 6v12M6 12h12" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

// ==========================================
// CANVA BRAND ICON
// ==========================================

export function CanvaIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      {...props}
    >
      <circle cx="12" cy="12" r="11" fill="#00C4CC" />
      <path
        d="M15.3 16.5c-2.2 0-4-1.4-4.8-3.3-.3-.6-.4-1.3-.4-2 0-2.2 1.7-4 3.9-4 1.7 0 3 1.1 3.6 2.5.2.4.3 1 .3 1.6 0 .5-.1.9-.3 1.3l-1-.9c.1-.2.2-.4.2-.7 0-.7-.5-1.4-1.4-1.4-1.1 0-1.9 1.1-1.9 2.4 0 1.2.6 2.1 1.7 2.1.8 0 1.5-.5 1.8-1.3l1.1.5c-.6 1.6-2.1 2.6-4.6 2.6z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// ==========================================
// OFFICIAL TECHNOLOGY BRAND ICONS
// ==========================================

export function ReactIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return <SiReact className={className} style={{ color: "#61DAFB", ...style }} {...props} />;
}

export function TailwindIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return <SiTailwindcss className={className} style={{ color: "#06B6D4", ...style }} {...props} />;
}

export function HtmlIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return <SiHtml5 className={className} style={{ color: "#E34F26", ...style }} {...props} />;
}

export function CssIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return <FaCss3Alt className={className} style={{ color: "#1572B6", ...style }} {...props} />;
}

export function JavascriptIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return <SiJavascript className={className} style={{ color: "#F7DF1E", ...style }} {...props} />;
}

export function ExpressIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return <SiExpress className={className} style={{ color: "#181717", ...style }} {...props} />;
}

export function PythonIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return <SiPython className={className} style={{ color: "#3776AB", ...style }} {...props} />;
}

export function CplusplusIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return <SiCplusplus className={className} style={{ color: "#00599C", ...style }} {...props} />;
}

export function NodejsIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return <SiNodedotjs className={className} style={{ color: "#339933", ...style }} {...props} />;
}

export function GoogleStitchIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return <SiGoogle className={className} style={{ color: "#4285F4", ...style }} {...props} />;
}

export function FigmaIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return <SiFigma className={className} style={{ color: "#F24E1E", ...style }} {...props} />;
}

export function MysqlIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return <SiMysql className={className} style={{ color: "#4479A1", ...style }} {...props} />;
}

export function MongodbIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return <SiMongodb className={className} style={{ color: "#47A248", ...style }} {...props} />;
}

export function JenkinsIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return <SiJenkins className={className} style={{ color: "#D24939", ...style }} {...props} />;
}

export function GitIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return <SiGit className={className} style={{ color: "#F05032", ...style }} {...props} />;
}

export function GithubIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return <SiGithub className={className} style={{ color: "#181717", ...style }} {...props} />;
}

export function DockerIcon({ className = "h-6 w-6 shrink-0", style, ...props }: IconProps) {
  return <SiDocker className={className} style={{ color: "#2496ED", ...style }} {...props} />;
}

// ==========================================
// DYNAMIC LOOKUP MAP
// ==========================================

export const techIconMap: Record<string, React.FC<IconProps>> = {
  // Frontend
  React: ReactIcon,
  "Tailwind CSS": TailwindIcon,
  HTML: HtmlIcon,
  CSS: CssIcon,
  JavaScript: JavascriptIcon,

  // Backend
  "Express.js": ExpressIcon,
  Python: PythonIcon,
  "C++": CplusplusIcon,
  "Node.js": NodejsIcon,

  // Design
  "Google Stitch": GoogleStitchIcon,
  Figma: FigmaIcon,
  Canva: CanvaIcon,

  // Database
  MySQL: MysqlIcon,
  MongoDB: MongodbIcon,

  // Tools & DevOps
  Jenkins: JenkinsIcon,
  Git: GitIcon,
  GitHub: GithubIcon,
  Docker: DockerIcon,
};