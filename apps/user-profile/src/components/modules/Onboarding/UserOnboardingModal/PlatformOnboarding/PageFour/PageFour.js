import { Typography } from '@devlaunchers/components/components/atoms';
import { useOnboardingDataContext } from './../../../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../../../state/actions';
import RadioCards from './../../../../../common/RadioCards';

import juniorExpIconImg from './../../../../../../images/icons/onboarding/card/outlined-junior-exp.svg';
import midExpIconImg from './../../../../../../images/icons/onboarding/card/outlined-mid-exp.svg';
import seniorExpIconImg from './../../../../../../images/icons/onboarding/card/outlined-senior-exp.svg';

/**
 * PageThree Component
 *
 * This component represents a step in the onboarding process where users select their
 * level of experience (Junior, Mid-Level, Senior). It uses `RadioCards` to present the
 * options and updates the onboarding context when a selection is made.
 *
 * @return {JSX.Element} The rendered PageThree component.
 */
export default function PageFour() {
  // Access the onboarding context to retrieve user data and dispatch actions
  const {
    onboardingData: { user },
    dispatch,
  } = useOnboardingDataContext();

  /**
   * Handles changes to the selected experience level.
   *
   * @param {Object} e - The change event triggered by selecting an option.
   */
  const onExperienceChange = (e) => {
    dispatch({
      type: onboardingActions.SET_USERS_EXPERIENCE, // Action type to set user's experience
      data: e.target.value, // The selected experience level
    });
  };

  // Configuration for the radio cards representing experience levels
  const cards = {
    name: 'role', // Group name for the radio buttons
    cards: [
      {
        img: juniorExpIconImg, // Icon for Junior level
        title: 'JUNIOR', // Title for Junior level
        subtitle: `You have about 0-2 years of experience`, // Description of the level
        value: 'junior', // Value corresponding to Junior level
        checked: user.selectedExperience == 'junior', // Whether this level is pre-selected
        onChange: onExperienceChange, // Handler for when this option is selected
      },
      {
        img: midExpIconImg, // Icon for Mid-Level
        title: 'MID-LEVEL',
        subtitle: `You have about 3-5 years of experience`,
        value: 'mid-level',
        checked: user.selectedExperience == 'mid-level',
        onChange: onExperienceChange,
      },
      {
        img: seniorExpIconImg, // Icon for Senior level
        title: 'SENIOR',
        subtitle: `You have 5+ years in the industry`,
        value: 'senior',
        checked: user.selectedExperience == 'senior',
        onChange: onExperienceChange,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-20">
      {/* Header Section */}
      <div className="flex flex-col text-center">
        <div>
          <Typography type="p">ABOUT YOU</Typography> {/* Section label */}
          <Typography type="h3">Select Your Interests Below</Typography>{' '}
          {/* Main question */}
        </div>
        <Typography className="m-0" type="p">
          We’ll use this to find you the right fit when pairing with other
          members
        </Typography>
      </div>

      {/* Experience Selection Section */}
      <div className="flex justify-center">
        <RadioCards cards={cards} className="max-w-[720px]" />{' '}
        {/* Radio cards */}
      </div>
    </div>
  );
}
