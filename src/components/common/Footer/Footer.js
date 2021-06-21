import React from "react";
import Link from "next/link";

import {
  Wrapper,
  FooterLogo,
  FooterNav,
  NavEntry,
  SocialMediaContainer,
  SocialMediaLink,
  OrgInfoArea
} from "./StyledFooter";
import RandomQuote from "./RandomQuote";
import Newsletter from "./Newsletter";

export default function Footer(props) {
  return (
    <Wrapper>
      {/*}<Newsletter />
        Uncomment this after email newsletter component is fully working
        Also remove the style in the FooterNav below
      {*/}
      <FooterNav style={{ paddingTop: "100px" }}>
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
        {/*}
        <Link href={"/play"} passHref className="nav-link">
          <NavEntry>PLAY</NavEntry>
        </Link>
        {*/}
        <Link href={"/earn"} passHref className="nav-link">
          <a>
            <NavEntry>EARN</NavEntry>
          </a>
        </Link>
        <Link href={"/support-us"} passHref className="nav-link">
          <a>
            <NavEntry>SUPPORT US</NavEntry>
          </a>
        </Link>
        <Link href={"/members"} passHref className="nav-link">
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
        -<a href="/page/terms-and-conditions">Terms of Service </a> {"- | -"}
        <a href="/page/privacy-policy">Privacy Policy </a> {"- | "} ©Dev
        Launchers, 2020.
      </OrgInfoArea>
    </Wrapper>
  );
}
