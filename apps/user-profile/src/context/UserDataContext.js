import axios from 'axios';
import constate from 'constate'; // State Context Object Creator
import { useState, useEffect, useRef } from 'react';

import { featureFlags } from './../utils/featureFlags';

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
  const [userData, setUserData] = useState(DEFAULT_USER);
  const [isAuthenticated, setIsAuthenticated] = useState();
  useEffect(() => {
    axios(`${process.env.NEXT_PUBLIC_API_URL}/users/${featureFlags.bypassLogin ? '80?populate=deep' : 'me?populate=deep'}`, {
      withCredentials: true,
    }).then(({ data }) => {
      const user = {
        ...data,
        id: data.id,
        name: data.profile.displayName,
        username: data.username,
        email: data.email,
        bio: data.profile.bio,
        profilePictureUrl: data.profile.profilePictureUrl,
        socialMediaLinks: data.profile.socialMediaLinks,
        hasOnboarded: data.completedOnboarding,
        // totalPoints: data.point.totalPoints,
        // totalSeasonPoints: data.point.totalSeasonPoints,
        // availablePoints: data.point.availablePoints,
        // volunteerHours: data.point.volunteerHours,
        interests: data.interests
      };
      setUserData(user);
      setIsAuthenticated(true);

    }).catch((error) => {
      setIsAuthenticated(featureFlags.bypassLogin);
    });
  }, []);

  console.log(`Enviroment:`, featureFlags);
  return { userData: userData, setUserData, isAuthenticated };
}

// Step 2: Declare your context state object to share the state with other components
const [UserDataProvider, useUserDataContext] = constate(useUserData);
export { UserDataProvider, useUserDataContext };
