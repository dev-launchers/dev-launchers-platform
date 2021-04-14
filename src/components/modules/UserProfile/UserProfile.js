import React from "react";

import PageBody from "../../../components/common/PageBody";
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
  const { userData } = useUserDataContext();
  return (
    <div>
      <PageBody>
        <Wrapper>
          <UserSection>
            <ProfileCard
              img={userData.profilePictureUrl}
              name={userData.name}
              userName={userData.username}
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
      </PageBody>
    </div>
  );
}
