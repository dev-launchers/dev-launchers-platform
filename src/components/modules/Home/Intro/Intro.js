import React from "react";
import FlexPageSection from "../../../../components/common/FlexPageSection";

import { CenteredTitleUnderline, Wrapper } from "./StyledIntro";

export default function Intro() {
  return (
    <FlexPageSection>
      <Wrapper>
        <CenteredTitleUnderline>
          Keeping tech{" "}
          <span
            style={{
              backgroundColor: "#1c1c1c",
              color: "#f0edee",
              fontSize: "5rem",
              paddingLeft: ".3rem",
              paddingRight: ".3rem"
            }}
          >
            human
          </span>
        </CenteredTitleUnderline>
        Find out how you can join us on our journey!
      </Wrapper>
    </FlexPageSection>
  );
}
