import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SubNavLink from '../../atoms/SubNavLink';
import Typography from '../../atoms/Typography';
import {
  DropdownContainer,
  Toggle,
  OptionsContainer,
  Options,
} from './StyledDropdown';
import type { NavDropdownProps } from '.';

const NavDropdown = ({
  title,
  isOpen = false,
  links,
  toggleElementProps,
}: NavDropdownProps) => {
  const [menuOpen, setMenuOpen] = useState(isOpen);
  const optionsContainerId = useRef(`NavDropdown-${uuidv4()}`);
  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <DropdownContainer ref={node}>
      <Toggle
        {...toggleElementProps}
        aria-expanded={menuOpen}
        aria-haspopup="menu"
        aria-controls={optionsContainerId.current}
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen((prev) => !prev);
        }}
      >
        <Typography type="navLink">{title}</Typography>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-500 "
          style={{
            transform: !menuOpen ? 'none' : 'rotateX(180deg)',
            transitionTimingFunction: 'ease',
          }}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </Toggle>

      <OptionsContainer id={optionsContainerId.current} isOpen={menuOpen}>
        <Options>
          {links.map(({ text, href, hasUnderline, ...rest }, i) => {
            if (!href) {
              return (
                <>
                  <div>
                    <SubNavLink {...rest} text={text} key={i} />
                  </div>
                  {hasUnderline && <hr style={{ width: '100%' }} />}
                </>
              );
            }
            return <>
              <Link href={href} legacyBehavior key={i}>
                <SubNavLink {...rest} href={href} text={text} key={i} />
              </Link>
              {hasUnderline && <hr style={{ width: '100%' }} />}
            </>;
          })}
        </Options>
      </OptionsContainer>
    </DropdownContainer>
  );
};

export default NavDropdown;
