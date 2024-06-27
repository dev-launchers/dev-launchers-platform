import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const DEFAULT_USER = {
  id: 0,
  name: '',
  username: '',
  email: '',
  bio: '',
  profilePictureUrl: '',
  socialMediaLinks: [],
  projects: {},
  discord: {
    id: 0,
    avatar: '',
    username: '',
    discriminator: '',
  },
  interests: [],
};

const UserDataContext = createContext({
  userData: DEFAULT_USER,
  setUserData: () => {},
  isAuthenticated: false,
});

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState(DEFAULT_USER);
  const [isAuthenticated, setIsAuthenticated] = useState();

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

  const value = { userData, setUserData, isAuthenticated };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserDataContext() {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useUserDataContext must be used within UserDataProvider');
  }
  return context;
}
