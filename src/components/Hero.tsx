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
} from "react-icons/si";
import dp from "../assets/365949_copy-removebg-preview.png";

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

          {/* ── Right Content: Profile Image ── */}
          <motion.div
            variants={fadeItem}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-[60px] scale-150" />

              {/* Profile photo with rotating gradient border */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ padding: "3px" }}
                >
                  <div className="w-full h-full rounded-full bg-[#000]" />
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

              {/* Floating badge: 3+ Years */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 text-center shadow-xl"
              >
                <p className="text-2xl font-bold text-white">1+</p>
                <p className="text-[10px] text-white/60 uppercase tracking-wider">
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
                className="absolute -left-2 top-8 sm:-left-4 sm:top-12 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 text-center shadow-xl"
              >
                <p className="text-2xl font-bold text-white">5+</p>
                <p className="text-[10px] text-white/60 uppercase tracking-wider">
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
