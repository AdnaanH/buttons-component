/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Noto': ['Noto Sans', 'sans-serif'],
      },
      colors: {
        'ButtonBlue': '#4438ca',
        'ButtonRed': '#dc2625',
      }
    },
  },
  plugins: [],
}