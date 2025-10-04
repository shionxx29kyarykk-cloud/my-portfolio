/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" 
  ],
  theme: {
    extend: {
      fontFamily: {
        zen: ['"Zen Maru Gothic"', 'sans-serif'],
        onest: ['"Onest"', 'sans-serif'],
      },
      colors:{
         gray: {
            100:'#F7F7F7',
            200:'#EFEFEF',
            300:'#DCDCDC',
            400:'#9B9B9B',
            500:'#505050'
         }
      },
      borderWidth: {
        '2.5': '2.5px',
      }
    },
  },
  plugins: [],
}