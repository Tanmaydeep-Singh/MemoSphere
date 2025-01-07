/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2", // Serene Blue
        secondary: "#F5A623", // Bright Orange
        background: "#F7F9FC", // Off-White
        accent: "#7ED321", // Green
        text: "#333333", // Deep Gray
      },
    },
  },
  darkMode: 'class', // Enable dark mode support
  plugins: [],
};
