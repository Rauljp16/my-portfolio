import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        background: {
          light: "#f0f0f0",
          dark: "#1e1e1e",
        },
        foreground: {
          light: "#1e1e1e",
          dark: "#f0f0f0",
        },
        textColor: {
          light: "",
          dark: "",
        },
        goldLight: "#baac6f",
        goldDark: "#ac8661",
      },
      dropShadow: {
        gold: "0 0 4px #ff8000",
        goldXS: "0 0 4px #ff800070",
        blackSvg: "0 0 0 #000000",
        black: "0 0 5px #1e1e1e",
        white: "0 0 2px #f0f0f0",
        teal: "0 0 5px #5eead4"
      },
      fontFamily: {
        waterfall: ['var(--font-waterfall)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        train: ['var(--font-train)', 'sans-serif'],
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
