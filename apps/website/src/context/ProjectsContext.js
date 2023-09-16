import React from "react";
import constate from "constate"; // State Context Object Creator
import axios from "axios";

const DEFAULT_PROJECTS = [];

// Built from this article: https://www.sitepoint.com/replace-redux-react-hooks-context-api/

// Step 1: Create a custom hook that contains your state and actions
function useProjectsData() {
  const [projectsData, setProjectsData] = React.useState(DEFAULT_PROJECTS);

  React.useEffect(() => {
    axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projects`)
      .then(({ data }) => {
        setProjectsData(data);
      })
      .catch(() => {
        // setUserData({ id: "invalid" });
      });
  }, []);

  return projectsData;
}

// Step 2: Declare your context state object to share the state with other components
const [ProjectsDataProvider, useProjectsDataContext] =
  constate(useProjectsData);
export { ProjectsDataProvider, useProjectsDataContext };
