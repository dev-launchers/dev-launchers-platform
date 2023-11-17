import type { FC } from 'react';
import { StyledSubNavLink } from './StyledSubNavLink';
import type { SubNavLinkProps } from './index';

const NavLink: FC<SubNavLinkProps> = ({ href, text, ...props }) => {
  return (
    <StyledSubNavLink style={{wordBreak: 'keep-all'}} href={href} {...props}>
      {text}
    </StyledSubNavLink>
  );
};

export default NavLink;
