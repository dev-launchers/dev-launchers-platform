import type { DefaultTheme } from 'styled-components';
import styled from 'styled-components';
import { radiusStyles } from '../../atoms/Radius';
import type { ProgressBarProps } from '.';

const getColor = (percentage: number, theme: DefaultTheme) => {
  return percentage >= 100 ? theme.colors.SUCCESS : theme.colors.NOTIFICATION;
};

export const ProgressBarWrapper = styled.div<ProgressBarProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 320px;
  progress[value] {
    // to reset default styles
    -webkit-appearance: none;
    appearance: none;
    border: none;
    width: 320px;
    height: 26px;
    top: 36px;
    // styling the progress element container and value element
    ::-webkit-progress-bar {
      background-color: ${({ theme }) => theme.colors.GREYSCALE_OFF_WHITE};
      ${radiusStyles['radius300']};
      border: 2px solid ${({ value, theme }) => getColor(value, theme)};
    }
    ::-webkit-progress-value {
      background-color: ${({ value, theme }) => getColor(value, theme)};
      ${radiusStyles['radius300']};
    }
  }
`;
export const PercentageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  bottom: 88%;
  width: 100%;
  gap: 12px;
`;
export const Percentage = styled.span<ProgressBarProps>`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ value, theme }) => getColor(value, theme)};
  width: 35px;
  height: 24px;
`;
export const CheckIcon = styled.img`
  width: 20px;
  height: 20px;
`;
