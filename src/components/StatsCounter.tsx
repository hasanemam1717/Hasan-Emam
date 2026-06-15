"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  HiCode,
  HiBriefcase,
  HiUserGroup,
  HiBadgeCheck,
  HiChartBar,
  HiHeart,
} from "react-icons/hi";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: HiCode,
    value: 20,
    suffix: "+",
    label: "Projects Completed",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: HiUserGroup,
    value: 15,
    suffix: "+",
    label: "Happy Clients",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: HiBriefcase,
    value: 3,
    suffix: "+",
    label: "Years Experience",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: HiBadgeCheck,
    value: 50,
    suffix: "+",
    label: "Technologies Used",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: HiChartBar,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: HiHeart,
    value: 100,
    suffix: "%",
    label: "Commitment & Dedication",
    color: "from-pink-500 to-rose-500",
  },
];

const Counter = ({
  value,
  suffix,
  duration = 2,
}: {
  value: number;
  suffix: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const StatsCounter = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#000000] to-[#040f4a] py-16 md:py-24 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-blue-500/5 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            By The Numbers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
          >
            Achievements{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              At a Glance
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-5 mx-auto h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 md:p-6 text-center hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-20 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg`}
                >
                  <Icon className="text-white" size={20} />
                </div>

                <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-1 tabular-nums">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs md:text-sm text-white/50 leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
