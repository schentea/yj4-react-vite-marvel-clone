/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "special-font": "Moirai One",
        "special-font2": "Dokdo",
      },
      colors: {
        "main-dark": "#202020",
      },
    },
  },
  plugins: [],
};
