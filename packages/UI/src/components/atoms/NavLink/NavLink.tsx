import type { FC } from 'react';
import styled from 'styled-components';
import { typographyStyles } from '../Typography';

interface NavLinkProps {
  href?: string;
  text?: string;
}

const NavLink = styled.a<NavLinkProps>`
  ${typographyStyles.navLink}
  color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  &:hover {
    color: ${({ theme }) => theme.colors.BLUE_200};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.BLUE_200};
  }
  &:active {
    color: ${({ theme }) => theme.colors.BLUE_100};
    border-bottom: 3px solid ${({ theme }) => theme.colors.BLUE_200};
    text-align: center;
    width: 58px;
    padding-bottom: 6px;
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.GREYSCALE_GREY};
  }
`;

export default NavLink;
