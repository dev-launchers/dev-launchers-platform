import React from "react";
import { Wrapper, ProfilePicture, Name, UserName } from "./StyledProfileCard";

const UserProfileImage = ({ img, name, username, created_at }) => {
  const date = new Date(created_at);

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const month = monthNames[date.getMonth()]

  const year = date.getFullYear();

  return (
    <Wrapper>
      <ProfilePicture width={250} height={250} src={img} />
      <Name>{name || username}</Name>
      <UserName>{username}</UserName>
      <p> {`Member Since ${month} ${year}`}</p>
    </Wrapper>
  )
};

export default UserProfileImage;
