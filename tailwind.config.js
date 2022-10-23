/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        righteous: ["Righteous", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      white: "#fff",
      dark: "#333",
      black: "#171717",
      red: "#e41f43",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
