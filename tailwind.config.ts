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
        background: "var(--background)",
        foreground: "var(--foreground)",
        textDark: "var(--text-color)",
        goldLight: "#eedd91",
        goldDark: "#ac8661",
      },

      dropShadow: {
        gold: "0 0 4px #ff8000",
        goldXS: "0 0 4px #ff800070",
        blackSvg: "0 0 0 #000000",
      },
    },
  },
  plugins: [],
};
export default config;
