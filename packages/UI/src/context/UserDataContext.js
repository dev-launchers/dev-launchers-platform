import constate from 'constate'; // State Context Object Creator
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export const DEFAULT_USER = {
  id: 6,
  name: 'Kris Gano',
  username: 'Kris_Gano',
  email: 'krisgano@devlaunchers.com',
  bio: 'A kris bio',
  profilePictureUrl:
    'https://lh3.googleusercontent.com/a/AATXAJxZ3nb3nA60iLAv1-RqQizgB871aHjJp4LTwi55=s96-c',
  socialMediaLinks: [],
  discord: {
    id: 0,
    avatar: '',
    username: '',
    discriminator: '',
  },
  interests: [
    {
      id: 17,
      published_at: '2021-08-11T05:41:33.064Z',
      created_at: '2021-08-11T05:41:28.424Z',
      updated_at: '2021-08-11T05:41:33.478Z',
      interest: 'Node.js',
      categories: [],
    },
    {
      id: 7,
      published_at: '2021-08-11T05:37:11.747Z',
      created_at: '2021-08-11T05:37:07.908Z',
      updated_at: '2021-08-11T05:37:11.973Z',
      interest: 'Web Dev',
      categories: [],
    },
    {
      id: 1,
      published_at: '2021-08-11T05:35:35.681Z',
      created_at: '2021-08-11T05:35:29.489Z',
      updated_at: '2021-08-11T05:35:35.960Z',
      interest: 'Blockchain',
      categories: [],
    },
    {
      id: 4,
      published_at: '2021-08-11T05:36:30.868Z',
      created_at: '2021-08-11T05:36:25.579Z',
      updated_at: '2021-08-11T05:36:31.097Z',
      interest: 'UI/UX',
      categories: [],
    },
  ],
};

// Built from this article: https://www.sitepoint.com/replace-redux-react-hooks-context-api/

// Step 1: Create a custom hook that contains your state and actions
function useUserDataHook() {
  const [userData, _] = useState(DEFAULT_USER);
  const [isAuthenticated, setIsAuthenticated] = useState();

  const setUserData = useCallback((data) => _(() => data), []);
  useEffect(() => {
    setIsAuthenticated(userData && userData.id > 0);
  }, [userData.id > 0]);

  useEffect(() => {
    axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?populate=deep`, {
      withCredentials: true,
    })
      .then(({ data: currentUser }) => {
        console.log('Fetching...');
        setUserData({
          id: currentUser.id,
          name: currentUser.profile.displayName,
          username: currentUser.username,
          email: currentUser.email,
          bio: currentUser.profile.bio,
          profilePictureUrl: currentUser.profile.profilePictureUrl,
          socialMediaLinks: currentUser.profile.socialMediaLinks,
          interests: currentUser.interests,
          projects: currentUser.projects,
          idea_cards: currentUser.idea_cards,
          profile: currentUser.profile,
          ownedCards: currentUser.ownedCards,
        });
      })
      .catch((e) => {
        console.error('failed to fetch', e);
        setIsAuthenticated(false);
      });
  }, []);

  return { useUserDataContext: { userData, setUserData, isAuthenticated } };
}

// Step 2: Declare your context state object to share the state with other components
const [UserDataProvider, useUserDataContext] = constate(
  useUserDataHook,
  (value) => value.useUserDataContext
);
export { UserDataProvider, useUserDataContext };
