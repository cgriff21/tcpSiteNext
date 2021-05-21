module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        TCPorange: {
          500: '#ed7227'
        },
        TCPpurple: {
          500: '#5E1346'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
