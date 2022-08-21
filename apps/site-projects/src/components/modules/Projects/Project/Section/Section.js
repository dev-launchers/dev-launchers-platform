import React, { forwardRef } from "react";
import { Headline, Wrapper, ContentContainer } from "./StyledSection";

const Section = (
  { Title, Content, bgColor, txtColor, style, contentStyle },
  ref
) => (
  <Wrapper ref={ref} style={style} bgColor={bgColor} txtColor={txtColor}>
    {Title && <Headline>{Title}</Headline>}
    {Content && (
      <ContentContainer ref={ref} style={contentStyle}>
        {Content}
      </ContentContainer>
    )}
  </Wrapper>
);

export default forwardRef(Section);
