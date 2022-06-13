module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "hsl(0, 100%, 74%)",
        "primary-green": "hsl(154, 59%, 51%)",
        "accent-blue": "hsl(248, 32%, 49%)",
        "dark-blue": "hsl(249, 10%, 26%)",
        "grayish-blue": "hsl(246, 25%, 77%)",
      },
      fontFamily: {
        "poppins": `Poppins, sans-serif`,
      },
      backgroundImage:{
        "intro-mobile": `url("/src/assets/images/bg-intro-mobile.png")`,
        "intro-desktop": `url("/src/assets/images/bg-intro-desktop.png")`,
        "icon-error": `url("/src/assets/images/icon-error.svg")`,
      }
    },
  },
  plugins: [],
}
