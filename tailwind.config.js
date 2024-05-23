/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#73983c',
        'brand-red': '#b35454',
      },
      fontFamily: {
        roboto: 'roboto',
        montserrat: 'montserrat',
      }
    },
  },
  plugins: [],
}