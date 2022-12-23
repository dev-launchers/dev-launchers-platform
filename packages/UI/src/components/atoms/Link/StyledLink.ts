import styled from 'styled-components';
import { typographyStyles } from '../Typography';

export const StyledLink = styled.a`
  ${typographyStyles.p}

  color: ${({ theme }) => theme.colors.LIGHT_BLUE};
  @media only screen and (min-width: 62.5rem) {
    font-size: 1.25rem;
  }

  &:visited {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.LIGHT_BLUE_500};
    @media only screen and (min-width: 62.5rem) {
      font-size: 1.25rem;
    }
  }

  &:hover {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.LIGHT_BLUE_200};
    @media only screen and (min-width: 62.5rem) {
      font-size: 1.25rem;
    }
  }

  &:focus {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.BLUE_600};
    border: dotted 0.4px ${({ theme }) => theme.colors.LIGHT_BLUE_200};
    outline: 1px dashed black;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.LIGHT_BLUE_200};
    @media only screen and (min-width: 62.5rem) {
      font-size: 1.25rem;
    }
  }

  &:active {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.BLUE_100};
    @media only screen and (min-width: 62.5rem) {
      font-size: 1.25rem;
    }
  }

  &:disabled {
    font-style: italic;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.GREYSCALE_GREY};
    @media only screen and (min-width: 62.5rem) {
      font-size: 1.25rem;
    }
  }
`;
