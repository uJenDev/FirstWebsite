/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F3FAA6",
          200: "#EAA7EB",
          300: "#D1AADB",
        },
      },
    },
  },
  plugins: [],
}

