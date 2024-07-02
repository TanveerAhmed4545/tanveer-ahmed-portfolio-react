/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6b88ff',
        secondary: '#1975bb'
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#889EFA",
          "secondary": "#1975bb",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
        },
      },
      "dark",
      "light",
    ]
  },
  plugins: [
    require('daisyui'),
  ],
}

