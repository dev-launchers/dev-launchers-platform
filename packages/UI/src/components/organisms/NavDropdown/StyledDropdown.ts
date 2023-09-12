import styled from 'styled-components';
import { paddingStyles } from '../../atoms/Padding';
import { radiusStyles } from '../../atoms/Radius/StyledRadius';
import { shadowStyles } from '../../atoms/Shadow';
import Icon from './chevron-down.svg';
import type { NavDropdownProps } from '.';

export const DropdownContainer = styled.div`
  width: fit-content;
  position: relative;
  z-index: 2;
`;

export const Toggle = styled.div`
  width: fit-content;
  gap: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  cursor: pointer;
  img {
    filter: invert(1);
  }
`;

export const OptionsContainer = styled.div<Pick<NavDropdownProps, 'isOpen'>>`
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : 0)};
  transition: 0.8s opacity, 0.4s max-height ease-out;
  width: max-content;
  background: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  overflow: hidden;
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  ${radiusStyles.radius200};
  ${shadowStyles.shadow500};
  /* @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg + 'px'}) {
    background: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  } */
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.GREYSCALE_WHITE};
  word-break: keep-all;
  /* @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg + 'px'}) {
    color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  } */
`;

export const Chevron = styled.img.attrs(() => ({
  src: Icon.src,
  alt: 'icon',
}))<Pick<NavDropdownProps, 'isOpen'>>`
  display: inline-block;
  width: 16px;
  transform: ${({ isOpen }) => (isOpen ? 'rotateX(180deg)' : 'rotateX(0)')};
  transition: 0.4s transform ease;
`;
