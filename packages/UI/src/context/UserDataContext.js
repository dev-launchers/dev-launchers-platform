import constate from 'constate'; // State Context Object Creator
import { useCallback, useEffect, useState, useMemo } from 'react';
import axios from 'axios';

//  Default user = NOT authenticated
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

// Custom hook that manages user state
function useUserDataHook() {
  const [userData, setUserData] = useState(DEFAULT_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const isAuthenticated = userData.id > 0;

  // function to update user data
  const updateUserData = useCallback((data) => {
    setUserData(data);
  }, []);

  //  Fetch user ONLY if not authenticated
  useEffect(() => {
    // If already authenticated → do nothing return
    if (isAuthenticated) return;

    setIsLoading(true);

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
      'populate[idea_cards][populate]=*',
      'populate[ownedCards][populate]=*',
    ].join('&');

    axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?${populateParams}`, {
      withCredentials: true,
    })
      .then(({ data: currentUser }) => {
        console.log('Fetching...');
        updateUserData({
          id: currentUser.id,
          name: currentUser.profile?.displayName ?? '',
          username: currentUser.username ?? '',
          email: currentUser.email ?? '',
          bio: currentUser.profile?.bio ?? '',
          profilePictureUrl: currentUser.profile?.profilePictureUrl ?? '',
          socialMediaLinks: currentUser.profile?.socialMediaLinks ?? [],
          interests: currentUser.interests ?? [],
          projects: currentUser.projects ?? [],
          idea_cards: currentUser.idea_cards ?? [],
          profile: currentUser.profile ?? null,
          ownedCards: currentUser.ownedCards ?? [],
        });
      })
      .catch((e) => {
        console.error('User fetch failed', e);
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isAuthenticated, updateUserData]);

  // Memoize context value - Prevents unnecessary re-renders
  const value = useMemo(
    () => ({
      userData,
      updateUserData,
      isAuthenticated,
      isLoading,
      error,
    }),
    [userData, isAuthenticated, isLoading, error, updateUserData]
  );

  return { useUserDataContext: value };
}

//  Create Provider + Hook
const [UserDataProvider, useUserDataContext] = constate(
  useUserDataHook,
  (v) => v.useUserDataContext
);

export { UserDataProvider, useUserDataContext };
