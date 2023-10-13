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
import HamburgerMenu from "../HamburgerMenu";

export default function Header() {
  return (
    <HeaderBlock>
      <Logo>
        <LogoWrapper>
          <Link href="/">

            <LogoImageHolder>
              <LogoImage />
            </LogoImageHolder>
            <LogoWords>Dev Launchers</LogoWords>

          </Link>
        </LogoWrapper>
      </Logo>
      <HeaderNav>
        <Link href="/create">

          <NavEntry>CREATE</NavEntry>

        </Link>
        <Link href="/learn">

          <NavEntry>LEARN</NavEntry>

        </Link>
        {/* }
          <Link href={"/play"} className="nav-link">
            <NavEntry>PLAY</NavEntry>
          </Link>
          { */}
        <Link href="/support-us">

          <NavEntry>SUPPORT US</NavEntry>

        </Link>
        <Link href="/join">

          <NavEntry>JOIN</NavEntry>

        </Link>
      </HeaderNav>
      <div />
      <AccountDropdown />
      <HamburgerMenu />
    </HeaderBlock>
  );
}
