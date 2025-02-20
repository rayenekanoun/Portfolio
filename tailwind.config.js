module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Scanning all JS, TS, JSX, and TSX files in the src directory
    './public/**/*.{html}', // Scanning HTML files in the public directory (if you use them for static assets)
  ],
  theme: {
    extend: {},
  },
  important: true,
  plugins: []
};
