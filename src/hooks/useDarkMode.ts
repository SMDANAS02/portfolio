import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem("portfolio-dark-mode");
    if (saved !== null) {
      setIsDark(JSON.parse(saved));
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem("portfolio-dark-mode", JSON.stringify(isDark));

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark, mounted]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return { isDark, toggleDarkMode, mounted };
};
