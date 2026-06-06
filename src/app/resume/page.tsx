"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  HiAcademicCap,
  HiBriefcase,
  HiCode,
  HiUser,
  HiStar,
  HiBadgeCheck,
} from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import ResumeDownloader from "./resumeDownloader";

// ── Sections Configuration ──
const sections = [
  { id: "summary", label: "Summary", icon: <HiUser size={16} /> },
  { id: "experience", label: "Experience", icon: <HiBriefcase size={16} /> },
  { id: "education", label: "Education", icon: <HiAcademicCap size={16} /> },
  { id: "skills", label: "Skills", icon: <HiCode size={16} /> },
  {
    id: "certifications",
    label: "Certifications",
    icon: <HiBadgeCheck size={16} />,
  },
  { id: "languages", label: "Languages", icon: <HiStar size={16} /> },
];

// ── Resume Data ──
const resumeData = {
  summary:
    "Passionate full-stack web developer with 3+ years of experience building scalable, high-performance web applications. Proficient in React, Next.js, Node.js, TypeScript, and MongoDB. Strong problem-solving abilities and a commitment to writing clean, maintainable code that drives business growth.",
  experience: [
    {
      role: "Software Engineer",
      company: "XYZ Corp.",
      period: "Jan 2021 - Present",
      location: "Remote",
      points: [
        "Developed and maintained scalable web applications using React, Next.js, and Node.js serving 10k+ daily users.",
        "Architected RESTful APIs and GraphQL endpoints, reducing data fetch times by 40%.",
        "Led a team of 3 junior developers, conducting code reviews and mentoring best practices.",
        "Implemented CI/CD pipelines with GitHub Actions, cutting deployment time by 60%.",
        "Optimized database queries and introduced caching strategies, improving page load speed by 35%.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "ABC Ltd.",
      period: "Jun 2019 - Dec 2020",
      location: "Bogura, Bangladesh",
      points: [
        "Built responsive, mobile-first user interfaces with React, TypeScript, and Tailwind CSS.",
        "Integrated third-party APIs (Stripe, Google Maps) ensuring seamless data exchange.",
        "Improved accessibility scores from 68 to 96, meeting WCAG 2.1 AA standards.",
        "Reduced bundle size by 25% through code splitting and lazy loading techniques.",
      ],
    },
  ],
  education: [
    {
      degree: "BBA in Marketing",
      institution: "Govt. Azizul Haque College, Bogura",
      period: "2024 - Present",
      details: "1st Year Honours",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Ahmed Uddin Shah Shishu Niketan School & College",
      period: "2022 - 2024",
      details: "Science Division",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs", "GraphQL", "WebSockets"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "Redis", "Prisma", "Mongoose"],
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "Docker", "CI/CD", "Vercel", "Netlify", "AWS"],
    },
  ],
  certifications: [
    { title: "Meta Front-End Developer", issuer: "Coursera", year: "2024" },
    { title: "Node.js & Express Masterclass", issuer: "Udemy", year: "2023" },
    {
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      year: "2023",
    },
  ],
  languages: [
    { name: "Bengali", level: "Native", proficiency: 100 },
    { name: "English", level: "Professional Working", proficiency: 80 },
    { name: "Hindi", level: "Conversational", proficiency: 60 },
  ],
};

