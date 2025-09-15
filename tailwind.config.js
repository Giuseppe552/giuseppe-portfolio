module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/index.html',
  ],
  safelist: [
    // Safelist dynamic width classes for progress bars
    ...Array.from({ length: 21 }, (_, i) => `w-[${i * 5}%]`),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
