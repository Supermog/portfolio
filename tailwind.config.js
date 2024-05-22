/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-section": "url('./src/assets/background.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-animated")],
};
