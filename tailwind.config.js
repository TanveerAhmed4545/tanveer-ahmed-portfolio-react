/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6B88FF",
        secondary: "#1975bb",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6B88FF",
          secondary: "#1975bb",
          accent: "#37cdbe",
          neutral: "#3d4451",
        },
      },
      "dark",
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
