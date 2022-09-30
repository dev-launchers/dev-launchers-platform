import { useEffect, useState } from 'react';

import Button from '../../common/Button';
import PageBody from '../../common/PageBody';

import { useUserDataContext } from '../../../context/UserDataContext';
import BioBox from './BioBox';
import Opportunities from './Opportunities';
import ProfileCard from './ProfileCard';
import RecommendedIdeas from './RecommendedIdeas';
import UserProjects from './UserProjects';

import { env } from '../../../utils/EnvironmentVariables';

import { Misc, UserInfo, UserSection, Wrapper } from './StyledUserProfile';
import UserInterests from './UserInterests';
// import DiscordSection from "./DiscordSection/DiscordSection";

export default function UserProfile({ otherUser }) {
  const { userData } = useUserDataContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(userData?.id === -1 || otherUser?.id === -1);
  }, [otherUser, userData]);

  if (loading) {
    return <strong>Loading.....</strong>;
  }

  return (
    <PageBody>
      {userData?.id || (otherUser?.id && !loading) ? (
        <Wrapper>
          <UserSection>
            <ProfileCard
              img={
                otherUser?.profile?.profilePictureUrl ||
                userData.profilePictureUrl
              }
              name={otherUser?.profile?.displayName || userData.name}
              username={otherUser?.username || userData.username}
            />

            <UserInfo>
              {/* }
              <Points
                availablePoints={
                  otherUser?.point?.availablePoints || userData.availablePoints
                }
                seasonPoints={
                  otherUser?.point?.totalSeasonPoints ||
                  userData.totalSeasonPoints
                }
                volunteerHours={
                  otherUser?.point?.volunteerHours || userData.volunteerHours
                }
              />
              { */}
              <BioBox
                data={otherUser?.profile || userData}
                canEdit={!otherUser}
              />
            </UserInfo>
          </UserSection>
          {/*
          <LabCampus />
          */}

          <Misc>
            <UserInterests />
            <div
              className="spacer"
              style={{ width: '100%', height: '10vh' }}
            ></div>
            <UserProjects />
            <div
              className="spacer"
              style={{ width: '100%', height: '10vh' }}
            ></div>
            <Opportunities />
            <div
              className="spacer"
              style={{ width: '100%', height: '10vh' }}
            ></div>
            <RecommendedIdeas />
            {/* }<WeeksGlance />{ */}
            {/*
            <LabMember />
            */}
            {/*
              <DiscordSection
                discordId={userData.discord.id}
                avatarKey={userData.discord.avatar}
                discordUsername={userData.discord.username}
                discordDiscriminator={userData.discord.discriminator}
              /> */}
          </Misc>
        </Wrapper>
      ) : (
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '60vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: '2rem' }}>
            Please sign in to access this page!
          </p>
          <Button fontSize="2rem" href={process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL}>
            Sign In
          </Button>
          <br />
        </div>
      )}
      <br />
    </PageBody>
  );
}
