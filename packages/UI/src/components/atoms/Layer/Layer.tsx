import styled, { css } from 'styled-components';
import type { ThemeType } from 'styles/theme';
import { shadowStyles } from '../Shadow';
import type { LayersProps } from '.';

function addRainbowToLayer(theme: ThemeType, hasRainbow?: boolean) {
  return hasRainbow
    ? `linear-gradient(
    to right,
    ${theme.colors.ORANGE} 25%,
    ${theme.colors.YELLOW} 25% 50%,
    ${theme.colors.LIGHT_BLUE} 50% 75%,
    ${theme.colors.BLUE} 75% 100%
  )`
    : '';
}

const Layer = styled.div<LayersProps>`
  ${({ type, interactive }) => {
    switch (type) {
      case 'light':
        return css`
          background-color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
          ${shadowStyles.shadow500};
          &:hover {
            background-color: ${({ theme }) =>
              interactive && theme.colors.GREYSCALE_OFF_BLACK};
          }
        `;
      case 'dark':
        return css`
          background-color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
          ${shadowStyles.highlight300};
          &:hover {
            background-color: ${({ theme }) =>
              interactive && theme.colors.GREYSCALE_OFF_BLACK};
          }
        `;
      default:
        break;
    }
  }}

  &::after {
    content: '';
    display: ${({ hasRainbowBottom }) => (hasRainbowBottom ? 'block' : 'none')};
    width: 100%;
    height: 5px;
    background-image: ${({ theme, hasRainbowBottom }) =>
      addRainbowToLayer(theme, hasRainbowBottom)};
  }

  &::before {
    content: '';
    display: ${({ hasRainbowTop }) => (hasRainbowTop ? 'block' : 'none')};
    width: 100%;
    height: 5px;
    background-image: ${({ theme, hasRainbowTop }) =>
      addRainbowToLayer(theme, hasRainbowTop)};
  }
`;

export default Layer;
