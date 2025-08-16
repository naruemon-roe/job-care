// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
 plugins: [require("daisyui")],
daisyui: {
  themes: ["light", "dark", "cupcake"], // ✅ หรือใช้ theme อื่น เช่น corporate, retro
},
};
