/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{html,js,jsx,ts,tsx}' ],
  theme: {
    extend: {
      fontFamily: {
        kusansagi: [ 'Kusansagi', 'sans-serif' ],
        avenir: [ 'Avenir', 'sans-serif' ],
      },
    },
  },
  plugins: [],
};
