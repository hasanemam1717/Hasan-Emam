"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { projects } from "@/data/projects";

const ProjectsBar = () => {
  // Show only first 3 projects on home page
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="relative bg-gradient-to-b from-[#000000] to-[#040f4a] py-16 md:py-24 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3"
          >
            My Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
          >
            Selected{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-white/60 max-w-xl mx-auto"
          >
            A glimpse of what I&apos;ve built recently
          </motion.p>
        </motion.div>

        {/* ── Projects List ── */}
        <div className="space-y-8 md:space-y-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-8 lg:gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="flex-1 space-y-4 border border-white/10 bg-white/5 backdrop-blur-sm p-6 lg:p-8 rounded-2xl hover:bg-white/[0.08] transition-all"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="px-3 py-1 text-xs font-semibold bg-blue-600/30 border border-blue-400/30 text-blue-300 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-white/40">{project.year}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.devStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-white/60 bg-white/5 border border-white/10 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <Link
                    href={project.gitLink}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/60 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-all"
                  >
                    <FiGithub size={16} />
                    GitHub
                  </Link>
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600/40 border border-blue-500/30 rounded-lg hover:bg-blue-600/60 transition-all"
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </Link>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Details
                    <FiArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-1 flex justify-center items-center"
              >
                <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ── View All CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-purple-600/30 transition-all duration-300"
          >
            View All Projects
            <FiArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsBar;
