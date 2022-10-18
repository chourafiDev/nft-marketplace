/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./routes/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00A3FF",
        dark: "#212E48",
        white: "#ffffff",
        black: "#13131d",
        light: "#ACACAC",
      },
      backgroundImage: {
        shape1: 'url("../assets/icons/shape-1.png")',
        shape5: 'url("../assets/icons/shape-5.png")',
        shape6: 'url("../assets/icons/shape-6.png")',
      },
    },
  },
  plugins: [],
};
