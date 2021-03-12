import React from "react";
import Bio from "./StyledBioBox";

export default function BioBox() {
  return (
    <div>
      <br />
      <h4>Tell us about yourself!</h4>
      <Bio
        rows="4"
        cols="50"
        placeholder="write ur bio here"
        maxlength="144"
      ></Bio>
    </div>
  );
}
