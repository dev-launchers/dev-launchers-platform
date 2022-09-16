import React from "react";
import Wrapper from "./StyledFlexPageSection";

export default function FlexPageSection({
  children,
  style = {},
  width,
  height,
  contentWidth = "100%",
  // contentHeight = "100%",
  flexDirection = "row",
  justifyContent = "center",
  alignItems = "center",
  backgroundImage,
}) {
  const styles = {
    ...style,
    width: width || style.width,
    height: height || style.height,
    display: style.display ? style.display : "flex",
    flexDirection: style.flexDirection ? style.flexDirection : flexDirection,
    justifyContent: style.justifyContent
      ? style.justifyContent
      : justifyContent,
    alignItems: style.alignItems ? style.alignItems : alignItems,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "",
  };
  const contentStyle = {
    width: contentWidth,
    // height: contentHeight,
    display: style.display,
    flexDirection: style.flexDirection,
    justifyContent: style.justifyContent,
    alignItems: style.alignItems,
  };

  return (
    <Wrapper style={styles}>
      <div style={contentStyle}>{children}</div>
    </Wrapper>
  );
}
