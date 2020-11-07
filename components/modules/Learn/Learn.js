import React from "react";
import "react-tabs/style/react-tabs.css"; // import react-tabs styles
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

import { useSheetsContext } from "../../../context/SheetsContext";

import PageBody from "../../../components/common/PageBody";
import Section from "../../../components/common/Section/Section";

export default function Learn() {
  const { learnPageData } = useSheetsContext();
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
              Object.entries(learnPageData).length === 0 ? <Tab></Tab> : ""}
            {// Render tabs from our dynamically built learnPageData object
              Object.keys(learnPageData).map(key => {
                return <Tab key={"tab" + key}>{key}</Tab>;
              })}
          </TabList>
          {// Render sections and groups from our dynamically built learnPageData object
            // Render tab panels from our dynamically built learnPageData object
            Object.values(learnPageData).map((tab, i) => {
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
