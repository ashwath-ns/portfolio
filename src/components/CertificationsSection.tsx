import { motion } from "framer-motion";
import { ExternalLink, Calendar, Building2, FolderOpen } from "lucide-react";

import cert1Img from "@/assets/certificates/cert1.png";
import cert2Img from "@/assets/certificates/cert2.png";
import cert3Img from "@/assets/certificates/cert3.png";
import cert4Img from "@/assets/certificates/cert4.png";
import cert5Img from "@/assets/certificates/cert5.png";

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}

// Full certificates collection (easy to add and maintain)
const certificates: Certificate[] = [
  {
    title: "Git and GitHub for Developers",
    issuer: "Infosys Springboard",
    date: "August 2026",
    image: cert3Img,
    link: "#",
  },
  {
    title: "Web Development Training",
    issuer: "Merav Infotech, Mysuru",
    date: "October 2024",
    image: cert5Img,
    link: "#",
  },
  {
    title: "Learning Python",
    issuer: "Infosys Springboard",
    date: "July 2026",
    image: cert2Img,
    link: "#",
  },

  {
    title: "AI Tools Workshop",
    issuer: "SDM College, Ujire",
    date: "July 2026",
    image: cert1Img,
    link: "#",
  },
  {
    title: "NodeJS Case Study - Movie App",
    issuer: "Infosys Springboard",
    date: "September 2026",
    image: cert4Img,
    link: "#",
  },

];

// Google Drive folder URL containing all certificates
const certificatesDriveUrl =
  "https://drive.google.com/drive/folders/1Kmu94yGLY1TWHajOyaZRrF4an3YlABMt?usp=drive_link";

export default function CertificationsSection() {
  // Display exactly 3 featured certificates in the primary grid
  const featuredCertificates = certificates.slice(0, 3);

  return (
    <section
      id="certifications"
      className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24"
    >
      {/* Subtle background glow matching portfolio aesthetics */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
        <div className="h-[420px] w-[820px] rounded-full bg-blue-100/50 blur-[100px] opacity-70" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mx-auto mb-12 max-w-2xl text-center md:mb-14"
      >
        <div className="mb-4 inline-flex items-center justify-center gap-2">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-blue-600">
            Certifications
          </span>
          <span className="h-0.5 w-6 rounded-full bg-blue-600" />
        </div>

        <h2 className="text-3xl font-bold tracking-[-.045em] text-slate-950 sm:text-4xl md:text-5xl">
          Certifications &amp; Continuous{" "}
          <span className="text-blue-600">Learning.</span>
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          A collection of certifications, workshops, and achievements
          <br className="hidden sm:inline" /> I&apos;ve earned while developing
          my skills.
        </p>
      </motion.div>

      {/* Featured 3 Certificates Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredCertificates.map((cert, index) => (
          <motion.div
            key={cert.title + index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 sm:p-6"
          >
            {/* Top certificate preview */}
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-50/70 p-2.5">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate from ${cert.issuer}`}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Title & Metadata */}
              <h3 className="mt-5 text-lg font-bold text-slate-950 transition-colors duration-200 group-hover:text-blue-600 line-clamp-1">
                {cert.title}
              </h3>

              <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                <Building2 className="h-4 w-4 shrink-0 text-slate-400" />
                <span className="truncate">{cert.issuer}</span>
              </div>

              <div className="mt-1.5 flex items-center gap-2 text-sm text-slate-500">
                <Calendar className="h-4 w-4 shrink-0 text-slate-400" />
                <span>{cert.date}</span>
              </div>
            </div>

            {/* View Certificate Link */}
            <div className="mt-5 pt-2">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${cert.title} certificate`}
                className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                <span>View Certificate</span>
                <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Google Drive CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-12 flex justify-center sm:mt-14"
      >
        <a
          href={certificatesDriveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View all certificates in Google Drive folder"
          className="group inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-7 py-3.5 text-xs font-semibold tracking-wider text-white uppercase shadow-md shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/35 sm:px-8 sm:text-sm active:translate-y-0"
        >
          <FolderOpen className="h-4 w-4 text-blue-100 transition-transform duration-200 group-hover:scale-110" />
          <span>View All Certificates</span>
          <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </section>
  );
}
