import type { FC } from 'react';
import type { LinkProps } from './index';
import { Link } from './StyledLink';

const Link: FC<LinkProps> = ({ linkTo, linkText }) => {
  return <a href={linkTo}>{linkText}</a>;
};

export default Link;
