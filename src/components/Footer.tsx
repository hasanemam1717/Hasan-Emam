"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Services", href: "/services" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Full-Stack Development", href: "/services" },
  { label: "Consulting", href: "/services" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/hasanemam1717", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/hasanemam/",
    label: "LinkedIn",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/profile.php?id=61554502387596",
    label: "Facebook",
  },
  { icon: FaTwitter, href: "https://x.com/HasanEmam1717", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#000000] to-[#040f4a] overflow-hidden">
      {/* Top decorative gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Main Footer Content ── */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* ── Brand Column ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <Link href="/" className="inline-block group">
                <h2 className="text-2xl font-extrabold text-white">
                  Hasan<span className="text-blue-400">.</span>Emam
                </h2>
              </Link>
              <p className="mt-3 text-white/50 text-sm leading-relaxed max-w-xs">
                A passionate Full-Stack Developer crafting modern, scalable web
                applications with clean code and creative design.
              </p>

              {/* Social Icons */}
              <div className="mt-5 flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* ── Quick Links ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-bold text-white/90 uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-white/50 hover:text-blue-400 transition-colors duration-200"
                    >
                      <span>{link.label}</span>
                      <FiArrowUpRight
                        size={12}
                        className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ── Services ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-bold text-white/90 uppercase tracking-wider mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="group inline-flex items-center gap-1 text-sm text-white/50 hover:text-blue-400 transition-colors duration-200"
                    >
                      <span>{service.label}</span>
                      <FiArrowUpRight
                        size={12}
                        className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ── Contact Info ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-bold text-white/90 uppercase tracking-wider mb-4">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hasanimam0854@gmail.com"
                    className="flex items-center gap-2.5 text-sm text-white/50 hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <HiMail
                      size={16}
                      className="shrink-0 text-white/30 group-hover:text-blue-400 transition-colors"
                    />
                    <span>hasanimam0854@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:01717680772"
                    className="flex items-center gap-2.5 text-sm text-white/50 hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <HiPhone
                      size={16}
                      className="shrink-0 text-white/30 group-hover:text-blue-400 transition-colors"
                    />
                    <span>01717680772</span>
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-2.5 text-sm text-white/50">
                    <HiLocationMarker
                      size={16}
                      className="shrink-0 text-white/30"
                    />
                    <span>Dhaka, Bangladesh</span>
                  </span>
                </li>
              </ul>

              {/* Newsletter / CTA */}
              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs text-white/60 mb-2">
                  Available for freelance work
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Hire Me Now
                  <FiArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/5 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Hasan Emam. All rights reserved.
            </p>
            <p className="text-sm text-white/30 flex items-center gap-1.5">
              Crafted with
              <FaHeart className="text-red-500/70" size={12} />
              using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
