"use client";

import { motion } from "framer-motion";
import { HiCode } from "react-icons/hi";

const Spinner = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-[#000000] to-[#040f4a]">
      {/* ── Ambient background glow ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

      <div className="relative flex flex-col items-center gap-6">
        {/* ── Double Ring Spinner ── */}
        <div className="relative w-20 h-20">
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-blue-500 border-r-purple-500"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Middle Ring (counter-rotating) */}
          <motion.div
            className="absolute inset-1.5 rounded-full border-[3px] border-transparent border-b-cyan-400 border-l-purple-400"
            animate={{ rotate: -360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner Dot */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 shadow-lg shadow-blue-500/40" />
          </motion.div>
        </div>

        {/* ── Loading Text ── */}
        <div className="flex items-center gap-2">
          <HiCode className="text-blue-400/60" size={18} />
          <motion.span
            className="text-sm font-medium text-white/40 tracking-wider"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Loading...
          </motion.span>
        </div>

        {/* ── Progress Bar ── */}
        <div className="w-40 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
