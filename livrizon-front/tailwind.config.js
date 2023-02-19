/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black': '#000000',
        'blue': '#3986CD',
        'secondary': '#F4F4F4',
        'text-sec': '#626262',
      },
      fontFamily: {
        montserratRegular: ['Montserat-regular', 'sans-serif'],
        montserratSemibold: ['Montserat-semiBold','sans-serif'],
        montserratBold: ['Montserat-bold','sans-serif'],
      }
    },
  },
  plugins: [],
}
