import axios from 'axios';
import constate from 'constate'; // State Context Object Creator
import React from 'react';

import { env } from '../utils/EnvironmentVariables';

const DEFAULT_USER = {
  id: 0,
  name: '',
  username: '',
  email: '',
  bio: '',
  profilePictureUrl: '',
  socialMediaLinks: [],
  totalPoints: 0,
  totalSeasonPoints: 0,
  availablePoints: 0,
  volunteerHours: 0,
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
function useUserData() {
  const [userData, setUserData] = React.useState(DEFAULT_USER);
  const [isAuthenticated, setIsAuthenticated] = React.useState();

  React.useEffect(() => {
    axios(`${env().STRAPI_URL}/users/me`, {
      withCredentials: true,
    })
      .then(({ data: currentUser }) => {
        setUserData({
          id: currentUser.id,
          name: currentUser.profile.displayName,
          username: currentUser.username,
          email: currentUser.email,
          bio: currentUser.profile.bio,
          profilePictureUrl: currentUser.profile.profilePictureUrl,
          socialMediaLinks: currentUser.profile.socialMediaLinks,
          totalPoints: currentUser.point.totalPoints,
          totalSeasonPoints: currentUser.point.totalSeasonPoints,
          availablePoints: currentUser.point.availablePoints,
          volunteerHours: currentUser.point.volunteerHours,
          interests: currentUser.interests,
        });
        setIsAuthenticated(true);
      })
      .catch(() => {
        // setUserData({ id: "invalid" });
        setIsAuthenticated(false);
      });
  }, []);

  return { userData, setUserData, isAuthenticated };
}

// Step 2: Declare your context state object to share the state with other components
const [UserDataProvider, useUserDataContext] = constate(useUserData);
export { UserDataProvider, useUserDataContext };
