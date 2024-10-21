/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: { 
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      maxHeight: {
        'custom-max': '500px'
      },
      minHeight: {
        'custom-min': '500px'
      },
      colors: {
        base: '#ff9735',
        basehover: '#ff830d',
        background: '#EBE9E1',
        boxes: '#e43d12',
        profiles1: '#fff7ed',
        profiles2: '#fef0df',
        buttons: '#4A90E2',
        buttonshover: '#6BAFF5',
        // profiles2: '#efb11d',
        // profiles1: '#ebbf57',
      },
    },
  },
  plugins: [],
}

