/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      flexGrow: {
        '2': 2
      },
      rounded: {
        '3': '20px'
      }
    }
  },
  plugins: [],
};
