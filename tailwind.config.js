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
          light: '#ff7ce5',
          DEFAULT: '#DBD3AD',
          dark: '#FFE66D',
        },    
        owlgray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#333333',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        },  
      },  
    }, 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

