import styled, { css } from "styled-components";


interface ButtonProps {
  bgColor?: string
  textColor?: string
  marginTop?: number
  width?: number
  fontSize?: number
  hero?: boolean
  modal?: boolean
  intro?: boolean
}


const shadeColor = (color: string, percent: number): string => {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt(((R * (100 + percent)) / 100).toString(), 10);
  G = parseInt(((G * (100 + percent)) / 100).toString(), 10);
  B = parseInt(((B * (100 + percent)) / 100).toString(), 10);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR =
    R.toString(16).length === 1 ? `0${R.toString(16)}` : R.toString(16);
  const GG =
    G.toString(16).length === 1 ? `0${G.toString(16)}` : G.toString(16);
  const BB =
    B.toString(16).length === 1 ? `0${B.toString(16)}` : B.toString(16);

  return `#${RR}${GG}${BB}`;
};

const colorUnderButtons = (hexColor: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
  return result
    ? `rgba(${parseInt(result[1], 16) - 102},${parseInt(result[2], 16) - 55},${parseInt(result[3], 16) - 14
    },1)`
    : null;
};

const onHoverBackgroundColor = (hexColor: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
  return result
    ? `rgb(${parseInt(result[1], 16) + 44},${parseInt(result[2], 16) + 44},${parseInt(result[3], 16) + 44
    })`
    : null;
};
const Button = styled.a<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.headline}, sans-serif;
  background-color: ${({ theme, bgColor }) => bgColor || theme.colors.ACCENT_1};
  color: ${({ theme, textColor }) => textColor || theme.colors.NEUTRAL_2};
  transition: background-color 0.5s, color 0.5s;

  width: ${({ width }) => `${width}em` || ""};
  border: 0px;
  border-bottom: 3px solid
    ${({ theme, bgColor }: { theme: any, bgColor: string }) =>
    colorUnderButtons(bgColor || theme.colors.ACCENT_1)};
  cursor: pointer;
  font-size: ${({ fontSize }) => `${fontSize}rem` || "1.5rem"};
  margin-top: ${({ marginTop }) => `${marginTop}rem` || ""};
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 16px;
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
    color: ${({ theme, bgColor }) =>
    (bgColor && shadeColor(bgColor, -40)) || theme.colors.ACCENT_3};
  }
`;
export default Button;
