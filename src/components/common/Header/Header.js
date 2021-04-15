import env from "../../../utils/EnvironmentVariables.js";

import React from "react";
import Link from "next/link";
import { toast } from "react-toastify";

import {
  HeaderBlock,
  Logo,
  LogoWrapper,
  LogoImageHolder,
  LogoImage,
  LogoWords,
  HeaderNav,
  NavEntry,
  SignInArea,
  UserProfilePic,
  HeaderPusher
} from "./StyledHeader";

import { useAuthContext } from "../../../context/AuthContext";

import Button from "../../common/Button";
import HamburgerMenu from "../../common/HamburgerMenu/";
export default function Header(props) {
  const { authUser, doAuthRequest } = useAuthContext();

  return (
    <div style={{ height: "7.5vh" }}>
      <HamburgerMenu />
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
          {/*}
          <Link href={"/play"} className="nav-link">
            <NavEntry>PLAY</NavEntry>
          </Link>
          {*/}
          <Link href="/earn">
            <a>
              <NavEntry>EARN</NavEntry>
            </a>
          </Link>
          <Link href="/support-us">
            <a>
              <NavEntry>SUPPORT US</NavEntry>
            </a>
          </Link>
          <Link href="/members">
            <a>
              <NavEntry>JOIN</NavEntry>
            </a>
          </Link>
        </HeaderNav>
        <div />
        <SignInArea>
          {authUser ? (
            <UserProfilePic src={authUser.photoURL} />
          ) : (
            <Button fontSize="1.2rem" href={env.GOOGLE_AUTH_URL}>
              Sign In
            </Button>
          )}
        </SignInArea>
      </HeaderBlock>
      <HeaderPusher>x</HeaderPusher>
    </div>
  );
}
