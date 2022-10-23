import styled, { css } from 'styled-components';
import { shadowStyles } from '../Shadow/Styled.Shadow';
import { typographyStyles } from '../Typography/Styled.Typography';

interface ButtonProps {
  buttonType: string;
  buttonSize: string;
}

const Button = styled.button.attrs(({ disabled }) => ({
  disabled,
}))<ButtonProps>`
  ${shadowStyles['shadow500']}
  ${typographyStyles['button']}
  
  background-color: ${({ theme, buttonType }) => {
    if (buttonType === 'primary') return theme.colors.BLUE_600;
    else if (buttonType === 'secondary') return theme.colors.LIGHT_BLUE_650;
    else if (buttonType === 'alternative') return theme.colors.GREYSCALE_WHITE;
  }};
  border: none;
  color: ${({ theme, buttonType }) => {
    if (buttonType === 'primary') return theme.colors.GREYSCALE_WHITE;
    else if (buttonType === 'secondary') return theme.colors.GREYSCALE_WHITE;
    else if (buttonType === 'alternative') return theme.colors.GREYSCALE_BLACK;
  }};
  cursor: pointer;
  padding: ${({ buttonSize }) => {
    if (buttonSize === 'standard') return '8px 16px';
    else if (buttonSize === 'xl') return '12px 24px';
  }};
  border-radius: 0.5rem;
  &:disabled {
    background-color: ${({ theme, buttonType }) => {
      if (buttonType === 'primary') return theme.colors.BLUE_300;
      else if (buttonType === 'secondary') return theme.colors.LIGHT_BLUE_300;
      else if (buttonType === 'alternative')
        return theme.colors.GREYSCALE_WHITE;
    }};

    color: ${({ theme, buttonType }) => {
      if (buttonType === 'primary') return theme.colors.GREYSCALE_WHITE;
      else if (buttonType === 'secondary') return theme.colors.GREYSCALE_WHITE;
      else if (buttonType === 'alternative') return theme.colors.GREYSCALE_GREY;
    }};
    &:hover {
      background-color: ${({ theme, buttonType }) => {
        if (buttonType === 'primary') return theme.colors.BLUE_300;
        else if (buttonType === 'secondary') return theme.colors.LIGHT_BLUE_300;
        else if (buttonType === 'alternative')
          return theme.colors.GREYSCALE_WHITE;
      }};

      color: ${({ theme, buttonType }) => {
        if (buttonType === 'primary') return theme.colors.GREYSCALE_WHITE;
        else if (buttonType === 'secondary')
          return theme.colors.GREYSCALE_WHITE;
        else if (buttonType === 'alternative')
          return theme.colors.GREYSCALE_GREY;
      }};
      &:active {
        background-color: ${({ theme, buttonType }) => {
          if (buttonType === 'primary') return theme.colors.BLUE_300;
          else if (buttonType === 'secondary')
            return theme.colors.LIGHT_BLUE_300;
          else if (buttonType === 'alternative')
            return theme.colors.GREYSCALE_WHITE;
        }};

        color: ${({ theme, buttonType }) => {
          if (buttonType === 'primary') return theme.colors.GREYSCALE_WHITE;
          else if (buttonType === 'secondary')
            return theme.colors.GREYSCALE_WHITE;
          else if (buttonType === 'alternative')
            return theme.colors.GREYSCALE_GREY;
        }};
      }
    }
  }
  &:hover {
    background-color: ${({ theme, buttonType }) => {
      if (buttonType === 'primary') return theme.colors.BLUE_700;
      else if (buttonType === 'secondary') return theme.colors.LIGHT_BLUE_700;
      else if (buttonType === 'alternative')
        return theme.colors.GREYSCALE_OFF_WHITE;
    }};
    color: ${({ theme, buttonType }) => {
      if (buttonType === 'primary') return theme.colors.GREYSCALE_WHITE;
      else if (buttonType === 'secondary') return theme.colors.GREYSCALE_WHITE;
      else if (buttonType === 'alternative')
        return theme.colors.GREYSCALE_BLACK;
    }};
    transition: background-color 0.5s, color 0.5s;
  }
  &:active {
    background-color: ${({ theme, buttonType }) => {
      if (buttonType === 'primary') return theme.colors.BLUE_300;
      else if (buttonType === 'secondary') return theme.colors.LIGHT_BLUE_300;
      else if (buttonType === 'alternative')
        return theme.colors.GREYSCALE_WHITE;
    }};
    color: ${({ theme, buttonType }) => {
      if (buttonType === 'primary') return theme.colors.GREYSCALE_WHITE;
      else if (buttonType === 'secondary') return theme.colors.GREYSCALE_WHITE;
      else if (buttonType === 'alternative')
        return theme.colors.GREYSCALE_OFF_WHITE;
    }};
  }
`;
export default Button;
