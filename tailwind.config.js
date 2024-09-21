/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      gridTemplateColumns: {
        // Personalized clase for the products grid
        'auto-fit': 'repeat(auto-fit, 240px)',
      },
    },
  },
  plugins: [],
};
