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
        dark: "#242435",
        white: "#ffffff",
        black: "#13131d",
        light: "#ACACAC",
      },
    },
  },
  plugins: [],
};
