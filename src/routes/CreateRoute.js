import React from "react";
import ReactDOM from "react-dom";

//import style from "./LandingRoute.module.css";

import Header from "../components/modules/Header";
import PageBody from "../components/common/PageBody";
import Footer from "../components/modules/Footer";

// Get content data
let projectTemplates = require('../content/collections/projectTemplates.json').data;

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
          <div className="page-description">
            These templates are where projects begin. They provide the generic
            structure and base logic, so you can focus on what makes your app
            special!
          </div>
          <hr />
          <div className="games-area">
            <h2>Game Templates</h2>
            <div className="collection collection--small-cards">
              {projectTemplates.games.map((entry, i) => {
                return (
                  <div className="entry" key={i}>
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
                      <div className="entry-description">{entry.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <hr />
          <div className="apps-area">
            <h2>App Templates</h2>
            <div className="collection collection--small-cards">
              {projectTemplates.apps.map((entry, i) => {
                return (
                  <div className="entry" key={i}>
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
}