export default function Resume() {
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [activeSection, setActiveSection] = useState("summary");
  const [scrolled, setScrolled] = useState(false);

  // ── Scroll Spy (Intersection Observer) ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -50% 0px", threshold: 0 },
    );

    sections.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ── Track scroll for side nav visibility ──
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Print / PDF ──
  // const handlePrint = () => window.print();

  // ── Scroll to section ──
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#000000] via-[#020a3a] to-[#040f4a]">
      {/* Ambient glows */}
      <div className="fixed top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />
      <div className="fixed bottom-[20%] right-[5%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

      {/* ── Side Navigation (appears on scroll) ── */}
      <motion.nav
        initial={{ opacity: 0, x: -80 }}
        animate={scrolled ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      >
        <div className="flex flex-col gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-xl">
          {sections.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeSection === id
                  ? "bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-white shadow-lg"
                  : "text-white/40 hover:text-white/70 hover:bg-white/5"
              }`}
            >
              <span className="shrink-0">{icon}</span>
              <span className="sr-only xl:not-sr-only xl:inline">{label}</span>

              {/* Tooltip for collapsed state */}
              <span className="absolute left-full ml-3 px-3 py-1.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none xl:hidden">
                {label}
              </span>

              {/* Active indicator bar */}
              {activeSection === id && (
                <motion.span
                  layoutId="activeNavPill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* ── Mobile Section Indicator ── */}
      <div className="lg:hidden fixed top-20 left-0 right-0 z-40 px-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={scrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-1 flex overflow-x-auto gap-1 shadow-xl"
        >
          {sections.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                activeSection === id
                  ? "bg-blue-600/30 text-white"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              {icon}
              {label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* ── Main Content ── */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Header Card */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 mb-8 shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                Hasan Emam
              </h1>
              <p className="text-blue-400 font-semibold text-lg mt-1">
                Full-Stack Web Developer
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-white/50 text-sm">
                <span className="flex items-center gap-1.5">
                  <FiMail size={14} />
                  hasanimam0854@gmail.com
                </span>
                <span className="flex items-center gap-1.5">
                  <FiPhone size={14} />
                  01717680772
                </span>
                <span className="flex items-center gap-1.5">
                  📍 Bogura, Bangladesh
                </span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://github.com/hasanemam1717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm text-white/70 hover:text-white transition-all"
                >
                  <FiGithub size={16} />
                  GitHub
                </a>
                <a
                  href="www.linkedin.com/in/hasanemam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm text-white/70 hover:text-white transition-all"
                >
                  <FiLinkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <ResumeDownloader />
            </div>
          </div>
        </motion.div>

        {/* ── Resume Body ── */}
        <div ref={contentRef} className="space-y-6">
          {/* Summary */}
          <SectionCard
            id="summary"
            icon={<HiUser size={22} />}
            title="Summary"
            refs={sectionRefs}
          >
            <p className="text-white/70 leading-relaxed text-base">
              {resumeData.summary}
            </p>
          </SectionCard>

          {/* Experience */}
          <SectionCard
            id="experience"
            icon={<HiBriefcase size={22} />}
            title="Experience"
            refs={sectionRefs}
          >
            <div className="space-y-6">
              {resumeData.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l-2 border-blue-500/30 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-[#040f4a]" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <span className="text-xs text-blue-300/70 font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-blue-300/70 font-medium mb-2">
                    {exp.company} &middot; {exp.location}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-white/60"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400/60 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </SectionCard>

          {/* Education */}
          <SectionCard
            id="education"
            icon={<HiAcademicCap size={22} />}
            title="Education"
            refs={sectionRefs}
          >
            <div className="space-y-5">
              {resumeData.education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l-2 border-purple-500/30"
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-purple-500 border-2 border-[#040f4a]" />
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <p className="text-sm text-purple-300/70 font-medium">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-white/50">
                    <span>{edu.period}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{edu.details}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionCard>

          {/* Skills */}
          <SectionCard
            id="skills"
            icon={<HiCode size={22} />}
            title="Skills"
            refs={sectionRefs}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {resumeData.skills.map((group, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-4 border border-white/5"
                >
                  <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-3">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 text-xs font-medium text-white/80 bg-white/5 rounded-lg border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionCard>

          {/* Certifications */}
          <SectionCard
            id="certifications"
            icon={<HiBadgeCheck size={22} />}
            title="Certifications"
            refs={sectionRefs}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {resumeData.certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/[0.08] transition-colors"
                >
                  <HiBadgeCheck className="text-blue-400 mb-2" size={24} />
                  <h3 className="text-sm font-semibold text-white">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-white/50 mt-1">
                    {cert.issuer} &middot; {cert.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </SectionCard>

          {/* Languages */}
          <SectionCard
            id="languages"
            icon={<HiStar size={22} />}
            title="Languages"
            refs={sectionRefs}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {resumeData.languages.map((lang, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm font-semibold text-white">
                    {lang.name}
                  </h3>
                  <p className="text-xs text-white/50 mb-2">{lang.level}</p>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionCard>

          {/* Bottom spacer for side nav */}
          <div className="h-8" />
        </div>

        {/* Print-only styles */}
        <style jsx global>{`
          @media print {
            body {
              background: white !important;
              color: black !important;
            }
            nav,
            button,
            .no-print {
              display: none !important;
            }
            .print-content {
              background: white !important;
              color: black !important;
              border: none !important;
              box-shadow: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

// ── Section Card Wrapper ──
function SectionCard({
  id,
  icon,
  title,
  children,
  refs,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  refs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
}) {
  return (
    <motion.div
      ref={(el) => {
        refs.current[id] = el;
      }}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow print-content"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400">
          {icon}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}
