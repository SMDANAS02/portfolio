import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface ButtonProps extends MotionProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

const Button = ({
  variant = "primary",
  size = "md",
  icon,
  children,
  disabled = false,
  onClick,
  className = "",
  href,
  target,
  rel,
  download,
  type,
  ...motionProps
}: ButtonProps & { type?: 'submit' | 'button' | 'reset' }) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent shadow-sm";

  const variantClasses = {
    primary:
      "bg-accent text-black hover:bg-yellow-500 hover:shadow-premium active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
    ghost:
      "bg-transparent text-black dark:text-white border-2 border-black dark:border-white hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const sizeClasses = {
    sm: "px-4 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={finalClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClasses}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

export default Button;
