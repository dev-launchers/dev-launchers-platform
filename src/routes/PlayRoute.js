import React from "react";
import ReactDOM from "react-dom";

//import style from "./HomeRoute.module.css";

import Header from "../components/modules/Header";
import PageBody from "../components/common/PageBody";
import Footer from "../components/modules/Footer";

export default function PlayRoute() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    populateProjects();
  }, []);

  const populateProjects = () => {
    getAllData().then(allData => {
      let devData = allData.devData;
      let prodData = allData.prodData;
      console.log(devData);

      let projectsData = []; // Adding newly found projects here, then updating state

      let devKeys = Object.keys(devData);
      let prodKeys = Object.keys(prodData);

      devKeys.forEach(devKey => {
        let repoEntry = devData[devKey];
        // search look for substring and return its position of its first occurance
        if (repoEntry.name.search("project__") == 0) {
          projectsData.push({
            name: repoEntry.name,
            description: repoEntry.description,
            devUrl: "https://devlaunchers.com/dev/" + repoEntry.name,
            prodUrl: "https://devlaunchers.com/launch/" + repoEntry.name,
            repoUrl: repoEntry.html_url
          });
        }
      });
      prodKeys.forEach(prodKey => {
        let repoEntry = prodData[prodKey];
        // search look for substring and return its position of its first occurance
        if (
          repoEntry.name.search("project__") == 0 &&
          !repoEntry.name.includes(prodKey)
        ) {
          projectsData.push({
            name: repoEntry.name,
            description: repoEntry.description,
            devUrl: "https://devlaunchers.com/dev/" + repoEntry.name
          });
        }
      });

      setProjects(projectsData);
    });
  };

  return (
    <div>
      <Header />
      <PageBody>
        <br />
        <h1 id="title">We Build Things</h1>
        <div className="page-description">
          These apps are all created by our students! Open up the development
          links to see their latest changes, or the production links for more
          stable versions.
        </div>
        <hr />
        <div className="projects-area">
          <h2>Projects</h2>
          <div className="collection collection--large-cards">
            {projects.map((entry, i) => {
              return (
                <div className="entry" key={i}>
                  <div className="entry-heading">
                    <a
                      className="entry-title"
                      href={entry.devUrl}
                      target="_blank"
                    >
                      {entry.name}
                    </a>
                    <a
                      style={{
                        display: "block",
                        float: "right",
                        fontSize: ".85rem",
                        marginRight: "1%"
                      }}
                      href={entry.repoUrl}
                      target="_blank"
                    >
                      GitHub Repo
                    </a>
                  </div>
                  <div className="entry-content">
                    <div className="entry-image-holder">
                      <a href={entry.sandboxUrl} target="_blank">
                        <div src={entry.imageSrc} className="entry-image" />
                      </a>
                    </div>
                    <div className="entry-description">{entry.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </PageBody>
      <Footer />
    </div>
  );
}

const GITHUB_API_URL_DEV =
  "https://api.github.com/users/dev-launchers-sandbox/repos";
const GITHUB_API_URL_PROD = "https://api.github.com/users/dev-launchers/repos";
const DEV_GAME_URL_PREFIX = "http://devlaunchers.com/dev/";
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
