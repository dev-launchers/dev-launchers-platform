import React from "react";
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
        <div>Profile Image</div>
        <div>Profile Image</div>
      </PageBody>
    </div>
  );
}
