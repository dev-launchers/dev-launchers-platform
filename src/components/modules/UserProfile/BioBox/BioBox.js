import React from "react";

import { Wrapper, Bio, Save } from "./StyledBioBox";

export default function BioBox() {
  return (
    <Wrapper>
      <br />
      <Bio
        rows="4"
        cols="50"
        placeholder="Write your bio here! (Coming soon)"
        maxlength="144"
      ></Bio>
      <br />
      <Save onclick="changeContent()">Edit</Save>
    </Wrapper>
  );
}
