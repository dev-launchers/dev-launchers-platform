import axios from 'axios';
import constate from 'constate'; // State Context Object Creator
import React from 'react';

import { featureFlags } from './../utils/featureflags';

const DEFAULT_USER = {
  id: 1,
  name: 'Ethan Levin',
  username: 'Ethan',
  email: '',
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci quam, gravida id erat ac, vulputate posuere mi. In elementum pulvinar elit. Nam diam felis, bibendum nec luctus id, ornare sit amet dui. ",
  profilePictureUrl: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
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
    axios(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
      withCredentials: true,
    })
      .then(({ data: currentUser }) => {
        setUserData({
          ...currentUser,
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
        setIsAuthenticated(featureFlags.inDevelopment);
      });

    setTimeout(() => {
      console.log("User Data", userData);
    }, 5000);
  }, []);

  return { userData, setUserData, isAuthenticated };
}

// Step 2: Declare your context state object to share the state with other components
const [UserDataProvider, useUserDataContext] = constate(useUserData);
export { UserDataProvider, useUserDataContext };
