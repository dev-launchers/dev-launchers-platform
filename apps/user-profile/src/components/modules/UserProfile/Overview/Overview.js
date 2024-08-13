import React, { useEffect } from 'react';
import ProfileHeader from './../ProfileHeader';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import Skills from './Skills';
import Bio from './Bio';
import Interests from './Interests';

function Overview() {
  const { userData } = useUserDataContext();

  return (
    <>
      <div className="flex flex-col gap-9">
        <ProfileHeader />
        <div className="flex gap-9">
          <Bio bio={userData?.bio} />
          <Skills />
        </div>
        <Interests />
      </div>
    </>
  );
}

export default Overview;
