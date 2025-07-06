import { Typography } from '@devlaunchers/components/components/atoms';

import { useOnboardingDataContext } from './../../../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../../../state/actions';
import RadioCards from './../../../../../common/RadioCards';

import developerIconImg from './../../../../../../images/icons/onboarding/card/outlined-developer.svg';
import uxIconImg from './../../../../../../images/icons/onboarding/card/outlined-other.svg';
import otherIconImg from './../../../../../../images/icons/onboarding/card/outlined-ux-ui.svg';

export default function PageThree() {
  const {
    onboardingData: { user },
    dispatch,
  } = useOnboardingDataContext();

  const onRoleChange = (e) => {
    dispatch({ type: onboardingActions.SET_USERS_ROLE, data: e.target.value });
  };

  const cards = {
    name: 'role',
    cards: [
      {
        img: developerIconImg,
        title: 'DEVELOPER',
        subtitle: `Develop and maintain databases`,
        value: 'developer',
        checked: user.selectedRole == 'developer',
        onChange: onRoleChange,
      },
      {
        img: uxIconImg,
        title: 'UX/UI',
        subtitle: `Research and design interfaces`,
        value: 'designer',
        checked: user.selectedRole == 'designer',
        onChange: onRoleChange,
      },
      {
        img: otherIconImg,
        title: 'OTHER',
        subtitle: `Manage product teams and cross communication`,
        value: 'other',
        checked: user.selectedRole == 'other',
        onChange: onRoleChange,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col text-center">
        <div>
          <Typography variant="secondary">ABOUT YOU</Typography>
          <Typography textweight="light" textalign="center" type="h3">
            What Role Best Describes You?
          </Typography>
        </div>
        <Typography className="m-0" variant="secondary">
          We'll use this to recommend open source projects for you to work on.
        </Typography>
      </div>
      <div className="flex justify-center">
        <RadioCards cards={cards} className="max-w-[720px]" />
      </div>
    </div>
  );
}
