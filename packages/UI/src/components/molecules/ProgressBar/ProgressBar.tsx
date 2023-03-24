import * as React from 'react';
import type { ProgressBarProps } from '.';
import { Wrapper } from './StyledProgressBar';

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  return <Wrapper>{props.percentage}%</Wrapper>;
};

export default ProgressBar;
