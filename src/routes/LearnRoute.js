import React from "react";
import ReactDOM from "react-dom";
import Tabletop from "tabletop";

//import style from "./HomeRoute.module.css";

import Header from "../components/modules/Header";
import PageBody from "../components/common/PageBody";
import Footer from "../components/modules/Footer";

// Get content data
let activities = require("../content/collections/activities.json").data;

export default function LearnRoute() {
  const [externalCodeActivities, setExternalCodeActivities] = React.useState(
    []
  );
  const [
    externalDesignActivities,
    setExternalDesignActivities
  ] = React.useState([]);

  React.useEffect(() => {
    Tabletop.init({
      // https://docs.google.com/spreadsheets/d/e/2PACX-1vQfJccD-2qd8eVQ6BPIc3EbbBUcTcxIUAxNub31QrWalpfExtTccMBYORQoFqPcxt_HRDuWLT9KXwN0/pubhtml
      // https://docs.google.com/spreadsheets/d/1ukOl5lCKF8eXiVgjLgFqDzmdudjik5H_rnws8jPFyJ0/edit?usp=sharing
      key: "1QV419fM2DHZM59mFK6eYYbYiq6bs4sBUpTwVZ_dZJNg",
      callback: googleData => {
        console.log("google sheet data --->", googleData);
        setExternalCodeActivities(googleData.codeActivities.elements);
        setExternalDesignActivities(googleData.designActivities.elements);
      },
      simpleSheet: false
    });
  }, []);

  return (
    <div>
      <Header />
      <PageBody>
        <br />
        <h1 id="title">Learn Code and Design</h1>
        <div className="page-description">
          These activities are meant to familiarize students with the concepts
          and tools needed to begin creating their own apps and games
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
                    <div className="entry-description">{entry.description}</div>
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
                    <div className="entry-description">{entry.description}</div>
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
