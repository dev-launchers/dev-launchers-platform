import React from "react";
import FlexPageSection from "../../../../components/common/FlexPageSection";

import {
  Wrapper,
  ImageAreaWrapper,
  CtaImage,
  DescriptionAreaWrapper,
  TitleArea,
  DescriptionArea,
  DescriptionHeadline,
  DescriptionContent
} from "./StyledCtaDescriptionArea";

export default function CtaDescriptionArea(props) {
  return (
    <FlexPageSection>
      <Wrapper flexDirection={props.flexDirection}>
        <ImageAreaWrapper flexDirection={props.flexDirection}>
          <CtaImage src={props.imageSrc} />
        </ImageAreaWrapper>
        <DescriptionAreaWrapper>
          <TitleArea flexDirection={props.flexDirection}>
            {props.title}
          </TitleArea>
          <DescriptionArea borderTopColor={props.titleUnderlineColor}>
            <DescriptionHeadline>
              {props.descriptionHeadline}
            </DescriptionHeadline>
            <DescriptionContent>{props.descriptionContent}</DescriptionContent>
          </DescriptionArea>
        </DescriptionAreaWrapper>
      </Wrapper>
    </FlexPageSection>
  );
}
