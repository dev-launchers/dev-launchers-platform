import type { User } from '@devlaunchers/models';
import Link from 'next/link';
import * as React from 'react';
import HamburgerMenu from '../HamburgerMenu';
import AccountDropdown from './AccountDropdown';

import {
  HeaderBlock,
  Logo,
  LogoWrapper,
  LogoImageHolder,
  LogoImage,
  LogoWords,
  HeaderNav,
  NavEntry,
} from './StyledHeader';

const Header: React.FC<{ userData: User }> = ({ userData }) => {
  return (
    <HeaderBlock>
      <Logo>
        <LogoWrapper>
          <Link href="../" replace>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <LogoImageHolder>
                <LogoImage />
              </LogoImageHolder>
              <LogoWords>Dev Launchers</LogoWords>
            </a>
          </Link>
        </LogoWrapper>
      </Logo>
      <HeaderNav>
        <Link href="../create" replace>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <NavEntry>CREATE</NavEntry>
          </a>
        </Link>
        <Link href="../learn" replace>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <NavEntry>LEARN</NavEntry>
          </a>
        </Link>
        {/* }
          <Link href={"/play"} className="nav-link">
            <NavEntry>PLAY</NavEntry>
          </Link>
          { */}
        <Link href="../support-us" replace>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <NavEntry>SUPPORT US</NavEntry>
          </a>
        </Link>
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <NavEntry>JOIN</NavEntry>
          </a>
        </Link>
      </HeaderNav>
      <div />
      <AccountDropdown userData={userData} />
      <HamburgerMenu userData={userData} />
    </HeaderBlock>
  );
};

export default Header;
