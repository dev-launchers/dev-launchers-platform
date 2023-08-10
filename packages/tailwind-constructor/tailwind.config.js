
const { filterTokensByType } = require("./fns");
const tokens = require("./output/core.json")

/** @type {import('tailwindcss').Config} */
module.exports = {
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
    colors: filterTokensByType('color', tokens),
    fontFamily: filterTokensByType('fontFamilies', tokens),
    spacing: filterTokensByType('spacing', tokens),
  },
  variants: {},
  plugins: [],
};
