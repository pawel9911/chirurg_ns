"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingTextProps {
  texts: string[];
}

export const TypingText = ({ texts }: TypingTextProps) => {
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(3);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest: number) => Math.round(latest));
  const displayText = useTransform(rounded, (latest: number) =>
    texts[index].slice(0, latest),
  );

  useEffect(() => {
    const animation = animate(count, texts[index].length, {
      type: "tween",
      duration: 1,
      delay,
      ease: "easeIn",
      repeat: texts.length === 1 ? Infinity : 1,
      repeatType: "reverse",
      repeatDelay: 1,
      onComplete: () => {
        setIndex((prevIndex) =>
          prevIndex === texts.length - 1 ? 0 : prevIndex + 1,
        );
        setDelay(0);
      },
    });

    return () => animation.stop();
  }, [count, delay, index, texts]);

  return (
    <span className="inline-block h-full leading-none">
      <motion.span>{displayText}</motion.span>
    </span>
  );
};
