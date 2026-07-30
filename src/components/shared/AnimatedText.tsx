import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type AnimationType = "fade" | "slide" | "blur";

interface AnimatedTextProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

const animationVariants: Record<AnimationType, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  },
  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8 },
    },
  },
};

export const AnimatedText = ({
  children,
  animation = "fade",
  delay = 0,
  className = "",
}: AnimatedTextProps) => {
  const variants = animationVariants[animation];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={variants}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
};
