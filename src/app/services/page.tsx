"use client";
import { motion } from "framer-motion";
import {
  HiCode,
  HiServer,
  HiCube,
  HiShoppingCart,
  HiDeviceMobile,
  HiSupport,
} from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    icon: <HiCode size={40} />,
    title: "Frontend Development",
    tagline: "Pixel-perfect, responsive, and blazing-fast UIs",
    description:
      "I craft modern, high-performance user interfaces using React, Next.js, and TailwindCSS. Every component is built with accessibility, SEO, and mobile-first design in mind.",
    definition:
      "Specializing in component-driven architecture, state management (Redux, Zustand), and server-side rendering to deliver seamless user experiences that drive engagement and conversions.",
    highlights: [
      "React / Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
    ],
  },
  {
    icon: <HiServer size={40} />,
    title: "Backend Development",
    tagline: "Scalable, secure, and production-ready APIs",
    description:
      "I build robust server-side systems with Node.js, Express, and PostgreSQL/MongoDB. From RESTful APIs to real-time WebSocket services — your data layer is in safe hands.",
    definition:
      "Expertise in authentication (JWT, OAuth), database design, caching strategies (Redis), and cloud deployment. I ensure your backend is as fast and reliable as your frontend.",
    highlights: [
      "Node.js / Express",
      "PostgreSQL / MongoDB",
      "REST & GraphQL",
      "JWT / OAuth",
    ],
  },
  {
    icon: <HiCube size={40} />,
    title: "Full-Stack Solutions",
    tagline: "End-to-end development from concept to deployment",
    description:
      "Combining frontend and backend expertise, I deliver complete web applications that are cohesive, maintainable, and optimized for performance at every layer of the stack.",
    definition:
      "From initial architecture planning to CI/CD pipeline setup, I handle the entire software development lifecycle. Deployments on Vercel, Netlify, AWS, or DigitalOcean.",
    highlights: [
      "Full Lifecycle Dev",
      "CI/CD Pipelines",
      "Cloud Deployment",
      "Performance Opt.",
    ],
  },
  {
    icon: <HiShoppingCart size={40} />,
    title: "E-Commerce Development",
    tagline: "Custom online stores that convert visitors into customers",
    description:
      "I build tailor-made e-commerce platforms with secure payment gateways, intuitive product management, and smooth checkout flows that maximize conversion rates.",
    definition:
      "Integration with Stripe, PayPal, or SSLCommerz; custom shopping cart logic; inventory management; and admin dashboards. Your store will be ready to scale from day one.",
    highlights: [
      "Payment Integration",
      "Cart & Checkout",
      "Admin Dashboard",
      "Inventory Mgmt",
    ],
  },
  {
    icon: <HiDeviceMobile size={40} />,
    title: "Responsive Web Design",
    tagline: "Beautiful on every screen — mobile, tablet, or desktop",
    description:
      "Every project I deliver is fully responsive and tested across all major browsers and devices. No broken layouts, no awkward spacing — just a flawless experience.",
    definition:
      "Mobile-first approach using TailwindCSS media queries, fluid grids, and flexible images. I ensure your brand looks premium on every viewport size.",
    highlights: [
      "Mobile-First Design",
      "Cross-Browser",
      "Fluid Layouts",
      "Pixel-Perfect",
    ],
  },
  {
    icon: <HiSupport size={40} />,
    title: "Maintenance & Support",
    tagline: "Ongoing care to keep your application running smoothly",
    description:
      "Launch day is just the beginning. I offer post-launch maintenance, bug fixes, performance monitoring, and feature updates to keep your application healthy.",
    definition:
      "Regular dependency updates, security patches, database optimization, and 24/7 monitoring. Your application deserves the same attention after launch as before it.",
    highlights: [
      "Bug Fixes",
      "Performance Tuning",
      "Security Patches",
      "24/7 Monitoring",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#000000] to-[#040f4a] overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* ── Heading Section ── */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3"
          >
            What I Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white"
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-4 text-lg text-white/60 max-w-2xl mx-auto"
          >
            From concept to launch — I provide end-to-end web development
            services tailored to turn your ideas into powerful digital products.
          </motion.p>
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 mx-auto h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          />
        </motion.div>

        {/* ── Services Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl hover:bg-white/[0.08] transition-all duration-300"
            >
              {/* Gradient hover accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon */}
              <div className="relative mb-5 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title & Tagline */}
              <h2 className="relative text-xl lg:text-2xl font-bold text-white mb-1">
                {service.title}
              </h2>
              <p className="relative text-sm text-blue-300/80 font-medium mb-4">
                {service.tagline}
              </p>

              {/* Description */}
              <p className="relative text-white/60 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Definition (expandable detail) */}
              <div className="relative border-t border-white/10 pt-4 mt-4">
                <p className="text-white/50 text-xs leading-relaxed italic">
                  {service.definition}
                </p>
              </div>

              {/* Highlights */}
              <div className="relative mt-5 flex flex-wrap gap-2">
                {service.highlights.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-white/70 bg-white/5 rounded-full border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* CTA arrow */}
              <div className="relative mt-5 flex items-center gap-1 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-white/50 text-sm">
            Have a project in mind?{" "}
            <a
              href="/contact"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
            >
              Let&apos;s talk
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
