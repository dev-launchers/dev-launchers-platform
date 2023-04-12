import React from "react";
import axios from "axios";

import UserProfile from "../../components/modules/UserProfile";

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { userId: "/"}}],
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const {userId} = context.params;

  // only numbers
  const numberRegex = /^\d+$/;

  let {data: user} = userId.match(numberRegex) ? 
    await axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${userId}`) : 
    {data: null};

  return !user ? 
  { notFound: true, } : 
  {
    props: { user: user},
    revalidate: 20,
  };
};

export default function UserProfilePage({user}) {
  return (
    <div>
      <UserProfile otherUser={user} isPublic={true}/>
    </div>
  );
}