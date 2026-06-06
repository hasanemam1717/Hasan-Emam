"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HiLightningBolt,
  HiCode,
  HiCheckCircle,
  HiArrowRight,
  HiCalendar,
  HiChartBar,
  HiTag,
  HiEye,
  HiCog,
} from "react-icons/hi";
import {
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { projects, type Project } from "@/data/projects";

// ── Extended case study data per project ──
interface CaseStudy extends Project {
  challenge: string;
  approach: string;
  results: string[];
  metrics: { label: string; value: string }[];
}

const caseStudyOverrides: Record<
  string,
  {
    challenge: string;
    approach: string;
    results: string[];
    metrics: { label: string; value: string }[];
  }
> = {
  "ecommerce-digital-products": {
    challenge:
      "The client needed a secure, scalable digital marketplace where creators could sell downloadable products without worrying about piracy, payment failures, or manual delivery.",
    approach:
      "I architected a full-stack solution using Next.js for the frontend and Express with MongoDB for the backend. Stripe was integrated for secure payments, and a custom delivery pipeline was built to automate file access upon successful purchase. The admin dashboard was designed to give sellers real-time insights into sales, customers, and inventory.",
    results: [
      "Reduced manual delivery time by 100% with automated digital fulfillment",
      "Achieved 99.9% payment success rate with Stripe integration",
      "Scaled to support 500+ concurrent users during launch",
      "Improved seller onboarding time by 60% with streamlined dashboard",
    ],
    metrics: [
      { label: "Users", value: "500+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Sales", value: "1.2K+" },
    ],
  },
  "elearning-platform": {
    challenge:
      "The educational institution needed a centralized platform to deliver video courses, track student progress, and issue certificates — all while keeping the experience engaging and intuitive.",
    approach:
      "I built an interactive learning management system with role-based access for students and instructors. Video content is streamed via Cloudinary with adaptive bitrate. Progress tracking is persisted per user, and quizzes are auto-graded. Certificate generation was automated using HTML-to-PDF conversion triggered on course completion.",
    results: [
      "Enrolled 300+ students in the first month of launch",
      "Reduced administrative workload by 70% with auto-grading",
      "Increased course completion rate by 40% with progress tracking",
      "Eliminated manual certificate issuance with automation",
    ],
    metrics: [
      { label: "Students", value: "300+" },
      { label: "Courses", value: "15+" },
      { label: "Completion", value: "85%" },
    ],
  },
  "portfolio-website": {
    challenge:
      "I needed a personal portfolio that would stand out — combining smooth animations, fast performance, and a content management system for the blog, all while maintaining excellent SEO.",
    approach:
      "I designed a mobile-first experience using Next.js with TypeScript and Tailwind CSS. Framer Motion powers the page transitions and scroll-triggered animations. The blog is powered by a headless CMS with incremental static regeneration for instant loads. The contact form connects to an email API, and all assets are optimized for Core Web Vitals.",
    results: [
      "Achieved 98+ Lighthouse performance score",
      "Reduced page load time by 45% with ISR & optimized assets",
      "Ranked on first page of Google for target keywords",
      "Reduced bounce rate by 30% with engaging animations",
    ],
    metrics: [
      { label: "Performance", value: "98" },
      { label: "Page Load", value: "0.8s" },
      { label: "SEO Rank", value: "Top 5" },
    ],
  },
};

const caseStudies: CaseStudy[] = projects.map((p) => {
  const override = caseStudyOverrides[p.id];
  return {
    ...p,
    challenge: override?.challenge ?? "",
    approach: override?.approach ?? "",
    results: override?.results ?? [],
    metrics: override?.metrics ?? [],
  };
});

const categoryIcons: Record<string, React.ElementType> = {
  "Full-Stack": HiCog,
  Frontend: HiEye,
  Backend: HiCode,
};

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = caseStudies[activeIndex];

  const next = () => setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  const prev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length,
    );

  const CategoryIcon = categoryIcons[current.category] || HiTag;

  return (
    <section className="relative bg-gradient-to-b from-[#000000] to-[#040f4a] py-16 md:py-24 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-[8%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-[8%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

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
            Deep Dive
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
          >
            Case{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Studies
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-4 text-lg text-white/60 max-w-2xl mx-auto"
          >
            A closer look at the problems I&apos;ve solved, the strategies I
            used, and the impact delivered.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-5 mx-auto h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          />
        </motion.div>

        {/* ── Project Selector Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8"
        >
          {caseStudies.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                idx === activeIndex
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {study.title}
            </button>
          ))}
        </motion.div>

        {/* ── Main Case Study Card ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden"
          >
            {/* ── Hero Banner ── */}
            <div className="relative h-48 sm:h-56 md:h-72 overflow-hidden">
              <Image
                src={current.src}
                alt={current.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040f4a] via-[#040f4a]/60 to-transparent" />

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-semibold">
                    <CategoryIcon size={14} />
                    {current.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/50 text-xs">
                    <HiCalendar size={14} />
                    {current.year}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                  {current.title}
                </h2>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-black/60 transition-all"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-black/60 transition-all"
              >
                <FiChevronRight size={20} />
              </button>
            </div>

            {/* ── Content Body ── */}
            <div className="p-6 md:p-8">
              {/* Quick description + links */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl">
                  {current.longDescription}
                </p>
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={current.link}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm font-semibold shadow-lg shadow-blue-600/25 hover:shadow-purple-600/30 transition-all"
                  >
                    <FiExternalLink size={15} />
                    Live
                  </Link>
                  <Link
                    href={current.gitLink}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-white/10 text-white/70 rounded-xl text-sm font-medium hover:bg-white/10 transition-all"
                  >
                    <FiGithub size={15} />
                    Code
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column — Story */}
                <div className="space-y-8">
                  {/* The Challenge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <HiLightningBolt className="text-yellow-400" size={18} />
                      <h3 className="text-lg font-bold text-white">
                        The Challenge
                      </h3>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {current.challenge}
                    </p>
                  </motion.div>

                  {/* The Approach */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <HiCog className="text-blue-400" size={18} />
                      <h3 className="text-lg font-bold text-white">
                        The Approach
                      </h3>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {current.approach}
                    </p>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <HiCode className="text-purple-400" size={18} />
                      <h3 className="text-lg font-bold text-white">
                        Technologies Used
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {current.devStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right Column — Features & Results */}
                <div className="space-y-8">
                  {/* Key Features */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <HiCheckCircle className="text-green-400" size={18} />
                      <h3 className="text-lg font-bold text-white">
                        Key Features
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {current.features.map((feature, idx) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.05 * idx,
                          }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2.5 text-sm text-white/60"
                        >
                          <HiCheckCircle
                            className="text-green-500/70 mt-0.5 shrink-0"
                            size={15}
                          />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Results / Impact */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <HiChartBar className="text-emerald-400" size={18} />
                      <h3 className="text-lg font-bold text-white">
                        Results & Impact
                      </h3>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {current.results.map((result, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.05 * idx,
                          }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2.5 text-sm text-white/60"
                        >
                          <HiArrowRight
                            className="text-blue-400 mt-0.5 shrink-0"
                            size={15}
                          />
                          <span>{result}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      {current.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/5"
                        >
                          <p className="text-lg md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            {metric.value}
                          </p>
                          <p className="text-[11px] text-white/40 mt-0.5 uppercase tracking-wider">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom Navigation ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          {caseStudies.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "bg-blue-500 w-6"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </motion.div>

        {/* ── View All Projects CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white/70 rounded-xl text-sm font-medium hover:bg-white/10 hover:text-white transition-all"
          >
            View All Projects
            <HiArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
