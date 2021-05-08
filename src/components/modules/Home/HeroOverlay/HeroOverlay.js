import React from "react";
import FlexPageSection from "../../../../components/common/FlexPageSection";

import Button from "../../../common/Button";
import Link from "next/link";
import {
  Tagline,
  Wrapper,
  MessageArea,
  ImageArea,
  Image
} from "./StyledHeroOverlay";

import manGlassesImage from "../../../../images/people-cutouts/man-glasses.png";

export default function HeroOverlay() {
  return (
    <FlexPageSection>
      <Wrapper>
        <MessageArea>
          <Tagline>
            We build world changing software while preparing people to thrive in
            technical careers█
          </Tagline>
        </MessageArea>
        <ImageArea>
          <Image src={manGlassesImage} />
          <Link href="/members" passHref>
            <Button
              //href="https://forms.gle/ktNmippzfYUTnwgb8"
              hero
              style={{ position: "absolute", bottom: "10%" }}
            >
              BECOME A DEVELOPER!
            </Button>
          </Link>
        </ImageArea>
      </Wrapper>
    </FlexPageSection>
  );
}
