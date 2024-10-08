/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: { 
      maxHeight: {
        'custom-max': '500px'
      },
      minHeight: {
        'custom-min': '500px'
      },
      colors: {
        base: '#ff9735',
        basehover: '#ff830d'
      },
    },
  },
  plugins: [],
}

