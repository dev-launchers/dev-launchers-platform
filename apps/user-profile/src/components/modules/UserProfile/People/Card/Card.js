import React from 'react';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import ProfileImage from './../../../../common/ProfileImage';
import { Typography } from '@devlaunchers/components/components/atoms';

function Card() {
  const { userData } = useUserDataContext();

  return (
    <div className="inline-flex items-center bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm w-fit">
      {/* Profile Image */}
      <div className="flex-shrink-0  rounded-full object-cover border border-gray-300 mr-6">
        <ProfileImage imgSrc={userData?.profilePictureUrl} />
      </div>

      {/* Text Info */}
      <div className="flex flex-col  justify-center">
        <Typography as="h4" variant="primary" size="xl3" textWeight="bold">
          John James
        </Typography>
        <Typography as="span" variant="secondary" size="xl" textWeight="light">
          Product Lead
        </Typography>
        <Typography as="p" size="body_sm" textWeight="light">
          People Space
        </Typography>
      </div>
    </div>
  );
}

export default Card;
