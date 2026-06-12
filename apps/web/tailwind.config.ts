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
        // Zapp app palette (design/Zapp-designs/components/tokens.jsx)
        primary: "#FF9417",
        accent: "#FFB866",
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#0F0E0C",
        },
        surface: {
          DEFAULT: "#F4F2EE",
          dark: "#171512",
        },
        textPrimary: {
          DEFAULT: "#15120D",
          dark: "#F6F2EA",
        },
        textSecondary: {
          DEFAULT: "#6B645A",
          dark: "#A59C90",
        },
        border: {
          DEFAULT: "#EBE7E0",
          dark: "#2A2622",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "system-ui", "sans-serif"],
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
      // Zapp design rule: 0 border-radius on all UI (avatar circles stay round)
      borderRadius: {
        none: "0",
        sm: "0",
        DEFAULT: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
        full: "9999px",
      },
      keyframes: {
        fadeUp:       { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn:       { from: { opacity: "0" }, to: { opacity: "1" } },
        slideInRight: { from: { opacity: "0", transform: "translateX(24px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        slideInLeft:  { from: { opacity: "0", transform: "translateX(-24px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        toastIn:      { from: { opacity: "0", transform: "translateY(100%)" }, to: { opacity: "1", transform: "translateY(0)" } },
        toastOut:     { from: { opacity: "1", transform: "translateY(0)" }, to: { opacity: "0", transform: "translateY(100%)" } },
        dropIn:       { from: { opacity: "0", transform: "translateY(-12px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        "fade-up":        "fadeUp 0.5s ease-out both",
        "fade-in":        "fadeIn 0.4s ease-out both",
        "slide-in-right": "slideInRight 0.35s ease-out both",
        "slide-in-left":  "slideInLeft 0.35s ease-out both",
        "toast-in":       "toastIn 0.32s ease-out both",
        "toast-out":      "toastOut 0.28s ease-in both",
        "drop-in":        "dropIn 0.3s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
