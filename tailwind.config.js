/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
theme: {
  extend: {
    colors: {
        neon: {
          dark: '#23FF00',   // header/nav background
          DEFAULT: '#23FF00',// primary “bright” green
          light: '#39FF14',  // hover / highlights
          50: '#E7FFE7',     // very light green for table rows
        }
    }
  },
},
  plugins: [],
}

