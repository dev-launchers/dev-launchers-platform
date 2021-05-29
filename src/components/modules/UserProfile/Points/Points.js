import React from "react";
import { Wrapper, Container, Title, PointsNumber } from "./StyledPoints";

const Points = ({ availablePoints, seasonPoints, volunteerHours }) => {
  return (
    <Wrapper>
      <Container>
        <Title>Available Points</Title>
        <PointsNumber>{availablePoints}</PointsNumber>
      </Container>
      <Container>
        <Title>Season Points</Title>
        <PointsNumber>{seasonPoints}</PointsNumber>
      </Container>
      <Container>
        <Title>Volunteer Hours</Title>
        <PointsNumber>{volunteerHours}</PointsNumber>
      </Container>
    </Wrapper>
  );
};

export default Points;
