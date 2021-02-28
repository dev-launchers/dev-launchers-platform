import React from "react";
import { InlineWidget } from "react-calendly";
import "react-tabs/style/react-tabs.css"; // import react-tabs styles
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

import { useSheetsContext } from "../../../context/SheetsContext";

import PageBody from "../../../components/common/PageBody";
import Section from "../../../components/common/Section/Section";

export default function UserProfile() {
  const { learnPageData } = useSheetsContext();
  return (
    <div>
      <PageBody>
        <div>Profile Image</div>
        <div>WeeklyCalendly</div>
        <div className="App">
          <InlineWidget url="https://calendly.com/devlaunchers" />
        </div>
        <div>Bio</div>
      </PageBody>
    </div>
  );
}
