import React from "react";
import Wrapper from "./StyledPageBody";

export default function PageBody({
  children,
  style = {},
  width = "100%",
  height = "auto"
}) {
  style.width = width;
  style.height = height;
  return <Wrapper style={style}>{children}</Wrapper>;
}
