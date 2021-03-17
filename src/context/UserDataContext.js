import React from "react";
import constate from "constate"; // State Context Object Creator
import axios from "axios";

// Built from this article: https://www.sitepoint.com/replace-redux-react-hooks-context-api/

// Step 1: Create a custom hook that contains your state and actions
function useUserData() {
  const [userData, setUserData] = React.useState({});

  React.useEffect(() => {
    axios("https://api-staging.devlaunchers.com/users/current", {
      withCredentials: true
    })
      .then(({ data: currentUser }) => {
        Promise.all([
          axios(
            `https://api-staging.devlaunchers.com/users/${currentUser.id}/profile`,
            { withCredentials: true }
          ),
          axios(
            `https://api-staging.devlaunchers.com/users/${currentUser.id}/point`,
            { withCredentials: true }
          )
        ]).then(([profileResponse, pointsResponse]) => {
          setUserData({
            id: profileResponse.data.id,
            name: profileResponse.data.displayName,
            username: currentUser.username,
            email: profileResponse.data.email,
            bio: profileResponse.data.bio,
            profilePictureUrl: profileResponse.data.profilePictureUrl,
            socialMediaLinks: profileResponse.data.socialMediaLinks,
            totalPoints: pointsResponse.data.totalPoints,
            totalSeasonPoints: pointsResponse.data.totalSeasonPoints,
            availablePoints: pointsResponse.data.availablePoints,
            volunteerHours: 0
          });
        });
      })
      .catch(err => console.error(err));
  }, []);

  return { userData };
}

// Step 2: Declare your context state object to share the state with other components
const [UserDataProvider, useUserDataContext] = constate(useUserData);
export { UserDataProvider, useUserDataContext };
