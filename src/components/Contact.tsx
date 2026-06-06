/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  HiMail,
  HiPhone,
  HiChat,
  HiLightningBolt,
  HiShieldCheck,
  HiUserGroup,
} from "react-icons/hi";
import { FiSend, FiUser, FiMessageSquare } from "react-icons/fi";

const benefits = [
  {
    icon: HiLightningBolt,
    title: "Fast Response",
    description:
      "I typically reply within 24 hours. Your time is valuable, and I respect that.",
  },
  {
    icon: HiShieldCheck,
    title: "Expert Advice",
    description:
      "Get professional guidance tailored to your project needs and goals.",
  },
  {
    icon: HiUserGroup,
    title: "Collaborative Approach",
    description:
      "I believe in working together to create solutions that truly matter.",
  },
  {
    icon: HiChat,
    title: "Clear Communication",
    description:
      "No jargon, no confusion — just honest and transparent conversations.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate sending
    await new Promise((r) => setTimeout(r, 1200));

    console.log("Form Data:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setSubmitting(false);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#000000] to-[#040f4a] py-16 md:py-24 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-[10%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
          >
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Work Together
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-4 text-lg text-white/60 max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hello? Fill out the form
            and I&apos;ll get back to you as soon as possible.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-5 mx-auto h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          />
        </motion.div>

        {/* ── Main Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl max-w-5xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* ── Left Side: Benefits ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:w-[380px] shrink-0"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                Why Reach Out?
              </h3>
              <p className="text-white/50 text-sm mb-6">
                Here&apos;s what you can expect when you contact me.
              </p>

              <div className="space-y-5">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <benefit.icon className="text-blue-400" size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        {benefit.title}
                      </h4>
                      <p className="text-white/50 text-xs mt-0.5 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Divider for mobile */}
              <div className="mt-8 lg:mt-10 h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-transparent lg:hidden" />

              {/* Alternative contact */}
              <div className="mt-6 lg:mt-10 space-y-3">
                <p className="text-white/40 text-xs font-medium uppercase tracking-wider">
                  Or reach me directly
                </p>
                <a
                  href="mailto:hasanimam0854@gmail.com"
                  className="flex items-center gap-3 text-white/60 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/30 transition-colors">
                    <HiMail size={15} />
                  </div>
                  <span className="text-sm">hasanimam0854@gmail.com</span>
                </a>
                <a
                  href="tel:01717680772"
                  className="flex items-center gap-3 text-white/60 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/30 transition-colors">
                    <HiPhone size={15} />
                  </div>
                  <span className="text-sm">01717680772</span>
                </a>
              </div>
            </motion.div>

            {/* ── Right Side: Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    <FiUser className="inline mr-1.5" size={14} />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    <HiMail className="inline mr-1.5" size={14} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    <FiMessageSquare className="inline mr-1.5" size={14} />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-purple-600/30 transition-all text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
