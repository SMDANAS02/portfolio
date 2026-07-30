import { useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50px",
    once: false,
    ...options,
  });

  return { ref, isInView };
};
