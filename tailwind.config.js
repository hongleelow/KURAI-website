/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kurai: {
          dark: '#000B44',
          'dark-80': '#1A2560',
          'dark-60': '#33407C',
          royal: '#3A54EC',
          'royal-light': '#5A72F0',
          light: '#4DA8E7',
          'light-soft': '#7DC0ED',
          ice: '#E8F4FC',
          white: '#FAFCFF',
          amber: '#F59E0B',
          'amber-dark': '#D97706',
          'amber-light': '#FCD34D',
          cream: '#F0EEEB',
          'cream-dark': '#E4E1DC',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
