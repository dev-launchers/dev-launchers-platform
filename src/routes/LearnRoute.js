import React from "react";
import ReactDOM from "react-dom";

//import style from "./LandingRoute.module.css";

import Header from "../components/modules/Header";
import PageBody from "../components/common/PageBody";
import Footer from "../components/modules/Footer";

export default class LearnRoute extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <PageBody>
          <br />
          <h1 id="title">Learn Code and Design</h1>
          <div className="page-description">
            These activities are meant to familiarize students with the concepts
            and tools needed to begin creating games with Dev Launchers.
          </div>
          <hr />

          <div className="collection novice-area">
            <h2>Novice Activities</h2>
            <div className="collection collection--small-cards">
              {activities.novice.map(entry => {
                return (
                  <div className="entry">
                    <div className="entry-heading">
                      <a
                        className="entry-title"
                        href={entry.sandboxUrl}
                        target="_blank"
                      >
                        {entry.title}
                      </a>
                    </div>
                    <div className="entry-content">
                      <div className="entry-image-holder">
                        <a href={entry.sandboxUrl} target="_blank">
                          <img src={entry.imageSrc} className="entry-image" />
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

          <div className="collection intermediate-area">
            <h2>Intermediate Activities</h2>
            <div className="collection collection--small-cards">
              {activities.intermediate.map(entry => {
                return (
                  <div className="entry">
                    <div className="entry-heading">
                      <a
                        className="entry-title"
                        href={entry.sandboxUrl}
                        target="_blank"
                      >
                        {entry.title}
                      </a>
                    </div>
                    <div className="entry-content">
                      <div className="entry-image-holder">
                        <a href={entry.sandboxUrl} target="_blank">
                          <img src={entry.imageSrc} className="entry-image" />
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

          <div className="collection advanced-area">
            <h2>Advanced Activities</h2>
            <div className="collection collection--small-cards">
              {activities.advanced.map(entry => {
                return (
                  <div className="entry">
                    <div className="entry-heading">
                      <a
                        className="entry-title"
                        href={entry.sandboxUrl}
                        target="_blank"
                      >
                        {entry.title}
                      </a>
                    </div>
                    <div className="entry-content">
                      <div className="entry-image-holder">
                        <a href={entry.sandboxUrl} target="_blank">
                          <img src={entry.imageSrc} className="entry-image" />
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

// Contains a list of activities, grouped into
//    Novice, Intermediate, and Advanced
//    categories.
const activities = {
  novice: [
    {
      title: "Loot Boxes - Variables Intro",
      description: "Set a variable and win a prize!",
      sandboxUrl:
        "https://codesandbox.io/s/activityloot-boxesvariables-intro-kecbj?fontsize=14&module=%2FREADME.md",
      githubUrl: "",
      imageSrc: "/images/thumbnails/learn/loot-boxes__variables-intro.png"
    },
    {
      title: "Virtual Pet - Integer Feeding",
      description: "Learn to set numerical variables to feed a virtual pet.",
      sandboxUrl:
        "https://codesandbox.io/s/activityvirtual-petinteger-feeding-6cvo0?fontsize=14&module=%2FREADME.md",
      githubUrl: "",
      imageSrc: "/images/thumbnails/learn/virtual-pet__integer-feeding.png"
    },
    {
      title: "Loot Boxes - Multiple Variables",
      description: "Set multiple variables to win multiple prizes!",
      sandboxUrl:
        "https://codesandbox.io/s/activityloot-boxesmultiple-variables-r4lbx?fontsize=14&module=%2FREADME.md",
      githubUrl: "",
      imageSrc: "/images/thumbnails/learn/loot-boxes__multiple-variables.png"
    },
    {
      title: "Title Screen - Sun Position",
      description:
        "Learn about screen space by changing the position of the sun!",
      sandboxUrl:
        "https://codesandbox.io/s/activitytitle-screensun-position-bvt7z?fontsize=14&module=%2FREADME.md",
      githubUrl: "",
      imageSrc: "/images/thumbnails/learn/title-screen__sun-position.png"
    },
    {
      title: "Title Screen - Customize It",
      description: "Play around and create your very own title screen!",
      sandboxUrl:
        "https://codesandbox.io/s/activitytitle-screencustomize-it-zs9xp?fontsize=14&module=%2FREADME.md",
      githubUrl: "",
      imageSrc: "/images/thumbnails/learn/title-screen__customize-it.png"
    },
    {
      title: "Stage Maker - Array Intro",
      description: "Modify a stage to help your character reach their goal!",
      sandboxUrl:
        "https://codesandbox.io/s/activitystage-makerarray-intro-hye31?fontsize=14&module=%2FREADME.md",
      githubUrl: "",
      imageSrc: "/images/thumbnails/learn/stage-maker__array-intro.png"
    },
    {
      title: "Stage Maker - Multi Dimensional",
      description:
        "Modify a more complex stage to help your character reach their goal!",
      sandboxUrl:
        "https://codesandbox.io/s/activitystage-makermulti-dimensional-3e4z0?fontsize=14&module=%2FREADME.md",
      githubUrl: "",
      imageSrc: "/images/thumbnails/learn/stage-maker__multi-dimensional.png"
    },
    {
      title: "Stage Maker - Customize It",
      description: "Create your own stage using multidimensional arrays!",
      sandboxUrl:
        "https://codesandbox.io/s/activitystage-makercustomize-it-stvqt?fontsize=14&module=%2FREADME.md",
      githubUrl: "",
      imageSrc: "/images/thumbnails/learn/stage-maker__customize-it.png"
    }
  ],
  intermediate: [
    {
      title: "Block Bots - Player vs Machine",
      description:
        "Pit your programmable bot against a series of bots with increasing difficulty",
      sandboxUrl:
        "https://codesandbox.io/s/activityblock-botsplayer-vs-machine-jzdh4?fontsize=14&module=%2FREADME.md",
      githubUrl: "",
      imageSrc: "/images/thumbnails/learn/block-bots__player-vs-machine.png"
    },
    {
      title: "Block Bots - Player vs Player",
      description: "Pit your programmable bot against another player",
      sandboxUrl:
        "https://codesandbox.io/s/activityblock-botsplayer-vs-player-xhc1k?fontsize=14&module=%2FREADME.md",
      githubUrl: "",
      imageSrc: "/images/thumbnails/learn/block-bots__player-vs-player.png"
    }
  ],
  advanced: [
    {
      title: "Staircase - Array Sort",
      description: "Sort an array!",
      sandboxUrl:
        "https://codesandbox.io/s/activitystaircasearray-sort-rjurf?fontsize=14&module=%2FREADME.md",
      githubUrl: "",
      imageSrc: "/images/thumbnails/learn/staircase__array-sort.png"
    }
  ]
};
