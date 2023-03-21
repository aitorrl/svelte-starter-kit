/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Cabin"'],
      },
    },
  },
  plugins: [require("daisyui")],
};
