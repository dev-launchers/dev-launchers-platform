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
      <div className="flex flex-col gap-1 justify-center">
        <Typography
          variant="primary"
          className="text-5xl  font-bold text-gray-900 leading-tight"
        >
          John James
        </Typography>
        <Typography
          variant="secondary"
          className="text-sm font-medium text-gray-600"
        >
          Product Lead
        </Typography>
        <Typography as="p" className="text-sm text-gray-500">
          People Space
        </Typography>
      </div>
    </div>
  );
}

export default Card;
