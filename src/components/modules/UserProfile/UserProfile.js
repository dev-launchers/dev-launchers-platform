import React from "react";
import "react-tabs/style/react-tabs.css"; // import react-tabs styles
import style from "./UserProfile.module.css";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import ProfileCard from "../../common/ProfileCard";
import { useSheetsContext } from "../../../context/SheetsContext";

import PageBody from "../../../components/common/PageBody";
import Section from "../../../components/common/Section/Section";
import BioBox from "./BioBox";
import CalendlyWidget from "./CalendlyWidget";

import { useUserDataContext } from "../../../context/UserDataContext.js";
import Points from "../../common/Points";
import { UserSection, UserInfo } from "./StyledUserProfile";
import LabCampus from "../../common/LabCampus";
export default function UserProfile() {
  const { userData } = useUserDataContext();
  return (
    <div>
      <PageBody>
        <UserSection>
          <ProfileCard
            img={userData.profilePictureUrl}
            name="Mohammed Maqbol"
            userName="Enjoy2Live"
          />
          <UserInfo>
            <Points
              availablePoints={userData.availablePoints}
              seasonPoints={userData.totalSeasonPoints}
              volunteerHours={userData.volunteerHours}
            />
            <BioBox>{userData.bio}</BioBox>
          </UserInfo>
        </UserSection>
        <LabCampus />
        <CalendlyWidget />
      </PageBody>
    </div>
  );
}
