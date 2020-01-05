import React from "react";
import ReactDOM from "react-dom";

//import style from "./LandingRoute.module.css";

import Header from "../components/modules/Header";
import PageBody from "../components/common/PageBody";
import Footer from "../components/modules/Footer";

export default class PlayRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [] // will be filled with entries in the form of:{name: <string>, description: <string>}
    };
    this.populateProjects();
  }

  populateProjects() {
    getAllData().then(allData => {
      let devData = allData.devData;
      let prodData = allData.prodData;
      console.log(devData);

      let projectsData = []; // Adding newly found projects here, then updating state

      let devKeys = Object.keys(devData);
      let prodKeys = Object.keys(prodData);

      devKeys.forEach(devKey => {
        // search look for substring and return its position of its first occurance
        if (devKey.search("project__") == 0) {
          let repoEntry = devData[devKey];
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
        // search look for substring and return its position of its first occurance
        if (prodKey.search("project__") == 0 && !devKeys.includes(prodKey)) {
          let repoEntry = prodData[prodKey];
          projectsData.push({
            name: repoEntry.name,
            description: repoEntry.description,
            devUrl: "https://devlaunchers.com/dev/" + repoEntry.name
          });
        }
      });

      this.setState({ projects: projectsData });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <PageBody>
          <br />
          <h1 id="title">Check It Out</h1>
          <div className="page-description">
            These games are all made by our students! Open up the development
            links to see their latest changes, or the production links for more
            stable versions of the games
          </div>
          <hr />
          <div className="projects-area">
            <h2>Projects</h2>
            <div className="collection collection--large-cards">
              {this.state.projects.map(entry => {
                return (
                  <div className="entry">
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
                      <div className="entry-description">
                        {entry.description}
                      </div>
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

function populateProjects() {
  getAllData().then(allData => {
    let devData = allData.devData;
    let prodData = allData.prodData;
    let allPorjectKeys = getProjectKeys(
      Object.keys(devData),
      Object.keys(prodData)
    );
    allPorjectKeys.forEach(key => {
      var repoFullName = Object.keys(prodData).includes(key)
        ? prodData[key].name
        : devData[key].name;

      const projectRepoElement = document.createElement("div");
      projectRepoElement.setAttribute("class", "entry");
      projectRepoElement.innerHTML = `
        <div className="entry-title">
            ${repoFullName.substring("project__".length, repoFullName.length)}
        </div>
        <div className="entry-description">
            ${devData[key].description}
        </div>
        `;

      // for robustness, we check where the key is from. There could be cases where keys are from dev or prod
      if (key in devData) {
        let devGameURLFull = DEV_GAME_URL_PREFIX + repoFullName;
        projectRepoElement.innerHTML += `
            <a className="entry-sandbox-url" href="${devGameURLFull}" target="_blank">
            <div className="entry-button">
                Open Dev
            </div>
            </a>
            `;
      }

      if (key in prodData) {
        let prodGameURLFull = PROD_GAME_URL_PREFIX + repoFullName;
        projectRepoElement.innerHTML += `
            <a className="entry-sandbox-url" href="${prodGameURLFull}" target="_blank">
            <div className="entry-button">
                Open Prod
            </div>
            </a>
            `;
      }

      // Add github link
      projectRepoElement.innerHTML += `
        <a className="entry-github-url" href="https://github.com/dev-launchers-sandbox/${repoFullName}" target="_blank">
          <div className="entry-button entry-github-repo-button">
              Github Repo
          </div>
        </a>
        `;

      // Add codesandbox link
      projectRepoElement.innerHTML += `
        <a className="entry-sandbox-url" href="https://codesandbox.io/dashboard/sandboxes" target="_blank">
          <div className="entry-button entry-sandbox-repo-button">
              Online IDE
          </div>
        </a>
      `;

      const activityAreaElement = document.getElementById("activity-area");

      activityAreaElement.appendChild(projectRepoElement);
    });
  });
}
