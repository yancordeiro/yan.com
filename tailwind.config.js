/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      background: "#08070b",
      primary: "#f2f2f2",
      secondary: "#8f9ba8",
      aqublue: "#93f5ec",
      purple: "#a77bf3 ",
      gradient1: "#6366f1",
      gradient2: "#a855f7",
      gradient3: "#ec4899",
      bluegradient2: "#007cf0",
      bluegradient: "#00dfd8",
      purplegradient2: "#7928ca",
      purplegradient: "#ff0080",
      orangegradient2: "#ff584e",
      orangegradient: "#ffb74e",
    },
    extend: {
      fontFamily: {
        biotif: ["Biotif", "sans-serif"],
        neuzeit: ["NeuzeitGrotesk", "sans-serif"],
        bebas: ["BebasNeue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
