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
        <>
          <p>please sign up to get access to this page!</p>
          <Button
            fontSize="1.2rem"
            href="https://api-staging.devlaunchers.com/auth/google"
          >
            Sign In
          </Button>
          <br />
        </>
      )}
      <br />
    </PageBody>
  );
}
