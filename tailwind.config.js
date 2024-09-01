/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px',
        'md': '720px',
        'lg': '1080px',
      },
    },
  },
  plugins: [],
}

