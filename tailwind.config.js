/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#41245C",
        "secondary": "#EBA059",
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
    },
  },
  plugins: [],
};
