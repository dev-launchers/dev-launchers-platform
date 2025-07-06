import { Typography } from '@devlaunchers/components/components/atoms';
import { useOnboardingDataContext } from './../../../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../../../state/actions';
import RadioCards from './../../../../../common/RadioCards';
import juniorExpIconImg from './../../../../../../images/icons/onboarding/card/outlined-junior-exp.svg';
import midExpIconImg from './../../../../../../images/icons/onboarding/card/outlined-mid-exp.svg';
import seniorExpIconImg from './../../../../../../images/icons/onboarding/card/outlined-senior-exp.svg';

export default function PageThree() {
  const {
    onboardingData: { user },
    dispatch,
  } = useOnboardingDataContext();

  const onExperienceChange = (e) => {
    dispatch({
      type: onboardingActions.SET_USERS_EXPERIENCE,
      data: e.target.value,
    });
  };

  const cards = {
    name: 'role',
    cards: [
      {
        img: juniorExpIconImg,
        title: 'JUNIOR',
        subtitle: `You have about 0-2 years of experience`,
        value: 'junior',
        checked: user.selectedExperience == 'junior',
        onChange: onExperienceChange,
      },
      {
        img: midExpIconImg,
        title: 'MID-LEVEL',
        subtitle: `You have about 3-5 years of experience`,
        value: 'mid-level',
        checked: user.selectedExperience == 'mid-level',
        onChange: onExperienceChange,
      },
      {
        img: seniorExpIconImg,
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
      <div className="flex flex-col text-center">
        <div>
          <Typography variant="secondary">ABOUT YOU</Typography>
          <Typography textweight="light" textalign="center" type="h3">
            Select Your Interests Below
          </Typography>
        </div>
        <Typography className="m-0" variant="secondary">
          We’ll use this to find you the right fit when pairing with other
          members
        </Typography>
      </div>
      <div className="flex justify-center">
        <RadioCards cards={cards} className="max-w-[720px]" />
      </div>
    </div>
  );
}
