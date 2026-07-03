"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail, FiCode } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDocker,
  SiExpress,
  SiRedux,
  SiGit,
} from "react-icons/si";
import FloatingShapes from "@/components/FloatingShapes";
import dp from "../assets/hasanEmam.png";

// ── Typewriter hook ──
function useTypewriter(
  words: string[],
  typingSpeed = 80,
  deleteSpeed = 50,
  pauseDuration = 2000,
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1),
          );
        },
        isDeleting ? deleteSpeed : typingSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [
    text,
    wordIndex,
    isDeleting,
    words,
    typingSpeed,
    deleteSpeed,
    pauseDuration,
  ]);

  return text;
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ── Floating particles ──
const Particles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 4,
  }));
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

// ── Tech Marquee ──
const techIcons = [
  { icon: SiReact, label: "React", color: "text-sky-400" },
  { icon: SiNextdotjs, label: "Next.js", color: "text-white" },
  { icon: SiTypescript, label: "TypeScript", color: "text-blue-500" },
  { icon: SiNodedotjs, label: "Node.js", color: "text-green-600" },
  { icon: SiTailwindcss, label: "Tailwind", color: "text-cyan-400" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "text-blue-700" },
  { icon: SiMongodb, label: "MongoDB", color: "text-green-500" },
];

// ── Hero Background Illustration ──
const HeroBackgroundArt = () => {
  const iconPositions = [
    {
      Icon: SiReact,
      x: 8,
      y: 15,
      size: 28,
      color: "text-sky-400/20",
      delay: 0,
    },
    {
      Icon: SiNextdotjs,
      x: 92,
      y: 20,
      size: 32,
      color: "text-white/15",
      delay: 0.3,
    },
    {
      Icon: SiTypescript,
      x: 85,
      y: 75,
      size: 24,
      color: "text-blue-500/20",
      delay: 0.6,
    },
    {
      Icon: SiNodedotjs,
      x: 12,
      y: 80,
      size: 26,
      color: "text-green-600/20",
      delay: 0.9,
    },
    {
      Icon: SiTailwindcss,
      x: 5,
      y: 45,
      size: 22,
      color: "text-cyan-400/20",
      delay: 1.2,
    },
    {
      Icon: SiPostgresql,
      x: 95,
      y: 50,
      size: 20,
      color: "text-blue-700/20",
      delay: 1.5,
    },
    {
      Icon: SiMongodb,
      x: 50,
      y: 5,
      size: 24,
      color: "text-green-500/20",
      delay: 1.8,
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Tech icon constellation */}
      {iconPositions.map(({ Icon, x, y, size, color, delay }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${x}%`, top: `${y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: delay + 0.5, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
            className={`${color} relative`}
          >
            <Icon size={size} />

            {/* Glow dot under each icon */}
            <motion.div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400/30"
              animate={{ opacity: [0, 0.8, 0], scale: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: delay }}
            />
          </motion.div>

          {/* Connection lines between icons */}
          {i < iconPositions.length - 1 && (
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              style={{ opacity: 0.06 }}
            >
              <line
                x1="0"
                y1="0"
                x2={iconPositions[i + 1].x - x > 0 ? 80 : -80}
                y2={iconPositions[i + 1].y - y > 0 ? 80 : -80}
                stroke="rgba(96,165,250,0.5)"
                strokeWidth="0.5"
                strokeDasharray="3 3"
              />
            </svg>
          )}
        </motion.div>
      ))}

      {/* Orbital ring - left */}
      <motion.div
        className="absolute top-[25%] left-[-5%] w-[300px] h-[300px] rounded-full border border-blue-400/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/40 shadow-lg shadow-blue-400/20"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Orbital ring - right */}
      <motion.div
        className="absolute bottom-[30%] right-[-8%] w-[250px] h-[250px] rounded-full border border-purple-400/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute top-1/2 right-0 w-2 h-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/40 shadow-lg shadow-purple-400/20"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      {/* Center-top decorative arc */}
      <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[400px] h-[100px]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 100"
          className="opacity-[0.04]"
        >
          <path
            d="M 50 100 Q 200 -20 350 100"
            fill="none"
            stroke="url(#hero-arc-grad)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <defs>
            <linearGradient
              id="hero-arc-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(96,165,250,0)" />
              <stop offset="50%" stopColor="rgba(96,165,250,0.8)" />
              <stop offset="100%" stopColor="rgba(192,132,252,0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="opacity-[0.03]"
        >
          <path
            d="M0 30 Q 180 0 360 30 T 720 30 T 1080 30 T 1440 30 V60 H0 Z"
            fill="rgba(96,165,250,0.3)"
          />
        </svg>
      </div>
    </div>
  );
};

