
const { filterTokensByType } = require("./fns");
const tokens = require("./output/core.json")

const categories = [
  "color",
  "lineHeights",
  "letterSpacing",
  "paragraphSpacing",
  "boxShadow",
  "dropShadow",
  "innerShadow",
  "fontFamilies",
  "fontWeights",
  "typography",
  "textCase",
  "textDecoration",
  "borderRadius",
  "spacing",
  "sizing",
  "fontSizes"
]


/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: categories.map(category => filterTokensByType(category, tokens)).reduce(((r, c) => Object.assign(r, c)), {}),
  variants: {},
  plugins: [],
}
