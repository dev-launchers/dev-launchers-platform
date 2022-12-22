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
    @media only screen and (max-width: 62.5rem) {
      font-size: 6rem;
    }
  }

  &:hover {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.LIGHT_BLUE_200};
  }

  &:focus {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.LIGHT_BLUE_200};
    border: solid 2px ${({ theme }) => theme.colors.BLUE_600};
  }

  &:active {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.BLUE_100};
  }

  &:disabled {
    font-style: italic;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.GREYSCALE_GREY};
  }
`;
