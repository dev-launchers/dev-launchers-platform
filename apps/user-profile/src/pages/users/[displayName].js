import React from 'react';
import axios from 'axios';

import UserProfile from '../../components/modules/UserProfile';
import { SidebarDataProvider } from '../../context/SidebarDataContext';

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context) => {
  const { displayName } = context.params;
  console.log('DisplayName Params:', displayName);
  console.log('RAW displayName:', JSON.stringify(displayName));

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/profiles`,
      {
        params: {
          filters: {
            displayName: {
              $eq: displayName,
            },
          },
          populate: '*',
        },
      }
    );

    const user = res.data?.data?.[0] || null;

    console.log('Matched user:', user);

    if (!user) {
      return {
        props: { user: null },
        revalidate: 5,
      };
    }

    return {
      props: { user },
      revalidate: 20,
    };
  } catch (error) {
    console.error(
      'Error fetching user:',
      error.response?.data || error.message
    );
    return { notFound: true };
  }

  // let { data: user } = userId.match(numberRegex)
  //   ? await axios(
  //       `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${userId}?populate=deep`
  //     )
  //   : { data: null };

  // return !user
  //   ? { notFound: true }
  //   : {
  //       props: { user: user },
  //       revalidate: 20,
  //     };
};

export default function UserProfilePage({ user }) {
  return (
    // <div>
    <SidebarDataProvider>
      <UserProfile publicUserData={user} isPublic={true} />
    </SidebarDataProvider>
    // </div>
  );
}
