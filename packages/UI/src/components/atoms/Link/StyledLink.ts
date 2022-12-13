import styled from 'styled-components';
import { typographyStyles } from '../Typography';

export const StyledLink = styled.a`
  ${typographyStyles.p}

  color: ${({ theme }) => theme.colors.LIGHT_BLUE};

  &:visited {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.LIGHT_BLUE_500};
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
