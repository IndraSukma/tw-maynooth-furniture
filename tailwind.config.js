/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{html,js,json}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      gray: {
        100: "#f0f2f5",
        200: "#e1e5eb",
        300: "#c5cbd6",
        400: "#abb3c2",
        500: "#919bad",
        600: "#657185",
        700: "#4c5970",
        800: "#30405c",
        900: "#1a2a47",
        950: "#09111f",
      },
      blue: {
        100: "#ebf1fc",
        200: "#e1ebfb",
        950: "#0856db",
      },
      green: {
        100: "#ebfbf1",
        200: "#d7f6e4",
        950: "#08c754",
      },
      yellow: {
        100: "#fef6e2",
        200: "#fef0cf",
        950: "#fab30f",
      },
      red: {
        100: "#fdeced",
        200: "#fce2e5",
        950: "#e50d24",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        xl: "0 4px 25px -5px rgb(0 0 0 / 0.1), 0 2px 10px -6px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      //   strategy: "class", // only generate classes
    }),
  ],
}
