/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lux: {
          blue: '#0B2545',
          royal: '#133C55',
          cyan: '#38A3A5',
          light: '#84D2F6',
          white: '#FFFFFF',
          green: '#25D366'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
