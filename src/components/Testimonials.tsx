"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import FloatingShapes from "@/components/FloatingShapes";
import {
  HiStar,
  HiChevronLeft,
  HiChevronRight,
  HiChatAlt2,
} from "react-icons/hi";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Ahmed",
    role: "Product Manager",
    company: "TechVentures Ltd.",
    avatar: "",
    content:
      "Working with Hasan was an absolute pleasure. He delivered a complex e-commerce platform ahead of schedule with exceptional code quality. His communication throughout the project was clear and professional.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Rafiq Islam",
    role: "CEO",
    company: "Digital Solutions BD",
    avatar: "",
    content:
      "Hasan built our entire learning management system from scratch. The platform is fast, intuitive, and our users love it. His expertise in full-stack development truly shines through.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Nusrat Jahan",
    role: "Creative Director",
    company: "Design Studio 360",
    avatar: "",
    content:
      "I've worked with many developers, but Hasan stands out for his attention to detail and ability to translate design into pixel-perfect code. He's my go-to for any web project.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Tanvir Hossain",
    role: "Startup Founder",
    company: "InnovateTech",
    avatar: "",
    content:
      "Hasan helped us launch our MVP in just 6 weeks. His technical guidance was invaluable — he didn't just build what we asked for, but suggested improvements that made our product significantly better.",
    rating: 5,
  },
];

const avatarColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-green-500 to-teal-500",
  "from-orange-500 to-red-500",
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section className="relative bg-gradient-to-b from-[#000000] to-[#040f4a] py-16 md:py-24 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-[10%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

      {/* ── Floating Illustrations ── */}
      <FloatingShapes count={10} speed="slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
          >
            What{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Clients Say
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-white/60 max-w-xl mx-auto"
          >
            Honest feedback from people I&apos;ve had the privilege of working
            with.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-5 mx-auto h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          />
        </motion.div>

        {/* ── Testimonial Card ── */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative min-h-[320px] md:min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 md:p-10 relative">
                  {/* Quote icon */}
                  <HiChatAlt2 className="absolute top-6 left-6 text-blue-500/20 text-5xl rotate-180" />

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <HiStar key={i} className="text-yellow-400 text-lg" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-white/70 text-lg leading-relaxed mb-8 relative z-10">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarColors[current % avatarColors.length]} flex items-center justify-center text-white font-bold text-lg shrink-0`}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{t.name}</h4>
                      <p className="text-white/40 text-sm">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Controls ── */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > current ? 1 : -1);
                    setCurrent(idx);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    idx === current
                      ? "w-8 h-2 bg-gradient-to-r from-blue-500 to-purple-500"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
