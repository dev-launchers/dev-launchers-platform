import React from "react";

import LogoImage from "./LogoImage/LogoImage.js";
import Card from "../../../common/Card/Card.js";

import aespriteImage from "../../../../images/home-page/aseprite.png";
import kraftiesImage from "../../../../images/home-page/krafties.png";
import austinLibraryImage from "../../../../images/home-page/austin-public-library.png";
import codesandboxImage from "../../../../images/home-page/codesandbox.png";
import phaser3Image from "../../../../images/home-page/phaser-3.png";
import pixilArtImage from "../../../../images/home-page/pixilart-logo.png";
import reactImage from "../../../../images/home-page/react-logo.png";
import { PartnerList, Wrapper } from "./StyledPartners";

export default function Partners() {
  return (
    <Wrapper>
      <h1>CHECK OUT OUR EXTENDED FAMILY</h1>
      <p>
        We partner with organizations doing outreach to bring in a diverse range
        of students, and for-profit partners so Dev Launchers can grow and
        continue to do what we love! Click an image to learn more.
      </p>
      <h3>Partners</h3>
      <PartnerList>
        <LogoImage
          href="https://library.austintexas.gov/"
          src={austinLibraryImage}
          width="75%"
        />
      </PartnerList>
      <h3>Sponsors</h3>
      <PartnerList>
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
          href="https://www.pixilart.com/"
          src={pixilArtImage}
          width="80%"
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
  );
}
