import React from "react";
import { Wrapper, Container, Title, PointsNumber } from "./StyledPoints";

const Points = (/* { availablePoints, seasonPoints, volunteerHours } */) => (
  <Wrapper>
    <Container>
      <Title>Available Points</Title>
      <PointsNumber>
        <span style={{ fontSize: "1rem" }}>Coming Soon</span>
      </PointsNumber>
    </Container>
    <Container>
      <Title>Season Points</Title>
      <PointsNumber>
        <span style={{ fontSize: "1rem" }}>Coming Soon</span>
      </PointsNumber>
    </Container>
    <Container>
      <Title>Volunteer Hours</Title>
      <PointsNumber>
        <span style={{ fontSize: "1rem" }}>Coming Soon</span>
      </PointsNumber>
    </Container>
  </Wrapper>
);

export default Points;
