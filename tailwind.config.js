/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        'primary-accent': '#FF6B6B', // A vibrant red
        'primary-text': '#1E3F66', // A dark gray for text
        'bg-light': '#ADD8E6', // A light blue for backgrounds
        'bg-dark': '#607881', // A dark blue  for dark mode backgrounds
      },
    },
  },
  plugins: [],
};
