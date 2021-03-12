import React from "react";

export default function BioBox() {
  return (
    <div>
      <br />
      <h4>Tell us about yourself!</h4>
      <textarea
        rows="4"
        cols="50"
        placeholder="write ur bio here"
        maxlength="144"
      ></textarea>
    </div>
  );
}
