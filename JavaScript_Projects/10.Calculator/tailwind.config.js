/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily:{
      roboto:["Roboto", "sans-serif"]
    },
    extend: {
      boxShadow:{
        sm:'0px 0px 50px 5px #c4c4c4',
        lg:'0px 0px 50px 1px #c4c4c4'
      },
    },
  },
  plugins: [],
}