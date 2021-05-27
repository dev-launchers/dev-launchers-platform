import React from "react";
import { Container } from "./StyledTag";

const Tag = ({ text, filled }) => {
  return (
    <Container filled={filled}>
      {text}
    </Container>
  );
};

export default Tag;
