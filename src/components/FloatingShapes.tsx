"use client";

import { motion } from "framer-motion";

interface Shape {
  id: number;
  type: "ring" | "triangle" | "diamond" | "plus" | "dot" | "arch";
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  color: string;
  opacity: number;
}

interface FloatingShapesProps {
  count?: number;
  className?: string;
  area?: "full" | "top" | "bottom" | "left" | "right";
  colors?: string[];
  speed?: "slow" | "normal" | "fast";
}

const defaultColors = [
  "rgba(96,165,250,0.15)",
  "rgba(192,132,252,0.12)",
  "rgba(52,211,153,0.1)",
  "rgba(251,146,60,0.1)",
  "rgba(244,114,182,0.1)",
];

const speedMultiplier = { slow: 1.5, normal: 1, fast: 0.6 };

function generateShapes(
  count: number,
  colors: string[],
  speed: "slow" | "normal" | "fast",
  area: FloatingShapesProps["area"],
): Shape[] {
  const types: Shape["type"][] = [
    "ring",
    "triangle",
    "diamond",
    "plus",
    "dot",
    "arch",
  ];
  const sp = speedMultiplier[speed];

  const getAreaBounds = () => {
    switch (area) {
      case "top":
        return { xMin: 0, xMax: 100, yMin: 0, yMax: 40 };
      case "bottom":
        return { xMin: 0, xMax: 100, yMin: 60, yMax: 100 };
      case "left":
        return { xMin: 0, xMax: 30, yMin: 0, yMax: 100 };
      case "right":
        return { xMin: 70, xMax: 100, yMin: 0, yMax: 100 };
      default:
        return { xMin: 0, xMax: 100, yMin: 0, yMax: 100 };
    }
  };

  const bounds = getAreaBounds();

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    type: types[i % types.length],
    x: Math.random() * (bounds.xMax - bounds.xMin) + bounds.xMin,
    y: Math.random() * (bounds.yMax - bounds.yMin) + bounds.yMin,
    size: Math.random() * 28 + 10,
    rotation: Math.random() * 360,
    duration: (Math.random() * 8 + 6) * sp,
    delay: Math.random() * 6,
    driftX: (Math.random() - 0.5) * 50,
    driftY: (Math.random() - 0.5) * 40 - 15,
    color: colors[i % colors.length],
    opacity: Math.random() * 0.3 + 0.15,
  }));
}

function ShapeSvg({
  type,
  size,
  color,
}: {
  type: Shape["type"];
  size: number;
  color: string;
}) {
  const h = size / 2;
  switch (type) {
    case "ring":
      return (
        <circle
          cx={h}
          cy={h}
          r={h * 0.65}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />
      );
    case "triangle":
      return (
        <polygon
          points={`${h},2 ${size - 2},${size - 2} 2,${size - 2}`}
          fill={color}
        />
      );
    case "diamond":
      return (
        <polygon
          points={`${h},2 ${size - 2},${h} ${h},${size - 2} 2,${h}`}
          fill={color}
        />
      );
    case "plus": {
      const t = size * 0.3;
      const w = size * 0.2;
      return (
        <rect
          x={h - w / 2}
          y={h - t / 2}
          width={w}
          height={t}
          rx={1}
          fill={color}
          transform={`rotate(45 ${h} ${h})`}
        />
      );
    }
    case "dot":
      return <circle cx={h} cy={h} r={h * 0.25} fill={color} />;
    case "arch": {
      const r = h * 0.6;
      return (
        <path
          d={`M ${h - r} ${h + r * 0.4} A ${r} ${r * 0.7} 0 0 1 ${h + r} ${h + r * 0.4}`}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      );
    }
    default:
      return null;
  }
}

export default function FloatingShapes({
  count = 12,
  className = "",
  area = "full",
  colors = defaultColors,
  speed = "normal",
}: FloatingShapesProps) {
  const shapes = generateShapes(count, colors, speed, area);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: shape.opacity,
          }}
          animate={{
            x: [0, shape.driftX, 0],
            y: [0, shape.driftY, 0],
            rotate: [
              shape.rotation,
              shape.rotation + 180,
              shape.rotation + 360,
            ],
            scale: [1, 1.15, 1],
            opacity: [shape.opacity, shape.opacity * 1.5, shape.opacity],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        >
          <svg
            width={shape.size}
            height={shape.size}
            viewBox={`0 0 ${shape.size} ${shape.size}`}
            className="block"
          >
            <ShapeSvg type={shape.type} size={shape.size} color={shape.color} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
