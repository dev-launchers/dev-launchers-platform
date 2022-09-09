import React from "react";
import Wrapper from "./StyledPageBody";

export default function PageBody({
  children,
  style = {},
  width = "100%",
  height = "auto",
}) {
  const styles = { ...style, width, height };
  return <Wrapper style={styles}>{children}</Wrapper>;
}
