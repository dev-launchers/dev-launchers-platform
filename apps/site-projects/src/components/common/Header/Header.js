import React from "react";
import Link from "next/link";
import AccountDropdown from "./AccountDropdown";

import {
  HeaderBlock,
  Logo,
  LogoWrapper,
  LogoImageHolder,
  LogoImage,
  LogoWords,
  HeaderNav,
  NavEntry,
} from "./StyledHeader";

import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import HamburgerMenu from "../HamburgerMenu";

export default function Header() {
  const { userData } = useUserDataContext();
 
  return (
    <HeaderBlock>
      <Logo>
        <LogoWrapper>
          <Link href="../" replace>

            <LogoImageHolder>
              <LogoImage />
            </LogoImageHolder>
            <LogoWords>Dev Launchers</LogoWords>

          </Link>
        </LogoWrapper>
      </Logo>
      <HeaderNav>
        <Link href="../create" replace>

          <NavEntry>CREATE</NavEntry>

        </Link>
        <Link href="../learn" replace>

          <NavEntry>LEARN</NavEntry>

        </Link>
        {/* }
          <Link href={"/play"} className="nav-link">
            <NavEntry>PLAY</NavEntry>
          </Link>
          { */}
        <Link href="../support-us" replace>

          <NavEntry>SUPPORT US</NavEntry>

        </Link>
        <Link href="/">

          <NavEntry>JOIN</NavEntry>

        </Link>
      </HeaderNav>
      <div />
      <AccountDropdown />
      <HamburgerMenu />
    </HeaderBlock>
  );
}
