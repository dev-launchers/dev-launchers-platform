import type { DefaultTheme } from 'styled-components';
import styled from 'styled-components';
// import theme1 from '../../../../../../packages/UI/src/styles/theme';
import { paddingStyles } from '../Padding';
import { shadowStyles } from '../Shadow';
import { typographyStyles } from '../Typography';

interface ButtonProps {
  buttonType: 'primary' | 'secondary' | 'alternative';
  buttonSize: 'standard' | 'xl';
}

const backgroundColorChanger = (
  theme: DefaultTheme,
  buttonType: ButtonProps['buttonType']
) => {
  if (buttonType === 'primary') return theme.colors.BLUE_300;
  if (buttonType === 'secondary') return theme.colors.LIGHT_BLUE_300;
  if (buttonType === 'alternative') return theme.colors.GREYSCALE_WHITE;
};

const colorChanger = (
  theme: DefaultTheme,
  buttonType: ButtonProps['buttonType']
) => {
  if (buttonType === 'primary') return theme.colors.GREYSCALE_WHITE;
  if (buttonType === 'secondary') return theme.colors.GREYSCALE_WHITE;
  if (buttonType === 'alternative') return theme.colors.GREYSCALE_GREY;
};

const Button = styled.button.attrs(({ disabled }) => ({
  disabled,
}))<ButtonProps>`
  ${shadowStyles['shadow500']}
  ${typographyStyles['button']}
  
  background-color: ${({ theme, buttonType }) => {
    if (buttonType === 'primary') return theme.colors.BLUE_600;
    if (buttonType === 'secondary') return theme.colors.LIGHT_BLUE_650;
    if (buttonType === 'alternative') return theme.colors.GREYSCALE_WHITE;
  }};
  border: none;
  color: ${({ theme, buttonType }) => {
    if (buttonType === 'primary') return theme.colors.GREYSCALE_WHITE;
    if (buttonType === 'secondary') return theme.colors.GREYSCALE_WHITE;
    if (buttonType === 'alternative') return theme.colors.GREYSCALE_BLACK;
  }};
  cursor: pointer;

  /* padding */
  ${({ buttonSize }) => {
    if (buttonSize === 'standard') return paddingStyles['comPad100'];
    if (buttonSize === 'xl') return paddingStyles['comPad200'];
  }}

  border-radius: 0.5rem;
  &:disabled {
    background-color: ${({ theme, buttonType }) =>
      backgroundColorChanger(theme, buttonType)};

    color: ${({ theme, buttonType }) => colorChanger(theme, buttonType)};
    &:hover {
      background-color: ${({ theme, buttonType }) =>
        backgroundColorChanger(theme, buttonType)};

      color: ${({ theme, buttonType }) => colorChanger(theme, buttonType)};
      &:active {
        background-color: ${({ theme, buttonType }) =>
          backgroundColorChanger(theme, buttonType)};

        color: ${({ theme, buttonType }) => colorChanger(theme, buttonType)};
      }
    }
  }
  &:hover {
    background-color: ${({ theme, buttonType }) => {
      if (buttonType === 'primary') return theme.colors.BLUE_700;
      if (buttonType === 'secondary') return theme.colors.LIGHT_BLUE_700;
      if (buttonType === 'alternative') return theme.colors.GREYSCALE_OFF_WHITE;
    }};
    transition: background-color 0.5s, color 0.5s;
  }
  &:active {
    background-color: ${({ theme, buttonType }) =>
      backgroundColorChanger(theme, buttonType)};

    color: ${({ theme, buttonType }) => {
      if (buttonType === 'alternative') return theme.colors.GREYSCALE_OFF_WHITE;
    }};
  }
`;
export default Button;
