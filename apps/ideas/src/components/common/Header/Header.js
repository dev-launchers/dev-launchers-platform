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

import { useUserDataContext } from "../../../context/UserDataContext.js";
import HamburgerMenu from "../HamburgerMenu";

export default function Header() {
  const { userData } = useUserDataContext();
 
  return (
    <HeaderBlock>
      <Logo>
        <LogoWrapper>
          <Link href="https://devlaunchers.org/" replace>
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
        <Link href="/create" replace>
          <a>
            <NavEntry>CREATE</NavEntry>
          </a>
        </Link>
        <Link href="/learn" replace>
          <a>
            <NavEntry>LEARN</NavEntry>
          </a>
        </Link>
        <Link href="/support-us" replace>
          <a>
            <NavEntry>SUPPORT US</NavEntry>
          </a>
        </Link>
        <Link href="/projects">
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
