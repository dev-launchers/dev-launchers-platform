import React from "react";
import FlexPageSection from "../../../../components/common/FlexPageSection";

import { ImageContainer, Wrapper } from "./StyledHeroImage";

export default function HeroImage() {
  return (
    <FlexPageSection>
      <Wrapper>
        <ImageContainer />
      </Wrapper>
    </FlexPageSection>
  );
}
