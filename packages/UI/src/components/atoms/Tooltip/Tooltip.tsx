import type { FC } from 'react';
import { useState } from 'react';
import { ToolTip as StyledTooltip, Wrapper } from './styled.Tooltip';
import type { ToolTipProps } from '.';

const Tooltip = ({
  children,
  content,
  delay = 400,
  direction = 'top',
  ...props
}: ToolTipProps) => {
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

  return (
    <Wrapper onMouseEnter={showTip} onMouseLeave={hideTip} {...props}>
      {children}
      {active && <StyledTooltip className={direction}>{content}</StyledTooltip>}
    </Wrapper>
  );
};

export default Tooltip;
