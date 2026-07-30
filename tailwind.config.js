/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#F5F1E8",
        accent: "#FFD400",
        darkbg: "#1A1A1A",
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "h1": ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        "h1-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "h2": ["36px", { lineHeight: "1.3", fontWeight: "700" }],
        "h2-mobile": ["24px", { lineHeight: "1.3", fontWeight: "700" }],
        "h3": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "h3-mobile": ["18px", { lineHeight: "1.4", fontWeight: "600" }],
      },
      spacing: {
        "section": "120px",
        "section-mobile": "60px",
      },
      boxShadow: {
        "premium": "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        "premium-lg": "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        "premium-hover": "0 25px 50px -12px rgba(255, 212, 0, 0.1)",
      },
      borderRadius: {
        "sm": "12px",
        "md": "16px",
        "lg": "20px",
        "xl": "28px",
      },
      backdropBlur: {
        "md": "12px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
