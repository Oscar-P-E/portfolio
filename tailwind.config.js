/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Concourse T4", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Advocate C61", "sans-serif"],
        "sans-extralight": [
          "Concourse T2",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        "heading-wider": ["Advocate C61", "sans-serif"],
      },
    },
  },
  plugins: [],
};
