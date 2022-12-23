import type { FC } from 'react';
import { StyledLink } from './StyledLink';
import type { LinkProps } from './index';

const Link: FC<LinkProps> = ({ linkTo, linkText }) => {
  return <StyledLink href={linkTo}>{linkText}</StyledLink>;
};

export default Link;
