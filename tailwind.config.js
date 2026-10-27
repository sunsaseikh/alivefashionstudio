/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF8F0',
          100: '#F7F0DF',
          200: '#EDE0BF',
          300: '#E0CB9B',
          400: '#D4B574',
          500: '#C5A059',
          600: '#A9843F',
          700: '#89692D',
          800: '#6E5325',
          900: '#5A4321',
        },
        royal: {
          900: '#0F1115',
          800: '#171A21',
          700: '#222733',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Hind Siliguri"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
