/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        times: ['"Times New Roman"', 'serif'], // Font for Times New Roman
        funky: ['Pacifico', 'cursive'], // Font for the funky style
      },
    },
  },
  plugins: [],
}