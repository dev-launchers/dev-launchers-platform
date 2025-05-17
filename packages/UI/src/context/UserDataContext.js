import constate from 'constate'; // State Context Object Creator
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export const DEFAULT_USER = {
  id: 0,
  name: '',
  username: '',
  email: '',
  bio: '',
  profilePictureUrl: '',
  socialMediaLinks: [],
  discord: {
    id: 0,
    avatar: '',
    username: '',
    discriminator: '',
  },
  interests: [],
};

// Built from this article: https://www.sitepoint.com/replace-redux-react-hooks-context-api/

// Step 1: Create a custom hook that contains your state and actions
function useUserDataHook() {
  const [userData, _] = useState(DEFAULT_USER);
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const setUserData = useCallback((data) => _(() => data), []);
  useEffect(() => {
    setIsAuthenticated(userData && userData?.id > 0);
  }, [userData?.id]);

  useEffect(() => {
    axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?populate=deep`, {
      withCredentials: true,
    })
      .then(({ data: currentUser }) => {
        setUserData({
          id: currentUser.id,
          name: currentUser.profile?.displayName,
          username: currentUser.username,
          email: currentUser.email,
          skills: currentUser.skills,
          bio: currentUser.profile?.bio,
          profilePictureUrl: currentUser.profile?.profilePictureUrl,
          socialMediaLinks: currentUser.profile?.socialMediaLinks,
          interests: currentUser.interests,
          projects: currentUser.projects,
          idea_cards: currentUser.idea_cards,
          profile: currentUser.profile,
          ownedCards: currentUser.ownedCards,
        });
        setIsLoading(false);
      })
      .catch((e) => {
        console.error('failed to fetch', e);
        setIsAuthenticated(false);
        setIsLoading(false);
        setError(e);
      });
  }, []);

  return {
    useUserDataContext: {
      userData,
      setUserData,
      isAuthenticated,
      isLoading,
      error,
    },
  };
}

// Step 2: Declare your context state object to share the state with other components
const [UserDataProvider, useUserDataContext] = constate(
  useUserDataHook,
  (value) => value.useUserDataContext
);
export { UserDataProvider, useUserDataContext };
