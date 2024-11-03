import { ReactNode } from 'react';

interface NavLinkProps {
  href?: string;
  text?: string;
  children?: ReactNode;
}

function NavLink(props: NavLinkProps) {
  const { children, href } = props;
  return (
    <a
      className="text-grayscale-50 hover:text-blue-200 focus:text-blue-200 active:text-blue-100 active:border-b-[3px] active:text-center active:w-14 active:border-blue-200 active:pb-1 disabled:text-grayscale-600"
      href={href}
    >
      {children}
    </a>
  );
}

export default NavLink;
