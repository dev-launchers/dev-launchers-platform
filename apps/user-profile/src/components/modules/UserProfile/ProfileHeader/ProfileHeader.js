import React from 'react';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import profileHeaderBackground from './../../../../images/profile/profile-header-bg.jpg';
import ProfilePicture from '../../../common/images/ProfilePicture';
import EditButton from './../../../common/EditButton';
import Headers from './Headers';
import MetaInfo from './MetaInfo';
import SocialLinks from './SocialLinks';
import ThirdPartyLinks from './ThirdPartyLinks';

function ProfileHeader() {
  const { userData } = useUserDataContext();
  const createdAt = userData?.profile?.publishedAt;
  const options = {
    year: 'numeric',
    month: 'long',
  };

  // const location = userData?.profile?.location;
  // const role = userData?.profile?.role;
  // const website = userData?.profile?.website;
  // const subtitle = userData?.profile?.headline;
  const subtitle =
    'Junior Java Software Developer Seeking An Entry-Level Position';
  const location = 'Los Angeles, CA';
  const role = 'Software developer';
  const website = 'johndoedev.com';
  const memberSinceDate = createdAt
    ? new Date(createdAt).toLocaleString('en-US', options)
    : null;

  return (
    <div className="flex flex-col max-h-96 w-full shadow-lg bg-white">
      <div className="h-full overflow-hidden max-h-36 w-full">
        <img className="w-full" src={profileHeaderBackground}></img>
      </div>
      <div className="relative flex flex-row max-h-60 px-8 pt-6 pb-12 ">
        {/* left side */}
        <div className="flex flex-col w-full pt-11 gap-6">
          <div className="absolute -top-24">
            <ProfilePicture src={userData?.profilePictureUrl} />
          </div>
          <Headers
            title={userData?.name}
            subtitle={subtitle}
            username={userData?.username}
          />
          <MetaInfo
            location={location}
            role={role}
            website={website}
            membersince={memberSinceDate}
          />
        </div>

        {/* right side in TODO */}
        <div className="flex flex-col text-right">
          {/* <EditButton /> */}
          {/* 
          <SocialLinks />
          <ThirdPartyLinks /> */}
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
