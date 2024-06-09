/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'poppins': ["Poppins"],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('https://www.imbastudio.uz/img/background+overlay.jpg')",
        'bg-main': "url('https://www.imbastudio.uz/img/back.jpg')",
        'section3': "url('https://www.imbastudio.uz/img/back%202.jpg')",
        'photo-sediting': "url('https://www.imbastudio.uz/img/background+overlay2.jpg')",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        grey: '#F5F5F5',
        heroColor: '#DDDDDD',
      }
    },
  },
  plugins: [],
})

