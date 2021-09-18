import React from "react";
import { withTheme } from "styled-components";
// import Link from "next/link";

// import Tag from "../../../../common/Tag";
// import SignUpButton from "../SignUpButton";
import {
  Wrapper,
  PercentageProgress,
  Title,
  SubHeading,
  Button,
  Img,
  ButtonText,
  TitleFlex,
} from "./StyledSessions";

// import { env } from "../../../../../utils/EnvironmentVariables";
const PercentageBar = (props) => (
  <Wrapper>
    <TitleFlex>
      <Title>Happening now!</Title>
      <Button>
        <ButtonText>
          <Img />
          <p>Join</p>
        </ButtonText>
      </Button>
    </TitleFlex>
    <SubHeading>General Coworking</SubHeading>
    <PercentageProgress
      data-text={`${props.percentage}%`}
      value={props.percentage}
      max="100"
    />
  </Wrapper>
);

export default withTheme(PercentageBar);
