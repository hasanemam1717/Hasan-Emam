"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import tagImg from "../assets/Adobe Express - file (1).png";
import htmlImg from "../assets/Adobe Express - file (2).png";
import dp from "../assets/365949_copy-removebg-preview.png";

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

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#000000] via-[#020a3a] to-[#040f4a] overflow-hidden flex items-center">
      {/* ── Ambient Background Glows ── */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      {/* ── Floating Decorative Elements ── */}
      <motion.div
        className="absolute hidden lg:block left-[8%] top-[18%]"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={tagImg}
          width="100"
          height="100"
          alt="tag"
          draggable="false"
        />
      </motion.div>
      <motion.div
        className="absolute hidden lg:block right-[10%] top-[12%]"
        animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Image
          src={htmlImg}
          width="90"
          height="90"
          alt="html"
          draggable="false"
        />
      </motion.div>

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

            {/* Role */}
            <motion.p
              variants={fadeItem}
              className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-2"
            >
              Full-Stack Web Developer
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              variants={fadeItem}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.1]"
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Hasan Emam
              </span>
            </motion.h1>

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
                { icon: <FiGithub size={20} />, href: "#", label: "GitHub" },
                {
                  icon: <FiLinkedin size={20} />,
                  href: "#",
                  label: "LinkedIn",
                },
                {
                  icon: <FiMail size={20} />,
                  href: "mailto:hasan@example.com",
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
          </div>

          {/* ── Right Content: Profile Image ── */}
          <motion.div
            variants={fadeItem}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-[60px] scale-150" />

              {/* Profile photo with decorative border */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-blue-500/20">
                <Image
                  src={dp}
                  alt="Hasan Emam"
                  fill
                  className="object-contain scale-110"
                  priority
                />
              </div>

              {/* Floating badge: 3+ Years */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 text-center shadow-xl"
              >
                <p className="text-2xl font-bold text-white">3+</p>
                <p className="text-[10px] text-white/60 uppercase tracking-wider">
                  Years Exp.
                </p>
              </motion.div>

              {/* Floating badge: Projects */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -left-2 top-8 sm:-left-4 sm:top-12 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 text-center shadow-xl"
              >
                <p className="text-2xl font-bold text-white">20+</p>
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
