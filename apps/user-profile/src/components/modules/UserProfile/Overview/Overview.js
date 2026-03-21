import React from 'react';
import ProfileHeader from './../ProfileHeader';
import Bio from './Bio';
import Interests from './Interests';
import Ideas from './Ideas';
import Details from './Details';
import IdeaCTABanner from './Ideas/IdeaCTABanner';
import { editProfileActions } from './../../../../state/actions';

function Overview({ userData, isOwnProfile }) {
  const interests = userData?.interests || [];
  const skills = userData?.skills || [];
  return (
    <>
      <div className="flex flex-col gap-9">
        <ProfileHeader userData={userData} isOwnProfile={isOwnProfile} />
        {/* FIX: Added a fixed height (h-[500px]) to this row. 
          This forces the children to stay within this boundary 
          and triggers the internal scroll in Details.
        */}
        <div className="flex flex-row gap-9 h-[500px] items-stretch">
          <Bio userData={userData} />
          {isOwnProfile ? <Details userData={userData} /> : null}
        </div>

        <div className="flex flex-row gap-9">
          <Interests
            interestList={interests}
            title="Interests"
            action={editProfileActions.SHOW_INTERESTS_SETTING}
          />
          <Interests
            interestList={skills}
            title="Skills"
            action={editProfileActions.SHOW_SKILLS_SETTING}
          />
        </div>
        {isOwnProfile ? <Ideas ideasList={userData?.idea_cards || []} /> : null}
        {isOwnProfile ? <IdeaCTABanner /> : null}
      </div>
    </>
  );
}

export default Overview;
