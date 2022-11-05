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
        bebas: ["Major Mono Display", ...defaultTheme.fontFamily.sans],
        inconsolata: ["Inconsolata"],
      },
      colors: {
        cyblue: "#00CEFC",
        sunset: "#E77812",
      },
    },
  },
  plugins: [],
};
