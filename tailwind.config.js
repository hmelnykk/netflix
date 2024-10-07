/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      'backgroundImage': {
        'hero': "url('/src/images/netflix-bg.png')",
        'logo': "url('/src/images/netflix-logo.png')",
      }
    },
  },
  plugins: [],
}