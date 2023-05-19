/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
             "color-primary":"#01051e",
             "color-primary-light": "#020726",
             "color-primary-dark": "#010417",
             "color-secondary": "#36B5EE",
             "color-gray": "#333",
             "color-white": "#fff",
             "color-blob": "#A427DF",
             
      }
    },
    container:{
      center: true,
      padding:{
        default:"20px",
        md:"50px",
      }
    },
    fontFamily:{
      'sans': ['Figtree', 'sans-serif'],
      'mono': ['Montserrat', 'sans-serif'],
      'cursive':['Rubik Pixels', 'cursive']

    }
  },
  plugins: [],
}

