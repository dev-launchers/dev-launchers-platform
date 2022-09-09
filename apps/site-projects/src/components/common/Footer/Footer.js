import React from "react";
import Link from "next/link";

import {
  Wrapper,
  FooterLogo,
  FooterNav,
  NavEntry,
  SocialMediaContainer,
  SocialMediaLink,
  OrgInfoArea,
} from "./StyledFooter";
import RandomQuote from "./RandomQuote";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <Wrapper>
      <Newsletter />
      <FooterNav>
        <Link href={"/create"} passHref className="nav-link">
          <a>
            <NavEntry>CREATE</NavEntry>
          </a>
        </Link>
        <Link href={"/learn"} passHref className="nav-link">
          <a>
            <NavEntry>LEARN</NavEntry>
          </a>
        </Link>
        {/* }
        <Link href={"/play"} passHref className="nav-link">
          <NavEntry>PLAY</NavEntry>
        </Link>
        { */}
        <Link href={"/support-us"} passHref className="nav-link">
          <a>
            <NavEntry>SUPPORT US</NavEntry>
          </a>
        </Link>
        <Link href={"/projects"} passHref className="nav-link">
          <a>
            <NavEntry>JOIN</NavEntry>
          </a>
        </Link>
      </FooterNav>
      <SocialMediaContainer>
        <SocialMediaLink Type="Instagram" />
        <SocialMediaLink Type="Linkedin" />
        <Link href={"/"} passHref className="nav-link">
          <a>
            <FooterLogo />
          </a>
        </Link>
        <SocialMediaLink Type="Twitch" />
        <SocialMediaLink Type="Discord" />
      </SocialMediaContainer>
      <RandomQuote />
      <OrgInfoArea>
        -
        <Link href="/page/terms-and-conditions" passHref>
          <a>Terms of Service </a>
        </Link>
        - | -
        <Link href="/page/privacy-policy" passHref>
          <a>Privacy Policy </a>
        </Link>{" "}
        {"- | "} ©Dev Launchers, 2020.
      </OrgInfoArea>
    </Wrapper>
  );
}
