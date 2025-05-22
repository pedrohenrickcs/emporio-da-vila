import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E98C3D",
        secondary: "#e2b27e",
        tertiary: "#3B2F2F",
        green: "#A2C8B4",
        turquoise: "#9FD9D2",
        background: "#F4EBD0",
        foreground: "#3B2F2F",
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
