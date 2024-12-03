/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        maincontent: "20rem",
      },
      lineHeight: {
        bottomcontent: "0.15rem",
      },
      width: {
        115: "115rem",
      },
      left: {
        "90%": "90%",
      },
    },
  },
  plugins: [],
};
