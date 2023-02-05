import styled from 'styled-components';
import { paddingStyles } from '../../atoms/Padding';

export const Nav = styled.div`
  font-size: 1rem;
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
  width: 100%;
  height: 100%;
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
    min-height: 44.8px;
    min-width: 44.8px;
    right: 4%;
    display: none; /* Only display on mobile */
    top: 1%;
    position: absolute;
    span {
      &:nth-child(1) {
        top: 10% !important;
      }
      &:nth-child(2) {
        top: 45% !important;
      }
    }
  }
  .crossButton {
    right: 24px !important;
    width: fit-content !important;
    height: fit-content !important;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    .burgerButton {
      display: block;
    }
  }
  /* @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    .burgerButton {
      top: 6vh;
    }
  } */

  .menuBody {
    top: 0;
    width: 100% !important;
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

export const NavWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 3rem;
  align-items: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: none;
  }
`;
