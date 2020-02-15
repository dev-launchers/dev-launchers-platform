import React from "react";
import ReactDOM from "react-dom";
import Tabletop from "tabletop";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // import react-tabs styles

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

  const [pageData, setPageData] = React.useState({});

  React.useEffect(() => {
    Tabletop.init({
      // https://docs.google.com/spreadsheets/d/e/2PACX-1vQfJccD-2qd8eVQ6BPIc3EbbBUcTcxIUAxNub31QrWalpfExtTccMBYORQoFqPcxt_HRDuWLT9KXwN0/pubhtml
      // https://docs.google.com/spreadsheets/d/1ukOl5lCKF8eXiVgjLgFqDzmdudjik5H_rnws8jPFyJ0/edit?usp=sharing
      key: "1QV419fM2DHZM59mFK6eYYbYiq6bs4sBUpTwVZ_dZJNg",
      callback: googleData => {
        console.log("google sheet data --->", googleData);
        setExternalCodeActivities(googleData.codeActivities.elements);
        setExternalDesignActivities(googleData.designActivities.elements);

        //setTimeout(() => {
        setPageData(sheetsDataToPageJSON(googleData.learnPage.elements));
        //}, 5000);

        console.log(sheetsDataToPageJSON(googleData.learnPage.elements));
      },
      simpleSheet: false
    });
  }, []);

  // Convert data from our google sheets format to our expected JSON format
  const sheetsDataToPageJSON = sheetsElements => {
    let pageData = {};
    sheetsElements.forEach((element, i) => {
      if (element.isActive == "TRUE") {
        const tab = element.tab;
        const section = element.section;
        const group = element.group;
        const activity = {
          title: element.title,
          description: element.description,
          href: element.url,
          imageSrc: element.imageSrc
        };

        // if tab doesn't exist yet, create it
        if (!(tab in pageData)) pageData[tab] = {};
        // if section in this tab doesn't exist yet, create it
        if (!(section in pageData[tab])) pageData[tab][section] = {};
        // if group in this section doesn't exist yet, create it
        if (!(group in pageData[tab][section]))
          pageData[tab][section][group] = [];

        pageData[tab][section][group].push(activity);
      }
    });
    return pageData;
  };

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
        <ul>
          {activityData.map((entry, i) => {
            return (
              <li>
                <span style={{ fontSize: ".9rem" }}>[{entry.category}] - </span>
                <span>
                  <a
                    style={{ color: "blue" }}
                    href={entry.resourceUrl}
                    target="_blank"
                  >
                    {entry.title}
                  </a>
                  :{" "}
                </span>
                <span>{entry.description}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const filterActivitiesOnDifficulty = (activities, difficulty) => {
    return activities.filter(entry => entry.difficulty == difficulty);
  };

  const renderSection = section => {
    section.map((entry, i) => {
      return <div></div>;
    });
  };

  const renderGroup = group => {};

  const renderEntry = entry => {
    return (
      <div className="entry" key={entry.title}>
        <div className="entry-heading">
          <a className="entry-title" href={entry.href} target="_blank">
            {entry.title}
          </a>
        </div>
        <div className="entry-content">
          <div className="entry-image-holder">
            <a href={entry.href} target="_blank">
              <img src={entry.imageSrc} className="entry-image" />
            </a>
          </div>
          <div className="entry-description">{entry.description}</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <PageBody>
        <br />
        <h1 id="title">Learn Code and Design</h1>
        <div className="page-description">
          These resources familiarize students with the concepts and tools
          needed to begin creating their own apps and games!
        </div>
        <hr />
        <br />

        <Tabs defaultFocus={true} defaultIndex="0">
          <TabList style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {// Have to do this hack for some reason (create empty tab if page not loaded)...
            //otherwise tabs break
            Object.entries(pageData).length === 0 ? <Tab></Tab> : ""}
            {// Render tabs from our dynamically built pageData object
            Object.keys(pageData).map(key => {
              return <Tab key={"tab" + key}>{key}</Tab>;
            })}
          </TabList>
          {// Render sections and groups from our dynamically built pageData object
          // Render tab panels from our dynamically built pageData object
          Object.values(pageData).map((tab, i) => {
            // render all sections for this tab
            return (
              <TabPanel key={i}>
                {Object.keys(tab).map((sectionTitle, i) => {
                  const section = tab[sectionTitle];
                  return (
                    <div
                      style={{
                        borderLeft: "1px solid black",
                        marginBottom: "10%"
                      }}
                    >
                      <h2 style={{ marginLeft: "2%", marginBottom: "0" }}>
                        {sectionTitle}
                      </h2>
                      <div key={"collection" + i}>
                        {Object.keys(section).map(groupTitle => {
                          const group = section[groupTitle];
                          return (
                            <div
                              style={{
                                borderLeft: "1px solid black",
                                marginLeft: "2%"
                              }}
                            >
                              <h3 style={{ padding: "1%", marginBottom: "0" }}>
                                {groupTitle}
                              </h3>
                              <div className="collection collection--small-card">
                                {group.map(activity => {
                                  return renderEntry(activity);
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </TabPanel>
            );
          })}
        </Tabs>
      </PageBody>
      <Footer />
    </div>
  );
}
