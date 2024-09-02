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
        'auto-fit-minmax': 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
      },
    },
  },
  plugins: [],
};
