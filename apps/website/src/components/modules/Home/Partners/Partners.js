import React from "react";
import FlexPageSection from "../../../common/FlexPageSection";

import LogoImage from "./LogoImage/LogoImage";
import CenteredHeadline from "../../../common/CenteredHeadline";

import aespriteImage from "../../../../images/home-page/aseprite.png?webp";
import kraftiesImage from "../../../../images/home-page/krafties.png?webp";
import austinLibraryImage from "../../../../images/home-page/austin-public-library.png?webp";
import codesandboxImage from "../../../../images/home-page/codesandbox.png?webp";
import phaser3Image from "../../../../images/home-page/phaser-3.png?webp";
import pixilArtImage from "../../../../images/home-page/pixilart-logo.png?webp";
import reactImage from "../../../../images/home-page/react-logo.png?webp";
import googleImage from "../../../../images/home-page/google.png?webp";
import microsoftImage from "../../../../images/home-page/microsoft.png?webp";
import { PartnerList, Wrapper } from "./StyledPartners";

export default function Partners() {
  return (
    <FlexPageSection width="100%" contentWidth="70%" justifyContent="center">
      <Wrapper>
        <CenteredHeadline>CHECK OUT OUR EXTENDED FAMILY</CenteredHeadline>
        <p>
          Dev Launchers partners with for-profit partners so we can grow
          and continue to do what we love, as well as organizations doing outreach to bring in a diverse
          range of members.
        </p>
        <h3>Powered By Grants From</h3>
        <PartnerList>
          <LogoImage
            href="https://google.com/"
            src={googleImage}
            width="75%"
          />
          <LogoImage
            href="https://microsoft.com/"
            src={microsoftImage}
            width="85%"
          />
        </PartnerList>
        <h3>Partners and Sponsors</h3>
        <PartnerList>
          <LogoImage
            href="https://library.austintexas.gov/"
            src={austinLibraryImage}
            width="75%"
          />
          <LogoImage
            href="https://www.aseprite.org/"
            src={aespriteImage}
            width="58%"
          />
          <LogoImage
            href="http://krafties.com/"
            src={kraftiesImage}
            width="60%"
          />
        </PartnerList>
        <h3>Products and Tools</h3>
        <PartnerList>
          <LogoImage
            href="https://codesandbox.io/"
            src={codesandboxImage}
            width="40%"
          />
          <LogoImage
            href="https://phaser.io/phaser3"
            src={phaser3Image}
            width="60%"
          />
          <LogoImage href="https://reactjs.org/" src={reactImage} width="60%" />
        </PartnerList>
        <div />
        <div />
      </Wrapper>
    </FlexPageSection>
  );
}
