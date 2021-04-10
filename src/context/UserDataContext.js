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
        console.log(currentUser);
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
          volunteerHours: currentUser.volunteerHours
        });
      })
      .catch(err => console.error(err));
  }, []);

  return { userData };
}

// Step 2: Declare your context state object to share the state with other components
const [UserDataProvider, useUserDataContext] = constate(useUserData);
export { UserDataProvider, useUserDataContext };
