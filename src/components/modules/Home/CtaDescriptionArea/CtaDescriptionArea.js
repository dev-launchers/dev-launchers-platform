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
      <Wrapper
        flexDirection={props.flexDirection}
        backgroundColor={props.mainBackgroundColor}
      >
        <ImageAreaWrapper flexDirection={props.flexDirection}>
          <CtaImage src={props.imageSrc} />
        </ImageAreaWrapper>
        <DescriptionAreaWrapper>
          <TitleArea
            fontColor={props.titleFontColor}
            flexDirection={props.flexDirection}
          >
            {props.title}
          </TitleArea>
          <DescriptionArea
            borderTopColor={props.titleUnderlineColor}
            fontColor={props.descriptionFontColor}
            backgroundColor={props.descriptionBackgroundColor}
          >
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
