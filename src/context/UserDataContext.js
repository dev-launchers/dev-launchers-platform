import React from "react";
import constate from "constate"; // State Context Object Creator
import axios from "axios";

import { useEnvironmentVariablesContext } from "./EnvironmentVariablesContext";

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
  discord: {}
};

// Built from this article: https://www.sitepoint.com/replace-redux-react-hooks-context-api/

// Step 1: Create a custom hook that contains your state and actions
function useUserData() {
  const { envData } = useEnvironmentVariablesContext();
  const [userData, setUserData] = React.useState({ id: -1 });

  React.useEffect(() => {
    // Setting timeout because of environment variable hack
    setTimeout(() => {
      axios(envData.API_URL + "/users/current", {
        withCredentials: true
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
            discord: currentUser.discord
          });
        })
        .catch(err => {
          setUserData({ id: "invalid" });
        });
    }, 500);
  }, []);

  return { userData };
}

// Step 2: Declare your context state object to share the state with other components
const [UserDataProvider, useUserDataContext] = constate(useUserData);
export { UserDataProvider, useUserDataContext };
