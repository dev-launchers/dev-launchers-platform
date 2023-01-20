import styled from 'styled-components';
import { typographyStyles } from '../Typography';

export const StyledNavLink = styled.a`
  ${typographyStyles.navLink}
  color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};

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
    border-bottom: 3px solid ${({ theme }) => theme.colors.BLUE_200};
    display: inline-block;
    text-align: center;
    width: 58px;
    padding-bottom: 6px;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.GREYSCALE_GREY};
  }
`;
