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

  const renderInternalActivities = activityCollection => {
    return (
      <div className="collection collection--small-cards">
        {activityCollection.map((entry, i) => {
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
    );
  };

  const renderExternalActivities = activityData => {
    /*
    Schema: {
      "isActive":"<boolean>",
      "category":"<string>",
      "title":"<string>",
      "resourceUrl":"<string>",
      "difficulty":"<string>",
      "format":"<string>",
      "description":"<string>",
      "extraTagsCSV":"<string>",
      "imageUrl":"<string>",
      "notes":"<string>",
    }
    */
    return (
      <div className="collection collection--small-cards">
        {activityData.map((entry, i) => {
          return (
            <div className="entry" key={i}>
              <div className="entry-heading">{entry.title}</div>
              <div>{entry.category}</div>
              <div>{entry.resourceUrl}</div>
              <div>{entry.description}</div>
            </div>
          );
        })}
      </div>
    );
  };

  const filterActivitiesOnDifficulty = (activities, difficulty) => {
    return activities.filter(entry => entry.difficulty == difficulty);
  };

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
          {renderInternalActivities(activities.novice)}
          <div style={{ width: "100%" }}>
            <h3>Third party activities:</h3>
            {renderExternalActivities(
              filterActivitiesOnDifficulty(externalCodeActivities, "NOVICE")
            )}
          </div>
        </div>

        <div className="collection intermediate-area">
          <h2>Intermediate Activities</h2>
          {renderInternalActivities(activities.intermediate)}
          <div style={{ width: "100%" }}>
            <h3>Third party activities:</h3>
            {renderExternalActivities(
              filterActivitiesOnDifficulty(
                externalCodeActivities,
                "INTERMEDIATE"
              )
            )}
          </div>
        </div>

        <div className="collection advanced-area">
          <h2>Advanced Activities</h2>
          {renderInternalActivities(activities.advanced)}
          <div style={{ width: "100%" }}>
            <h3>Third party activities:</h3>
            {renderExternalActivities(
              filterActivitiesOnDifficulty(externalCodeActivities, "ADVANCED")
            )}
          </div>
        </div>
      </PageBody>
      <Footer />
    </div>
  );
}
