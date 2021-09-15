module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: { 

    extend: {  filter: { // defaults to {}
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
    },
    backdropFilter:['hover','focus'], // defaults to {}

     
      backgroundImage: theme => ({
        'first-half': "url('/src/components/images/firsthalf.jpg')",
        'second-half': "url('/src/components/images/secondhalf.jpg')",
       })
    
    },
  },
  variants: {
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'], // defaults to ['responsive']
    extend: {
       borderWidth: ['hover', 'focus'],
       borderCollapse: ['hover', 'focus'],
       borderRadius: ['hover', 'focus'],
       backdropBlur: ['hover', 'focus'],
       filter: ['hover', 'focus'],
       borderColor: ['active'],
    },
  },
  plugins: [ require('tailwindcss-filters'),],
}
