"use client";

import { motion, useScroll, useTransform } from "framer-motion";

// ── Scroll progress ring ──
function ScrollProgressRing() {
  const { scrollYProgress } = useScroll();
  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [circumference, 0],
  );

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 w-12 h-12 hidden md:block"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        className="rotate-[-90deg]"
      >
        {/* Background circle */}
        <circle
          cx="24"
          cy="24"
          r="18"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="2"
        />
        {/* Progress circle */}
        <motion.circle
          cx="24"
          cy="24"
          r="18"
          fill="none"
          stroke="url(#scroll-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ strokeDashoffset, strokeDasharray: circumference }}
        />
        <defs>
          <linearGradient id="scroll-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
      {/* Center icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-blue-400 text-xs font-bold"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

// ── Floating creative elements per section ──
const creativeElements = [
  {
    section: "hero",
    items: [
      { type: "sparkle", x: 15, y: 20, size: 12, delay: 0 },
      { type: "sparkle", x: 85, y: 15, size: 10, delay: 0.5 },
      { type: "sparkle", x: 75, y: 80, size: 14, delay: 1 },
    ],
  },
  {
    section: "projects",
    items: [
      { type: "sparkle", x: 10, y: 30, size: 10, delay: 0.2 },
      { type: "sparkle", x: 90, y: 50, size: 12, delay: 0.7 },
    ],
  },
  {
    section: "skills",
    items: [
      { type: "sparkle", x: 20, y: 60, size: 11, delay: 0.3 },
      { type: "sparkle", x: 80, y: 25, size: 13, delay: 0.8 },
    ],
  },
];

function SparkleSVG({ size = 12 }: { size?: number }) {
  const h = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <path
        d={`M ${h} 0 L ${h * 1.2} ${h * 0.8} L ${size} ${h} L ${h * 1.2} ${h * 1.2} L ${h} ${size} L ${h * 0.8} ${h * 1.2} L 0 ${h} L ${h * 0.8} ${h * 0.8} Z`}
        fill="rgba(96,165,250,0.25)"
      />
    </svg>
  );
}

function CreativeSparkles() {
  return (
    <>
      {creativeElements.map((section) =>
        section.items.map((item, i) => (
          <motion.div
            key={`${section.section}-${i}`}
            className="absolute pointer-events-none"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: item.delay,
              ease: "backOut",
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.25, 0.5, 0.25],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay + 1,
              }}
            >
              <SparkleSVG size={item.size} />
            </motion.div>
          </motion.div>
        )),
      )}
    </>
  );
}

// ── Main export ──
export { ScrollProgressRing, CreativeSparkles };

export default function ScrollIllustrations() {
  return (
    <>
      <ScrollProgressRing />
      <CreativeSparkles />
    </>
  );
}
