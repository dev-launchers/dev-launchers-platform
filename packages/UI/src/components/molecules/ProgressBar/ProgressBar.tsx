import * as React from 'react';
import Icon from '../../../assets/icons/rawSvg/check-circle.svg';
import {
  Wrapper,
  Progress,
  CheckIcon,
  PercentageWrapper,
  Percentage,
} from './StyledProgressBar';
import type { ProgressBarProps } from '.';

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  // Check if percentage is less than 0 or greater than 100, set it to 0 or 100 respectively
  const percentage = Math.max(0, Math.min(100, props.percentage));
  return (
    <Wrapper percentage={percentage}>
      <Progress percentage={percentage} />
      <PercentageWrapper>
        <Percentage percentage={percentage}>{percentage}%</Percentage>
        {percentage === 100 && <CheckIcon src={Icon} />}
      </PercentageWrapper>
    </Wrapper>
  );
};
export default ProgressBar;
