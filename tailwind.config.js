/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgPrimary: '#00009F',
        bgSecondary: '#0066FF'
      },
      screens: {
        'tall': {
            'raw': `only screen and (max-height: 960px) and (max-width: 480px)`
        },
        'wide': {
            'raw': `only screen and (max-height: 480px) and (max-width: 960px)`
        },
        'portrait': {
            'raw': '(orientation: portrait)'
        },
        'landscape': {
            'raw': '(orientation: landscape)'
        },
        'mobilePortrait': {
          'raw': '(orientation: portrait) and (max-width: 480px)'
        },
        'mobileLandscape': {
          'raw': '(orientation: landscape) and (max-height: 480px)'
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),  require('tailwindcss-3d'), require("@nextui-org/react")],
};
