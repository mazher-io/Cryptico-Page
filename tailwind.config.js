/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkgray": "#a9a9a9",
        "button-color": '#5063F0',
        'custom-blue-1': 'rgba(103, 132, 255, 0.2)',
        'custom-blue-2': 'rgba(103, 132, 255, 0.1)',
        'custom-radial': 'radial-gradient(circle at 50% 50%, rgba(103, 132, 255, 0.15) 0%, transparent 70%)',

        "Footer": "#292f66",
      },
      fontFamily: {
        // Adding the Poppins font family
        sans: ['Syne', 'sans-serif'],

        'custom-red': '#506932' ,

        
      },
    },
  },
  plugins: [],
}
