/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
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
    extend: {
      width: {
        '128': '32rem',
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin')
  ],
}
