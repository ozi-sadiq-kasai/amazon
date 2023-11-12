/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     backgroundColor:{
      'header':'#252422',
      'search':'#F3A847',
      'menu':'#232F3E',
     },
      fontFamily: {
       "lato": ['Lato', 'sans-serif'] 
      },
     textColor:{
      'orange-text':'#F3A847'
     },
    fontSize: {
      smals: ['12px', '20px'],
      bigs: ['16px', '24px'],
      large: ['20px', '28px'],
      xtl: ['24px', '32px'],
    },
     screens: {
      tiny:'599px',
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    width: {
     small:'150px'
    }
    },
  },
  plugins: [],
}