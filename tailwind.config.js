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
        'auto-fill-minmax': 'repeat(auto-fill, minmax(240px, 1fr))',
      },
    },
  },
  plugins: [],
};
