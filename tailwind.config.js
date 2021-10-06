module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'arial': ['Arial', 'ui-sans-serif'],
      'times-new-roman': ['Times New Roman', 'ui-serif'],
      'roboto': ['Roboto', 'ui-sans-serif'],
      lato: "'Lato', sans-serif"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}
