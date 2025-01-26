/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      fontFamily: {
        'dancing': 'Dancing Script',
        'lato': 'Lato'
      },
      fontSize: {
        'h1': '18px',
        'p': '16px'
      },
      borderRadius: {
        'hero': '200px',
        'circle': '10px'
      },
      height: {
        'hero': '100vh'
      },
      backgroundColor: {
        'footer': '#F8E1DB'
      }

    },
  },
  plugins: [],
}

