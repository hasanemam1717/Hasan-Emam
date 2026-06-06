"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiCheckCircle,
} from "react-icons/fi";
import { HiCode, HiCalendar } from "react-icons/hi";
import { projects } from "@/data/projects";

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.projectId);

  if (!project) {
    notFound();
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#000000] to-[#040f4a] py-16 md:py-24 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Back Button ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium"
          >
            <FiArrowLeft size={16} />
            Back to Projects
          </Link>
        </motion.div>

        {/* ── Hero Card ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl mb-8"
        >
          {/* Project Image */}
          <div className="relative h-64 sm:h-80 md:h-96">
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent" />

            {/* Overlay content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 text-xs font-semibold bg-blue-600/40 backdrop-blur-sm border border-blue-400/30 text-blue-300 rounded-full">
                  {project.category}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/10 text-white/70 rounded-full">
                  <HiCalendar size={12} />
                  {project.year}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                {project.title}
              </h1>
            </div>
          </div>
        </motion.div>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ── Left: Main Content ── */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <h2 className="text-xl font-bold text-white mb-4">
                About This Project
              </h2>
              <p className="text-white/60 leading-relaxed">
                {project.longDescription}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <h2 className="text-xl font-bold text-white mb-4">
                Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <FiCheckCircle
                      className="text-green-400 mt-0.5 shrink-0"
                      size={18}
                    />
                    <span className="text-white/70 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Sidebar ── */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <HiCode className="text-blue-400" size={20} />
                <h2 className="text-lg font-bold text-white">Tech Stack</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.devStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium text-white/70 bg-white/5 border border-white/10 rounded-lg hover:bg-blue-500/20 hover:border-blue-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl"
            >
              <h2 className="text-lg font-bold text-white mb-4">Links</h2>
              <div className="space-y-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-purple-600/30 transition-all duration-300"
                >
                  <FiExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-white/5 border border-white/10 text-white/70 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <FiGithub size={16} />
                  View Source Code
                </a>
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl"
            >
              <h2 className="text-lg font-bold text-white mb-4">
                Project Info
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/40">Category</span>
                  <span className="text-white/70 font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="h-px bg-white/5" />
                <div className="flex justify-between">
                  <span className="text-white/40">Year</span>
                  <span className="text-white/70 font-medium">
                    {project.year}
                  </span>
                </div>
                <div className="h-px bg-white/5" />
                <div className="flex justify-between">
                  <span className="text-white/40">Tech Count</span>
                  <span className="text-white/70 font-medium">
                    {project.devStack.length} technologies
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── More Projects CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white/70 hover:text-white rounded-xl hover:bg-white/10 transition-all text-sm font-medium"
          >
            <FiArrowLeft size={16} />
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
