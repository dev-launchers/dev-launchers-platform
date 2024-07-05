import type { DefaultTheme } from 'styled-components';
import styled from 'styled-components';
import { typographyStyles } from '../Typography';
import type { Props } from './Tags';

type StyledProps = Pick<Props, 'bgColor' | 'txtColor'>;
function colorizeBgColor(theme: DefaultTheme, bgColor: StyledProps['bgColor']) {
  switch (bgColor) {
    case 'GREYSCALE_CHARCOAL':
      return theme.colors.GREYSCALE_CHARCOAL;
    case 'GREYSCALE_BLACK':
      return theme.colors.GREYSCALE_BLACK;
    case 'GREYSCALE_WHITE':
      return theme.colors.GREYSCALE_WHITE;
    case 'YELLOW_200':
      return theme.colors.YELLOW_200;
    case 'LIGHT_BLUE_200':
      return theme.colors.LIGHT_BLUE_200;
    case 'BLUE_200':
      return theme.colors.BLUE_200;
    case 'ORANGE_200':
      return theme.colors.ORANGE_200;
  }
}

function colorizeTextColor(
  theme: DefaultTheme,
  txtColor: StyledProps['txtColor']
) {
  switch (txtColor) {
    case 'GREYSCALE_BLACK':
      return theme.colors.GREYSCALE_BLACK;
    case 'GREYSCALE_WHITE':
      return theme.colors.GREYSCALE_WHITE;
  }
}

export const Tag = styled.div<StyledProps>`
  ${typographyStyles['button']}
  background-color: ${({ theme, bgColor }) => {
    if (bgColor === 'GREYSCALE_CHARCOAL')
      return theme.colors.GREYSCALE_CHARCOAL;
    else if (bgColor === 'GREYSCALE_BLACK') return theme.colors.GREYSCALE_BLACK;
    else if (bgColor === 'GREYSCALE_WHITE') return theme.colors.GREYSCALE_WHITE;
    else if (bgColor === 'YELLOW_200') return theme.colors.YELLOW_200;
    else if (bgColor === 'LIGHT_BLUE_200') return theme.colors.LIGHT_BLUE_200;
    else if (bgColor === 'BLUE_200') return theme.colors.BLUE_200;
    else if (bgColor === 'ORANGE_200') return theme.colors.ORANGE_200;
  }};
  color: ${({ theme, txtColor }) => colorizeTextColor(theme, txtColor)};
  border-radius: 1.5rem;
  width: fit-content;
  text-align: center;
  padding: 0.5rem 1rem;
`;
export const CloseButton = styled.button<StyledProps>`
  ${typographyStyles['button']}
  background-color: ${({ theme, bgColor }) => colorizeBgColor(theme, bgColor)};
  color: ${({ theme, txtColor }) => colorizeTextColor(theme, txtColor)};
  border: none;
  margin-left: 0.5;
  cursor: pointer;
  padding-left: 0.5rem;
`;
export const CloseIcon = styled.svg<StyledProps>`
  background-color: ${({ theme, bgColor }) => colorizeBgColor(theme, bgColor)};
  color: ${({ theme, txtColor }) => colorizeTextColor(theme, txtColor)};
  width: 1rem;
`;
