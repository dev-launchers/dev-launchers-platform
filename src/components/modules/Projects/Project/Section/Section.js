import React from "react";
import { Headline, Wrapper, ContentContainer } from "./StyledSection";

const Section = ({ Title, Content, Color }) => (
  <Wrapper Color={Color}>
    {Title && <Headline>{Title}</Headline>}
    {Content && <ContentContainer>{Content}</ContentContainer>}
  </Wrapper>
);

export default Section;
