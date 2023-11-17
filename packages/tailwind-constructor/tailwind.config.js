
const { withTV } = require("tailwind-variants/transformer");
const { filterTokensByType } = require("./fns");
const tokens = require("./output/core.json")

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: {
    relative: true,
    files: [
      '../UI/src/components/**/*.{html,js,jsx,tsx}',
      '../../apps/app/src/**/*.{html,js,jsx,ts,tsx}',
      '../../apps/dev-recruiters/src/**/*.{html,js,jsx,ts,tsx}',
      '../../apps/ideaspace/src/**/*.{html,js,jsx,ts,tsx}',
      '../../apps/site-projects/src/**/*.{html,js,jsx,ts,tsx}',
      '../../apps/website/src/**/*.{html,js,jsx,ts,tsx}',
    ],
  },
  // darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'current': 'currentColor',
      ...filterTokensByType('color', tokens)
    },
    fontFamily: filterTokensByType('fontFamilies', tokens),
    spacing: filterTokensByType('spacing', tokens),
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    }
  },
  variants: {},
  plugins: [require('tailwind-hamburgers')],
});
