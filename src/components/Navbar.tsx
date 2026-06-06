"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiCalendar, HiSun, HiMoon } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // ── Track scroll position for background transition ──
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close mobile menu on route change ──
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // ── Prevent body scroll when mobile menu is open ──
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 dark:bg-[#000000]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 shadow-lg shadow-black/5 dark:shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* ── Logo ── */}
            <Link href="/" className="relative group">
              <span className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Emam
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400">
                  .
                </span>
              </span>
            </Link>

            {/* ── Desktop Navigation ── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(href)
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 hover:text-gray-800 dark:text-white/50 dark:hover:text-white/80"
                  }`}
                >
                  {label}
                  {isActive(href) && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 bg-gray-100 dark:bg-white/10 rounded-lg -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* ── Desktop Right Actions ── */}
            <div className="hidden md:flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-9 h-9 rounded-xl text-gray-500 hover:text-gray-800 dark:text-white/50 dark:hover:text-white border border-gray-200 hover:border-gray-300 dark:border-white/10 dark:hover:border-white/20 transition-all duration-200"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
              </button>

              <Link
                href="/call"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-gray-800 dark:text-white/60 dark:hover:text-white border border-gray-200 hover:border-gray-300 dark:border-white/10 dark:hover:border-white/20 rounded-xl transition-all duration-200"
              >
                <HiCalendar size={16} />
                Schedule a Call
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-purple-600/30 transition-all duration-300"
              >
                <FiFileText size={16} />
                Resume
              </Link>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 flex items-center justify-center w-10 h-10 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/5 transition-all"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Fullscreen Overlay Menu ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-white/95 dark:bg-[#000000]/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-3xl sm:text-4xl font-bold transition-colors ${
                      isActive(href)
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"
                        : "text-gray-500 hover:text-gray-800 dark:text-white/40 dark:hover:text-white/70"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile action links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: navLinks.length * 0.08 + 0.1,
                }}
                className="flex flex-col items-center gap-4 mt-6"
              >
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-800 dark:text-white/50 dark:hover:text-white transition-colors text-lg"
                >
                  {theme === "dark" ? (
                    <>
                      <HiSun size={20} /> Light Mode
                    </>
                  ) : (
                    <>
                      <HiMoon size={20} /> Dark Mode
                    </>
                  )}
                </button>
                <Link
                  href="/call"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-800 dark:text-white/50 dark:hover:text-white transition-colors text-lg"
                >
                  Book a Call
                </Link>
                <Link
                  href="/blog/create"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-800 dark:text-white/50 dark:hover:text-white transition-colors text-lg"
                >
                  Post Blog
                </Link>
                <Link
                  href="/resume"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg"
                >
                  <FiFileText size={18} />
                  Resume
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Spacer to prevent content from hiding under fixed navbar ── */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;
