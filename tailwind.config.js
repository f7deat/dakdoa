/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}

