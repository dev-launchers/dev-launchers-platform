import React from "react";
import { InlineWidget } from "react-calendly";
import "react-tabs/style/react-tabs.css"; // import react-tabs styles
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import ProfileCard from "../../common/ProfileCard";
import { useSheetsContext } from "../../../context/SheetsContext";

import PageBody from "../../../components/common/PageBody";
import Section from "../../../components/common/Section/Section";

import { useUserDataContext } from "../../../context/UserDataContext.js";

export default function UserProfile() {
  const { userData } = useUserDataContext();
  return (
    <div>
      <PageBody>
        <ProfileCard
          img={userData.profilePictureUrl}
          name="Mohammed Maqbol"
          userName="Enjoy2Live"
        />
        <div>{userData.bio}</div>
        <div>WeeklyCalendly</div>
        <div className="App">
          <InlineWidget url="https://calendly.com/devlaunchers" />
        </div>
      </PageBody>
    </div>
  );
}
