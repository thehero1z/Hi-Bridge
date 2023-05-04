/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
             "color-primary":"#01051e",
             "color-primary-light": "#020726",
             "color-primary-dark": "#010417",
             "color-secondary": "#ff7d3b",
             "color-gray": "#333",
             "color-white": "#fff"
             
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
      'sans': ['Roboto', 'sans-serif'],
      'mono': ['Poppins', 'sans-serif'],
      'cursive':['Rubik Pixels', 'cursive']

    }
  },
  plugins: [],
}

