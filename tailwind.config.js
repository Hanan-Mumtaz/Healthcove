/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { 
      colors: {
        Dg: '#112E3E', 
        Mg: '#114145',
        Lg: '#0E6252',
        Mz:'#136153',
        MT: '#4C917C',
    },},
  },
  plugins: [],
};
