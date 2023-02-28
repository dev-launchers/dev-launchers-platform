import styled from 'styled-components';
import { radiusStyles } from '../../atoms/Radius/StyledRadius';
import { typographyStyles } from '../../atoms/Typography';
import type { SearchBarProps } from '.';

const getWidth = (size: string) => {
  switch (size) {
    case 'small':
      return 192;
    case 'medium':
      return 296;
    case 'large':
      return 328;
    default:
      return 192;
  }
};

export const StyledInput = styled.div<
  Pick<SearchBarProps, 'mode' | 'hasButton'>
>`
  position: relative;
  width: fit-content;
  ${radiusStyles.radius700};
  overflow: hidden;
  .left-icon {
    display: flex;
    align-items: center;
    justify-content: ${({ hasButton }) => {
      if (hasButton) return 'center';
      else return 'flex-start';
    }};
    position: absolute;
    top: 0;
    ${({ hasButton }) => {
      if (hasButton) return 'right: 0';
      else return 'left: 0';
    }};
    width: 55px;
    height: 100%;
    background: ${({ theme, mode, hasButton }) => {
      if (!hasButton) return 'transparent';
      if (mode === 'light' && hasButton)
        return theme.colors.GREYSCALE_OFF_BLACK;
      if (mode === 'dark' && hasButton) return theme.colors.GREYSCALE_WHITE;
    }};
    padding-left: ${({ hasButton }) => {
      if (!hasButton) return '24px';
      else return '0';
    }};
    border: 2px solid
      ${({ theme, mode, hasButton }) => {
        if (mode === 'dark' && hasButton) return theme.colors.GREYSCALE_BLACK;
        else return 'none';
      }};
    border-radius: 0 64px 64px 0;
  }
`;

export const Input = styled.input<
  Pick<SearchBarProps, 'mode' | 'hasButton' | 'width'>
>`
  width: ${({ width }) => getWidth(width) + 'px'};
  ${typographyStyles.p};
  ${radiusStyles.radius700}
  box-sizing: border-box;
  border: 2px solid
    ${({ theme, mode, hasButton }) => {
      if (mode === 'light' && !hasButton)
        return theme.colors.GREYSCALE_OFF_BLACK;
      if (mode === 'dark' && !hasButton) return theme.colors.GREYSCALE_WHITE;
      if (mode === 'light' && hasButton)
        return theme.colors.GREYSCALE_OFF_BLACK;
      if (mode === 'dark' && hasButton) return theme.colors.GREYSCALE_OFF_BLACK;
    }};
  background: ${({ theme, mode, hasButton }) => {
    if (mode === 'light' && !hasButton) return theme.colors.GREYSCALE_WHITE;
    if (mode === 'dark' && !hasButton) return theme.colors.GREYSCALE_BLACK;
    if (mode === 'light' && hasButton) return theme.colors.GREYSCALE_WHITE;
    if (mode === 'dark' && hasButton) return theme.colors.GREYSCALE_BLACK;
  }};
  color: ${({ theme, mode, hasButton }) => {
    if (mode === 'light' && !hasButton) return theme.colors.GREYSCALE_WHITE;
    if (mode === 'dark' && !hasButton) return theme.colors.GREYSCALE_WHITE;
    if (mode === 'light' && hasButton) return theme.colors.GREYSCALE_BLACK;
    if (mode === 'dark' && hasButton) return theme.colors.GREYSCALE_WHITE;
  }};

  outline: none;
  padding: 16px 32px 16px 24px;
  padding-left: ${({ hasButton }) => (hasButton ? '24px' : '54px')};

  cursor: pointer;

  &:focus {
    background: ${({ theme, mode, hasButton }) => {
      if (mode === 'light' && !hasButton) return theme.colors.GREYSCALE_WHITE;
      if (mode === 'dark' && !hasButton) return theme.colors.NOTIFICATION_700;
      if (mode === 'light' && hasButton) return theme.colors.LIGHT_BLUE_200;
      if (mode === 'dark' && hasButton) return theme.colors.NOTIFICATION_700;
    }};
    color: ${({ theme, mode, hasButton }) => {
      if (mode === 'light' && !hasButton) return theme.colors.GREYSCALE_BLACK;
      if (mode === 'dark' && !hasButton) return theme.colors.LIGHT_BLUE_200;
      if (mode === 'light' && hasButton) return theme.colors.NOTIFICATION_700;
      if (mode === 'dark' && hasButton) return theme.colors.LIGHT_BLUE_200;
    }};

    border-color: ${({ theme, mode, hasButton }) => {
      if (mode === 'light' && !hasButton) return theme.colors.NOTIFICATION;
      if (mode === 'dark' && !hasButton) return theme.colors.NOTIFICATION_600;
      if (mode === 'light' && hasButton) return theme.colors.NOTIFICATION_700;
      if (mode === 'dark' && hasButton) return theme.colors.NOTIFICATION_600;
    }};
  }
  &::placeholder {
    ${typographyStyles.placeHolder};
    color: ${({ theme, mode, hasButton }) => {
      if (mode === 'light' && !hasButton)
        return theme.colors.GREYSCALE_CHARCOAL;
      if (mode === 'dark' && !hasButton) return theme.colors.GREYSCALE_WHITE;
      if (mode === 'light' && hasButton) return theme.colors.GREYSCALE_BLACK;
      if (mode === 'dark' && hasButton) return theme.colors.GREYSCALE_WHITE;
    }};
  }

  &:focus + .left-icon {
    border: 2px solid
      ${({ theme, mode, hasButton }) => {
        if (mode === 'dark' && hasButton) return theme.colors.NOTIFICATION_600;
        else return 'none';
      }};
    background: ${({ theme, mode, hasButton }) => {
      if (mode === 'light' && !hasButton) return 'transparent';
      if (mode === 'dark' && !hasButton) return 'transparent';
      if (mode === 'light' && hasButton) return theme.colors.NOTIFICATION_700;
      if (mode === 'dark' && hasButton) return theme.colors.LIGHT_BLUE_200;
    }};
  }
  & + .left-icon path {
    fill: ${({ theme, mode, hasButton }) => {
      if (mode === 'light' && !hasButton)
        return theme.colors.GREYSCALE_OFF_BLACK;
      if (mode === 'dark' && !hasButton) return theme.colors.GREYSCALE_WHITE;
      if (mode === 'light' && hasButton) return theme.colors.GREYSCALE_WHITE;
      if (mode === 'dark' && hasButton) return theme.colors.GREYSCALE_OFF_BLACK;
    }};
  }

  &:focus + .left-icon path {
    fill: ${({ theme, mode, hasButton }) => {
      if (mode === 'light' && !hasButton) return theme.colors.NOTIFICATION;
      if (mode === 'dark' && !hasButton) return theme.colors.LIGHT_BLUE_200;
      if (mode === 'light' && hasButton) return theme.colors.LIGHT_BLUE_200;
      if (mode === 'dark' && hasButton) return theme.colors.NOTIFICATION_600;
    }};
  }
`;
