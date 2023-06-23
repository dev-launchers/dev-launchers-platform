import constate from 'constate'; // State Context Object Creator
import { useEffect, useState } from 'react';
import axios from "axios";

export const DEFAULT_USER = {
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
  const [userData, setUserData] = useState(DEFAULT_USER);
  const [isAuthenticated, setIsAuthenticated] = useState();

  const updateUserData = (dataForUser) => {
    localStorage.setItem('userData', JSON.stringify(dataForUser));
    setUserData(dataForUser);
    setIsAuthenticated(true);
  };
  
  useEffect(() => {
    const cacheData = JSON.parse(localStorage.getItem('userData'));

    if (cacheData && cacheData.id > 0) {
      updateUserData(cacheData);
    } else {
      axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`, {
        withCredentials: true,
      })
        .then(({ data: currentUser }) => {
          updateUserData({
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
        })
        .catch(() => {
          // updateUserData({ id: "invalid" });
          setIsAuthenticated(false);
        });
    }
  }, []);

  return { userData, isAuthenticated, updateUserData };
}

// Step 2: Declare your context state object to share the state with other components
const [UserDataProvider, useUserDataContext] = constate(useUserData);
export { UserDataProvider, useUserDataContext };