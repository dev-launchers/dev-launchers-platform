import axios from 'axios';
import constate from 'constate'; // State Context Object Creator
import React from 'react';

import { env } from '../utils/EnvironmentVariables';

export const DEFAULT_USER = {
  id: 6,
  name: 'Kris Gano',
  username: 'Kris_Gano',
  email: 'krisgano@devlaunchers.com',
  bio: 'A kris bio',
  profilePictureUrl:
    'https://lh3.googleusercontent.com/a/AATXAJxZ3nb3nA60iLAv1-RqQizgB871aHjJp4LTwi55=s96-c',
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
  interests: [
    {
      id: 17,
      published_at: '2021-08-11T05:41:33.064Z',
      created_at: '2021-08-11T05:41:28.424Z',
      updated_at: '2021-08-11T05:41:33.478Z',
      interest: 'Node.js',
      categories: [],
    },
    {
      id: 7,
      published_at: '2021-08-11T05:37:11.747Z',
      created_at: '2021-08-11T05:37:07.908Z',
      updated_at: '2021-08-11T05:37:11.973Z',
      interest: 'Web Dev',
      categories: [],
    },
    {
      id: 1,
      published_at: '2021-08-11T05:35:35.681Z',
      created_at: '2021-08-11T05:35:29.489Z',
      updated_at: '2021-08-11T05:35:35.960Z',
      interest: 'Blockchain',
      categories: [],
    },
    {
      id: 4,
      published_at: '2021-08-11T05:36:30.868Z',
      created_at: '2021-08-11T05:36:25.579Z',
      updated_at: '2021-08-11T05:36:31.097Z',
      interest: 'UI/UX',
      categories: [],
    },
  ],
};

function findUserRoles(userId, dataArray) {
  const userRoles = [];

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
      
      // Store the found role and team in the userRoles array
      userRoles.push({
        team: teamName,
        role: userRole
      });
    }
  }

  // Return array of roles and teams
  return userRoles.length > 0 ? userRoles : null;
}


// Built from this article: https://www.sitepoint.com/replace-redux-react-hooks-context-api/

// Step 1: Create a custom hook that contains your state and actions
function useUserData() {
  const [userData, setUserData] = React.useState(DEFAULT_USER);
  const [isAuthenticated, setIsAuthenticated] = React.useState();

  React.useEffect(() => {
    axios(`${env().STRAPI_URL}/users/26`, {
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

        axios(`${env().STRAPI_URL}/projects?_publicationState=live`, {
          headers: {
            Accept: "application/json, text/plain, */*",
            "User-Agent":
              "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
          },
        })
          .then(({ data: projects }) => {
            const userRoles = findUserRoles(currentUser.id, projects);

              setUserData(prevUserData => ({
                ...prevUserData,
                positions: userRoles ?? null,
              }));

          })
          .catch(() => {});

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
