import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#33496a",
        beige: "#f2e6d5",
        orange: "#ffa500",
        gray: "#94a3ad",
      },
    },
  },
  plugins: [typography],
};

export default config;
