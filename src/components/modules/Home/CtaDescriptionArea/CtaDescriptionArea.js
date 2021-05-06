import React from "react";

import {
  Wrapper,
  ImageAreaWrapper,
  ImageArea,
  DescriptionAreaWrapper,
  TitleArea,
  DescriptionArea,
  DescriptionHeadline,
  DescriptionContent
} from "./StyledCtaDescriptionArea";

export default function CtaDescriptionArea(props) {
  return (
    <Wrapper flexDirection={props.flexDirection}>
      <ImageAreaWrapper flexDirection={props.flexDirection}>
        <ImageArea></ImageArea>
      </ImageAreaWrapper>
      <DescriptionAreaWrapper>
        <TitleArea flexDirection={props.flexDirection}>{props.title}</TitleArea>
        <DescriptionArea borderTopColor={props.titleUnderlineColor}>
          <DescriptionHeadline>{props.descriptionHeadline}</DescriptionHeadline>
          <DescriptionContent>{props.descriptionContent}</DescriptionContent>
        </DescriptionArea>
      </DescriptionAreaWrapper>
    </Wrapper>
  );
}
