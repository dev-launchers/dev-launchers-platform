import React from "react";

import UserProfile from "../../../components/modules/UserProfile";
import axios from "axios";

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { userId: ""}}],
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { userId } = context.params;
  const { data: user } = await axios(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${userId}`
  );

  return !user ? 
  { notFound: true, } : 
  {
    props: { user: user },
    revalidate: 20,
  };
};

export default function UserProfilePage({user}) {
  return (
    <div>
      <UserProfile otherUser={user} />
    </div>
  );
}