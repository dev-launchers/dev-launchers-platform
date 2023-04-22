import axios from "axios";
import React, { useRef, useState } from "react";

import { Wrapper, Bio } from "./StyledBioBox";

import { env } from "../../../../utils/EnvironmentVariables";

import { Name } from "../ProfileCard/StyledProfileCard";
import { Typography } from "@devlaunchers/components/components/atoms";
import Button from '@devlaunchers/components/components/atoms/Button/Button';

export default function BioBox({ data, canEdit, name }) {
  const [bioText, setBioText] = useState(data.bio);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const bioRef = useRef(null);
  const handleTextChange = (e) => {
    setBioText(e.target.value);
  };

  const sendText = () => {
    axios
      .put(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${data.id}/profiles`,
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
      <Typography type="h4">{name}</Typography>
      <br />
      <Bio
        rows="7"
        cols="50"
        placeholder={
          canEdit ? "Write your bio here!" : `${data.displayName} has no bio!`
        }
        maxlength="144"
        value={bioText}
        onDoubleClick={() => canEdit && setIsReadOnly(false)}
        onChange={handleTextChange}
        readOnly={isReadOnly}
        ref={bioRef}
      ></Bio>
      <br />
      { canEdit &&
        (isReadOnly ? (
          <Button
            onClick={() => {
              setIsReadOnly(false);
              bioRef.current.focus();
            }}
            style = {{color:"black"}}
          >
            Edit
          </Button>
        ) : (
          <Button
            onClick={() => {
              setIsReadOnly(true);
              sendText();
            }}
            style = {{color:"black"}}
          >
            Save
          </Button>
        ))}
    </Wrapper>
  );
}
