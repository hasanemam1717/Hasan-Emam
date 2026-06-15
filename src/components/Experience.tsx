"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  HiBriefcase,
  HiAcademicCap,
  HiCalendar,
  HiLocationMarker,
  HiChevronDown,
  HiBadgeCheck,
} from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";

interface Exp {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  highlights: string[];
}

const experiences: Exp[] = [
  {
    id: "exp-1",
    type: "work",
    title: "Full-Stack Developer",
    organization: "Freelance / Self-Employed",
    location: "Dhaka, Bangladesh",
    period: "Jan 2023 — Present",
    description: [
      "Architected and built 15+ full-stack web applications for diverse clients using Next.js, React, Node.js, and MongoDB.",
      "Designed scalable RESTful APIs and integrated third-party services including Stripe, Cloudinary, and Firebase.",
      "Implemented CI/CD pipelines, automated deployments, and optimized application performance achieving 95+ Lighthouse scores.",
      "Collaborated with clients to gather requirements, plan architecture, and deliver projects on time and within budget.",
    ],
    highlights: ["20+ Projects Delivered", "99.9% Uptime", "98% Satisfaction"],
  },
  {
    id: "exp-2",
    type: "work",
    title: "MERN Stack Developer",
    organization: "Digital Agency (Contract)",
    location: "Remote",
    period: "Jun 2022 — Dec 2022",
    description: [
      "Developed and maintained client-facing web applications using MongoDB, Express.js, React, and Node.js.",
      "Built interactive dashboards with real-time data visualization and role-based access control systems.",
      "Optimized database queries and implemented caching strategies, reducing page load times by 40%.",
    ],
    highlights: ["3 Major Projects", "Team of 5", "Agile Workflow"],
  },
  {
    id: "exp-3",
    type: "education",
    title: "BBA in Marketing",
    organization: "National University",
    location: "Dhaka, Bangladesh",
    period: "2022 — Present",
    description: [
      "Studying marketing principles, consumer behavior, brand management, and digital marketing strategies.",
      "Learning to bridge the gap between technical development and business strategy for holistic product delivery.",
    ],
    highlights: ["Marketing Strategy", "Brand Management", "Digital Marketing"],
  },
  {
    id: "exp-4",
    type: "education",
    title: "DevOps Engineering",
    organization: "Self-Learning & Hands-on Projects",
    location: "Remote",
    period: "2025 — Present",
    description: [
      "Learning CI/CD pipelines, containerization with Docker, orchestration with Kubernetes, and infrastructure as code with Terraform.",
      "Building cloud-native applications on AWS/GCP and implementing monitoring, logging, and automated deployment strategies.",
    ],
    highlights: ["Docker & Kubernetes", "CI/CD Pipelines", "Cloud (AWS/GCP)"],
  },
];

const typeStyles = {
  work: {
    icon: HiBriefcase,
    gradient: "from-blue-500 to-cyan-500",
    badge: "Work",
    leafColor: "text-cyan-400",
  },
  education: {
    icon: HiAcademicCap,
    gradient: "from-purple-500 to-pink-500",
    badge: "Education",
    leafColor: "text-pink-400",
  },
};

function Card({
  exp,
  index,
  isOpen,
  onToggle,
}: {
  exp: Exp;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const t = typeStyles[exp.type];
  const Icon = t.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
      className="relative flex items-start gap-5"
    >
      {/* Tree node */}
      <div className="relative flex flex-col items-center shrink-0">
        {/* Branch line (desktop) */}
        <div className="hidden md:block absolute top-5 left-1/2 -translate-x-1/2 h-px w-10 bg-gradient-to-r from-blue-400/40 to-transparent -ml-10" />
        {/* Leaf on branch */}
        <motion.div
          className="hidden md:block absolute top-4 -left-9 text-blue-400/30"
          animate={{ rotate: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaLeaf size={13} />
        </motion.div>
        {/* Dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: index * 0.2 + 0.15,
            type: "spring",
            stiffness: 200,
          }}
          className="relative z-10"
        >
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${t.gradient} blur-md opacity-40 scale-150`}
          />
          <div
            className={`relative w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center shadow-xl ring-[3px] ring-white/20`}
          >
            <Icon className="text-white" size={18} />
          </div>
          <motion.div
            className={`absolute -right-3 -top-2 ${t.leafColor} text-xs`}
            animate={{ rotate: [0, -20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 3, delay: index * 0.5, repeat: Infinity }}
          >
            <FaLeaf size={11} />
          </motion.div>
        </motion.div>
      </div>

      {/* Card */}
      <div className="flex-1 min-w-0">
        <motion.div
          layout
          onClick={onToggle}
          className="group cursor-pointer bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl overflow-hidden hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
        >
          <div className="p-5 md:p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[11px] font-semibold rounded-full border border-white/10 text-white/60 bg-white/5 mb-2.5">
                  <Icon size={10} />
                  {t.badge}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white/50 text-sm mt-1.5">
                  <span className="font-medium text-white/70">
                    {exp.organization}
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="inline-flex items-center gap-1">
                    <HiCalendar size={13} />
                    {exp.period}
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="inline-flex items-center gap-1">
                    <HiLocationMarker size={13} />
                    {exp.location}
                  </span>
                </div>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white/70 group-hover:border-white/20 transition-all"
              >
                <HiChevronDown size={16} />
              </motion.div>
            </div>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-white/5">
                    <ul className="space-y-2.5 mb-4">
                      {exp.description.map((d, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.08 }}
                          className="text-white/50 text-sm leading-relaxed flex gap-2.5"
                        >
                          <span className="text-blue-400 mt-1 shrink-0 text-xs">
                            ◆
                          </span>
                          <span>{d}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((h, i) => (
                        <motion.span
                          key={h}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.25, delay: i * 0.06 + 0.2 }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-white/60 bg-white/5 border border-white/5 rounded-lg"
                        >
                          <HiBadgeCheck className="text-blue-400" size={12} />
                          {h}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="relative bg-gradient-to-b from-[#000000] to-[#040f4a] py-16 md:py-24 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[15%] left-0 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-0 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3"
          >
            My Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
          >
            Experience &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Education
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-white/60 max-w-xl mx-auto"
          >
            Tap each card to expand — explore my professional journey step by
            step.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-5 mx-auto h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Tree trunk */}
          <div className="absolute left-[22px] md:left-[22px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent rounded-full" />

          <div className="space-y-10 md:space-y-12">
            {experiences.map((exp, i) => (
              <Card
                key={exp.id}
                exp={exp}
                index={i}
                isOpen={openId === exp.id}
                onToggle={() =>
                  setOpenId((prev) => (prev === exp.id ? null : exp.id))
                }
              />
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-white/30 text-xs mt-10 tracking-wider uppercase"
        >
          Click any card to reveal details
        </motion.p>
      </div>
    </section>
  );
}
