import React from "react";
import { Wrapper, ProfilePicture, Name, UserName } from "./StyledProfileCard";

const UserProfileImage = ({ img, created_at }) => {
  const date = new Date(created_at);

  const options = {
    year: "numeric",
    month: "long",
  }

  const year = date.toLocaleString("en-US", options);
  const memberSinceText = year ? `Member since ${year}` : '';

  return (
    <Wrapper>
      <ProfilePicture width={266} height={266} src={img} />
      <p> {memberSinceText}</p>
    </Wrapper>
  )
};

export default UserProfileImage;
