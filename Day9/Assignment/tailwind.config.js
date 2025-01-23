/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1140px'
    },
    extend: {
      fontFamily: {
        'dancing': 'Dancing Script',
        'lato': 'Lato'
      }
    },
  },
  plugins: [],
}

