import React from "react";
import { Wrapper, ProfilePicture, Name, UserName } from "./StyledProfileCard";

const UserProfileImage = ({ img, name, username }) => (
  <Wrapper>
    <ProfilePicture width={250} height={250} src={img} />
    <Name>{name}</Name>
    <UserName>{username}</UserName>
  </Wrapper>
);

export default UserProfileImage;
