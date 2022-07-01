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
        "primary-blue": {
          400: '#00aeef', 
          800: '#2d388a'
        },
      },
      fontFamily:{
        sans:['Roboto', ...defaultTheme.fontFamily.sans]
      },
    
    },
  },
  plugins: [],
}
