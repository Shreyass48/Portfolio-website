import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0B",
        foreground: "#EAEAEA",
        accent: "#00FF88",
        muted: "#BDBDBD",
        border: "#FFFFFF",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Space Grotesk", "Sora", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        brutal: "0",
        "brutal-sm": "2px",
      },
      borderWidth: {
        brutal: "3px",
        "brutal-thick": "4px",
      },
      boxShadow: {
        brutal: "4px 4px 0 0 #FFFFFF",
        "brutal-sm": "2px 2px 0 0 #FFFFFF",
        "brutal-press": "2px 2px 0 0 #FFFFFF",
      },
      minHeight: {
        "tap-target": "48px",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "cursor-blink": "cursorBlink 0.8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
