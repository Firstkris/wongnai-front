/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red_primary: "#ef4444",
        gray_primary: "#f6f6f6",
        gray_secondary: "#666666",
      },
    },
  },
  plugins: [],
};
