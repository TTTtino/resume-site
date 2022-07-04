/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
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
      },
      fontFamily:{
        sans:['Roboto', ...defaultTheme.fontFamily.sans]
      },
    
    },
  },
  plugins: [],
}
