import React from 'react';
import ProfileHeader from './../ProfileHeader';
import { useUserDataContext } from '@devlaunchers/components/context/UserDataContext';
import Bio from './Bio';
import Interests from './Interests';
import Ideas from './Ideas';
import IdeaCTABanner from './Ideas/IdeaCTABanner';
import { editProfileActions } from './../../../../state/actions';

function Overview() {
  const { userData } = useUserDataContext();

  const allInterestsAndSkills = userData.interests;
  const interests = allInterestsAndSkills.filter(
    (x) => x.category == 'Interest'
  );
  const skills = allInterestsAndSkills.filter((x) => x.category == 'Skill');

  return (
    <>
      <div className="flex flex-col gap-9">
        <ProfileHeader />
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
