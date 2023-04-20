/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FA514D',
        secondary: '#FAA74D',
      },
    },
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
    },  
  },
  plugins: [],
}

