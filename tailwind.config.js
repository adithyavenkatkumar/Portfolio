/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Nordic Matcha Palette
        matcha: {
          50: '#f4f7f4',
          100: '#e5ede5',
          200: '#c8dbc9',
          300: '#a3c4a6',
          400: '#84a98c', // Sage Matcha
          500: '#52796f', // Rich Forest Matcha
          600: '#354f52', // Deep Moss
          700: '#2f3e46', // Dark Pine
          800: '#22312a',
          900: '#19241f',
        },
        nordic: {
          paper: '#f7f9f5', // Soft warm oat
          oat: '#eef2ec',   // Light Matcha tint
          sand: '#e2e8e0',
          charcoal: '#1d2925',
          moss: '#101714',  // Dark mode background
          cardDark: '#18221e', // Dark mode card
          borderDark: '#293832', // Dark mode border
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
