/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      'backgroundImage': {
        'hero': "url('/src/images/netflix-bg.png')",
        'logo': "url('/src/images/netflix-logo.png')",
        'cruella-poster': "url('/src/images/cruella-poster.jpg')",
        'dune-poster': "url('/src/images/dune-poster.jpg')",
        'father3-poster': "url('/src/images/father3-poster.jpg')",
        'nttd-poster': "url('/src/images/no-time-to-die-poster.jpg')",
        'sc-poster': "url('/src/images/shang-chi-poster.jpg')",
        'gk-poster': "url('/src/images/the-green-knight-poster.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
