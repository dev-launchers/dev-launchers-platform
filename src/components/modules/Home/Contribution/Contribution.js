import React from "react";
import FlexPageSection from "../../../../components/common/FlexPageSection";

import {
  Wrapper,
  CtaSectionContent,
  CtaSectionDescription,
  CtaSectionButtonArea
} from "./StyledContribution.js";

import Button from "../../../common/Button";

export default function Contribution() {
  return (
    <FlexPageSection width="100%" contentWidth="70%" justifyContent="center">
      <Wrapper>
        <h1 style={{ textAlign: "center" }}>CONTRIBUTE TO OUR PROJECTS</h1>
        <div>
          <CtaSectionContent>
            <CtaSectionDescription>
              Everything, from our platform to our curriculum to the projects we
              develop, is released to the open source community. We rely on
              contributors to grow our platform and continue serving our
              members!
            </CtaSectionDescription>
            <CtaSectionButtonArea>
              <Button fontSize="2rem" href="https://github.com/dev-launchers">
                Find us on GitHub
              </Button>
            </CtaSectionButtonArea>
          </CtaSectionContent>
        </div>
      </Wrapper>
    </FlexPageSection>
  );
}
