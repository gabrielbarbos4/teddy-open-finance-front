/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-neutral-600": "var(--clr-neutral-600)",
        "clr-neutral-700": "var(--clr-neutral-700)",
        "clr-orange": "var(--clr-orange)",
      }
    },
  },
  plugins: [],
}

