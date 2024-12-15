/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-grey': '#5e5c5c',   // sign up button color
        'custom-dark-grey': '#383737',   // sign up button hover color
        'custom-dark-pista': '#A5C5B7',   // Pistachio color
        'custom-pista': '#A5C5B7',   // Pistachio color
      },
    },
  },
  plugins: [],
}

