import { Typography } from '@devlaunchers/components/components/atoms';

import { useOnboardingDataContext } from './../../../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../../../state/actions';
import RadioCards from './../../../../../common/RadioCards';

import developerIconImg from './../../../../../../images/icons/onboarding/card/outlined-developer.svg';
import uxIconImg from './../../../../../../images/icons/onboarding/card/outlined-other.svg';
import otherIconImg from './../../../../../../images/icons/onboarding/card/outlined-ux-ui.svg';

/**
 * PageThree Component
 *
 * This component represents the third step in the onboarding process, where users
 * select their role. It utilizes the `RadioCards` component to display role options
 * and updates the onboarding state with the selected role.
 *
 * @return {JSX.Element} The rendered PageThree component.
 */
export default function PageThree() {
  // Extract user data and dispatch function from the onboarding context
  const {
    onboardingData: { user },
    dispatch,
  } = useOnboardingDataContext();

  /**
   * Handles changes to the role selection.
   *
   * @param {Object} e - The event triggered by the role selection.
   */
  const onRoleChange = (e) => {
    dispatch({ type: onboardingActions.SET_USERS_ROLE, data: e.target.value });
  };

  // Configuration for the radio cards
  const cards = {
    name: 'role', // Name for the group of radio buttons
    cards: [
      {
        img: developerIconImg, // Icon for the Developer role
        title: 'DEVELOPER', // Title displayed for the role
        subtitle: `Develop and maintain databases`, // Short description of the role
        value: 'developer', // Value assigned to the role
        checked: user.selectedRole == 'developer', // Determine if this role is pre-selected
        onChange: onRoleChange, // Handler for role selection
      },
      {
        img: uxIconImg, // Icon for the UX/UI role
        title: 'UX/UI',
        subtitle: `Research and design interfaces`,
        value: 'designer',
        checked: user.selectedRole == 'designer',
        onChange: onRoleChange,
      },
      {
        img: otherIconImg, // Icon for the Other role
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
      {/* Header section */}
      <div className="flex flex-col text-center">
        <div>
          <Typography type="p">ABOUT YOU</Typography> {/* Section label */}
          <Typography type="h3">What Role Best Describes You?</Typography>{' '}
          {/* Main question */}
        </div>
        <Typography className="m-0" type="p">
          We'll use this to recommend open source projects for you to work on.
        </Typography>
      </div>

      {/* RadioCards section */}
      <div className="flex justify-center">
        <RadioCards cards={cards} className="max-w-[720px]" />{' '}
        {/* Role options */}
      </div>
    </div>
  );
}
