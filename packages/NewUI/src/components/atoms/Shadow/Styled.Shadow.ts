import { css } from 'styled-components';

const innerShadow100 = css`
  box-shadow: 2px 2px 6px 0px rgba(127, 126, 127, 0.5) inset;
`;
const shadow100 = css`
  box-shadow: 0px 2px 2px 2px rgba(51, 51, 51, 0.08);
`;
const shadow200 = css`
  box-shadow: 0px 4px 6px 3px rgba(51, 51, 51, 0.08);
`;
const shadow300 = css`
  box-shadow: 0px 6px 10px 5px rgba(51, 51, 51, 0.1);
`;
const shadow400 = css`
  box-shadow: 0px 10px 14px 8px rgba(51, 51, 51, 0.08);
`;
const shadow500 = css`
  box-shadow: 0px 10px 18px 10px rgba(127, 126, 127, 0.25);
`;

export const shadowStyles = {
  innerShadow100,
  shadow100,
  shadow200,
  shadow300,
  shadow400,
  shadow500,
};
