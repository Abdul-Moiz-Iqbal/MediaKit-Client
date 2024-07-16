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
        DashPrimary :'#FC076F',
        secondary: '#1B1B1B',
        secondaryblack: '#616161',
        secondarygrey: '#F6F6F',
        secondaryOrange:'#FC076F',
        secondaryYellow:'#F48517',
        secondaryGreen:'#F48517'
      },
      boxShadow:{
        'card-Elevation': '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
        'card-Shadow': '4px 4px 10px #F0F0F0',
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