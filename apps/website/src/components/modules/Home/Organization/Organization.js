import React from "react";
import Link from "next/link";
import FlexPageSection from "../../../common/FlexPageSection";

import Button from "../../../common/Button";
import {
  CtaSectionButtonArea,
  CtaSectionContent,
  CtaSectionDescription,
  Wrapper,
} from "./StyledOrganization";

export default function Organization() {
  return (
    <FlexPageSection>
      <Wrapper>
        <h1>
          Our Organization
          <span style={{ fontSize: "1rem" }}> (for everyone)</span>
        </h1>
        Dev Launchers is a nonprofit intent on empowering people from diverse
        communities
        <div>
          <h2>We love what we do. You should too!</h2>
          <CtaSectionContent>
            <CtaSectionDescription>
              Your time is valuable, do something you love. Dev Launchers is
              built for people just like you, take a look around and join us!
            </CtaSectionDescription>
            <CtaSectionButtonArea>
              <Link href={"/members"} passHref legacyBehavior>
                <Button fontSize="2rem">Join Our Programs</Button>
              </Link>
            </CtaSectionButtonArea>
          </CtaSectionContent>
        </div>
        <div>
          <h2>We believe in Open Source</h2>
          <CtaSectionContent>
            <CtaSectionDescription>
              Everything, from our platform to our curriculum to the projects we
              develop, is released to the open source community. We rely on
              contributors to grow our platform and continue serving our
              students!
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
