import React from "react";

import axios from "axios";
import Header from "../../components/common/Header";
import UserProfile from "../../components/modules/UserProfile";
import Footer from "../../components/common/Footer";
import { env } from "../../utils/EnvironmentVariables";

export const getStaticPaths = async () => {
  const { data } = await axios(`${env().STRAPI_URL}/users`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
    },
  });

  const paths = data
    .filter(({ username }) => username)
    .map(({ username }) => ({
      params: { username },
    }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { username } = context.params;
  const { data: user } = await axios(
    `${env().STRAPI_URL}/users?username_eq=${encodeURI(username)}`
  );

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user: user[0] },
    revalidate: 20,
  };
};

export default function UserProfilePage({ user }) {
  return (
    <div>
      <Header />
      <UserProfile otherUser={user} />
      <Footer />
    </div>
  );
}
