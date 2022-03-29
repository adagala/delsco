module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'arial': ['Arial', 'ui-sans-serif'],
      'times-new-roman': ['Times New Roman', 'ui-serif'],
      'roboto': ['Roboto', 'ui-sans-serif'],
      'lato': ['Lato', 'sans-serif'],
      'work-sans': ['Work Sans', 'sans-serif'],
      'arial-black': ['Arial Black', 'ui-sans-serif'],
    },
    extend: {
      colors: {
        delsco: {
          '50': '#F0D8DB',
          '100': '#F8D8C6',
          '200': '#F2AA91',
          '300': '#D86D56',
          '400': '#B2382C',
          '500': '#800000',
          '600': '#6E0009',
          '700': '#5C000F',
          '800': '#4A0013',
          '900': '#3D0015',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}
