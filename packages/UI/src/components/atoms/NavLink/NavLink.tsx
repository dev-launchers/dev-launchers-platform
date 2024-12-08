import { ReactNode } from 'react';

interface NavLinkProps {
  href?: string;
  children?: ReactNode;
  disabled?: boolean;
}

export default function NavLink(props: NavLinkProps) {
  const { children, href, disabled } = props;

  return (
    <a
      href={href}
      className={`font-['Oswald'] border-b-[3px] border-transparent pb-1 text-center whitespace-nowrap text-base uppercase font-normal no-underline inline-block hover:text-blue-200 focus:text-blue-200 active:text-blue-100 active:border-blue-200 visited:text-neptune-500 px-1 
        ${
          disabled === true
            ? 'text-grayscale-300 cursor-default visited:text-grayscale-300 pointer-events-none'
            : 'text-grayscale-50 cursor-pointer'
        }`}
    >
      {children}
    </a>
  );
}
