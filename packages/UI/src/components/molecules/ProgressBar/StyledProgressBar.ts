import type { DefaultTheme } from 'styled-components';
import styled from 'styled-components';
import { radiusStyles } from '../../atoms/Radius';
import type { ProgressBarProps } from '.';

const getColor = (percentage: number, theme: DefaultTheme) => {
  return percentage === 100 ? theme.colors.SUCCESS : theme.colors.NOTIFICATION;
};

export const Wrapper = styled.div<ProgressBarProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  ${radiusStyles['radius300']};
  height: 26px;
  width: 320px;
  top: 36px;
  background-color: ${({ theme }) => theme.colors.GREYSCALE_OFF_WHITE};
  border: 2px solid ${({ percentage, theme }) => getColor(percentage, theme)};
`;
export const Progress = styled.div<ProgressBarProps>`
  box-sizing: border-box;
  border: 2px solid ${({ percentage, theme }) => getColor(percentage, theme)};
  background-color: ${({ percentage, theme }) => getColor(percentage, theme)};
  ${radiusStyles['radius300']};
  height: 26px;
  // Set a min width of 5% when percentage is less than 5 and make it invisible at 0 percentage
  width: ${(props) =>
    props.percentage === 0
      ? '0%'
      : props.percentage < 5
      ? '5%'
      : `${props.percentage}%`};
  opacity: ${(props) => (props.percentage === 0 ? '0' : '1')};
`;
export const PercentageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: -26px;
  width: 100%;
  gap: 12px;
`;
export const Percentage = styled.span<ProgressBarProps>`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ percentage, theme }) => getColor(percentage, theme)};
  width: 35px;
  height: 24px;
`;
export const CheckIcon = styled.img`
  width: 20px;
  height: 20px;
`;
