"use client";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FloatingShapes from "@/components/FloatingShapes";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiRedis,
  SiPrisma,
  SiDocker,
  SiAdonisjs,
  SiGit,
  SiFirebase,
  SiGraphql,
  SiPython,
  SiFigma,
} from "react-icons/si";

interface Skill {
  icon: React.ReactNode;
  label: string;
  color: string;
  category: "frontend" | "backend" | "database" | "tools" | "other";
}

const skillIcons: Skill[] = [
  // ── Frontend ──
  {
    icon: <SiHtml5 size={100} />,
    label: "HTML5",
    color: "text-orange-500",
    category: "frontend",
  },
  {
    icon: <SiCss3 size={100} />,
    label: "CSS3",
    color: "text-blue-500",
    category: "frontend",
  },
  {
    icon: <SiTailwindcss size={100} />,
    label: "Tailwind CSS",
    color: "text-cyan-400",
    category: "frontend",
  },
  {
    icon: <SiJavascript size={100} />,
    label: "JavaScript",
    color: "text-yellow-400",
    category: "frontend",
  },
  {
    icon: <SiTypescript size={100} />,
    label: "TypeScript",
    color: "text-blue-500",
    category: "frontend",
  },
  {
    icon: <SiReact size={100} />,
    label: "React",
    color: "text-sky-400",
    category: "frontend",
  },
  {
    icon: <SiNextdotjs size={100} />,
    label: "Next.js",
    color: "text-white",
    category: "frontend",
  },
  {
    icon: <SiRedux size={100} />,
    label: "Redux",
    color: "text-purple-500",
    category: "frontend",
  },
  {
    icon: <SiFigma size={100} />,
    label: "Figma",
    color: "text-pink-400",
    category: "frontend",
  },
  // ── Backend ──
  {
    icon: <SiNodedotjs size={100} />,
    label: "Node.js",
    color: "text-green-600",
    category: "backend",
  },
  {
    icon: <SiExpress size={100} />,
    label: "Express",
    color: "text-white",
    category: "backend",
  },
  {
    icon: <SiAdonisjs size={100} />,
    label: "AdonisJS",
    color: "text-indigo-400",
    category: "backend",
  },
  {
    icon: <SiGraphql size={100} />,
    label: "GraphQL",
    color: "text-pink-500",
    category: "backend",
  },
  {
    icon: <SiPython size={100} />,
    label: "Python",
    color: "text-yellow-300",
    category: "backend",
  },
  // ── Database ──
  {
    icon: <SiMongodb size={100} />,
    label: "MongoDB",
    color: "text-green-500",
    category: "database",
  },
  {
    icon: <SiPostgresql size={100} />,
    label: "PostgreSQL",
    color: "text-blue-400",
    category: "database",
  },
  {
    icon: <SiRedis size={100} />,
    label: "Redis",
    color: "text-red-600",
    category: "database",
  },
  {
    icon: <SiMongoose size={100} />,
    label: "Mongoose",
    color: "text-red-500",
    category: "database",
  },
  {
    icon: <SiPrisma size={100} />,
    label: "Prisma",
    color: "text-gray-300",
    category: "database",
  },
  // ── Tools & DevOps ──
  {
    icon: <SiDocker size={100} />,
    label: "Docker",
    color: "text-blue-500",
    category: "tools",
  },
  {
    icon: <SiFirebase size={100} />,
    label: "Firebase",
    color: "text-yellow-500",
    category: "tools",
  },
  {
    icon: <SiGit size={100} />,
    label: "Git",
    color: "text-orange-600",
    category: "tools",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools & DevOps" },
] as const;

const categoryGradients: Record<string, string> = {
  frontend: "from-blue-500 to-cyan-500",
  backend: "from-green-500 to-emerald-500",
  database: "from-purple-500 to-pink-500",
  tools: "from-orange-500 to-red-500",
};

// ── Background Illustrations ──
function SkillsBackgroundArt() {
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

      {/* Concentric tech rings */}
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={`ring-${ring}`}
          className="absolute left-1/2 -translate-x-1/2 rounded-full border"
          style={{
            width: 80 + ring * 90,
            height: 80 + ring * 90,
            top: `${40 + ring * 12}%`,
            borderColor:
              ring % 2 === 0
                ? "rgba(96,165,250,0.07)"
                : "rgba(192,132,252,0.05)",
            borderStyle: "dashed",
            borderWidth: "1px",
          }}
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 25 + ring * 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating tech dots */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${6 + ((i * 21 + 9) % 88)}%`,
            top: `${5 + ((i * 15 + 3) % 90)}%`,
          }}
        >
          <motion.div
            className={`w-1.5 h-1.5 rounded-full ${
              i % 3 === 0
                ? "bg-blue-400/25"
                : i % 3 === 1
                  ? "bg-purple-400/20"
                  : "bg-cyan-400/20"
            }`}
            animate={{ opacity: [0.1, 0.45, 0.1], scale: [1, 1.5, 1] }}
            transition={{
              duration: 2.5 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* Dashed connection arcs */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <path
          d="M 100 200 Q 400 100 600 250 T 1100 200"
          stroke="rgba(96,165,250,0.3)"
          strokeWidth="0.6"
          strokeDasharray="4 6"
          fill="none"
        />
        <path
          d="M 150 450 Q 350 350 600 500 T 1050 450"
          stroke="rgba(192,132,252,0.25)"
          strokeWidth="0.6"
          strokeDasharray="4 6"
          fill="none"
        />
        <path
          d="M 200 700 Q 500 600 700 700 T 1000 680"
          stroke="rgba(96,165,250,0.15)"
          strokeWidth="0.5"
          strokeDasharray="4 6"
          fill="none"
        />
      </svg>

      {/* Small floating sparkle crosses */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`sp-${i}`}
          className="absolute"
          style={{
            left: `${20 + ((i * 29 + 7) % 60)}%`,
            top: `${15 + ((i * 19 + 11) % 70)}%`,
          }}
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
              rotate: [0, 180, 360],
              opacity: [0.15, 0.45, 0.15],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          >
            <svg width="8" height="8" viewBox="0 0 8 8" className="opacity-35">
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

const SkillsCard = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const filtered =
    activeCategory === "all"
      ? skillIcons
      : skillIcons.filter((s) => s.category === activeCategory);

  return (
    <section className="relative bg-gradient-to-b from-[#000000] to-[#040f4a] py-16 md:py-24 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

      {/* ── Background Illustration ── */}
      <SkillsBackgroundArt />

      {/* ── Floating Illustrations ── */}
      <FloatingShapes count={10} speed="slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3"
        >
          My Tech Stack
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4"
        >
          Technologies{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            I Use
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/50 text-base max-w-xl mx-auto mb-8"
        >
          A curated collection of tools and frameworks I work with daily to
          build modern, production-ready applications.
        </motion.p>

        {/* ── Category Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* ── Desktop: Infinite Scrolling Carousel ── */}
        {activeCategory === "all" && (
          <div className="hidden lg:block overflow-hidden relative">
            <motion.div
              className="flex gap-4"
              animate={controls}
              initial={{ x: "0%" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              onHoverStart={() => {
                setIsHovered(true);
                controls.stop();
              }}
              onHoverEnd={() => {
                setIsHovered(false);
                controls.start({ x: ["0%", "-100%"] });
              }}
            >
              {[...skillIcons, ...skillIcons, ...skillIcons].map(
                (skill, index) => (
                  <motion.div
                    key={index}
                    className="relative flex flex-col items-center justify-center bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] p-6 rounded-2xl min-w-[160px] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group"
                    animate={{
                      y: [0, -12, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: (index % skillIcons.length) * 0.15,
                    }}
                  >
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: -8 }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-lg text-xs text-white whitespace-nowrap shadow-xl"
                      >
                        {skill.label}
                      </motion.div>
                    )}
                    <div
                      className={`${skill.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      {skill.icon}
                    </div>
                    <h3 className="text-base text-white/70 font-medium mt-3 group-hover:text-white transition-colors">
                      {skill.label}
                    </h3>
                  </motion.div>
                ),
              )}
            </motion.div>
          </div>
        )}

        {/* ── Filtered Grid (Desktop & Mobile) ── */}
        <div className={`${activeCategory === "all" ? "lg:hidden" : ""}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {filtered.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] p-5 rounded-xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group"
                >
                  {/* Category indicator dot */}
                  <span
                    className={`w-1.5 h-1.5 rounded-full mb-2 bg-gradient-to-r ${
                      categoryGradients[skill.category] ||
                      "from-gray-500 to-gray-500"
                    }`}
                  />
                  <div
                    className={`${skill.color} mb-2 transition-transform duration-300 group-hover:scale-110`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-sm sm:text-base text-white/70 font-medium group-hover:text-white transition-colors">
                    {skill.label}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Bottom Stats Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 inline-flex flex-wrap items-center justify-center gap-6 md:gap-10 px-8 py-4 bg-white/[0.03] border border-white/[0.06] rounded-2xl"
        >
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{skillIcons.length}</p>
            <p className="text-xs text-white/40 uppercase tracking-wider">
              Technologies
            </p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white">
              {categories.length - 1}
            </p>
            <p className="text-xs text-white/40 uppercase tracking-wider">
              Categories
            </p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white">3+</p>
            <p className="text-xs text-white/40 uppercase tracking-wider">
              Years Exp.
            </p>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white">100%</p>
            <p className="text-xs text-white/40 uppercase tracking-wider">
              Client Satisfaction
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsCard;
