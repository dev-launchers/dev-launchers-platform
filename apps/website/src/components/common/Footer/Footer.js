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

          <NavEntry>CREATE</NavEntry>

        </Link>
        <Link href={"/learn"} passHref className="nav-link">

          <NavEntry>LEARN</NavEntry>

        </Link>
        {/* }
        <Link href={"/play"} passHref className="nav-link">
          <NavEntry>PLAY</NavEntry>
        </Link>
        { */}
        <Link href={"/support-us"} passHref className="nav-link">

          <NavEntry>SUPPORT US</NavEntry>

        </Link>
        <Link href={"/projects"} passHref className="nav-link">

          <NavEntry>JOIN</NavEntry>

        </Link>
      </FooterNav>
      <SocialMediaContainer>
        <SocialMediaLink Type="Instagram" />
        <SocialMediaLink Type="Linkedin" />
        <Link href={"/"} passHref className="nav-link">

          <FooterLogo />

        </Link>
        <SocialMediaLink Type="Twitch" />
        <SocialMediaLink Type="Discord" />
      </SocialMediaContainer>
      <RandomQuote />
      <OrgInfoArea>
        -
        <Link href="/page/terms-and-conditions" passHref>
          Terms of Service 
        </Link>
        - | -
        <Link href="/page/privacy-policy" passHref>
          Privacy Policy 
        </Link>{" "}
        {"- | "} ©Dev Launchers, 2021.
      </OrgInfoArea>
    </Wrapper>
  );
}
