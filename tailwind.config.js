/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monst: ["Montserrat"],
        ubunt: ["Ubuntu"],
      },
    },
  },
  plugins: [require("daisyui")],
};