import styled from 'styled-components';
import Icon from '../../../assets/icons/rawSvg/chevron-down.svg';
import { radiusStyles } from '../../atoms';
import { typographyStyles } from '../../atoms/Typography/Styled.Typography';
import type { DropdownProps } from '.';

function getWidth(width?: string) {
  if (width === 'sm') return 261;
  if (width === 'md') return 301;
  if (width === 'lg') return 333;
  else return 301;
}

export const DropdownContainer = styled.div<DropdownProps>`
  font-family: ${({ theme }) => theme.fonts.normal};
  background-color: #fff;
  width: ${({ width }) => getWidth(width) + 'px'};
  ${radiusStyles['radius200']};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Toggle = styled.div`
  padding: 1rem 2rem;
  ${radiusStyles['radius200']};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  color: white;
  cursor: pointer;
  z-index: 2;
`;

export const OptionsContainer = styled.div<DropdownProps>`
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : 0)};
  transition: 0.8s opacity, 0.4s max-height ease-out;
  width: 100%;
  position: absolute;
  top: 100%;
  z-index: 100;
  box-shadow: 1px 1px 4px;
`;

export const Options = styled.form<DropdownProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 2rem;
`;

export const Chevron = styled.img.attrs(() => ({
  src: Icon,
  alt: 'icon',
}))<DropdownProps>`
  display: inline-block;
  transform: ${({ isOpen }) => (isOpen ? 'rotateX(180deg)' : 'rotateX(0)')};
  transition: 0.4s transform ease;
`;

export const Option = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  padding: 0.5rem 1rem;
  ${radiusStyles['radius200']};
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    box-shadow: 1px 1px 4px ${({ theme }) => theme.colors.GREYSCALE_GREY};
  }
`;

export const Label = styled.label`
  ${typographyStyles['p']}
`;

export const Input = styled.input`
  height: 24px;
  width: 24px;
  accent-color: black;

  &:disabled {
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      background: #eee;
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;
