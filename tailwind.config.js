/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#feabb4",
        "primary-dark": "#ff7688",
        "dark":"#333333",
        "text-gray":"#6a6a6a"
      }
    },
  },
  plugins: [],
}