// ── Orbital Skills Solar System ──
const orbitalRings = [
  {
    id: 1,
    size: 270,
    speed: 18,
    icons: [
      { Icon: SiHtml5, label: "HTML5", color: "text-orange-500", iconSize: 18 },
      { Icon: SiCss3, label: "CSS3", color: "text-blue-500", iconSize: 18 },
    ],
  },
  {
    id: 2,
    size: 325,
    speed: 25,
    icons: [
      {
        Icon: SiJavascript,
        label: "JS",
        color: "text-yellow-400",
        iconSize: 20,
      },
      { Icon: SiTypescript, label: "TS", color: "text-blue-500", iconSize: 20 },
      { Icon: SiReact, label: "React", color: "text-sky-400", iconSize: 22 },
    ],
  },
  {
    id: 3,
    size: 380,
    speed: 33,
    icons: [
      {
        Icon: SiNextdotjs,
        label: "Next.js",
        color: "text-white",
        iconSize: 20,
      },
      {
        Icon: SiNodedotjs,
        label: "Node.js",
        color: "text-green-600",
        iconSize: 22,
      },
      {
        Icon: SiMongodb,
        label: "MongoDB",
        color: "text-green-500",
        iconSize: 20,
      },
      { Icon: SiDocker, label: "Docker", color: "text-blue-500", iconSize: 20 },
    ],
  },
  {
    id: 4,
    size: 435,
    speed: 42,
    icons: [
      {
        Icon: SiTailwindcss,
        label: "Tailwind",
        color: "text-cyan-400",
        iconSize: 18,
      },
      {
        Icon: SiPostgresql,
        label: "PostgreSQL",
        color: "text-blue-700",
        iconSize: 18,
      },
      {
        Icon: SiExpress,
        label: "Express",
        color: "text-gray-300",
        iconSize: 18,
      },
      { Icon: SiRedux, label: "Redux", color: "text-purple-500", iconSize: 18 },
      { Icon: SiGit, label: "Git", color: "text-orange-600", iconSize: 18 },
    ],
  },
];

