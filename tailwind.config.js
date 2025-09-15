/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Forest Green Palette
        forest: {
          50: '#f0f4f1',
          100: '#dce7df',
          200: '#b9d0c2',
          300: '#8fb19d',
          400: '#6a9278',
          500: '#52796f', // Sage Green
          600: '#426159',
          700: '#354e47',
          800: '#2a3d37',
          900: '#1b4332', // Deep Forest Green
          950: '#0f2419',
        },
        // Premium Cream Palette
        cream: {
          50: '#fefefe',
          100: '#f8f6f0', // Warm Cream
          200: '#f2ede3',
          300: '#e8dfd0',
          400: '#dcceb5',
          500: '#cfba96',
          600: '#c0a578',
          700: '#a68a5f',
          800: '#8b7250',
          900: '#725e42',
          950: '#3d3222',
        },
        // Premium Brown Palette
        earth: {
          50: '#faf8f5',
          100: '#f4f0e8',
          200: '#e7ddd0',
          300: '#d6c5b0',
          400: '#c2a88c',
          500: '#b3926f',
          600: '#a67f5f',
          700: '#8b5a3c', // Rich Brown
          800: '#724a32',
          900: '#5d3e2b',
          950: '#312016',
        },
        // Premium Gold Accent
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#d4af37', // Gold
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        // Soft Gray for Text
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#6c757d', // Soft Gray
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
