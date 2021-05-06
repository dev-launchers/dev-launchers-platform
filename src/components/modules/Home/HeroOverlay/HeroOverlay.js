import React from "react";

import Button from "../../../common/Button";
import Link from "next/link";
import { Tagline, Wrapper } from "./StyledHeroOverlay";

export default function HeroOverlay() {
  return (
    <Wrapper>
      <Tagline>
        Launch your imagination!
        <br />
        <Link href="/members" passHref>
          <Button
            //href="https://forms.gle/ktNmippzfYUTnwgb8"
            hero
          >
            BECOME A DEVELOPER!
          </Button>
        </Link>
      </Tagline>
    </Wrapper>
  );
}
