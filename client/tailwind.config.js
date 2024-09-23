/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: { 
      colors: {
        base: '#ff9735',
        basehover: '#ff830d'
      },
    },
  },
  plugins: [],
}

