/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/*.{html,js}'],
  important: true,
  theme: {
    extend: {},
    myCustomClass: {
      backgroundColor: '#FF0000',
      color: '#FFFFFF',
      fontWeight: 'bold',
      padding: '4px',
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        h1: { fontSize: '2em', fontWeight: 'bold' },
        h2: { fontSize: '1.4em', fontWeight: 'bold' },
        h3: { fontSize: '1em', fontWeight: 'bold' },
      });
    }),
  ],
};
