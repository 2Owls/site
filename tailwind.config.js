const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        owlgreen: {
          light: '#84ECDC4',
          DEFAULT: '#349090',
          dark: '#1A535C',
        },
        owlwhite: {
          DEFAULT: '#F7FFF7',
        },
        owlred: {
          light: '#ff7ce5',
          DEFAULT: '#E63946',
          dark: '#ff16d1',
        },
        owlyellow: {
          light: '#DBD3AD ',
          DEFAULT: '#EAD8B0' ,
          dark: '#FFE66D',
        },    
        owlgray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#4c4c4c',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        },
        jkhorange: {
          DEFAULT: '#FC6156',
        }, 
        togetherblue: {
          DEFAULT: '#172A3A',
        }, 
        homerapurple: {
          DEFAULT: '#291226',
        },          
      },  
      height: theme => ({
        "screen/34": "75vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),     
    },




  },
  variants: {
     display: ['responsive', 'hover', 'focus'],    
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

