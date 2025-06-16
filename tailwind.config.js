/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",       // adjust paths as needed
    "./script.js"
  ],
  theme: {
    extend: {
      // You can customize fonts, colors, spacing, etc. here
      colors: {
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          // extend as needed
        },
      },
    },
  },
  plugins: [],
}