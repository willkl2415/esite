/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0D0D0D",
        white: "#FFFFFF",
        offwhite: "#F9F9F9",
        blue: "#4A90E2",
        grey: "#7D7D7D",
      },
    },
  },
  plugins: [],
};
