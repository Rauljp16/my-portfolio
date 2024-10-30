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
        goldLight: "#eedd91",
        goldDark: "#ac8661",
      },
      dropShadow: {
        gold: "0 0 4px #ff8000",
        goldXS: "0 0 4px #ff800070",
        blackSvg: "0 0 0 #000000",
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
