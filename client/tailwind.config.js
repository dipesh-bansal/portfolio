/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
      },
      fontFamily: {
        space: ["Space Mono", "monospace"],
        code: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
} 