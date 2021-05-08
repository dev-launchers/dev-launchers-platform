import React from "react";
import Wrapper from "./StyledFlexPageSection";

export default function FlexPageSection({
  children,
  style = {},
  align,
  width,
  height,
  contentWidth = "100%",
  contentHeight = "100%"
}) {
  style.width = width ? width : style.width;
  style.height = height ? height : style.height;
  style.display = style.display ? style.display : "flex";
  style.flexDirection = style.flexDirection ? style.flexDirection : "center";
  style.justifyContent = style.justifyContent ? style.justifyContent : "center";
  style.alignItems = style.alignItems ? style.alignItems : "center";
  return (
    <Wrapper style={style}>
      <div style={{ width: contentWidth, height: contentHeight }}>
        {children}
      </div>
    </Wrapper>
  );
}
