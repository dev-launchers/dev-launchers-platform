import React from 'react';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import profileHeaderBackground from './../../../../images/profile/profile-header-bg.jpg';
import ProfilePicture from './../../../common/Images/ProfilePicture';
import EditButton from './../../../common/EditButton';
import Headers from './Headers';
import MetaInfo from './MetaInfo';
import SocialLinks from './SocialLinks';
import ThirdPartyLinks from './ThirdPartyLinks';

/**
 * ProfileHeader Component
 *
 * Displays the user's profile header, including a background image, profile picture,
 * user details (name, subtitle, role, location), and placeholder sections for future features.
 *
 * @return {JSX.Element} The profile header UI.
 */
function ProfileHeader() {
  // Access user data from the context
  const { userData } = useUserDataContext();

  // Extract and format the "member since" date
  const createdAt = userData?.profile?.publishedAt;
  const options = {
    year: 'numeric',
    month: 'long',
  };
  const memberSinceDate = createdAt
    ? new Date(createdAt).toLocaleString('en-US', options)
    : null;

  // Temporary static placeholders for profile details
  const subtitle =
    'Junior Java Software Developer Seeking An Entry-Level Position';
  const location = 'Los Angeles, CA';
  const role = 'Software developer';
  const website = 'johndoedev.com';

  return (
    // Container for the entire profile header
    <div className="flex flex-col max-h-96 w-full shadow-lg bg-white">
      {/* Background image section */}
      <div className="h-full overflow-hidden max-h-36 w-full">
        <img
          className="w-full"
          src={profileHeaderBackground}
          alt="Profile Header Background"
        />
      </div>

      {/* Content section */}
      <div className="relative flex flex-row max-h-60 px-8 pt-6 pb-12">
        {/* Left side content */}
        <div className="flex flex-col w-full pt-11 gap-6">
          {/* Profile picture positioned absolutely */}
          <div className="absolute -top-24">
            <ProfilePicture src={userData?.profilePictureUrl} />
          </div>

          {/* Header section with user name, subtitle, and username */}
          <Headers
            title={userData?.name}
            subtitle={subtitle}
            username={userData?.username}
          />

          {/* Meta information (location, role, website, member since) */}
          <MetaInfo
            location={location}
            role={role}
            website={website}
            membersince={memberSinceDate}
          />
        </div>

        {/* Right side content placeholder for additional actions */}
        <div className="flex flex-col text-right">
          {/* Future functionality (e.g., edit button, social links, third-party links) */}
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
