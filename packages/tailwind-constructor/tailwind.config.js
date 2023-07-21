
const { filterTokensByType } = require("./fns");
const tokens = require("./output/core.json")

const colors = filterTokensByType('color', tokens)
const borderRadius = filterTokensByType('borderRadius', tokens)

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    borderRadius
  },
  variants: {},
  plugins: [],
}
