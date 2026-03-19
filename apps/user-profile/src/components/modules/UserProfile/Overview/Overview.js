import React from 'react';
import ProfileHeader from './../ProfileHeader';
import Bio from './Bio';
import Interests from './Interests';
import Ideas from './Ideas';
import IdeaCTABanner from './Ideas/IdeaCTABanner';
import { editProfileActions } from './../../../../state/actions';

function Overview({ userData }) {
  const interests = userData?.interests || [];
  const skills = userData?.skills || [];
  return (
    <>
      <div className="flex flex-col gap-9">
        <ProfileHeader userData={userData} />
        <div className="flex gap-9">
          <Bio bio={userData?.bio} />
          <Interests
            interestList={skills}
            title="Skills"
            action={editProfileActions.SHOW_SKILLS_SETTING}
          />
        </div>
        <Interests
          interestList={interests}
          title="Interests"
          action={editProfileActions.SHOW_INTERESTS_SETTING}
        />
        <Ideas ideasList={userData?.idea_cards || []} />
        <IdeaCTABanner />
      </div>
    </>
  );
}

export default Overview;
