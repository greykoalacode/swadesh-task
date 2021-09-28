const defaultTheme =  require('tailwindcss/defaultTheme')


module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // sans: ['THICCCBOI\\ Regular','THICCCBOI\\ Light','THICCCBOI\\ Medium', ...defaultTheme.fontFamily.sans],
        'thicccboil': 'THICCCBOI\\ Light',
        'thicccboi': 'THICCCBOI\\ Regular',
        'thicccboim': 'THICCCBOI\\ Medium'
      }
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
