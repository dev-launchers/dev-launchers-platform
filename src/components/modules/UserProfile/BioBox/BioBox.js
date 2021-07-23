import axios from "axios";
import React, { useState } from "react";

import { Wrapper, Bio } from "./StyledBioBox";

import { env } from "../../../../utils/EnvironmentVariables.js";

export default function BioBox({ data }) {
  const [bioText, setBioText] = useState(data.bio);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const handleTextChange = e => {
    setBioText(e.target.value);
  };

  const sendText = () => {
    axios
      .put(
        env().STRAPI_URL + `/users/${data.id}/profiles`,
        { bio: bioText },
        { withCredentials: true }
      )
      .then(res => {
        console.log(res);
        setIsReadOnly(true);
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <Wrapper>
      <br />
      <Bio
        rows="2"
        cols="50"
        placeholder="Write your bio here!"
        maxlength="144"
        value={bioText}
        onDoubleClick={e => setIsReadOnly(false)}
        onChange={handleTextChange}
        readOnly={isReadOnly}
      ></Bio>
      <br />
      {isReadOnly ? (
        <button onClick={e => setIsReadOnly(false)}>Edit</button>
      ) : (
        <button onClick={(e => setIsReadOnly(true), sendText)}>Save</button>
      )}
    </Wrapper>
  );
}
