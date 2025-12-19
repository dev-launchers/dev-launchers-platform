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
  projects: [],
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
    setIsAuthenticated(userData && userData.id > 0);
  }, [userData.id > 0]);

  useEffect(() => {
    const populateParams = [
      'populate[profile][populate][user][populate]=*',
      'populate[profile][populate][profilePicture][populate]=*',
      'populate[projects][populate][heroImage][populate]=*',
      'populate[projects][populate][openPositions][populate]=*',
      'populate[projects][populate][team][populate][leaders][populate]=*',
      'populate[projects][populate][user][populate]=*',
      'populate[projects][populate][interests][populate]=*',
      'populate[projects][populate][board][populate]=*',
      'populate[projects][populate][SubProjects][populate]=*',
      'populate[projects][populate][parentProject][populate]=*',
      'populate[projects][populate][newMeetingTimes][populate]=*',
      'populate[projects][populate][images][populate]=*',
      'populate[projects][populate][opportunities][populate]=*',
      'populate[idea_cards][filters][status][$ne]=deleted',
      'populate[idea_cards][populate]=*',
      'populate[ownedCards][populate]=*',
    ].join('&');
    axios
      .get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?${populateParams}`, {
        withCredentials: true,
      })
      .then(({ data: currentUser }) => {
        console.log('Fetching...');
        setUserData({
          id: currentUser.id,
          name: currentUser.profile?.displayName,
          username: currentUser.username,
          email: currentUser.email,
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
