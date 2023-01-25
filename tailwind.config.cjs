/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Noto Sans JP", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald"],
  },
};
