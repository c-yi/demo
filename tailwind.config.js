/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,  // 添加这一行
  },
  plugins: [],
};
