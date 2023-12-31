/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Concourse T4", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Advocate C51", "sans-serif"],
        "sans-extralight": [
          "Concourse T2",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        "heading-wider": ["Advocate C63", "sans-serif"],
        mono: ["ProggyClean Nerd Font", "ui-monospace", "monospace"],
      },
      colors: {
        "neutral-850": "rgb(31, 31, 31)",
      },
    },
  },
  plugins: [],
};
