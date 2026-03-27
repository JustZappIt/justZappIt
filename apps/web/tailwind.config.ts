import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF9417",
        accent: "#FFB866",
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#000000",
        },
        surface: {
          DEFAULT: "#F9F9F9",
          dark: "#111111",
        },
        textPrimary: {
          DEFAULT: "#0A0A0A",
          dark: "#F5F5F5",
        },
        textSecondary: {
          DEFAULT: "#6B6B6B",
          dark: "#A0A0A0",
        },
        border: {
          DEFAULT: "#E5E5E5",
          dark: "#2A2A2A",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        title: "var(--font-title)",
        subtitle: "var(--font-subtitle)",
        body: "var(--font-body)",
        button: "var(--font-button)",
        caption: "var(--font-caption)",
      },
      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        base: "var(--space-base)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        full: "9999px",
      },
      keyframes: {
        fadeUp:       { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn:       { from: { opacity: "0" }, to: { opacity: "1" } },
        revealText:   { from: { clipPath: "inset(0 100% 0 0)" }, to: { clipPath: "inset(0 0% 0 0)" } },
        slideInRight: { from: { opacity: "0", transform: "translateX(24px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        slideInLeft:  { from: { opacity: "0", transform: "translateX(-24px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        toastIn:      { from: { opacity: "0", transform: "translateY(100%)" }, to: { opacity: "1", transform: "translateY(0)" } },
        toastOut:     { from: { opacity: "1", transform: "translateY(0)" }, to: { opacity: "0", transform: "translateY(100%)" } },
        dropIn:       { from: { opacity: "0", transform: "translateY(-12px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        scaleIn:      { from: { opacity: "0", transform: "scale(0.95) translateY(10px)" }, to: { opacity: "1", transform: "scale(1) translateY(0)" } },
      },
      animation: {
        "fade-up":        "fadeUp 0.5s ease-out both",
        "fade-in":        "fadeIn 0.4s ease-out both",
        "reveal-text":    "revealText 0.6s ease-out both",
        "slide-in-right": "slideInRight 0.35s ease-out both",
        "slide-in-left":  "slideInLeft 0.35s ease-out both",
        "toast-in":       "toastIn 0.32s ease-out both",
        "toast-out":      "toastOut 0.28s ease-in both",
        "drop-in":        "dropIn 0.3s ease-out both",
        "scale-in":       "scaleIn 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
