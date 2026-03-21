import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#102a43",
          950: "#0a1929",
        },
        sand: {
          50: "#fefcf8",
          100: "#fdf8ed",
          200: "#faf0d7",
          300: "#f5e6be",
          400: "#edd9a3",
          500: "#dcc77a",
        },
        ocean: {
          50: "#e6f4f8",
          100: "#cce9f1",
          200: "#99d3e3",
          300: "#66bdd5",
          400: "#33a7c7",
          500: "#0091b9",
          600: "#007494",
          700: "#00576f",
          800: "#003a4a",
          900: "#001d25",
        },
        sage: {
          50: "#f2f7f2",
          100: "#e0ede0",
          200: "#c1dbc1",
          300: "#a2c9a2",
          400: "#83b783",
          500: "#5a9a5a",
        },
        gold: {
          50: "#fefdf4",
          100: "#fdf9e3",
          200: "#fbf0c0",
          300: "#f7e48e",
          400: "#f0d260",
          500: "#d4a843",
          600: "#b8922e",
          700: "#957323",
          800: "#6b5219",
          900: "#42330f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        "luxury": "0 4px 40px -8px rgba(10, 25, 41, 0.08)",
        "luxury-lg": "0 8px 60px -12px rgba(10, 25, 41, 0.12)",
        "luxury-xl": "0 16px 80px -16px rgba(10, 25, 41, 0.16)",
        "gold": "0 4px 30px -4px rgba(212, 168, 67, 0.15)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.05)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "shimmer": "linear-gradient(110deg, transparent 33%, rgba(255,255,255,0.05) 50%, transparent 67%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up-delay": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      letterSpacing: {
        "luxe": "0.15em",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
