import React from "react";
import { Wrapper, Container, PointsNumber } from "./StyledPoints";

const Points = ({ availablePoints, seasonPoints, volunteerHours }) => {
  return (
    <Wrapper>
      <Container>
        Available Points
        <PointsNumber>{availablePoints}</PointsNumber>
      </Container>
      <Container>
        Season Points
        <PointsNumber>{seasonPoints}</PointsNumber>
      </Container>
      <Container>
        Volunteer Hours
        <PointsNumber>{volunteerHours}</PointsNumber>
      </Container>
    </Wrapper>
  );
};

export default Points;
