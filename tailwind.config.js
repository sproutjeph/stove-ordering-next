const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", ...fontFamily.sans],
      },
      colors: {
        primary: "#f68b1e",
        primary900: "#f79735",
        primary800: "#f8a24b",
        primary700: "#f9ae62",
        primary600: "#fab978",
        primary500: "#fbc58f",
        primary400: "#fbd1a5",
        primary300: "#fcdcbc",
        primary200: "#fde8d2",
        primary100: "#fef3e9",
        secondary: "#22c55e",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
