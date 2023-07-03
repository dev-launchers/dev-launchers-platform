const { filterTokensByType } = require('./fns');
const tokens = require('./output/core.json');

const colors = filterTokensByType('color', tokens);

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors,
    },
  },
  variants: {},
  plugins: [],
};
