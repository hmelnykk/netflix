/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  plugins: [
    require('daisyui'),
  ],
  theme: {
    extend: {
      'backgroundImage': {
        'cruella-poster': "url('/src/images/cruella-poster.jpg')",
        'dune-poster': "url('/src/images/dune-poster.jpg')",
        'father3-poster': "url('/src/images/father3-poster.jpg')",
        'gk-poster': "url('/src/images/the-green-knight-poster.jpg')",
        'hero': "url('/src/images/netflix-bg.png')",
        'logo': "url('/src/images/netflix-logo.png')",
        'nttd-poster': "url('/src/images/no-time-to-die-poster.jpg')",
        'sc-poster': "url('/src/images/shang-chi-poster.jpg')",
      }
    },
  },
}
