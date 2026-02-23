import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, type Variants } from "framer-motion";

interface AnimatedValueProps {
  value: number;
  duration?: number;
  className?: string;
}

const variants: Variants = {
  offscreen: {
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
  const motionValue = useMotionValue(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [value, duration, motionValue]);

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
