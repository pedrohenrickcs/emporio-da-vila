import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          "primary-color": "#f97316",
          "secondary-color": "#fde68a",
          "tertiary-color": "#fef3c7",
          green: "#22c55e",
          turquoise: "#14b8a6",
          background: "#ffffff",
          foreground: "#000000",
        },
      },
      fontFamily: {
        title: ["var(--font-comfortaa)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
