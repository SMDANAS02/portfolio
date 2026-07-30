interface BadgeProps {
  label: string;
  color?: "default" | "accent" | "success" | "warning";
  variant?: "solid" | "outline";
  className?: string;
}

export const Badge = ({
  label,
  color = "default",
  variant = "solid",
  className = "",
}: BadgeProps) => {
  const colorMap = {
    default: {
      solid: "bg-gray-100 dark:bg-gray-800 text-black dark:text-white",
      outline:
        "border border-gray-300 dark:border-gray-700 text-black dark:text-white",
    },
    accent: {
      solid: "bg-accent text-black",
      outline: "border border-accent text-accent",
    },
    success: {
      solid: "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100",
      outline:
        "border border-green-300 dark:border-green-700 text-green-700 dark:text-green-300",
    },
    warning: {
      solid: "bg-orange-100 dark:bg-orange-900 text-orange-900 dark:text-orange-100",
      outline:
        "border border-orange-300 dark:border-orange-700 text-orange-700 dark:text-orange-300",
    },
  };

  const classes = `inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors ${
    colorMap[color][variant]
  } ${className}`;

  return <span className={classes}>{label}</span>;
};
