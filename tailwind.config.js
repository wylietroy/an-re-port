/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundColor: ['hover'],
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "grey-100": "##8a90a1",
        "grey-200": "#7d7d7d",
        "green-100": "#043621",
        "blue-100": "#041e4a",
        "blue-200": "#b8cbff",
        "black-100": "#000000",
        "black-200": "#090325",
        "green-100": "#278219",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};