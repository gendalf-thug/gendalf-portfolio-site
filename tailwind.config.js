/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        castle: '1100px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
