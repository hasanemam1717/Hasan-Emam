"use client";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { HiRocketLaunch } from "react-icons/hi2";
import { projects } from "@/data/projects";
import FloatingShapes from "@/components/FloatingShapes";

// ── Branch colors ──
const branchColors = [
  {
    accent: "from-blue-500 to-cyan-400",
    dot: "rgba(96,165,250,0.6)",
    glow: "bg-blue-500/30",
  },
  {
    accent: "from-purple-500 to-pink-400",
    dot: "rgba(192,132,252,0.6)",
    glow: "bg-purple-500/30",
  },
  {
    accent: "from-emerald-500 to-teal-400",
    dot: "rgba(52,211,153,0.6)",
    glow: "bg-emerald-500/30",
  },
];

// ── Rocket ──
function TimelineRocket({ progress }: { progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], ["4%", "94%"]);
  return (
    <motion.div
      className="absolute left-0 z-20 pointer-events-none"
      style={{ top: y }}
    >
      <motion.div
        className="relative flex flex-col items-center"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-1.5 h-3 sm:w-2 sm:h-4 bg-gradient-to-t from-blue-400 to-cyan-300 rounded-t-full" />
        <div className="w-5 h-10 sm:w-6 sm:h-12 bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-blue-600/40 backdrop-blur-sm border-l border-r border-blue-400/30 rounded-sm relative">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400/30 border border-cyan-400/40">
            <motion.div
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400/60 m-auto mt-[1px]"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
        </div>
        <div className="absolute -left-3 top-3 sm:-left-4 sm:top-4">
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            className="opacity-50"
          >
            <path
              d="M 10 0 L 2 5 L 2 12 L 10 10 Z"
              fill="rgba(96,165,250,0.3)"
              stroke="rgba(96,165,250,0.2)"
              strokeWidth="0.5"
            />
          </svg>
        </div>
        <div className="absolute -right-3 top-3 sm:-right-4 sm:top-4">
          <svg
            width="10"
            height="14"
            viewBox="0 0 10 14"
            className="opacity-50"
          >
            <path
              d="M 0 0 L 8 5 L 8 12 L 0 10 Z"
              fill="rgba(192,132,252,0.3)"
              stroke="rgba(192,132,252,0.2)"
              strokeWidth="0.5"
            />
          </svg>
        </div>
        <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-gradient-to-b from-gray-500/40 to-gray-600/30 rounded-b-sm" />
        <motion.div
          className="relative"
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 20"
            className="overflow-visible"
          >
            <path
              d="M 7 0 Q 12 7 10 14 Q 8 20 7 18 Q 6 20 4 14 Q 2 7 7 0 Z"
              fill="url(#rf-outer)"
              opacity="0.5"
            />
            <motion.path
              d="M 7 2 Q 10 7 9 12 Q 8 16 7 14 Q 6 16 5 12 Q 4 7 7 2 Z"
              fill="url(#rf-inner)"
              animate={{
                d: [
                  "M 7 2 Q 10 7 9 12 Q 8 16 7 14 Q 6 16 5 12 Q 4 7 7 2 Z",
                  "M 7 1 Q 11 7 10 13 Q 9 18 7 15 Q 5 18 4 13 Q 3 7 7 1 Z",
                  "M 7 2 Q 10 7 9 12 Q 8 16 7 14 Q 6 16 5 12 Q 4 7 7 2 Z",
                ],
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <defs>
              <linearGradient id="rf-outer" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="40%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
              <linearGradient id="rf-inner" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{
              background: i % 2 === 0 ? "#fbbf24" : "#f97316",
              top: `${18 + i * 5}px`,
              left: `${i % 2 === 0 ? -6 - i * 2 : 6 + i * 2}px`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, 6, 12],
              x: [0, i % 2 === 0 ? -3 : 3, 0],
            }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.12 }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

// ── Background Illustrations ──
function BackgroundArt() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Grid dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Large orbital rings */}
      {[0, 1, 2, 3].map((ring) => (
        <motion.div
          key={`ring-${ring}`}
          className="absolute left-1/2 -translate-x-1/2 rounded-full border"
          style={{
            width: 60 + ring * 80,
            height: 60 + ring * 80,
            top: `${35 + ring * 15}%`,
            borderColor:
              ring % 2 === 0
                ? "rgba(96,165,250,0.06)"
                : "rgba(192,132,252,0.05)",
            borderStyle: "dashed",
            borderWidth: "1px",
          }}
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 30 + ring * 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Tech node dots scattered */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${8 + ((i * 19 + 3) % 84)}%`,
            top: `${4 + ((i * 13 + 7) % 90)}%`,
          }}
        >
          <motion.div
            className={`w-1.5 h-1.5 rounded-full ${
              i % 3 === 0
                ? "bg-blue-400/30"
                : i % 3 === 1
                  ? "bg-purple-400/25"
                  : "bg-emerald-400/20"
            }`}
            animate={{ opacity: [0.1, 0.5, 0.1], scale: [1, 1.6, 1] }}
            transition={{
              duration: 2.5 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* Dashed connection lines between nodes */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.025]"
        viewBox="0 0 1200 900"
        preserveAspectRatio="none"
      >
        <path
          d="M 200 150 Q 400 100 600 200 T 1000 150"
          stroke="rgba(96,165,250,0.3)"
          strokeWidth="0.6"
          strokeDasharray="4 6"
          fill="none"
        />
        <path
          d="M 150 400 Q 350 350 600 450 T 1050 400"
          stroke="rgba(192,132,252,0.25)"
          strokeWidth="0.6"
          strokeDasharray="4 6"
          fill="none"
        />
        <path
          d="M 180 650 Q 400 600 600 700 T 1020 650"
          stroke="rgba(96,165,250,0.2)"
          strokeWidth="0.6"
          strokeDasharray="4 6"
          fill="none"
        />
        <path
          d="M 100 250 Q 300 200 500 300"
          stroke="rgba(96,165,250,0.12)"
          strokeWidth="0.4"
          strokeDasharray="2 5"
          fill="none"
        />
        <path
          d="M 1100 200 Q 900 150 700 250"
          stroke="rgba(192,132,252,0.12)"
          strokeWidth="0.4"
          strokeDasharray="2 5"
          fill="none"
        />
      </svg>

      {/* Floating cross sparkles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute"
          style={{
            left: `${15 + ((i * 31 + 11) % 70)}%`,
            top: `${12 + ((i * 23 + 5) % 76)}%`,
          }}
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
          >
            <svg width="8" height="8" viewBox="0 0 8 8" className="opacity-40">
              <line
                x1="4"
                y1="0"
                x2="4"
                y2="8"
                stroke={
                  i % 2 === 0 ? "rgba(96,165,250,0.5)" : "rgba(192,132,252,0.4)"
                }
                strokeWidth="0.6"
              />
              <line
                x1="0"
                y1="4"
                x2="8"
                y2="4"
                stroke={
                  i % 2 === 0 ? "rgba(96,165,250,0.5)" : "rgba(192,132,252,0.4)"
                }
                strokeWidth="0.6"
              />
            </svg>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

// ── Main Component ──
const ProjectsBar = () => {
  const featuredProjects = projects.slice(0, 3);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rocketProgress = useTransform(
    scrollYProgress,
    [0, 0.15, 0.8, 1],
    [0, 0, 1, 1],
  );
  const glowTop = useTransform(rocketProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#000000] to-[#040f4a] py-16 md:py-24 overflow-hidden"
    >
      <div className="absolute top-[5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />
      <FloatingShapes count={6} speed="slow" />
      <BackgroundArt />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3 flex items-center justify-center gap-2"
          >
            <motion.span
              animate={{ rotate: [0, -8, 0, 8, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <HiRocketLaunch className="text-base" />
            </motion.span>
            My Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
          >
            Project{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Timeline
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-white/60 max-w-xl mx-auto"
          >
            A journey through the projects I&apos;ve built — each one a
            milestone of growth and impact.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-10 sm:pl-14 md:pl-20">
          {/* Vertical dashed line */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-10 flex justify-center">
            <svg
              className="h-full"
              width="3"
              viewBox="0 0 3 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="tl-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(96,165,250,0.6)" />
                  <stop offset="50%" stopColor="rgba(192,132,252,0.5)" />
                  <stop offset="100%" stopColor="rgba(96,165,250,0.2)" />
                </linearGradient>
              </defs>
              <line
                x1="1.5"
                y1="0"
                x2="1.5"
                y2="100"
                stroke="url(#tl-grad)"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
            </svg>
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-3 h-28 rounded-full bg-gradient-to-b from-blue-400/15 via-purple-400/10 to-transparent blur-md"
              style={{ top: glowTop }}
            />
          </div>

          {/* Rocket */}
          <TimelineRocket progress={rocketProgress} />

          {/* Projects */}
          <div className="relative space-y-10 md:space-y-14">
            {featuredProjects.map((project, index) => {
              const colors = branchColors[index % branchColors.length];
              return (
                <div key={project.id} className="relative group">
                  {/* Dot on timeline */}
                  <div className="absolute -left-[38px] sm:-left-[54px] top-6 z-10">
                    <motion.div
                      className={`w-3.5 h-3.5 rounded-full ${colors.glow} blur-[2px]`}
                      animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className={`w-3.5 h-3.5 rounded-full bg-gradient-to-r ${colors.accent} border border-white/30 shadow-md`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, type: "spring" }}
                    >
                      <motion.div
                        className="w-1 h-1 rounded-full bg-white/80 m-auto mt-[4px]"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>

                  {/* Horizontal dashed connector */}
                  <div className="absolute left-[2px] sm:left-[6px] top-6">
                    <svg width="24" height="4" viewBox="0 0 24 4">
                      <line
                        x1="0"
                        y1="2"
                        x2="24"
                        y2="2"
                        stroke={colors.dot}
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="bg-white/[0.05] backdrop-blur-md border border-white/[0.1] rounded-xl p-5 sm:p-6 lg:p-7 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-400 group/card overflow-hidden shadow-lg"
                    >
                      <div className="flex flex-col md:flex-row gap-5 md:gap-8">
                        {/* Text */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2.5 mb-3">
                            <span
                              className={`inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br ${colors.accent} text-white text-xs font-bold shadow-md shrink-0`}
                            >
                              {index + 1}
                            </span>
                            <span className="px-2.5 py-1 text-[11px] font-semibold bg-blue-600/25 border border-blue-400/25 text-blue-300 rounded-full">
                              {project.category}
                            </span>
                            <span className="text-[11px] text-white/40">
                              {project.year}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-blue-400 group-hover/card:to-purple-400 transition-all">
                            {project.title}
                          </h3>
                          <p className="text-sm text-white/50 leading-relaxed mb-3 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {project.devStack.slice(0, 5).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-[10px] font-medium text-white/50 bg-white/5 border border-white/10 rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex flex-wrap items-center gap-2.5">
                            <Link
                              href={project.gitLink}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white/50 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-all"
                            >
                              <FiGithub size={13} /> GitHub
                            </Link>
                            <Link
                              href={project.link}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-blue-600/30 border border-blue-500/20 rounded-lg hover:bg-blue-600/50 transition-all"
                            >
                              <FiExternalLink size={13} /> Live Demo
                            </Link>
                            <Link
                              href={`/projects/${project.id}`}
                              className="inline-flex items-center gap-1 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                            >
                              Details <FiArrowRight size={12} />
                            </Link>
                          </div>
                        </div>
                        {/* Image */}
                        <div className="md:w-48 lg:w-56 shrink-0">
                          <div className="relative w-full h-28 sm:h-32 md:h-full md:min-h-[140px] rounded-lg overflow-hidden border border-white/[0.06]">
                            <Image
                              src={project.src}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-[#000000]/30 to-transparent" />
                          </div>
                        </div>
                      </div>
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${colors.accent} rounded-2xl opacity-0 group-hover/card:opacity-[0.04] blur-lg transition-opacity duration-400 -z-10`}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-10 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-purple-600/30 transition-all duration-300 group"
          >
            <span>Explore All Projects</span>
            <motion.span
              animate={{ x: [0, 3, 0], rotate: [0, -6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <HiRocketLaunch size={16} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsBar;
