import React from "react";
import ReactDOM from "react-dom";

//import style from "./LandingRoute.module.css";

import Header from "/src/components/modules/Header";
import PageBody from "/src/components/common/PageBody";
import Footer from "/src/components/modules/Footer";

export default class CreateRoute extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <PageBody>
          <br />
          <h1 id="title">Create Games and Apps</h1>
          <div class="page-description">
            These templates are where projects begin. They provide the generic
            structure and base logic, so you can focus on what makes your app
            special!
          </div>
          <hr />
          <div class="games-area">
            <h2>Game Templates</h2>
            <div class="collection collection--small-cards">
              {projectTemplates.games.map(entry => {
                return (
                  <div class="entry">
                    <div class="entry-heading">
                      <a
                        class="entry-title"
                        href={entry.sandboxUrl}
                        target="_blank"
                      >
                        {entry.title}
                      </a>
                    </div>
                    <div class="entry-content">
                      <div class="entry-image-holder">
                        <a href={entry.sandboxUrl} target="_blank">
                          <img src={entry.imageSrc} class="entry-image" />
                        </a>
                      </div>
                      <div class="entry-description">{entry.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <hr />
          <div class="apps-area">
            <h2>App Templates</h2>
            <div class="collection collection--small-cards">
              {projectTemplates.apps.map(entry => {
                return (
                  <div class="entry">
                    <div class="entry-heading">
                      <a
                        class="entry-title"
                        href={entry.sandboxUrl}
                        target="_blank"
                      >
                        {entry.title}
                      </a>
                    </div>
                    <div class="entry-content">
                      <div class="entry-image-holder">
                        <a href={entry.sandboxUrl} target="_blank">
                          <img src={entry.imageSrc} class="entry-image" />
                        </a>
                      </div>
                      <div class="entry-description">{entry.description}</div>
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

const projectTemplates = {
  apps: [
    {
      title: "Basic App",
      description:
        "A basic React app, ready to add your own custom designs and features to!",
      sandboxUrl:
        "https://codesandbox.io/s/project-templatesbasic-app-xfkij?fontsize=14&hidenavigation=1&theme=dark",
      githubUrl: "",
      imageSrc: "/images/thumbnails/create/basic-app.png"
    }
  ],
  games: [
    {
      title: "Virtual Pet",
      description:
        "A simple virtual pet base project. An animal moves back and forth within the screen space, interacts with a ball, and eats food.",
      sandboxUrl:
        "https://codesandbox.io/s/project-template-virtual-pet-1oyty?fontsize=14&module=%2F.DO_NOT_TOUCH%2Fmain.js",
      githubUrl: "",
      imageSrc: "/images/thumbnails/create/virtual-pet.png"
    },
    {
      title: "Space Arcade",
      description: "A twist on the classic space shooter genre!",
      sandboxUrl:
        "https://codesandbox.io/s/project-templatespace-arcade-k84gf?fontsize=14&hidenavigation=1&module=%2Findex.js&theme=dark",
      githubUrl: "",
      imageSrc: "/images/thumbnails/create/space-arcade.png"
    },
    {
      title: "Pong",
      description:
        "A simple recreation of the physics involved with the classic Pong game.",
      sandboxUrl:
        "https://codesandbox.io/s/project-template-pong-opot8?fontsize=14&module=%2Findex.js",
      githubUrl: "",
      imageSrc: "/images/thumbnails/create/pong.png"
    },
    {
      title: "Platformer",
      description:
        "A simple recreation of the physics involved with a basic platformer game.",
      sandboxUrl:
        "https://codesandbox.io/s/project-template-platformer-ky2et?fontsize=14&module=%2Findex.js",
      githubUrl: "",
      imageSrc: "/images/thumbnails/create/platformer.png"
    },
    {
      title: "Simple Physics Skeleton",
      description:
        "An incredibly simple example of joint constraints, limited to joints affecting each other in one direction.",
      sandboxUrl:
        "https://codesandbox.io/s/project-templateone-way-joint-constraints-vdily?fontsize=14",
      githubUrl: "",
      imageSrc: "/images/thumbnails/create/simple-physics-skeleton.png"
    }
  ]
};
