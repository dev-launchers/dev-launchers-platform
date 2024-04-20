import { Typography } from '@devlaunchers/components/components/atoms';
import RoleCard from './../../RoleCard';
import { GroupRoleCardsContainer } from '../../RoleCard/StyledRoleCard';
import { PageFourContainer, Header } from './StyledPageFour';

import { useOnboardingDataContext } from './../../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../../state/actions';

export default function PageThree() {
  const {
    onboardingData: { user },
    dispatch,
  } = useOnboardingDataContext();
  const onRoleCardChange = (e) => {
    dispatch({
      type: onboardingActions.SET_USERS_EXPERIENCE,
      data: e.target.value,
    });
  };

  return (
    <PageFourContainer>
      <Header>
        <div>
          <Typography type="p">ABOUT YOU</Typography>
          <Typography type="h3">
            What Is Your Experience Level in This Role?
          </Typography>
        </div>
        <Typography className="margin-0 modal-subtitle" type="p">
          We’ll use this to find you the right fit when pairing with other
          members
        </Typography>
      </Header>

      <GroupRoleCardsContainer>
        <RoleCard
          iconImg="Junior"
          title="Junior"
          subtitle="You have about 0-2 years of experience"
          groupName="experience"
          value="junior"
          checked={user.selectedExperience == 'junior'}
          onChange={onRoleCardChange}
        />
        <RoleCard
          iconImg="Mid-Level"
          title="Mid-Level"
          subtitle="You have about 3-5 years of experience"
          groupName="experience"
          value="mid-level"
          checked={user.selectedExperience == 'mid-level'}
          onChange={onRoleCardChange}
        />
        <RoleCard
          iconImg="Senior"
          title="Senior"
          subtitle="You have 5+ years in the industry"
          groupName="experience"
          value="senior"
          checked={user.selectedExperience == 'senior'}
          onChange={onRoleCardChange}
        />
      </GroupRoleCardsContainer>
    </PageFourContainer>
  );
}
