/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useUserDataContext } from '../../../context/UserDataContext';
import HamburgerMenu from '../HamburgerMenu';
import AccountDropdown from './AccountDropdown';

import {
  HeaderBlock,
  HeaderNav,
  Logo,
  LogoImage,
  LogoImageHolder,
  LogoWords,
  LogoWrapper,
  // eslint-disable-next-line prettier/prettier
  NavEntry
} from './StyledHeader';

export default function Header() {
  const { userData } = useUserDataContext();

  return (
    <HeaderBlock>
      <Logo>
        <LogoWrapper>
          <Link href="/">
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
        <Link href="/create">
          <a>
            <NavEntry>CREATE</NavEntry>
          </a>
        </Link>
        <Link href="/learn">
          <a>
            <NavEntry>LEARN</NavEntry>
          </a>
        </Link>
        <Link href="/ideas">
          <a>
            <NavEntry>DREAM</NavEntry>
          </a>
        </Link>
        {/* }
          <Link href={"/play"} className="nav-link">
            <NavEntry>PLAY</NavEntry>
          </Link>
          { */}
        <Link href="/support-us">
          <a>
            <NavEntry>SUPPORT US</NavEntry>
          </a>
        </Link>
        <Link href="/join">
          <a>
            <NavEntry>JOIN</NavEntry>
          </a>
        </Link>
      </HeaderNav>
      <div />
      <AccountDropdown userData={userData} />
      <HamburgerMenu />
    </HeaderBlock>
  );
}
