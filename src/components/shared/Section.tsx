import { ReactNode } from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/animations";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export const Section = ({
  id,
  title,
  subtitle,
  children,
  className = "",
  animate = true,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`w-full py-section-mobile md:py-section px-4 md:px-8 lg:px-12 max-w-7xl mx-auto ${className}`}
    >
      <motion.div
        variants={animate ? containerVariants : {}}
        initial={animate ? "hidden" : "visible"}
        whileInView={animate ? "visible" : "visible"}
        viewport={{ once: false, margin: "-100px" }}
      >
        {title && (
          <div className="mb-12 md:mb-16">
            {subtitle && (
              <p className="text-sm md:text-base font-mono text-gray-500 dark:text-gray-400 mb-2">
                {subtitle}
              </p>
            )}
            <h2 className="text-h1-mobile md:text-h2 font-display font-bold text-black dark:text-beige">
              {title}
            </h2>
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
};
