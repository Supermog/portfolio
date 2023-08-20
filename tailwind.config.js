/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "home-section-bg": "url('@/assets/background.jpg')",
    },
  },
  plugins: [],
};
