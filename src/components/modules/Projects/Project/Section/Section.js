import React from "react";
import { Headline, Wrapper, ContentContainer } from "./StyledSection";

const Section = ({
  Title,
  Content,
  bgColor,
  txtColor,
  style,
  contentStyle,
}) => (
  <Wrapper style={style} bgColor={bgColor} txtColor={txtColor}>
    {Title && <Headline>{Title}</Headline>}
    {Content && (
      <ContentContainer style={contentStyle}>{Content}</ContentContainer>
    )}
  </Wrapper>
);

export default Section;
