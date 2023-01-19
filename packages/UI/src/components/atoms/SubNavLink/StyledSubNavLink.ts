import styled from 'styled-components';
import { radiusStyles } from '../Radius/StyledRadius';
import { typographyStyles } from '../Typography';

export const StyledSubNavLink = styled.a`
  ${typographyStyles.navLink}
  color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  background-color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  border: 6px solid ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  ${radiusStyles.radius100};

  &:visited {
    color: ${({ theme }) => theme.colors.BLUE};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.BLUE_200};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.BLUE_200};
  }

  &:active {
    color: ${({ theme }) => theme.colors.BLUE_100};
    border-bottom: 2px solid ${({ theme }) => theme.colors.BLUE_200};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.GREYSCALE_GREY};
  }
`;
