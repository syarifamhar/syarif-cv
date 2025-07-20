/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#f9f6f3',
          100: '#f3ede7',
          200: '#e6d7c7',
          300: '#d2bfa7',
          400: '#bfa184',
          500: '#9e8c7d',
          600: '#7c6b5e',
          700: '#4a3622',
          800: '#33251a',
          900: '#23180f',
        },
      },
    },
  },
  plugins: [],
}

