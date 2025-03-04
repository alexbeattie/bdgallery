/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ff9e7d',
          DEFAULT: '#ff6b6b',
          dark: '#ff5252',
        },
        accent: {
          light: '#ffd670',
          DEFAULT: '#ffc107',
          dark: '#ffb300',
        },
      },
    },
  },
  plugins: [],
}