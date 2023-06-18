import * as React from 'react';
import {
  ProgressBarWrapper,
  CheckIcon,
  PercentageWrapper,
  Percentage,
} from './StyledProgressBar';
import type { ProgressBarProps } from '.';

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  let progressValue = value;
  if (value >= 1 && value < 3) {
    progressValue = 3;
  }
  const max = 100;
  return (
    <ProgressBarWrapper value={value}>
      <progress value={progressValue} max={max} />
      <PercentageWrapper>
        <Percentage value={value}>{value}%</Percentage>
        {value >= 100 && <CheckIcon src={'rawSvg/check-circle.svg'} />}
      </PercentageWrapper>
    </ProgressBarWrapper>
  );
};
export default ProgressBar;
