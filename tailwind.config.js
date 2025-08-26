import colors from "tailwindcss/colors";
import { defineConfig } from "tailwindcss/helpers";

/** @type {import('tailwindcss').Config} */
export default defineConfig({
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
});
