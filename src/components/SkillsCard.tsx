"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import {
  SiHtml5,
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
} from "react-icons/si";

const skillIcons = [
  { icon: <SiHtml5 size={100} />, label: "HTML5", color: "text-orange-500" },
  {
    icon: <SiTailwindcss size={100} />,
    label: "Tailwind CSS",
    color: "text-cyan-400",
  },
  {
    icon: <SiJavascript size={100} />,
    label: "JavaScript",
    color: "text-yellow-400",
  },
  {
    icon: <SiTypescript size={100} />,
    label: "TypeScript",
    color: "text-blue-500",
  },
  { icon: <SiReact size={100} />, label: "React", color: "text-sky-400" },
  { icon: <SiNextdotjs size={100} />, label: "Next.js", color: "text-white" },
  { icon: <SiRedux size={100} />, label: "Redux", color: "text-purple-500" },
  {
    icon: <SiNodedotjs size={100} />,
    label: "Node.js",
    color: "text-green-600",
  },
  { icon: <SiExpress size={100} />, label: "Express", color: "text-white" },
  {
    icon: <SiAdonisjs size={100} />,
    label: "AdonisJS",
    color: "text-indigo-400",
  },
  { icon: <SiMongodb size={100} />, label: "MongoDB", color: "text-green-500" },
  {
    icon: <SiPostgresql size={100} />,
    label: "PostgreSQL",
    color: "text-blue-400",
  },
  { icon: <SiPrisma size={100} />, label: "Prisma", color: "text-gray-300" },
  { icon: <SiMongoose size={100} />, label: "Mongoose", color: "text-red-500" },
  { icon: <SiRedis size={100} />, label: "Redis", color: "text-red-600" },
  { icon: <SiDocker size={100} />, label: "Docker", color: "text-blue-500" },
  {
    icon: <SiFirebase size={100} />,
    label: "Firebase",
    color: "text-yellow-500",
  },
  { icon: <SiGraphql size={100} />, label: "GraphQL", color: "text-pink-500" },
  { icon: <SiGit size={100} />, label: "Git", color: "text-orange-600" },
];

const SkillsCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  return (
    <section className="relative bg-gradient-to-b from-[#000000] to-[#040f4a] py-16 md:py-24 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

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
          className="text-white/50 text-base max-w-xl mx-auto mb-10 md:mb-14"
        >
          A curated collection of tools and frameworks I work with daily to
          build modern, production-ready applications.
        </motion.p>

        {/* ── Desktop: Infinite Scrolling Carousel ── */}
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
                  {/* Tooltip */}
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

        {/* ── Mobile / Tablet: Responsive Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:hidden gap-4">
          {skillIcons.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] p-5 rounded-xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
            >
              <div className={`${skill.color} mb-2`}>{skill.icon}</div>
              <h3 className="text-sm sm:text-base text-white/70 font-medium">
                {skill.label}
              </h3>
            </motion.div>
          ))}
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
            <p className="text-2xl font-bold text-white">5</p>
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
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsCard;
