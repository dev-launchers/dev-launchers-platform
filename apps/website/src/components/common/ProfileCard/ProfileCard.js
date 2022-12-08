import React from "react";
import { Wrapper, ProfilePicture, Name, UserName } from "./StyledProfileCard";
import Image from "next/image";

const UserProfileImage = ({ person }) => (
  <div 
    key={Math.random} 
    style={{
      width:"30%",
      background:"#dddddd",
      color:"black",
      display:"flex",
      margin:"1rem"
    }}
  >
    <Image 
      src={person?.profile?.profilePictureUrl} 
      alt=""
      width="100%"
      height="100%"
    />
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"flex-start",
      margin:"1rem"
    }}>
      <span style={{fontSize:"2rem"}}>{person?.profile?.displayName}</span>
      {person?.profile?.bio}
    </div>
  </div>
);

export default UserProfileImage;






