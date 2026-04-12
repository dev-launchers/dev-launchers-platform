import React from 'react';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import profileHeaderBackground from './../../../../images/profile/profile-header-bg.jpg';
import ProfileImage from './../../../common/ProfileImage';
import Headers from './Headers';
import MetaInfo from './MetaInfo';
import { editProfileDataContext } from '../../../../context/EditProfileDataContext';
import { editProfileActions } from './../../../../state/actions';
import pencil from '../../../../../src/images/icons/pencil.svg';

function ProfileHeader() {
  const { editProfileDispatch } = editProfileDataContext();
  const { userData } = useUserDataContext();

  const createdAt = userData?.profile?.publishedAt;
  const options = {
    year: 'numeric',
    month: 'long',
  };

  const subtitle =
    'Junior Java Software Developer Seeking An Entry-Level Position';
  const location = 'Los Angeles, CA';
  const role = 'Software developer';
  const website = 'johndoedev.com';

  const memberSinceDate = createdAt
    ? new Date(createdAt).toLocaleString('en-US', options)
    : null;

  const handleEditClick = () => {
    editProfileDispatch({ type: editProfileActions.SHOW_DETAILS_SETTING });
  };

  const profileImageUrl =
    userData?.profile?.profilePicture?.url ||
    userData?.profile?.profilePictureUrl ||
    '';

  return (
    <div className="flex flex-col max-h-96 w-full shadow-lg bg-white">
      <div className="h-full overflow-hidden max-h-36 w-full">
        <img
          className="w-full"
          src={profileHeaderBackground}
          alt="Profile header background"
        />
      </div>

      <div className="relative flex flex-row max-h-60 px-8 pt-6 pb-12 ">
        <div className="flex flex-col w-full pt-11 gap-6">
          <div className="absolute -top-24">
            <ProfileImage imgSrc={profileImageUrl} />
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

        <div className="flex w-full justify-end items-start pt-6 ">
          <button
            type="button"
            onClick={handleEditClick}
            className="inline-flex items-center gap-1 whitespace-nowrap border-2 rounded-lg border-[#cfd8e3] bg-transparent px-3 py-3"
          >
            <span>Edit Profile</span>
            <img
              src={pencil}
              alt="Pencil Icon"
              className="w-5 h-5 shrink-0 object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
