import type { FC } from 'react';
import { StyledNavLink } from './StyledNavLink';
import type { NavLinkProps } from './index';

const NavLink: FC<NavLinkProps> = ({ href, text, ...props }) => {
  return (
    <StyledNavLink href={href} {...props}>
      {text}
    </StyledNavLink>
  );
};

export default NavLink;
