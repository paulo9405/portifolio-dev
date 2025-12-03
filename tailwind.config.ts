import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0a0a0f",
          dark: "#050508",
          light: "#12121a",
        },
        primary: {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
          dark: "#7c3aed",
        },
        accent: {
          purple: "#c084fc",
          pink: "#e879f9",
          blue: "#60a5fa",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#cbd5e1",
          muted: "#64748b",
        },
        border: {
          DEFAULT: "#1e293b",
          light: "#334155",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-dark": "linear-gradient(to bottom, #0a0a0f, #050508)",
        "gradient-purple": "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
        "gradient-accent": "linear-gradient(135deg, #c084fc 0%, #e879f9 50%, #60a5fa 100%)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(139, 92, 246, 0.3)",
        "glow-md": "0 0 30px rgba(139, 92, 246, 0.4)",
        "glow-lg": "0 0 45px rgba(139, 92, 246, 0.5)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.6s ease-out",
        "glow": "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
