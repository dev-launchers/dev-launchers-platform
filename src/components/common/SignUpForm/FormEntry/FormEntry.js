import React from "react";

import { FormEntryHolder, FormEntryTitle } from "./StyledFormEntry";

export default function FormEntry(props) {
  return (
    <FormEntryHolder style={props.style}>
      <label>
        <FormEntryTitle>
          <u>
            <b>{props.label}</b>
          </u>
        </FormEntryTitle>
        <br />
        <div style={{ fontSize: "1rem" }}>{props.description}</div>
        {props.children}
      </label>
    </FormEntryHolder>
  );
}
