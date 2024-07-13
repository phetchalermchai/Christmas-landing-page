/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'color-red':'#DC3845',
        'color-red-alt':'#D42B39',
        'color-text':'#5D5656',
        'color-title':'#282525',
        'color-text-light':'#918889',
        'color-body':'#FFFFFF',
        'color-container':'#FFFFFF',
        'color-body-dark':"#251819",
        'color-container-dark':"#2F2223",
        'color-text-color-dark':"#C2BDBD",
        'color-title-color-dark':"#F3F2F2"
      },
      gridTemplateColumns: {
        '2-w-200':'repeat(2, minmax(0, 200px))',
        '3-w-200':'repeat(3, minmax(0, 200px))'
      }
    },
  },
  plugins: [],
}

