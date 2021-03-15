import React from "react";
import constate from "constate"; // State Context Object Creator

// Built from this article: https://www.sitepoint.com/replace-redux-react-hooks-context-api/

// Step 1: Create a custom hook that contains your state and actions
function useUserData() {
  const [userData, setUserData] = React.useState({});

  React.useEffect(() => {
    setUserData({
      id: "shsdfij389weafgs0wh4tuhawefg6a",
      email: "email@email.com",
      bio: "THIS IS A BIO SERVED FROM CONTEXT",
      profilePictureUrl:
        "https://avatars.githubusercontent.com/u/46331884?s=400&u=bc9e2a005ab671082f0c57c85ecd863101eccb03&v=4",
      socialMediaLinks: [],
      totalPoints: 0,
      totalSeasonPoints: 0,
      availablePoints: 0
    });
  }, []);

  return { userData };
}

// Step 2: Declare your context state object to share the state with other components
const [UserDataProvider, useUserDataContext] = constate(useUserData);
export { UserDataProvider, useUserDataContext };
