/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', 
  theme: {
    extend: {
      colors: {
        primaryAccent: '#FF6B6B',
        primaryText: '#1E3F66',
        bgLight: '#ADD8E6',
        bgDark: '#607881',
      },
    },
  },
  plugins: [],
};