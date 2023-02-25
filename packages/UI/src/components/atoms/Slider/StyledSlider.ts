import styled from 'styled-components';
import { paddingStyles } from '../Padding';
import { radiusStyles } from '../Radius/StyledRadius';
import { typographyStyles } from '../Typography';
import type { SliderProps } from '.';

export const Container = styled.div<Pick<SliderProps, 'maxWidth'>>`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.normal};
  color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  max-width: ${({ maxWidth }) => maxWidth || '360px'};
  user-select: none;
`;

export const SliderInputContainer = styled.div`
  width: 100%;
  margin: 0;
`;

export const SliderInput = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  overflow: hidden;
  width: 100%;
  height: 14px;
  background: ${({ theme }) => theme.colors.GREYSCALE_OFF_WHITE};
  outline: 2px solid ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  ${radiusStyles['radius600']}

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
    border-radius: 50%;
    cursor: pointer;
    box-shadow: -500px 0px 0px 492px
      ${({ theme }) => theme.colors.GREYSCALE_CHARCOAL};
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
    border-radius: 50%;
    cursor: pointer;
    box-shadow: -500px 0px 0px 492px
      ${({ theme }) => theme.colors.GREYSCALE_CHARCOAL};
  }
`;

export const BubbleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
`;

export const Bubble = styled.div<{ newVal: number }>`
  position: absolute;
  width: auto;
  ${paddingStyles['uniPad100']}
  top: 0;
  transform: translateX(${({ newVal }) => `-${newVal}%`});
  left: ${({ newVal }) => `${newVal}%`};

  & p {
    width: max-content;
    margin: 0;
    padding: 0;
    ${typographyStyles['pSmall']}
    color: ${({ theme }) => theme.colors.GREYSCALE_BLACK};
  }
`;
