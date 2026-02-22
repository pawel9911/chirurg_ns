import { motion, type MotionProps, type Variants } from "framer-motion";
import { type HTMLAttributes } from "react";

const variants: Variants = {
  offscreen: (toLeft: boolean) => ({
    x: toLeft ? -80 : 80,
    opacity: 0,
    scale: 0.96,
  }),
  onscreen: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 1.2,
      },
      opacity: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
      scale: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
};

interface HorizontalScrollProps extends MotionProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const HorizontalScroll = ({
  children,
  className,
  viewport = { amount: 0.35, once: true },
  ...props
}: HorizontalScrollProps) => {
  return (
    <motion.div
      className={className}
      viewport={viewport}
      {...props}
      initial="offscreen"
      whileInView="onscreen"
      style={{ willChange: "transform, opacity" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
