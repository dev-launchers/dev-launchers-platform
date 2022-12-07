import * as React from 'react';
import {
  ToolTip as StyledTooltip,
  ToolTipTrigger,
  Wrapper,
} from './styled.Tooltip';
import type { ToolTipProps } from '.';

const ToolTip = ({ children, tooltipText, ...props }: ToolTipProps) => {
  return (
    <Wrapper {...props}>
      <StyledTooltip>{tooltipText}</StyledTooltip>
      <ToolTipTrigger> {children}</ToolTipTrigger>
    </Wrapper>
  );
};

export default ToolTip;
