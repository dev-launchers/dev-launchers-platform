import axios from "axios";
import React, { useState } from "react";

import { Wrapper, Bio, Save } from "./StyledBioBox";

export default function BioBox({ data }) {
  const [bioText, setBioText] = useState(data.bio);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const handleTextChange = e => {
    setBioText(e.target.value);
  };

  React.useEffect(() => {
    console.log(data);
  }, []);
  const sendText = () => {
    axios
      .put(
        `https://api-staging.devlaunchers.com/users/${data.id}/profile`,
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
        rows="4"
        cols="50"
        placeholder="Write your bio here! (Coming soon)"
        maxlength="144"
        value={bioText}
        onChange={handleTextChange}
        readOnly={isReadOnly}
      ></Bio>
      <br />
      {isReadOnly ? (
        <button onClick={e => setIsReadOnly(false)}>Edit</button>
      ) : (
        <Save onClick={sendText}>Save</Save>
      )}
    </Wrapper>
  );
}
