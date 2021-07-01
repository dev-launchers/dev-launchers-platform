import React from "react";
import constate from "constate"; // State Context Object Creator
import axios from "axios";

import { env } from "../utils/EnvironmentVariables";

const DEFAULT_USER = {
  id: 0,
  name: "",
  username: "",
  email: "",
  bio: "",
  profilePictureUrl: "",
  socialMediaLinks: [],
  totalPoints: 0,
  totalSeasonPoints: 0,
  availablePoints: 0,
  volunteerHours: 0,
  discord: {
    id: 0,
    avatar: "",
    username: "",
    discriminator: "",
  },
};

// Built from this article: https://www.sitepoint.com/replace-redux-react-hooks-context-api/

// Step 1: Create a custom hook that contains your state and actions
function useUserData() {
  const [userData, setUserData] = React.useState(DEFAULT_USER);

  React.useEffect(() => {
    // Setting timeout because of environment variable hack
    axios(`${env().API_URL}/users/current`, {
      withCredentials: true,
    })
      .then(({ data: currentUser }) => {
        setUserData({
          id: currentUser.id,
          name: currentUser.displayName,
          username: currentUser.username,
          email: currentUser.email,
          bio: currentUser.bio,
          profilePictureUrl: currentUser.profilePictureUrl,
          socialMediaLinks: currentUser.socialMediaLinks,
          totalPoints: currentUser.totalPoints,
          totalSeasonPoints: currentUser.totalSeasonPoints,
          availablePoints: currentUser.availablePoints,
          volunteerHours: currentUser.volunteerHours,
          discord: currentUser.discord,
        });
      })
      .catch(() => {
        // setUserData({ id: "invalid" });
      });
  }, []);

  return { userData };
}

// Step 2: Declare your context state object to share the state with other components
const [UserDataProvider, useUserDataContext] = constate(useUserData);
export { UserDataProvider, useUserDataContext };
