/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      spacing: {
        'lg-sidebar': '16rem',
        sidebar: '4rem',
        navbar: '4.2rem'
      },
    },
  },
  plugins: [],
}
