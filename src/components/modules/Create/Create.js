import React from "react";
import "react-tabs/style/react-tabs.css"; // import react-tabs styles
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

import { useSheetsContext } from "../../../context/SheetsContext";

import PageBody from "../../../components/common/PageBody";
import Section from "../../../components/common/Section";

export default function Create() {
  const { createPageData } = useSheetsContext();

  return (
    <PageBody>
      <br />
      <h1 id="title">Create Games and Apps</h1>
      <div className="page-description">
        These templates are where projects begin. They provide the generic
        structure and base logic, so you can focus on what makes your app
        special!
      </div>
      <hr />

      <Tabs defaultFocus={true} defaultIndex="0">
        <TabList style={{ fontSize: "2rem", fontWeight: "bold" }}>
          {// Have to do this hack for some reason (create empty tab if page not loaded)...
          //otherwise tabs break
          Object.entries(createPageData).length === 0 ? <Tab></Tab> : ""}
          {// Render tabs from our dynamically built pageData object
          Object.keys(createPageData).map(key => {
            return <Tab key={"tab" + key}>{key}</Tab>;
          })}
        </TabList>
        {// Render sections and groups from our dynamically built pageData object
        // Render tab panels from our dynamically built pageData object
        Object.values(createPageData).map((tab, i) => {
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
  );
}
