import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface CardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card = ({
  children,
  className = "",
  hover = false,
  onClick,
  ...motionProps
}: CardProps) => {
  const baseClasses =
    "bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-8 transition-all duration-300 shadow-sm hover:shadow-premium";

  const hoverClasses = hover
    ? "hover:border-accent/30 dark:hover:border-accent/20"
    : "";

  const finalClasses = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <motion.div
      className={finalClasses}
      onClick={onClick}
      whileHover={hover ? { y: -6, boxShadow: "0 25px 50px -12px rgba(255, 212, 0, 0.1)" } : undefined}
      transition={{ duration: 0.3 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
