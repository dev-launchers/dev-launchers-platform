import React from "react";

import { Wrapper, Bio, Save } from "./StyledBioBox";

export default function BioBox() {
  return (
    <Wrapper>
      <br />
      <Bio
        rows="4"
        cols="50"
        placeholder="write ur bio here"
        maxlength="144"
      ></Bio>
      <br />
      <Save onclick="changeContent()">Edit</Save>
    </Wrapper>
  );
}
