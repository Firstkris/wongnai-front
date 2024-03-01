/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red_primary: "#ef4444",
        red_primary_hv: "#dd4040", //hover
        gray_primary: "#f6f6f6", // อ่อน
        gray_primary_hv: "#eae8e8", // hover อ่อน
        gray_secondary: "#666666", // เข้ม
        blue_primary: "#0093E8", //Button เข้ม
        blue_primary_hv: "#0288d1", //Button เข้ม
        blue_secondary: "#bee6fa", // อ่อน
        blue_secondary_hv: "#a4dbf4", // อ่อน hover
      },
    },
  },
  plugins: [],
};
