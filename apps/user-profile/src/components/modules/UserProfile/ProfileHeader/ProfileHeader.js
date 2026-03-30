import React from 'react';
import profileHeaderBackground from './../../../../images/profile/profile-header-bg.jpg';
import ProfileImage from './../../../common/ProfileImage';
import Headers from './Headers';
import MetaInfo from './MetaInfo';
import { editProfileDataContext } from '../../../../context/EditProfileDataContext';
import { editProfileActions } from './../../../../state/actions';
import pencil from '../../../../../src/images/icons/pencil.svg';

function ProfileHeader({ userData, isOwnProfile }) {
  const { editProfileDispatch } = editProfileDataContext();

  const createdAt = userData?.profile?.publishedAt;
  const options = {
    year: 'numeric',
    month: 'long',
  };

  const subtitle = userData?.profile?.user?.experience || 'Developer';
  const location = userData?.profile?.user?.location || 'Not specified';
  const role = userData?.profile?.user?.title || 'Professional';
  const website = userData?.profile?.user?.website || '';
  const memberSinceDate = createdAt
    ? new Date(createdAt).toLocaleString('en-US', options)
    : null;

  const handleEditClick = () => {
    // console.log(handleEditClick);
    // editProfileDispatch({
    //   type: editProfileActions.SHOW_PHOTO_SETTING,
    // });
    editProfileDispatch({ type: editProfileActions.SHOW_DETAILS_SETTING });
  };

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
        {/* left side */}
        <div className="flex flex-col w-full pt-11 gap-6">
          <div className="absolute -top-24">
            <ProfileImage imgSrc={userData?.profilePictureUrl} />
          </div>
          <Headers
            title={userData?.profile?.displayName}
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

        {/* right side */}
        {isOwnProfile ? (
          <div className="flex w-full justify-end items-start pt-6 ">
            <button
              type="button"
              onClick={handleEditClick}
              className="inline-flex items-center gap-1 whitespace-nowrap  border-2 rounded-lg border-[#cfd8e3] bg-transparent px-3 py-3"
            >
              <span>Edit Profile</span>
              <img
                src={pencil}
                alt="Pencil Icon"
                className="w-5 h-5 shrink-0 object-contain"
              />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProfileHeader;
