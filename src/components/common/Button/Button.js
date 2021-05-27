import styled, { css } from "styled-components";

const colorUnderButtons = (hexColor) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
  return result
    ? `rgba(${parseInt(result[1], 16) - 102},${parseInt(result[2], 16) -
        55},${parseInt(result[3], 16) - 14},1)`
    : null;
};

const onHoverBackgroundColor = (hexColor) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
  return result
    ? `rgb(${parseInt(result[1], 16) + 44},${parseInt(result[2], 16) +
        44},${parseInt(result[3], 16) + 44})`
    : null;
};
const Button = styled.a`
  font-family: ${({ theme }) => theme.fonts.headline}, sans-serif;
  background-color: ${({ theme, bgColor }) => bgColor || theme.colors.ACCENT_1};
  color: ${({ theme, textColor }) => textColor || theme.colors.NEUTRAL_2};
  width: ${({ width }) => (width ? width : "")};
  border: 0px;
  border-bottom: 3px solid ${({ theme, bgColor }) =>
    colorUnderButtons(bgColor || theme.colors.ACCENT_1)};
  cursor: pointer;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.5rem")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "")};
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  /* border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "100px"}; */
  font-weight: bolder;

  ${({ hero }) =>
    hero &&
    css`
      width: 80%;
      margin: 0;
      margin-top: 5%;
      text-shadow: none;
      line-height: 1.15;
      display: inline-block;
      text-align: center;
      box-sizing: border-box;
      font-stretch: normal;
      font-variant-east-asian: normal;
      font-variant-numeric: normal;
      font-variant-caps: normal;
      font-variant-ligatures: normal;
      font-style: normal;
    `}
  ${({ modal }) =>
    modal &&
    css`
      display: block;
      width: 95%;
      margin-top: 2%;
      margin-left: auto;
      margin-right: auto;
    `}
  ${({ intro }) =>
    intro &&
    css`
      font-size: 2.5rem;
      margin-top: 2%;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    `}
  &:hover {
    background-color: ${({ theme, bgColor }) =>
      onHoverBackgroundColor(bgColor || theme.colors.ACCENT_2)};
    color: ${({ theme }) => theme.colors.ACCENT_3};
  }
`;
export default Button;
