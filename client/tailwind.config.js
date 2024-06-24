const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        primary :'#C908DE',
        secondary: '#1B1B1B',
        secondaryblack: '#616161',
        secondarygrey: '#F6F6F',
        secondaryOrange:'#FC076F',
        secondaryYellow:'#F48517',
        secondaryGreen:'#F48517'
      },
      fontFamily:{
        Poppins:['Poppins','sans-serif']
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}