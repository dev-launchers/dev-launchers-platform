import React from "react";
import FlexPageSection from "../../../common/FlexPageSection";

import {
  Wrapper,
  RainbowedMessageArea,
  MessageArea,
  Tagline,
  ImageArea,
  Image,
} from "./StyledSupportUsOverlay";
import RainbowBar from "../../../common/RainbowBar";

import boyFrontImage from "../../../../images/people-cutouts/boy-front.png";

export default function HeroOverlay() {
  return (
    <FlexPageSection>
      <Wrapper>
        <RainbowedMessageArea>
          <RainbowBar />
          <MessageArea>
            <Tagline>
              We equip people with the skills needed to thrive in technical
              careers, but we need{" "}
              <span
                style={{
                  backgroundColor: "#81c3d7",
                  color: "#f0edee",
                  fontSize: "3rem",
                  fontWeight: "bold",
                  paddingLeft: ".3rem",
                  paddingRight: ".3rem",
                }}
              >
                YOUR
              </span>{" "}
              help!
            </Tagline>
          </MessageArea>
        </RainbowedMessageArea>
        <ImageArea>
          <Image src={boyFrontImage} alt="" />
        </ImageArea>
      </Wrapper>
    </FlexPageSection>
  );
}
