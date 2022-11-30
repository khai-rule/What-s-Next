/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: { 
    colors: {
      "pale-yellow" : "#EDEEE9",
      "black" : "#000000",
      "white" : "#ffffff",
      "fgreen" : "#33403C"
    },
    fontFamily: {
      'serif': ['EB Garamond', "serif"],
      'sans-serif': ['Karla', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
