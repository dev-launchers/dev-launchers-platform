import * as React from 'react';
import {
  ToolTip as StyledTooltip,
  ToolTipTrigger,
  Wrapper,
} from './styled.Tooltip';
import type { ToolTipProps } from '.';

const ToolTip = ({ children, tooltipText }: ToolTipProps) => {
  return (
    <Wrapper>
      <StyledTooltip>{tooltipText}</StyledTooltip>
      <ToolTipTrigger> {children}</ToolTipTrigger>
    </Wrapper>
  );
};

export default ToolTip;
