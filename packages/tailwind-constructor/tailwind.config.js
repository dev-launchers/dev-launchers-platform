const { withTV } = require('tailwind-variants/transformer');
const { filterTokensByType } = require('./fns');
const tokens = require('./output/core.json');

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: {
    relative: true,
    files: [
      '../UI/src/components/**/*.{html,js,jsx,tsx,mdx}',
      '../../apps/app/src/**/*.{html,js,jsx,ts,tsx}',
      '../../apps/dev-recruiters/src/**/*.{html,js,jsx,ts,tsx}',
      '../../apps/ideaspace/src/**/*.{html,js,jsx,ts,tsx}',
      '../../apps/site-projects/src/**/*.{html,js,jsx,ts,tsx}',
      '../../apps/website/src/**/*.{html,js,jsx,ts,tsx}',
      '../../apps/user-profile/src/**/*.{html,js,jsx,ts,tsx}',
    ],
  },
  // darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      current: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',
      ...filterTokensByType('color', tokens),
    },
    extend: {
      colors: {
        'sky-blue': '#7dd3fc',
      }},
    data: {
      checked: 'state="checked"', //data-[state=checked]
      open: 'state="open"', //data-[state=open]
      unchecked: 'state="unchecked"', //data-[state='unchecked']
      disabled: 'disabled=""', //data-[disabled='']
      highlighted: 'highlighted=""', //data-[highlighted='']
      sideLeft: 'side="left"', //data-side="left"
      sideRight: 'side="right"', //data-side="right"
      sideBottom: 'side="bottom"', //data-side="bottom"
      sideTop: 'side="top"', //data-side="top"
      alignStart: 'align="start"', //data-align="start"
      alignEnd: 'align="end"', //data-align="end"
      alignCenter: 'align="center"', //data-align="center"
      orientationVertical: 'orientation="vertical"', //data-orientation="vertical"
      orientationHorizontal: 'orientation="horizontal"', //data-orientation="horizontal"
    },
    fontFamily: filterTokensByType('fontFamilies', tokens),
    spacing: filterTokensByType('spacing', tokens),
  },
  variants: {},
  plugins: [require('tailwind-hamburgers')],
});
