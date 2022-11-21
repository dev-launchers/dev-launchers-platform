import styled from 'styled-components';
import theme from 'styles/theme';
import { paddingStyles } from '../../atoms/Padding';
export const Nav = styled.div`
  background-color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  width: 100%;
  ${paddingStyles.comPad300};
  color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  a {
    color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
    text-decoration: none;
  }
`;

export const MobileNav = styled.div`
  background-color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
`;

export const HamburgerWrapper = styled.div`
  .burgerButton {
    position: fixed;
    min-height: 5vh;
    min-width: 5vh;
    right: 1.5vh;
    top: 1.5vh;

    display: none; /* Only display on mobile */
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    .burgerButton {
      display: block;
    }
  }
  .menuBody {
    top: 0;
  }

  .overlay {
    top: 0px;
    right: 0px;
  }

  .burgerBar {
    background: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  }

  .crossClass {
    background: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  }
`;

export const RainbowBar = styled.div`
  width: 100%;
  height: 8px;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.ORANGE},
    ${({ theme }) => theme.colors.YELLOW},
    ${({ theme }) => theme.colors.LIGHT_BLUE},
    ${({ theme }) => theme.colors.BLUE}
  );
`;
export const NavWrapper = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;
