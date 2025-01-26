import React from 'react';
import ProfileHeader from './../ProfileHeader';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import Skills from './Skills';
import Bio from './Bio';
import Interests from './Interests';

/**
 * Overview Component
 *
 * Serves as the main section of the user profile page. Displays the profile header,
 * bio, skills, and interests, using data from the user context.
 *
 * @return {JSX.Element} The rendered Overview section.
 */
function Overview() {
  // Access user data from the context
  const { userData } = useUserDataContext();

  return (
    <>
      {/* Main container with vertical spacing */}
      <div className="flex flex-col gap-9">
        {/* Profile header section */}
        <ProfileHeader />

        {/* Bio and Skills section in a horizontal layout */}
        <div className="flex gap-9">
          {/* Bio component displaying user bio */}
          <Bio bio={userData?.bio} />
          {/* Skills component displaying user skills */}
          <Skills skills={userData.skills} />
        </div>

        {/* Interests section displaying user interests */}
        <Interests interestList={userData.interests} />
      </div>
    </>
  );
}

export default Overview;
