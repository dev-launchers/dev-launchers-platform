import styled from 'styled-components';
import { radiusStyles } from '../Radius/StyledRadius';
import { typographyStyles } from '../Typography';

export const StyledSubNavLink = styled.a`
  ${typographyStyles.navLink}
  color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  background-color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  border: 6px solid ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  ${radiusStyles.radius100};
  border-top: 5px solid ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  border-bottom: 5px solid ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  border-left: 7px solid ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  border-right: 7px solid ${({ theme }) => theme.colors.GREYSCALE_BLACK};

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
