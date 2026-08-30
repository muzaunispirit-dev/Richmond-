/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        page: '#EEF3F7',
        canvas: '#FFFFFF',
        accent: '#B58A4A',
        'accent-dark': '#9A7339',
        primary: '#111111',
        secondary: '#8A8A8A',
        border: '#EEEEEA',
      },
      maxWidth: {
        site: '1240px',
      },
    },
  },
  plugins: [],
};
