import React from "react";
import Wrapper from "./StyledPageBody";

export default function PageBody(props) {
  return <Wrapper style={props.style}>{props.children}</Wrapper>;
}
