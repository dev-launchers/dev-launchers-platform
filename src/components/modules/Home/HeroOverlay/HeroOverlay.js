import React from "react";

import Button from "../../../common/Button";
import Link from "next/link";
import { Tagline, Wrapper, MessageArea, ImageArea } from "./StyledHeroOverlay";

export default function HeroOverlay() {
  return (
    <Wrapper>
      <MessageArea>
        <Tagline>
          We build world changing software while preparing people to thrive in
          technical careers█
        </Tagline>
      </MessageArea>
      <ImageArea>
        <br />
        <Link href="/members" passHref>
          <Button
            //href="https://forms.gle/ktNmippzfYUTnwgb8"
            hero
          >
            BECOME A DEVELOPER!
          </Button>
        </Link>
      </ImageArea>
    </Wrapper>
  );
}
