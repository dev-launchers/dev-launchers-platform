import { Typography } from '@devlaunchers/components/components/atoms';
import Button from '@devlaunchers/components/components/atoms/Button';
import RainbowBar from './../../../common/RainbowBar/RainbowBar';
import { useOnboardingDataContext } from './../../../../context/OnboardingDataContext';
import { onboardingActions } from './../../../../state/actions';

/**
 * @description This is custom modal for the user onboarding.
 */
export default function IntroductionModal() {
  const { onboardingData, dispatch } = useOnboardingDataContext();

  if (!onboardingData || onboardingData.showIntroductionModal === false) {
    return null;
  }
  const onGetStarted = () => {
    dispatch({ type: onboardingActions.SHOW_PLATFORM_ONBOARDING_MODAL });
  };
  const onSetUpLater = () => {
    dispatch({ type: onboardingActions.HIDE_ALL_ONBOARDING_MODALS });
  };

  return (
    <div className="h-[470px] w-[470px] p-[30px_45px_50px] flex flex-col justify-between">
      <div className="w-full">
        <Typography type="h3" textAlign="center">
          Welcome to Dev Launchers
        </Typography>
        <div>
          <RainbowBar height="6px" />
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <Typography type="p">
          We'll introduce you to Dev Launchers and set up your profile for team
          collaboration.
        </Typography>
        <Typography type="p">
          Rest assured, we'll guide you through each step of the process.
        </Typography>
      </div>
      <div className="flex flex-col gap-[15px]">
        <Button buttonType="primary" buttonSize="xl" onClick={onGetStarted}>
          GET STARTED (TAKES 2-5 MINUTES)
        </Button>
        <Button buttonType="alternative" buttonSize="xl" onClick={onSetUpLater}>
          SET UP LATER
        </Button>
      </div>
    </div>
  );
}
