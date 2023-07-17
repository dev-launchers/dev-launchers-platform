import type { FC } from 'react';
import { StyledLink } from './StyledLink';
import type { LinkProps } from './index';

const Link: FC<LinkProps> = ({ href, text, ...props }) => {
  return (
    <StyledLink href={href} {...props}>
      {text} {text}
    </StyledLink>
  );
};

export default Link;
