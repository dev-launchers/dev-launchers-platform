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

function findUserRole(userId, dataArray) {
  for (const data of dataArray) {
    const team = data.team;
    const leaders = team.leaders;
    const members = team.members;

    // Search for the user ID in leaders array
    const leaderMatch = leaders.find(leader => leader.id === userId);

    // If user ID is not found in leaders, search in members array
    const memberMatch = members.find(member => member.id === userId);

    // Check if user ID is found in either leaders or members
    if (leaderMatch || memberMatch) {
      const teamName = data.title;
      const userRole = leaderMatch ? leaderMatch.role : memberMatch.role;

      // Return object containing team name and user role
      return {
        team: teamName,
        role: userRole
      };
    }
  }

  // If user ID is not found in any object, return null or any appropriate value
  return null;
}

// Built from this article: https://www.sitepoint.com/replace-redux-react-hooks-context-api/

// Step 1: Create a custom hook that contains your state and actions
function useUserData() {
  const [userData, setUserData] = React.useState(DEFAULT_USER);

  React.useEffect(() => {
    // Setting timeout because of environment variable hack
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
        });

        axios(`${env().STRAPI_URL}/projects?_publicationState=live`, {
          headers: {
            Accept: "application/json, text/plain, */*",
            "User-Agent":
              "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
          },
        })
          .then(({ data: projects }) => {
            const positionInfo = findUserRole(currentUser.id, projects);
  
            setUserData(prevUserData => ({
              ...prevUserData,
              position: {
                role: positionInfo.role,
                team: positionInfo.team,
              },
            }));
  
          })
          .catch(() => {});
  
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
