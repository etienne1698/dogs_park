/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#41245C",
        "secondary": "#EBA059",
        "grey":"#F1F1F1",
        "greyText": "#7C7C7C",
        "orangeLink":"#EBA059"
      },
      margin: {
        "pageX": "1rem",
        "pageY": "5rem"
      },
    },
    fontSize: {
      h1: [
        "32px",
        {
          lineHeight: "44px",
          fontWeight: "700",
        },
      ],
      button: [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "500",
        },
      ],
    },
  },
  plugins: [],
};
