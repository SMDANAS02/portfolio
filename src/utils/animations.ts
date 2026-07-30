import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.6,
      delay,
    },
  }),
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.2 },
};

export const hoverLift = {
  y: -8,
  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  transition: { duration: 0.3 },
};

// Hover animations - Task 12.5
export const hoverScaleUp = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

export const hoverColorChange = {
  color: "#FFD400", // accent color
  transition: { duration: 0.2 },
};

export const hoverWithShadow = {
  y: -12,
  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
  transition: { duration: 0.3 },
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Slide animations - Task 12.2
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

// Scale animations - Task 12.3
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

// Stagger container - Task 12.4
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Blur reveal - Task 12.8
export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: (delay: number = 0) => ({
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
};
