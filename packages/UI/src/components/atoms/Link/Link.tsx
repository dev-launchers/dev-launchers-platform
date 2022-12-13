import type { FC } from 'react';
import type { LinkProps } from './index';
import { StyledLink } from './StyledLink';

const Link: FC<LinkProps> = ({ linkTo, linkText }) => {
  return <StyledLink href={linkTo}>{linkText}</StyledLink>;
};

export default Link;
