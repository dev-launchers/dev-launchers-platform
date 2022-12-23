import styled from 'styled-components';
import theme from '../../../styles/theme';
import { typographyStyles } from '../Typography';

const lightColor = {
  default: theme.colors.BLUE,
  visited: theme.colors.BLUE_700,
  hover: theme.colors.BLUE_600,
  focus: theme.colors.BLUE_600,
  focusBorder: theme.colors.LIGHT_BLUE_200,
  active: theme.colors.BLUE_600,
  disabled: theme.colors.GREYSCALE_CHARCOAL,
};

const darkColor = {
  default: theme.colors.LIGHT_BLUE,
  visited: theme.colors.LIGHT_BLUE_500,
  hover: theme.colors.LIGHT_BLUE_200,
  focus: theme.colors.BLUE_600,
  focusBorder: theme.colors.LIGHT_BLUE_200,
  active: theme.colors.BLUE_100,
  disabled: theme.colors.GREYSCALE_GREY,
};

export const StyledLink = styled.a`
  ${typographyStyles.pSmall}

  color: ${lightColor.default};
  @media only screen and (min-width: 62.5rem) {
    ${typographyStyles.p}
  }

  &:visited {
    font-weight: 400;
    color: ${lightColor.visited};
    @media only screen and (min-width: 62.5rem) {
      ${typographyStyles.p}
    }
  }

  &:hover {
    font-weight: 600;
    color: ${lightColor.hover};
    @media only screen and (min-width: 62.5rem) {
      ${typographyStyles.p}
    }
  }

  &:focus {
    font-weight: 400;
    color: ${lightColor.focus};
    border: dotted 0.4px ${lightColor.focusBorder};
    outline: 1px dashed black;
    border-radius: 4px;
    background-color: ${lightColor.focusBorder};
    @media only screen and (min-width: 62.5rem) {
      ${typographyStyles.p}
    }
  }

  &:active {
    font-weight: 400;
    color: ${lightColor.active};
    @media only screen and (min-width: 62.5rem) {
      ${typographyStyles.p}
    }
  }

  &:disabled {
    font-style: italic;
    font-weight: 300;
    color: ${lightColor.disabled};
    @media only screen and (min-width: 62.5rem) {
      ${typographyStyles.p}
    }
  }
`;
