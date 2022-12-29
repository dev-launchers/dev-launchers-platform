import type { FC } from 'react';
import { StyledLink } from './StyledLink';
import type { LinkProps } from './index';

const Link: FC<LinkProps> = ({ href, text }) => {
  return <StyledLink href={href}>{text}</StyledLink>;
};

export default Link;
