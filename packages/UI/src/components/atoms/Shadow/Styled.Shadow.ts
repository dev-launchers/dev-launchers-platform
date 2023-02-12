const innerShadow100 = `box-shadow: 2px 2px 6px 0px rgba(127, 126, 127, 0.5) inset;`;
const shadow100 = `box-shadow: 0px 2px 2px 2px rgba(51, 51, 51, 0.08);`;
const shadow200 = `box-shadow: 0px 4px 6px 3px rgba(51, 51, 51, 0.08);`;
const shadow300 = `box-shadow: 0px 6px 10px 5px rgba(51, 51, 51, 0.1);`;
const shadow400 = `box-shadow: 0px 10px 14px 8px rgba(51, 51, 51, 0.08);`;
const shadow500 = `filter: drop-shadow(0px 10px 10px rgba(127, 126, 127, 0.25));`;

const highlight100 = `box-shadow: 2px 2px 8px rgba(127, 126, 127, 0.32);`;
const highlight200 = `box-shadow: 2px 2px 8px rgba(127, 126, 127, 0.48);`;
const highlight300 = `box-shadow: 2px 2px 8px rgba(127, 126, 127, 0.72);`;
const highlight400 = `box-shadow: 2px 2px 8px rgba(127, 126, 127, 0.88);`;
const highlight500 = `box-shadow: 2px 2px 8px #7F7E7F;`;
const innerHighlight100 = `box-shadow: inset 2px 2px 8px rgba(127, 126, 127, 0.32);`;
const innerHighlight200 = `box-shadow: inset 2px 2px 8px rgba(127, 126, 127, 0.48);`;
const innerHighlight300 = `box-shadow: inset 2px 2px 8px rgba(127, 126, 127, 0.72);`;
const innerHighlight400 = `box-shadow: inset 2px 2px 8px rgba(127, 126, 127, 0.88);`;
const innerHighlight500 = `box-shadow: inset 2px 2px 8px #7F7E7F;`;

export const shadowStyles = {
  innerShadow100,
  shadow100,
  shadow200,
  shadow300,
  shadow400,
  shadow500,
  highlight100,
  highlight200,
  highlight300,
  highlight400,
  highlight500,
  innerHighlight100,
  innerHighlight200,
  innerHighlight300,
  innerHighlight400,
  innerHighlight500,
} as const;
