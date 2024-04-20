import { useState } from 'react';
import { Typography } from '@devlaunchers/components/components/atoms';
import RoleCard from '../../RoleCard/RoleCard';
import { GroupRoleCardsContainer } from '../../RoleCard/StyledRoleCard';
import { PageThreeContainer, Header } from './StyledPageThree';

import { useOnboardingDataContext } from './../../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../../state/actions';

export default function PageThree() {
  const {
    onboardingData: { user },
    dispatch,
  } = useOnboardingDataContext();
  const onRoleCardChange = (e) => {
    dispatch({ type: onboardingActions.SET_USERS_ROLE, data: e.target.value });
  };

  return (
    <PageThreeContainer>
      <Header>
        <div>
          <Typography type="p">ABOUT YOU</Typography>
          <Typography type="h3">What Role Best Describes You?</Typography>
        </div>
        <Typography className="margin-0 modal-subtitle" type="p">
          We'll use this to recommend open source projects for you to work on.
        </Typography>
      </Header>

      <GroupRoleCardsContainer>
        <RoleCard
          iconImg="Developer"
          title="Developer"
          subtitle="You’re here to work on our codebase"
          groupName="role"
          value="developer"
          checked={user.selectedRole == 'developer'}
          onChange={onRoleCardChange}
        />
        <RoleCard
          iconImg="UX"
          title="UX Designer"
          subtitle="You’re here to make our platform user friendly"
          groupName="role"
          value="designer"
          checked={user.selectedRole == 'designer'}
          onChange={onRoleCardChange}
        />
        <RoleCard
          iconImg="Other"
          title="Other"
          subtitle="You’re a surprise!"
          groupName="role"
          value="other"
          checked={user.selectedRole == 'other'}
          onChange={onRoleCardChange}
        />
      </GroupRoleCardsContainer>
    </PageThreeContainer>
  );
}
