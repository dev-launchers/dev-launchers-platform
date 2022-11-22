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
  ${paddingStyles.comPad200};
`;

export const HamburgerWrapper = styled.div`
  li > a {
    color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  }
  h3 {
    color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  }
  h2 {
    color: ${({ theme }) => theme.colors.LIGHT_BLUE};
  }

  .burgerButton {
    position: fixed;
    min-height: 5vh;
    min-width: 5vh;
    right: 4.5vh;
    top: 3vh;

    display: none; /* Only display on mobile */
    span {
      &:nth-child(1) {
        top: 10% !important;
      }
      &:nth-child(2){
        top: 45% !important;
      }
    }
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
    height: 10% !important;
    border-radius: 5px !important;
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
