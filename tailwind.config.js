const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lato"', ...defaultTheme.fontFamily.sans],
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
        open_sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        'fylo-logo-dark': "url('./pages/fylo/images/logo-dark-mode.svg')",
        'fylo-logo-light': "url('./pages/fylo/images/logo-light-mode.svg')",
        'fylo-curvy-dark': "url('./pages/fylo/images/bg-curvy-dark-mode.svg')",
        'fylo-curvy-light':
          "url('./pages/fylo/images/bg-curvy-light-mode.svg')",
      }),
    },
  },
  plugins: [],
};
