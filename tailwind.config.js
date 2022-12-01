/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        button: "0 0 20px 20px #5135FF inset",
      },
      backgroundImage: {
        hero: "url('../public/images/background.png')",
      },
      fontFamily:{
        cinnamonbold: "cinnamonbold",
        cinnamonextralight: "cinnamonextralight",
        cinnamonsemibold: "cinnamonsemibold",
        cinnamonextrabold: "cinnamonextrabold"
      }
    },
  },
  plugins: [],
}
