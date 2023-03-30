import React from "react";
import Wrapper from "./StyledPageBody";

export default function PageBody({
  children,
  style = {},
  width = "100%",
  height = "auto",
  padding,
}) {
  const styles = { ...style, width, height, padding };
  return <Wrapper style={styles}>{children}</Wrapper>;
}
