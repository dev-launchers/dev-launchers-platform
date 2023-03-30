import type { FC } from 'react';
import { useState } from 'react';
import { css } from 'styled-components';
import { StyledTooltip, Wrapper } from './StyledTooltip';
import type { TooltipProps } from '.';

const Tooltip = ({
  children,
  content,
  delay = 400,
  direction,
  type,
  ...props
}: TooltipProps) => {
  let timeout: NodeJS.Timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  switch (type) {
    case 'speech':
      return (
        <Wrapper onMouseEnter={showTip} onMouseLeave={hideTip} {...props}>
          {children}
          {active && (
            <StyledTooltip className={direction} showPointer={true}>
              {content}
            </StyledTooltip>
          )}
        </Wrapper>
      );
    case 'bubble':
      return (
        <Wrapper onMouseEnter={showTip} onMouseLeave={hideTip} {...props}>
          {children}
          {active && (
            <StyledTooltip className={direction} showPointer={false}>
              {content}
            </StyledTooltip>
          )}
        </Wrapper>
      );
  }
};

export default Tooltip;
