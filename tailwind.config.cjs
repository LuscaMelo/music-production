/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/hero.jpg')",
      },
      colors: {
        'brand': '#A116A1',
        'brand-dark': '#470576',
        'dark': '#010101',
        'contrast': '#11111172'
      },
    },
  },
  plugins: [],
}