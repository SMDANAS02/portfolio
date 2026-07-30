import { useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export const useParallax = (speed = 0.5) => {
  const y = useMotionValue(0);
  const moveY = useTransform(y, (latest) => latest * speed);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientY } = e;
      const windowHeight = window.innerHeight;
      const offset = (clientY / windowHeight - 0.5) * 2;
      y.set(offset * 30); // Adjust multiplier for parallax intensity
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [y]);

  return moveY;
};
