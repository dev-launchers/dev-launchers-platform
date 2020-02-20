import React from "react";
import "react-tabs/style/react-tabs.css"; // import react-tabs styles

import PageBody from "../../../components/common/PageBody";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import Tabletop from "tabletop";
import Section from "../../../components/common/Section/Section";

export default function Learn() {
  const [pageData, setPageData] = React.useState({});

  React.useEffect(() => {
    Tabletop.init({
      // https://docs.google.com/spreadsheets/d/e/2PACX-1vQfJccD-2qd8eVQ6BPIc3EbbBUcTcxIUAxNub31QrWalpfExtTccMBYORQoFqPcxt_HRDuWLT9KXwN0/pubhtml
      // https://docs.google.com/spreadsheets/d/1ukOl5lCKF8eXiVgjLgFqDzmdudjik5H_rnws8jPFyJ0/edit?usp=sharing
      key: "1QV419fM2DHZM59mFK6eYYbYiq6bs4sBUpTwVZ_dZJNg",
      callback: googleData => {
        console.log("google sheet data --->", googleData);

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
    /*
      Converts data from a row based spreadsheet into a nested JSON object representing our page structure
      JSON Format:
        {
          tabName: {
            sectionName: {
              groupName: [
                entryObject1,
                entryObject2,
                ...
              ]
            },
            ...
          },
          ...
        }
     */
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

  return (
    <div>
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
                  return <Section data={section} title={sectionTitle} />;
                })}
              </TabPanel>
            );
          })}
        </Tabs>
      </PageBody>
    </div>
  );
}
