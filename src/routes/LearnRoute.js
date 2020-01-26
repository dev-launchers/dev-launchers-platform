import React from "react";
import ReactDOM from "react-dom";

//import style from "./LandingRoute.module.css";

import Header from "../components/modules/Header";
import PageBody from "../components/common/PageBody";
import Footer from "../components/modules/Footer";

// Get content data
let activities = require('../content/collections/activities.json').data;

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
            and tools needed to begin creating apps and games with Dev Launchers.
          </div>
          <hr />

          <div className="collection novice-area">
            <h2>Novice Activities</h2>
            <div className="collection collection--small-cards">
              {activities.novice.map((entry, i) => {
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
              {activities.intermediate.map((entry, i) => {
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
              {activities.advanced.map((entry, i) => {
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
