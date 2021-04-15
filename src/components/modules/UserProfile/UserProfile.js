import env from "../../../utils/EnvironmentVariables.js";

import React, { useState, useEffect } from "react";

import PageBody from "../../../components/common/PageBody";
import Button from "../../common/Button";
import ProfileCard from "../../common/ProfileCard";
import Points from "../../common/Points";
import BioBox from "./BioBox";
import LabCampus from "./LabCampus";
import LabMember from "./LabMember";

import { useUserDataContext } from "../../../context/UserDataContext.js";

import {
  Wrapper,
  UserSection,
  UserInfo,
  Misc,
  DiscordPlaceHolder
} from "./StyledUserProfile";

export default function UserProfile() {
  const [loading, setLoading] = useState(true);
  const { userData } = useUserDataContext();

  useEffect(() => {
    setLoading(Object.entries(userData).length == 0);
  }, [userData]);

  if (loading) {
    return <strong>Loading.....</strong>;
  }
  return (
    <PageBody>
      {userData.username && !loading ? (
        <Wrapper>
          <UserSection>
            <ProfileCard
              img={userData.profilePictureUrl}
              name={userData.name}
              username={userData.username}
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
          <Misc>
            <LabMember />
            <DiscordPlaceHolder />
          </Misc>
        </Wrapper>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            minHeight: "60vh",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <p style={{ fontSize: "2rem" }}>
            Please sign in to access this page!
          </p>
          <Button fontSize="2rem" href={env.GOOGLE_AUTH_URL}>
            Sign In
          </Button>
          <br />
        </div>
      )}
      <br />
    </PageBody>
  );
}