function OrbitalSkills() {
  return (
    <>
      {orbitalRings.map((ring) => {
        const radius = ring.size / 2;
        return (
          <div
            key={ring.id}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Dashed orbit ring path */}
            <motion.div
              className="absolute rounded-full border pointer-events-none"
              style={{
                width: ring.size,
                height: ring.size,
                borderColor: "rgba(96,165,250,0.18)",
                borderStyle: "dashed",
                borderWidth: "1.5px",
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: ring.speed,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Rotating container for icons */}
            <motion.div
              className="absolute"
              style={{
                width: ring.size,
                height: ring.size,
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: ring.speed,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {ring.icons.map((skill, i) => {
                const angle = (i / ring.icons.length) * Math.PI * 2;
                const x =
                  radius + radius * Math.cos(angle) - skill.iconSize / 2;
                const y =
                  radius + radius * Math.sin(angle) - skill.iconSize / 2;
                return (
                  <motion.div
                    key={skill.label}
                    className="absolute group"
                    style={{ left: x, top: y }}
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: ring.speed,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div
                      className={`${skill.color} transition-all duration-300 hover:scale-125`}
                    >
                      <skill.Icon size={skill.iconSize} />
                    </div>
                    {/* Tooltip label on hover */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-6 px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-xl border border-white/10 text-[9px] text-white/70 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      {skill.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        );
      })}
    </>
  );
}

const Hero = () => {
  const typedText = useTypewriter([
    "Full-Stack Developer",
    "UI/UX Enthusiast",
    "Open Source Contributor",
    "Tech Innovator",
  ]);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#000000] via-[#020a3a] to-[#040f4a] overflow-hidden flex items-center">
      {/* ── Particles Background ── */}
      <Particles />

      {/* ── Floating Geometric Shapes ── */}
      <FloatingShapes count={15} speed="slow" />

      {/* ── Creative Illustration Background ── */}
      <HeroBackgroundArt />

      {/* ── Ambient Background Glows ── */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      {/* ── Grid Dots Pattern Overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16"
        >
          {/* ── Left Content ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting Badge */}
            <motion.div
              variants={fadeItem}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for freelance work
            </motion.div>

            {/* Main Heading with Typewriter */}
            <motion.div variants={fadeItem}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Hasan Emam
                </span>
              </h1>
              <div className="mt-3 h-14 md:h-16 flex items-center justify-center lg:justify-start">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/80">
                  {typedText}
                  <span className="ml-1 inline-block w-[3px] h-[1em] bg-blue-400 animate-pulse" />
                </span>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeItem}
              className="mt-6 text-lg sm:text-xl text-white/60 max-w-xl lg:max-w-2xl leading-relaxed"
            >
              I build scalable, high-performance web applications with modern
              technologies — crafting seamless user experiences and robust
              backend systems that power dynamic digital products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeItem}
              className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-purple-600/30 transition-all duration-300"
              >
                View My Work
                <HiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/resume"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <HiDownload className="text-lg" />
                Download CV
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeItem}
              className="mt-8 flex items-center gap-5 justify-center lg:justify-start"
            >
              <span className="text-white/40 text-sm font-medium tracking-widest uppercase">
                Find me
              </span>
              <span className="w-8 h-px bg-white/20" />
              {[
                {
                  icon: <FiGithub size={20} />,
                  href: "https://github.com/hasanemam1717",
                  label: "GitHub",
                },
                {
                  icon: <FiLinkedin size={20} />,
                  href: "https://www.linkedin.com/in/hasanemam",
                  label: "LinkedIn",
                },
                {
                  icon: <FiMail size={20} />,
                  href: "mailto:hasanemam1717@gmail.com",
                  label: "Email",
                },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white/50 hover:text-blue-400 transition-colors duration-200 hover:-translate-y-0.5 transform"
                >
                  {icon}
                </a>
              ))}
            </motion.div>

            {/* Tech Stack Marquee */}
            <motion.div
              variants={fadeItem}
              className="mt-10 hidden lg:flex items-center gap-3 text-white/30 text-xs tracking-wider uppercase"
            >
              <FiCode size={14} />
              <span className="w-6 h-px bg-white/10" />
              <span className="font-medium">Tech stack I work with</span>
              <span className="w-6 h-px bg-white/10" />
              <div className="flex items-center gap-3 ml-2">
                {techIcons.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="group relative flex items-center gap-1.5"
                  >
                    <Icon
                      className={`${color} text-lg transition-transform group-hover:scale-125`}
                    />
                    <span className="text-[10px] text-white/40 group-hover:text-white/70 transition-colors">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right Content: Profile Image with Orbital Skills ── */}
          <motion.div
            variants={fadeItem}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] lg:w-[560px] lg:h-[560px] flex items-center justify-center">
              {/* Central glow */}
              <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-br from-blue-500/25 to-purple-500/25 blur-[80px]" />

              {/* ── Orbital Rings with Skill Icons ── */}
              <div className="absolute inset-0">
                <OrbitalSkills />
              </div>

              {/* Profile image at center */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 z-10">
                {/* Rotating gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-full "
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ padding: "3px" }}
                >
                  <div className="w-full h-full rounded-full bg-transparent" />
                </motion.div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-transparent">
                  <Image
                    src={dp}
                    alt="Hasan Emam"
                    fill
                    className="object-contain scale-110"
                    priority
                  />
                </div>
              </div>

              {/* Floating badge: Years */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-1 right-0 sm:-bottom-2 sm:right-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 text-center shadow-xl z-20"
              >
                <p className="text-xl sm:text-2xl font-bold text-white">1+</p>
                <p className="text-[9px] sm:text-[10px] text-white/60 uppercase tracking-wider">
                  Years Exp.
                </p>
              </motion.div>

              {/* Floating badge: Projects */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute top-4 -left-2 sm:top-8 sm:-left-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 text-center shadow-xl z-20"
              >
                <p className="text-xl sm:text-2xl font-bold text-white">5+</p>
                <p className="text-[9px] sm:text-[10px] text-white/60 uppercase tracking-wider">
                  Projects
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
