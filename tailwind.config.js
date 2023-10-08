/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#3E497D",
        highlight: "#E6B596",
        highlightDimmed: "#B4ACA8",
        highlightDarken: "#d19773",
        regular: "#3E497D",
      },
      backgroundColor: {
        main: "#CCDCE3",
        highlight: "#E6B596",
        highlightDimmed: "#B4ACA8",
        highlightDarken: "#d19773",
      },
    },
  },
  plugins: [],
};
