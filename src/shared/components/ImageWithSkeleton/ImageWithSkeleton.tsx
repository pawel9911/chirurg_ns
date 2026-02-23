import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ImageWithSkeletonProps = {
  src: string;
  alt: string;
  className?: string;
};

export const ImageWithSkeleton = ({
  src,
  alt,
  className = "",
}: ImageWithSkeletonProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 bg-gray-200 rounded-2xl"
          />
        )}
      </AnimatePresence>

      <motion.img
        src={src}
        alt={alt}
        className={className}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={loaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.6, ease: "easeOut" }}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};
