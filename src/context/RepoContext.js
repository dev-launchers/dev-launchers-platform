import React from "react";
import constate from "constate"; // State Context Object Creator

// Built from this article: https://www.sitepoint.com/replace-redux-react-hooks-context-api/

// Step 1: Create a custom hook that contains your state and actions
function useRepo() {
  const [repoData, setRepoData] = React.useState({});

  React.useEffect(() => {
    /*
     * When component mounts, fetch repos owned by dev-launchers-sandbox
     * using the GitHub API. Then display specific projects to the user
     */
    getAllData().then((allData) => {
      let devData = allData.devData;
      let prodData = allData.prodData;

      let projectsData = []; // Adding newly found projects here, then updating state

      let devKeys = Object.keys(devData);
      let prodKeys = Object.keys(prodData);

      devKeys.forEach((devKey) => {
        let repoEntry = devData[devKey];
        // search look for substring and return its position of its first occurance
        if (repoEntry.name.search("project__") === 0) {
          projectsData.push({
            title: repoEntry.name,
            description: repoEntry.description,
            href: "https://devlaunchers.com/dev/" + repoEntry.name,
            prodUrl: "https://devlaunchers.com/launch/" + repoEntry.name,
            imageSrc: "/images/DevlaunchersGitHubThumb.png?webp",
            repoUrl: repoEntry.html_url,
          });
        }
      });
      prodKeys.forEach((prodKey) => {
        let repoEntry = prodData[prodKey];
        // search look for substring and return its position of its first occurance
        if (
          repoEntry.name.search("project__") === 0 &&
          !repoEntry.name.includes(prodKey)
        ) {
          projectsData.push({
            name: repoEntry.name,
            description: repoEntry.description,
            devUrl: "https://devlaunchers.com/dev/" + repoEntry.name,
          });
        }
      });
      setRepoData(projectsData);
    });
  }, []);

  return { repoData };
}

const GITHUB_API_URL_DEV =
  "https://api.github.com/users/dev-launchers-sandbox/repos";
const GITHUB_API_URL_PROD = "https://api.github.com/users/dev-launchers/repos";
//const DEV_GAME_URL_PREFIX = "http://devlaunchers.com/dev/";
const PROD_GAME_URL_PREFIX = "http://devlaunchers.com/launch/";

async function getGithubData(apiUrl) {
  let response = await fetch(apiUrl);
  let data = await response.json();
  var returnData = {};

  for (let i = 0; i < data.length; i++) {
    returnData[data[i].name] = data[i];
  }
  return returnData;
}

async function getAllData() {
  let devData = await getGithubData(GITHUB_API_URL_DEV);
  let prodData = await getGithubData(GITHUB_API_URL_PROD);

  return { devData, prodData };
}
/*
function getProjectKeys(devDataKeys, prodDataKeys) {
  let allKeys = [];
  devDataKeys.forEach(devKey => {
    // search look for substring and return its position of its first occurance
    if (devKey.search("project__") == 0) {
      allKeys.push(devKey);
    }
  });
  prodDataKeys.forEach(prodKey => {
    // search look for substring and return its position of its first occurance
    if (prodKey.search("project__") == 0 && !allKeys.includes(prodKey)) {
      allKeys.push(prodKey);
    }
  });

  return allKeys;
}
*/
// Step 2: Declare your context state object to share the state with other components
const [RepoProvider, useRepoContext] = constate(useRepo);
export { RepoProvider, useRepoContext };
