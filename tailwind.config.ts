import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        text: "#ffffff",
        background: "#000000",
        primary: "#553c8b",
        secondary: "#9ea9f0",
        accent: "#ccc1ff",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translateX(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
