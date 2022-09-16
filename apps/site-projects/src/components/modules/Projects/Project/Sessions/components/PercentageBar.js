import React from "react";
import { withTheme } from "styled-components";
// import Link from "next/link";

// import Tag from "../../../../common/Tag";
// import SignUpButton from "../SignUpButton";
import {
  Wrapper,
  // PercentageProgress,
  Title,
  SubHeading,
  Button,
  Img,
  ButtonText,
  // TitleFlex,
} from "./StyledSessions";

// import { env } from "../../../../../utils/EnvironmentVariables";
const PercentageBar = ({ /* percentage , */ apointmentTime, link, title, date }) => (
  <Wrapper>
    <Title>{apointmentTime}</Title>
    <Title>{date}</Title>
    <SubHeading>{title}</SubHeading>
    <Button as="a" href={link} target="_blank" rel="noopener noreferrer">
      <ButtonText>
        <Img />
        <p>Join</p>
      </ButtonText>
    </Button>
    {/* taking this out untill later implementation
    <PercentageProgress
      data-text={`${percentage}%`}
      value={percentage}
      max="100"
    />
    */}
  </Wrapper>
);

export default withTheme(PercentageBar);
