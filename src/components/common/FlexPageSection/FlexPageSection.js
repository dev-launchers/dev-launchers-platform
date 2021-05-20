import React from "react";
import Wrapper from "./StyledFlexPageSection";

export default function FlexPageSection({
  children,
  style = {},
  align,
  width,
  height,
  contentWidth = "100%",
  contentHeight = "100%",
  flexDirection = "row",
  justifyContent = "center",
  alignItems = "center",
  backgroundImage
}) {
  style.width = width ? width : style.width;
  style.height = height ? height : style.height;
  style.display = style.display ? style.display : "flex";
  style.flexDirection = style.flexDirection
    ? style.flexDirection
    : flexDirection;
  style.justifyContent = style.justifyContent
    ? style.justifyContent
    : justifyContent;
  style.alignItems = style.alignItems ? style.alignItems : alignItems;
  style.backgroundImage = backgroundImage ? `url(${backgroundImage})` : "";

  let contentStyle = {
    width: contentWidth,
    height: contentHeight,
    display: style.display,
    flexDirection: style.flexDirection,
    justifyContent: style.justifyContent,
    alignItems: style.alignItems
  };

  return (
    <Wrapper style={style}>
      <div style={contentStyle}>{children}</div>
    </Wrapper>
  );
}
