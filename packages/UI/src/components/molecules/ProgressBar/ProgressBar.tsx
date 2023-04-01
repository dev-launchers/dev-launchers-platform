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
  return (
    <Wrapper percentage={props.percentage}>
      <Progress percentage={props.percentage} />
      <PercentageWrapper>
        <Percentage percentage={props.percentage}>
          {props.percentage}%
        </Percentage>
        {props.percentage === 100 && <CheckIcon src={Icon} />}
      </PercentageWrapper>
    </Wrapper>
  );
};
export default ProgressBar;
