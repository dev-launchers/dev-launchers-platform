import React from "react";
import { Wrapper, ProfilePicture, Name, UserName } from "./StyledProfileCard";

const UserProfileImage = ({ img, created_at }) => {
  const date = new Date(created_at);

  const options = {
    year: "numeric",
    month: "long",
  }

  const year = date.toLocaleString("en-US", options);

  return (
    <Wrapper>
      <ProfilePicture width={250} height={250} src={img} />
      <p> {`Member Since ${year}`}</p>
    </Wrapper>
  )
};

export default UserProfileImage;
