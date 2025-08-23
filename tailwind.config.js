/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5865F2",   // Discord blurple
        secondary: "#23272A", // Dark slate
        accent: "#99AAB5",    // Cool grey
        light: "#F5F5F7",     // Apple-style light background
        dark: "#1E1E1E",      // Almost black
      },
    },
  },
  safelist: [
    "bg-light",
    "bg-dark",
    "text-secondary",
    "text-accent",
    "border-secondary",
  ],
  plugins: [],
};
