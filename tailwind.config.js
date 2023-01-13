/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
        ibm: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
