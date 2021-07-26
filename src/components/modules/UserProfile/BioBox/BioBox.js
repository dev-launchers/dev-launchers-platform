import axios from "axios";
import React, { useState } from "react";

import { Wrapper, Bio } from "./StyledBioBox";

import { env } from "../../../../utils/EnvironmentVariables";

export default function BioBox({ data }) {
  const [bioText, setBioText] = useState(data.bio);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const handleTextChange = (e) => {
    setBioText(e.target.value);
  };

  const sendText = () => {
    axios
      .put(
        `${env().STRAPI_URL}/users/${data.id}/profiles`,
        { bio: bioText },
        { withCredentials: true }
      )
      .then(() => {
        // TODO give user feedback that it worked
        setIsReadOnly(true);
      })
      .catch(() => {
        // TODO handle errors
      });
  };
  return (
    <Wrapper>
      <br />
      <Bio
        rows="4"
        cols="50"
        placeholder="Write your bio here!"
        maxlength="144"
        value={bioText}
        onChange={handleTextChange}
        readOnly={isReadOnly}
      ></Bio>
      <br />
      {isReadOnly ? (
        <button onClick={() => setIsReadOnly(false)}>Edit</button>
      ) : (
        <button onClick={sendText}>Save</button>
      )}
    </Wrapper>
  );
}
