/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#055bb9',
        secondary: '#FA514D',
      },
    },
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
    },  
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

