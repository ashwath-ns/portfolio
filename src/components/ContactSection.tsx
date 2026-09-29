import { Mail, ExternalLink } from "lucide-react";
import {
  SiGithub,
  SiInstagram,
  SiFacebook,
  SiX,
  SiYoutube,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

interface ContactSectionProps {
  onNavigate?: (hash: string) => void;
}

export default function ContactSection({ onNavigate: _onNavigate }: ContactSectionProps) {
  // Social links configuration - easily editable in one object
  const socialLinks = {
    instagram: "https://www.instagram.com/ashwath_ns",
    facebook: "https://www.facebook.com/share/1DhqxEJuS/",
    twitter: "https://x.com/Ashwath_ns",
    youtube: "#",
  };

  const contactCards = [
    {
      title: "Email",
      detail: "ashwathns165@gmail.com",
      href: "mailto:ashwathns165@gmail.com",
      isExternal: false,
      icon: (
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
          <Mail className="h-5 w-5" />
        </div>
      ),
    },
    {
      title: "GitHub",
      detail: "github.com/ashwath-ns",
      href: "https://github.com/ashwath-ns",
      isExternal: true,
      icon: (
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-200">
          <SiGithub className="h-5 w-5" />
        </div>
      ),
    },
    {
      title: "LinkedIn",
      detail: "linkedin.com/in/ashwath-ns",
      href: "https://www.linkedin.com/in/ashwath-ns",
      isExternal: true,
      icon: (
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-[#0A66C2] transition-colors group-hover:bg-blue-100">
          <FaLinkedin className="h-6 w-6 rounded-[3px] bg-white text-[#0A66C2]" />
        </div>
      ),
    },
  ];

  const socialItems = [
    {
      name: "Instagram",
      href: socialLinks.instagram,
      ariaLabel: "Follow on Instagram",
      icon: (
        <SiInstagram
          className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
          style={{ fill: "url(#instagram-gradient)" }}
        />
      ),
    },
    {
      name: "Facebook",
      href: socialLinks.facebook,
      ariaLabel: "Follow on Facebook",
      icon: (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform duration-200 group-hover:scale-110">
          <SiFacebook className="h-3.5 w-3.5" />
        </span>
      ),
    },
    {
      name: "X (Twitter)",
      href: socialLinks.twitter,
      ariaLabel: "Follow on X",
      icon: (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-200 group-hover:scale-110">
          <SiX className="h-3.5 w-3.5" />
        </span>
      ),
    },
    {
      name: "YouTube",
      href: socialLinks.youtube,
      ariaLabel: "Follow on YouTube",
      icon: (
        <SiYoutube className="h-5 w-5 text-[#FF0000] transition-transform duration-200 group-hover:scale-110" />
      ),
    },
  ];

  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden bg-white/70 pt-20 pb-10 transition-colors sm:pt-28"
    >
      {/* Hidden SVG def for Instagram colorful brand gradient */}
      <svg
        width="0"
        height="0"
        className="absolute -z-10 h-0 w-0 opacity-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="instagram-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#fdf497" offset="0%" />
            <stop stopColor="#fdf497" offset="5%" />
            <stop stopColor="#fd5949" offset="45%" />
            <stop stopColor="#d6249f" offset="60%" />
            <stop stopColor="#285AEB" offset="90%" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle soft background glows matching reference design */}
      <div className="pointer-events-none absolute -left-20 top-12 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/20" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-sky-100/40 blur-3xl dark:bg-sky-900/20" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        {/* Top Header */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-blue-400/60" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
              CONTACT
            </span>
            <span className="h-px w-8 bg-blue-400/60" />
          </div>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Let&apos;s <span className="text-blue-600">connect.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Have a project, opportunity, or just want to say hello?
            <br className="hidden sm:block" />
            I&apos;d be happy to hear from you.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 sm:mt-14 sm:gap-6">
          {contactCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.isExternal ? "_blank" : undefined}
              rel={card.isExternal ? "noopener noreferrer" : undefined}
              className="group relative flex flex-col justify-between rounded-2xl border border-blue-100/80 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_28px_rgba(37,99,235,0.08)] active:translate-y-0"
            >
              {/* Card Icon */}
              <div className="mb-6">{card.icon}</div>

              {/* Title, Detail and External Link icon */}
              <div className="flex items-end justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {card.title}
                  </h3>
                  <p className="mt-0.5 truncate text-sm font-normal text-slate-500">
                    {card.detail}
                  </p>
                </div>
                <div className="shrink-0 pb-0.5">
                  <ExternalLink className="h-4 w-4 text-slate-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Follow Us Section */}
        <div className="mt-14 text-center sm:mt-16">
          <h3 className="text-sm font-bold text-slate-800 tracking-tight sm:text-base">
            Follow Us
          </h3>

          <div className="mt-4 flex items-center justify-center gap-3 sm:mt-5 sm:gap-4">
            {socialItems.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-100 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-slate-200 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] active:translate-y-0 sm:h-12 sm:w-12"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Clean bottom line & whitespace */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-8 text-xs text-slate-500 sm:mt-20 sm:flex-row sm:text-sm">
          <p>© 2026 Ashwath NS · Built with React & Tailwind CSS</p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#privacy"
              className="transition-colors hover:text-slate-800"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="transition-colors hover:text-slate-800"
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="transition-colors hover:text-slate-800"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
