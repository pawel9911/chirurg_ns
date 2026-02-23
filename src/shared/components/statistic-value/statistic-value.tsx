"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";

interface AnimatedValueProps {
  value: number;
  duration?: number;
  className?: string;
}

const variants: Variants = {
  offscreen: {
    // opacity: 0,
    scale: 0.9,
  },
  onscreen: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 55,
      damping: 20,
      mass: 1.1,
    },
  },
};

export const StatisticValue = ({
  value,
  duration = 2,
  className,
}: AnimatedValueProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3); // easing out cubic
      setCount(Math.floor(easedProgress * value));

      if (progress < 1) requestAnimationFrame(step);
      else setCount(value);
    };

    requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <motion.span
      className={className}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.35 }}
      variants={variants}
      style={{ willChange: "transform, opacity" }}
    >
      {count}
    </motion.span>
  );
};
