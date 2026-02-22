import { motion, type Variants } from "framer-motion";
import { type ComponentProps } from "react";

const variants: Variants = {
  offscreen: {
    y: 120,
    opacity: 0,
    scale: 0.96,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      y: {
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

type VerticalScrollProps = ComponentProps<typeof motion.div>;

export function VerticalScroll({
  children,
  viewport = { amount: 0.35, once: true },
  ...props
}: VerticalScrollProps) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={viewport}
      style={{ willChange: "transform, opacity" }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}
