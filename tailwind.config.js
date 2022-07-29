/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./_projects/**/*.mdx",
  ],
  theme: {

    extend: {
      screens: {
        '3xl': '1792px',
        '4xl': '2048px',
      },
      colors: {
        "primary": {
          50: '#99dff9',
          100: '#80d7f7',
          200: '#4dc6f4',
          300: '#33bef2',
          400: '#00aeef',
          500: '#009dd7',
          600: '#007aa7',
          700: '#00688f',
          800: '#005778',
          900: '#003448',
        },
        "secondary": {
          50: '#a5acd6',
          100: '#7982c1',
          200: '#626db7',
          300: '#4c59ad',
          400: '#3544a2',
          500: '#1f2f98',
          600: '#19267a',
          700: '#16216a',
          800: '#10184c',
          900: '#090e2e',
        },
        "dark-slate": {
          50: '#0f172a',
          100: '#0e1526',
          200: '#0c1222',
          300: '#0b101d',
          400: '#090e19',
          500: '#080c15',
          600: '#060911',
          700: '#04070d',
          800: '#030508',
          900: '#010204'
        }
      },
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      transitionProperty: {
        'borderColor': 'borderColor'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
