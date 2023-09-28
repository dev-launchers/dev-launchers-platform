import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import SubNavLink from '../../atoms/SubNavLink';
import Typography from '../../atoms/Typography';
import {
  DropdownContainer,
  Toggle,
  Chevron,
  OptionsContainer,
  Options,
} from './StyledDropdown';
import type { NavDropdownProps } from '.';

const NavDropdown = ({ title, isOpen = false, links }: NavDropdownProps) => {
  const [menuOpen, setMenuOpen] = useState(isOpen);

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
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen(!menuOpen);
        }}
      >
        <Typography type="navLink">{title}</Typography>
        <Chevron isOpen={menuOpen} />
      </Toggle>
      <OptionsContainer isOpen={menuOpen}>
        <Options>
          {links.map(({ text, href }, i) => {
            return <>
              <Link href={href} passHref legacyBehavior>
                <SubNavLink text={text} key={i} />
              </Link>
              {i === 0 && <hr style={{ width: '100%' }} />}
            </>;
          })}
        </Options>
      </OptionsContainer>
    </DropdownContainer>
  );
};

export default NavDropdown;
