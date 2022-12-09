import type { FC } from 'react';
import { Link } from 'react-router-dom';
import type { LinkProps } from './Link.types';
import { Link as StyledLink } from './StyledLink';

const Link: FC<LinkProps> = ({ linkTo, linkName }) => {
  return <StyledLink to={linkTo}>{linkName}</StyledLink>;
};

export default Link;
